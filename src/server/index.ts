import express from 'express';

import cookieParser from 'cookie-parser';

import entryIndexHandler from './handlers/entry-index';
import fallbackHandler, { healthCheck } from './handlers/fallback';
import { cleanURL, stripLastSlash } from './util';

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use('/assets', express.static(`${process.env.RAZZLE_PUBLIC_DIR!}/assets`))
  .use(express.json())
  .use(cookieParser())
  .use(cleanURL)
  .use(stripLastSlash)


  .get(
    [
      '^/$', // index
    ],
    entryIndexHandler
  )
  // Health check script for docker swarm
  .get('^/healthcheck.json$', healthCheck)
  // For all others paths
  .get('*', fallbackHandler);

export default server;
