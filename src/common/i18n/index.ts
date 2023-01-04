import i18n from "i18next";

import moment from "moment";

export const langOptions = [
  {
    code: "en-US",
    name: "English"
  },
  {
    code: "de-DE",
    name: "Deutsche"

  }
];

const enUs = require("./locales/en-US.json");
const deDE= require("./locales/de-DE.json");

const resources = {
  ["en-US"]: {
    translation: enUs
  },
  ["de-DE"]: {
    translation: deDE
  },
};

i18n.init({
  resources,
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false
  }
});

i18n.on("languageChanged", function (lang) {
  moment.locale(lang);
});

export const _t = (k: string, args = {}) => {
  return i18n.t(k, args);
};
