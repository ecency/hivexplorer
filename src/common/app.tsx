import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { pageMapDispatchToProps, pageMapStateToProps } from './pages/common';
import { connect } from 'react-redux';

import EntryIndexContainer from './pages/index';

import routes from './routes';

const App = () => {
  return (
    <Switch>
      <Route exact={true} path={routes.HOME} component={EntryIndexContainer}/>
      <Route exact={true} strict={true} path={routes.FILTER} component={EntryIndexContainer}/>
    </Switch>
  );
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(App);
