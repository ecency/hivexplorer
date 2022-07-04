import express from 'express';

import {EntryFilter, ProfileFilter} from "../common/store/global/types";
import entryIndexHandler from "./handlers/entry-index";
import profileHandler from "./handlers/profile";
import entryHandler from "./handlers/entry";
import fallbackHandler, {healthCheck} from "./handlers/fallback";
import { cleanURL, stripLastSlash } from "./util";

const entryFilters = Object.values(EntryFilter);
const profileFilters = Object.values(ProfileFilter);

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use("/assets", express.static(`${process.env.RAZZLE_PUBLIC_DIR!}/assets`))
  .use(express.json())
  .use(cleanURL)
  .use(stripLastSlash)

  // Common backend
  .get(
      [
          "^/$", // index
          `^/:filter(${entryFilters.join("|")})$`, // /trending
          `^/:filter(${entryFilters.join("|")})/:tag$`, //  /trending/esteem
          `^/@:tag/:filter(feed)$`, //  /@user/feed
      ],
      entryIndexHandler
  )
  .get(
      [
          "^/@:username$", // /@esteemapp
          `^/@:username/:section(${profileFilters.join("|")}|communities|wallet|points|engine|settings)$`, // /@esteemapp/comments
      ],
      profileHandler
  )
  .get(
      [
          "^/:category/@:author/:permlink$", // /esteem/@esteemapp/rss-feeds-added-into-esteem-website
          "^/@:author/:permlink$", // /@esteemapp/rss-feeds-added-into-esteem-website
      ],
      entryHandler
  )

  // Health check script for docker swarm
  .get("^/healthcheck.json$", healthCheck)

  // For all others paths
  .get("*", fallbackHandler);


export default server;
