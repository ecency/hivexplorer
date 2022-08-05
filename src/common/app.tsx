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


const EntryPage = loadable(() => import('./pages/home/HomePage'));
const AboutPage = loadable(() => import('./pages/about'));
const HeadBlockDetailPage = loadable(() => import('./components/headBlock/headBlockDetail'));
const SingleBlock = loadable(()=>import('./pages/blocks/SingleBlockPage'))

const App = ({ setLang }: any) => {
  const dispatch = useDispatch()
  const currTheme = useSelector((state:any) => state.global.theme)
  const {t} = useTranslation()
  const [theme, setTheme] = useState(currTheme);
  const themeToggler = () => {
    theme === 'day' ? setTheme('night') : setTheme('day')
    dispatch(toggleTheme())
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
      <ThemeProvider theme={theme === 'day' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      {/*<Tracker/>*/}
      <AppHeader themeToggler={themeToggler}/>
      <Switch>
        <Route exact={true} path={routes.HOME} component={EntryPage}/>
        <Route exact={true} path={routes.ABOUT} component={AboutPage}/>
        <Route exact={true} path={routes.HeadBlock}  component={HeadBlockDetailPage}/>
        <Route exact={true} path={routes.TargetBlock}  component={SingleBlock}/>
        <Route component={NotFound}/>
      </Switch>
      </>
    </ThemeProvider>

    </>
  );
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(App);
