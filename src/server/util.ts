  
import NodeCache from 'node-cache';
import axios, {AxiosRequestConfig, AxiosResponse, Method} from "axios";
import {Response} from "express";

import {Entry} from "../common/store/entries/types";
import {DynamicProps} from "../common/store/dynamic-props/types";
import {initialState as dynamicPropsInitialState} from "../common/store/dynamic-props";
import * as hiveApi from "../common/api/hive";

export const cache = new NodeCache({stdTTL: 0, checkperiod: 600});

export const pipe = (promise: Promise<AxiosResponse>, res: Response) => {
    promise.then(r => {
        res.status(r.status).send(r.data);
    }).catch(() => {
        res.status(500).send("Server Error");
    });
};

export const baseApiRequest = (url: string, method: Method, headers: any = {}, payload: any = {}): Promise<AxiosResponse> => {
    const requestConf: AxiosRequestConfig = {
        url,
        method,
        validateStatus: () => true,
        responseType: "json",
        headers: {...headers},
        data: {...payload}
    }

    return axios(requestConf)
}


export const cleanURL = (req: any, res: any, next: any) => {
    if (req.url.includes('//')) {
        res.redirect(req.url.replace(new RegExp('/{2,}', 'g'),'/'));
    }
    if (req.url.includes('@@')) {
        res.redirect(req.url.replace(new RegExp('@{2,}', 'g'),'@'));
    }
    if(req.url.includes('-hs?code')){
        next();
    }
    else if (req.url !== req.url.toLowerCase() && !req.url.includes('auth?code')) {
        res.redirect(301, req.url.toLowerCase());
    }
    else {
        next();
    }
}

export const stripLastSlash = (req: any, res: any, next: any) => {
    if (req.path.substr(-1) === '/' && req.path.length > 1) {
        let query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else {
        next();
    }
}

export const optimizeEntries = (entries: Entry[]): Entry[] => {
    return entries;
    /* Optimization disabled for now
    return entries.map((x) => {
        return {
            ...x,
            ...{active_votes: []}, // remove active votes
        };
    }); */
};

export const getSearchIndexCount = async (): Promise<number> => {
    let indexCount: number | undefined = cache.get("index-count");
    if (indexCount === undefined) {
        try {
            indexCount = (await axios.get('https://hivesearcher.com/api/count').then(r => r.data)) as number
        } catch (e) {
            indexCount = 0;
        }

        cache.set("index-count", indexCount, 86400);
    }

    return indexCount;
}

export const getDynamicProps = async (): Promise<DynamicProps> => {
    let props: DynamicProps | undefined = cache.get("dynamic-props");
    if (props === undefined) {
        try {
            props = await hiveApi.getDynamicProps();
            cache.set("dynamic-props", props, 120);
        } catch (e) {
            props = {...dynamicPropsInitialState};
        }
    }

    return props;
}
