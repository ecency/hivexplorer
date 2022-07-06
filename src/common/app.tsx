import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/404';
import routes from './routes';
import * as ls from './util/local-storage';
import i18n from 'i18next';
import { pageMapDispatchToProps, pageMapStateToProps } from './pages/common';
import { connect } from 'react-redux';
import loadable from '@loadable/component';

const EntryPage = loadable(() => import('./pages/index'));

const App = ({ setLang }: any) => {
  useEffect(() => {
    const currentLang = ls.get('current-language');
    if (currentLang) {
      setLang(currentLang);
      i18n.changeLanguage(currentLang)
    }
  }, []);

  return (
    <>
      {/*<Tracker/>*/}
      <Switch>
        <Route exact={true} path={routes.HOME} component={EntryPage}/>
        <Route component={NotFound}/>
      </Switch>
    </>
  );
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(App);
