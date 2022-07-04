import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from '../common/store/configure';
import { clientStoreTasks } from '../common/store/helper';
import { history } from '../common/store';

import '../style/theme-day.css';
import '../style/theme-night.css';
import './base-handler';

import App from '../common/app';

const store = configureStore(window['__PRELOADED_STATE__']);

loadableReady().then(() => {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history!}>
        <App/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );

  clientStoreTasks(store);
});

if (module.hot) {
  module.hot.accept('../common/app', () => {
    hydrate(
      <Provider store={store}>
        <ConnectedRouter history={history!}>
          <App/>
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
}
