import { AppState } from './index';
import { Theme } from './global/types';

const initialState: AppState = {
  global: {
    theme: Theme.day,
    isMobile: false,
  },
  persistentPageScroll: {},
};

export default initialState;
