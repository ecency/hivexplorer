import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';

import global from './global';
import persistentPageScroll from './persistent-page-scroll';

export let history: History | undefined;

let reducers = {
  global,
  persistentPageScroll,
};

// create browser history on client side
if (typeof window !== 'undefined') {
  // web
  history = createBrowserHistory();

  // We need a customised history object since history pushes new state for same path.
  // See: https://github.com/ReactTraining/history/issues/470
  // We don't want LOCATION_CHANGE triggered for same path because of structure of out "entries" reducer.

  // get ref of current push function
  const _push = history.push;

  let prevPath: string = history.location.pathname;
  // update previous path once history change
  history.listen(location => {
    prevPath = location.pathname;
  });

  // create a new push function that compares new path and previous path.
  history.push = (pathname: History.Path, state: History.LocationState = {}) => {
    // simple path compare
    if (pathname === prevPath) {
      return;
    }
    _push(pathname.includes('//') ? '/' : pathname, state);
  }

  // scroll to top on every push action
  history.listen((location, action) => {
    if (action === 'PUSH') {
      // Don't scroll to top with anchor links
      if (history!.location.hash !== '') {
        return;
      }

      setTimeout(() => {
        window.scrollTo({
          top: 0
        });
      }, 100);
    }
  });

  // @ts-ignore
  reducers = { router: connectRouter(history), ...reducers };
}

const rootReducer = combineReducers(reducers);

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
