import Cookies from 'js-cookie';
import { Dispatch } from 'redux';
import defaults from '../../constants/defaults.json';
import { AppState } from '../index';
import {
  Actions,
  ActionTypes,
  Global,
  HasKeyChainAction,
  LangSetAction,
  Theme,
  ThemeChangeAction,
} from './types';
import * as ls from '../../util/local-storage';

export const initialState: Global = {
  theme: Theme[defaults.theme],
  isMobile: false,
  hasKeyChain: false,
  lang: 'en_US',
};

export default (state: Global = initialState, action: Actions): Global => {
  switch (action.type) {
    case ActionTypes.THEME_CHANGE: {
      const { theme } = action;
      return { ...state, theme };
    }
    case ActionTypes.HAS_KEYCHAIN: {
      return { ...state, hasKeyChain: true };
    }
    case ActionTypes.LANG_SET: {
      const { lang } = action;
      return { ...state, lang };
    }
    default:
      return state;
  }
};

/* Actions */
export const toggleTheme = (theme_key?: Theme) => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const { global } = getState();

  const { theme, isMobile } = global;
  let newTheme: any = theme === Theme.day ? Theme.night : Theme.day;

  if (!!theme_key) {
    newTheme = theme_key;
  }

  ls.set('theme', newTheme);
  Cookies.set('theme', newTheme);

  dispatch(themeChangeAct(newTheme));
  if (isMobile) {
    let body: any = document.getElementsByTagName('body');
    if (!body) return;
    body = body[0];
    body.classList.remove(`theme-${theme}`);
    body.classList.add(`theme-${newTheme}`);
  }
};

/* Action Creators */
export const themeChangeAct = (theme: Theme): ThemeChangeAction => {
  return {
    type: ActionTypes.THEME_CHANGE,
    theme,
  };
};

export const hasKeyChainAct = (): HasKeyChainAction => {
  return {
    type: ActionTypes.HAS_KEYCHAIN,
  };
};

export const setLangAct = (lang: string): LangSetAction => {
  return {
    type: ActionTypes.LANG_SET,
    lang,
  };
};