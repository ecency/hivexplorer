import React, { useEffect,useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './components/404';
import routes from './routes';
import * as ls from './util/local-storage';
import i18n from 'i18next';
import { pageMapDispatchToProps, pageMapStateToProps } from './pages/common';
import { connect,useDispatch,useSelector } from 'react-redux';
import loadable from '@loadable/component';
import AppHeader from './pages/header/appHeader';
import { useTranslation } from 'react-i18next';
import { toggleTheme } from "./store/global/index"
import {ThemeProvider} from "styled-components";
import { Button } from 'react-bootstrap';
import { GlobalStyles } from "./components/dark-theme/globalStyles";
import { darkTheme, lightTheme } from './components/dark-theme/themes';
import {Global, Theme} from "./store/global/types";
import '../style/theme-day.scss';
import '../style/theme-night.scss';



const EntryPage = loadable(() => import('./pages/home/HomePage'));
const AboutPage = loadable(() => import('./pages/about'));
const HeadBlockDetailPage = loadable(() => import('./components/headBlock/headBlockDetail'));

const App = ({ setLang }: any) => {
  const dispatch = useDispatch()
  const currTheme = useSelector((state:any) => state.global.theme)
  const {t} = useTranslation()
  const [theme, setTheme] = useState(currTheme);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleAutoDetectTheme);
}, []); //

  const handleAutoDetectTheme = (e: any = null) => {        
    const _default_theme = e && e.matches ? Theme.night : Theme.day
    toggleTheme(_default_theme);
  }
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
      <>
      {/*<Tracker/>*/}
      {/* <div className="switch-menu">
        <Button className="switch-theme" onClick={() => dispatch(toggleTheme())}>
            Click me
        </Button>
      </div> */}
      <AppHeader />
      <Switch>
        <Route exact={true} path={routes.HOME} component={EntryPage}/>
        <Route exact={true} path={routes.ABOUT} component={AboutPage}/>
        {/* CHECK */}
        <Route exact={true} path={routes.Service} component={NotFound}/>
        <Route exact={true} path={routes.HeadBlock}  component={HeadBlockDetailPage}/>
        <Route component={NotFound}/>
      </Switch>
      </>

    </>
  );
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(App);
