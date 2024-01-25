import express from "express";

import { AppState } from "../../common/store";

import { makePreloadedState } from "../state";

import { render } from "../template";

export default async (req: express.Request, res: express.Response) => {
  const state = await makePreloadedState(req);

  const preLoadedState: AppState = {
    ...state,
    global: {
      ...state.global
    }
  };

  res.send(render(req, preLoadedState));
};

export const healthCheck = async (req: express.Request, res: express.Response) => {
  res.send({
    status: 200,
    body: {
      status: "ok"
    }
  });
};

export const nodeList = async (req: express.Request, res: express.Response) => {
  res.send({
    hived: [
      "https://api.hive.blog",
      "https://anyx.io",
      "https://api.deathwing.me",
      "https://rpc.ausbit.dev",
      "https://api.openhive.network",
      "https://techcoderx.com"
    ]
  });
};
