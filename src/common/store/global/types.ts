import { LocationChangeAction } from '../common';

export enum Theme {
  day = 'day',
  night = 'night',
}

export interface Global {
  theme: Theme;
  isMobile: boolean;
  lang: string;
}

export enum ActionTypes {
  THEME_CHANGE = '@global/THEME_CHANGE',
  LANG_SET = '@global/LANG_SET',
}

export interface LangSetAction {
  type: ActionTypes.LANG_SET;
  lang: string;
}

export interface ThemeChangeAction {
  type: ActionTypes.THEME_CHANGE;
  theme: Theme;
}

export type Actions = LocationChangeAction | ThemeChangeAction | LangSetAction;