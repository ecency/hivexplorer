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
  },
 {
  code: "fr-FR",
  name: "Français",
 },
 {
  code: "tr-TR",
    name: "Türkçe",
 },
 {
  code: "it-IT",
    name: "Italiano",
 },
 {
  code: "es-ES",
    name: "Español",
 },
 {
  code: "ru-RU",
    name: "Русский",
 },
 {
  code: "hi-IN",
    name: "हिन्दी",
 }

];

const enUs = require("./locales/en-US.json");
const deDE= require("./locales/de-DE.json");
const hiIN = require("./locales/hi-IN.json");
const itIT = require("./locales/it-IT.json");
const esES = require("./locales/es-ES.json");
const ruRU = require("./locales/ru-RU.json");
const frFR=require("./locales/fr-FR.json");
const trTR=require("./locales/tr-TR.json");

const resources = {
  ["en-US"]: {
    translation: enUs
  },
  ["de-DE"]: {
    translation: deDE
  },
  ["es-ES"]: {
    translation: esES
  },
  ["hi-IN"]: {
    translation: hiIN
  },
  ["it-IT"]: {
    translation: itIT
  },
  ["ru-RU"]: {
    translation: ruRU
  },
  ["tr-TR"]:{
    translation: trTR
  },
  ["fr-FR"]:{
    translation: frFR
  }
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
