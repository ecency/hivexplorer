import express from "express";
import { Client, utils } from "@hiveio/dhive";
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
        let method_type: any = mapping[0].isArray ? params : query;

        // custom handling of account history, filter with operations
        if (method == 'get_account_history') {
          const ops = utils.operationOrders;
          const {operation_type} = method_type;
          const mops = operation_type.split(',');
          let filters;

          if (mops.length === 1) {
            filters = utils.makeBitMaskFilter([ops[`${mops[0]}`]]);
          } else {
            filters = utils.makeBitMaskFilter(mops.map((x: string) => ops[`${x}`]));
          }
          method_type.operation_filter_low = Number(filters[0]);
          method_type.operation_filter_high = filters[1];
          delete method_type.operation_type;
        }
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
