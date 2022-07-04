import { Dispatch } from 'redux';

import defaults from '../../constants/defaults.json';

import { AppState } from '../index';

import {
  Actions,
  ActionTypes,
  AllFilter,
  CurrencySetAction,
  Global,
  LangSetAction,
  SetLastIndexPathAction,
  Theme,
  ThemeChangeAction,
} from './types';

import { CommonActionTypes } from '../common';

import * as ls from '../../util/local-storage';

import filterTagExtract from '../../util/filter-tag-extract';

export const initialState: Global = {
  filter: AllFilter[defaults.filter],
  tag: "",
  theme: Theme[defaults.theme],
  currency: defaults && defaults.currency && defaults.currency.currency,
  currencyRate: defaults && defaults.currency && defaults.currency.rate,
  currencySymbol: defaults && defaults.currency && defaults.currency.symbol,
  lang: "en-US",
  searchIndexCount: 0,
  isMobile: false,
  lastIndexPath: null,
};

export default (state: Global = initialState, action: Actions): Global => {
  switch (action.type) {
    /*case CommonActionTypes.LOCATION_CHANGE: {
      const { pathname } = action.payload.location;
      const params = filterTagExtract(pathname);

      if (!params) {
        return state;
      }

      const { filter, tag } = params;

      return { ...state, filter: AllFilter[filter] || "", tag: tag };
    }*/
    case ActionTypes.THEME_CHANGE: {
      const { theme } = action;
      return { ...state, theme };
    }
    case ActionTypes.CURRENCY_SET: {
      const { currency, currencyRate, currencySymbol } = action;
      return { ...state, currency, currencyRate, currencySymbol };
    }
    case ActionTypes.LANG_SET: {
      const { lang } = action;
      return { ...state, lang };
    }
    case ActionTypes.SET_LAST_INDEX_PATH: {
      return { ...state, lastIndexPath: action.path };
    }
    default:
      return state;
  }
};

/* Actions */
export const toggleTheme = (theme_key?:Theme) => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const { global } = getState();

  const { theme, isMobile } = global;
  let newTheme: any = theme === Theme.day ? Theme.night : Theme.day;
  
  if (!!theme_key) {
    newTheme = theme_key;
  }

  ls.set("theme", newTheme);

  dispatch(themeChangeAct(newTheme));
  if (isMobile) {
    let body: any = document.getElementsByTagName("body");
    if (!body) return;
    body = body[0];
    body.classList.remove(`theme-${theme}`);
    body.classList.add(`theme-${newTheme}`);
  }
};

export const setCurrency = (currency: string, rate: number, symbol: string) => (
  dispatch: Dispatch
) => {
  ls.set("currency", currency);

  dispatch(setCurrencyAct(currency, rate, symbol));
};

export const setLang = (lang: string) => (dispatch: Dispatch) => {
  ls.set("lang", lang);

  dispatch(setLangAct(lang));
};

export const setLastIndexPath = (path: string | null) => (dispatch: Dispatch) => {
  dispatch(setLastIndexPathAct(path));
}

/* Action Creators */
export const themeChangeAct = (theme: Theme): ThemeChangeAction => {
  return {
    type: ActionTypes.THEME_CHANGE,
    theme,
  };
};

export const setCurrencyAct = (
  currency: string,
  currencyRate: number,
  currencySymbol: string
): CurrencySetAction => {
  return {
    type: ActionTypes.CURRENCY_SET,
    currency,
    currencyRate,
    currencySymbol,
  };
};

export const setLangAct = (lang: string): LangSetAction => {
  return {
    type: ActionTypes.LANG_SET,
    lang,
  };
};

export const setLastIndexPathAct = (path: string | null): SetLastIndexPathAction => ({
  type: ActionTypes.SET_LAST_INDEX_PATH,
  path,
});