import express from "express";
import { Client } from "@hiveio/dhive";
import { filter, isArray } from "lodash";

import { methods } from "./methods";
import { cache } from "../cache";

const client = new Client(["https://rpc.ecency.com", "https://api.deathwing.me"]);
const parseQuery = (query: any) => {
  let newQuery = {};
  Object.keys(query).map((key) => {
    let value = query[key];
    try {
      value = JSON.parse(decodeURIComponent(value));
    } catch (e) {}
    newQuery[key] = value;
  });
  return newQuery;
};

export default async (req: express.Request, res: express.Response) => {
  const query = parseQuery(req.query);
  const method = req.params.method;
  const mapping = filter(methods, { method: method });
  let params: any[] | null = null;

  if (mapping[0]) {
    if (mapping[0].params && isArray(mapping[0].params)) {
      params = [];
      mapping[0].params.forEach((param) => {
        const queryParam = query[param];
        isArray(params) && params.push(queryParam);
      });
    } else {
      params = [];
    }
    let result = cache.get(`${method}-${params}`);
    try {
      if (result === undefined) {
        // const method_type:any = (mapping[0].param_type && mapping[0].param_type === 'params') ? params : query;
        const method_type: any = mapping[0].isArray ? params : query;
        result = await client.call(mapping[0].api, method, method_type);
      }

      // rpc response
      cache.set(`${method}-${params}`, result, 3);

      res.set("Cache-Control", "public, max-age=3"); // 60s
      res.json(result);
    } catch (error) {
      // other script errors
      res.set("Cache-Control", "public, max-age=1"); // 10s
      res.json(error);
    }
  } else {
    // unexpected and wrong api calls
    res.set("Cache-Control", "public, max-age=10"); // 10s
    res.json({});
  }
};
