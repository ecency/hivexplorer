import { AppState } from "./index";
import { initialState as globalInitialState } from "./global";
import { initialState as persistentPageScrollInitialState } from "./persistent-page-scroll";
import { initialState as headBlockInitialState } from "./HeadBlock";

const initialState: AppState = {
  global: globalInitialState,
  persistentPageScroll: persistentPageScrollInitialState,
  headBlock: headBlockInitialState
};

export default initialState;
