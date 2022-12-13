import express from "express";
import cookieParser from "cookie-parser";
import { map } from "lodash";

import entryIndexHandler from "./handlers/entry-index";
import fallbackHandler, { healthCheck } from "./handlers/fallback";
import xapi from "./handlers/xapi";

import { cleanURL, stripLastSlash } from "./util";
import { methods } from "./handlers/methods";
const methodFilter = map(methods, "method").join("|");

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use("/assets", express.static(`${process.env.RAZZLE_PUBLIC_DIR!}/assets`))
  .use(express.json())
  .use(cookieParser())
  .use(cleanURL)
  .use(stripLastSlash)
  .set("json spaces", 2)

  .get(
    [
      "^/$" // index
    ],
    entryIndexHandler
  )
  .get([`^/api/:method(${methodFilter})$`, `^/api/:method(${methodFilter})/:params$`], xapi)
  // Health check script for docker swarm
  .get("^/healthcheck.json$", healthCheck)
  // For all others paths
  .get("*", fallbackHandler);

export default server;
