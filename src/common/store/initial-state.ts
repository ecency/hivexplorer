import { AppState } from './index';
import {initialState as globalInitialState} from "./global";
import {initialState as persistentPageScrollInitialState} from "./persistent-page-scroll";

const initialState: AppState = {
  global: globalInitialState,
  persistentPageScroll: persistentPageScrollInitialState,
};

export default initialState;
