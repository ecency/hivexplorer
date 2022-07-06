import express from 'express';
import { AppState } from '../common/store';
import initialState from '../common/store/initial-state';
import { Global, Theme } from '../common/store/global/types';
import defaults from '../common/constants/defaults.json';
import { getOperatingSystem } from '../common/util/platform';

export const makePreloadedState = async (req: express.Request): Promise<AppState> => {
  const _c = (k: string): any => req.cookies[k];
  const theme = _c('theme') && Object.values(Theme).includes(_c('theme')) ? _c('theme') : defaults.theme;

  const globalState: Global = {
    ...initialState.global,
    theme: Theme[theme],
    isMobile: !!(req.headers['user-agent'] && ['iOS', 'AndroidOS'].includes(getOperatingSystem(req.headers['user-agent']))),
  };

  return {
    ...initialState,
    global: globalState,
  }
}
