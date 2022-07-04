import {Store} from "redux";

import i18n from 'i18next';

import {AppState} from "./index";

import {getAccount, getDynamicProps} from "../api/hive";
import {fetchedAct as loadDynamicProps} from "./dynamic-props";
import {fetchedAct as entriesFetchedAct} from "./entries";
import {setCurrencyAct as setCurrency, setLangAct as setLang} from "./global";

import {getCurrencyRate} from "../api/misc";

import currencies from "../constants/currencies.json";

import * as ls from "../../common/util/local-storage";

import currencySymbol from "../../common/util/currency-symbol";

export const clientStoreTasks = (store: Store<AppState>) => {

    // Load dynamic props
    getDynamicProps().then((resp) => {
        store.dispatch(loadDynamicProps(resp));
    });

    // Currency
    const currency = ls.get("currency");
    if (currency && currencies.find(x => x.id === currency)) {
        const symbol = currencySymbol(currency);
        getCurrencyRate(currency).then(rate => {
            store.dispatch(setCurrency(currency, rate, symbol));
        });
    }

    // Language
    const lang = ls.get("lang");
    if (lang) {
        if (store.getState().global.lang !== lang) {
            i18n.changeLanguage(lang).then(() => {
                store.dispatch(setLang(lang));
            });
        }
    }

}
