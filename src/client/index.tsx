import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '../common/store/configure';
import { history } from '../common/store';
import App from '../common/app';
import { AppWindow } from './window';
import '../style/theme-day.scss';
import '../style/theme-night.scss';
import './base-handlers';
import { loadableReady } from '@loadable/component';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';

declare var window: AppWindow;

const store = configureStore(window['__PRELOADED_STATE__']);

if (process.env.NODE_ENV === 'production') {
  console.log('%c%s', 'font-size: 16px;', 'Do not paste any sensitive information here!');
  console.log(
    '%c%s',
    'font-size: 12px;',
    'Are you developer, looking ways to contribute? \nhttps://github.com/ecency/hivexplorer \n\n'
  );
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','fr'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    //lng: document.querySelector('html').lang , // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection:{
      order: [ 'cookie', 'localStorage',  'htmlTag', 'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react:{
      useSuspense:false
    }
  });
// function App() {
//   const { t } = useTranslation();

//   return <h2>{t('welcome_to_react')}</h2>;
// }
loadableReady().then(() => {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history!}>
        <App/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );

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
