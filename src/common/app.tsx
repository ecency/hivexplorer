import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/404";
import routes from "./routes";
import * as ls from "./util/local-storage";
import i18n from "i18next";
import { pageMapDispatchToProps, pageMapStateToProps } from "./pages/common";
import { connect, useDispatch, useSelector } from "react-redux";
import loadable from "@loadable/component";
import AppHeader from "./pages/header";
import { toggleTheme } from "./store/global/index";
import { Global, Theme } from "./store/global/types";
import "../style/theme-day.scss";
import "../style/theme-night.scss";
import { SSRProvider } from "react-bootstrap";

const HomePage = loadable(() => import("./pages/home"));
const AboutPage = loadable(() => import("./pages/about"));
const HeadBlockDetailPage = loadable(() => import("./components/headBlock/headBlockDetail"));
const SingleBlock = loadable(() => import("./pages/block"));
const AllTransactions = loadable(() => import("./pages/transactions"));
const SingleTransaction = loadable(() => import("./pages/transaction"));
const MultipleBlocks = loadable(() => import("./pages/blocks"));
const UserPage = loadable(() => import("./pages/user"));
const WitnessesPage = loadable(() => import("./pages/witnesses"));
const ProposalsPage = loadable(() => import("./pages/proposals"));
const SingleProposalPage = loadable(() => import("./pages/proposal"));
const EntryPage = loadable(() => import("./pages/entry"));
const EntryComment = loadable(() => import("./pages/entry-comment"));
const APIDoc= loadable(() => import('./pages/documentation'));

const App = ({ setLang }: any) => {
  const dispatch = useDispatch();
  const currTheme = useSelector((state: any) => state.global.theme);
  const [theme, setTheme] = useState(currTheme);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleAutoDetectTheme);
  }, []); //

  const handleAutoDetectTheme = (e: any = null) => {
    const _default_theme = e && e.matches ? Theme.night : Theme.day;
    toggleTheme(_default_theme);
  };
  useEffect(() => {
    const currentLang = ls.get("current-language");

    if (currentLang) {
      setLang(currentLang);
      i18n.changeLanguage(currentLang);
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
       <SSRProvider>
      <AppHeader />
      <Switch>
        <Route exact={true} path={routes.HOME} component={HomePage}/>
        <Route exact={true} path={routes.ABOUT} component={AboutPage}/>
        {/* CHECK */}
        <Route exact={true} path={routes.Service} component={NotFound}/>
        <Route exact={true} path={routes.HeadBlock}  component={HeadBlockDetailPage}/>
        <Route exact={true} path={routes.TargetBlock}  component={SingleBlock}/>
        <Route exact={true} path={routes.Transactions}  component={AllTransactions}/>
        <Route exact={true} path={routes.TargetTransaction}  component={SingleTransaction}/>
        <Route exact={true} path={routes.Blocks}  component={MultipleBlocks}/>
        <Route exact={true} path={routes.User}  component={UserPage}/>
        <Route exact={true} path={routes.Witnesses}  component={WitnessesPage}/>
        <Route exact={true} path={routes.Proposals}  component={ProposalsPage}/>
        <Route exact={true} path={routes.SingleProposal}  component={SingleProposalPage}/>
        <Route exact={true} path={routes.Entry}  component={EntryPage}/>
        <Route exact={true} path={routes.EntryComment}  component={EntryComment}/>
        <Route exact={true} path={routes.APIDocumentation}  component={APIDoc}/>
        <Route component={NotFound}/>
      </Switch>
      </SSRProvider>
      </>
    </>
  );
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(App);
