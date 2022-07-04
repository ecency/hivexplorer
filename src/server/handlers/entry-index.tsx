import express from "express";

import {AppState} from "../../common/store";
import {EntryFilter} from "../../common/store/global/types";
import {Entry} from "../../common/store/entries/types";
import {makeGroupKey} from "../../common/store/entries";

import * as hiveApi from "../../common/api/hive";
import * as bridgeApi from "../../common/api/bridge";

import filterTagExtract from "../../common/util/filter-tag-extract";

import {optimizeEntries, cache} from "../util";

import {makePreloadedState} from "../state";

import {render} from "../template";

export default async (req: express.Request, res: express.Response) => {
    const params = filterTagExtract(req.originalUrl.split("?")[0])!;
    const {filter, tag} = params;

    const state = await makePreloadedState(req);
    const observer = "";

    let entries: Entry[];

    try {
        if (filter === "feed") {
            entries = (await bridgeApi.getAccountPosts(filter, tag.replace("@", ""), "", "", 8, observer)) || [];
        } else {
            entries = (await bridgeApi.getPostsRanked(filter, "", "", 8, tag, observer)) || [];
        }
    } catch (e) {
        entries = [];
    }

    let tags: string[] | undefined = cache.get("trending-tag");
    if (tags === undefined) {
        try {
            tags = await hiveApi.getTrendingTags();
        } catch (e) {
            tags = []
        }

        if (tags.length > 0) {
            cache.set("trending-tag", tags, 7200);
        }
    }


    const preLoadedState: AppState = {
        ...state,
        global: {
            ...state.global,
            ...{filter: filter === "feed" ? filter : EntryFilter[filter], tag}, // TODO: AllFilter can be used
        },
        trendingTags: {
            ...state.trendingTags,
            list: tags.sort(() => Math.random() - 0.5)
        },
        entries: {
            ...state.entries,
            [`${makeGroupKey(filter, tag)}`]: {
                entries: optimizeEntries(entries),
                error: null,
                sid: '',
                loading: false,
                hasMore: true,
            }
        }
    }

    res.send(render(req, preLoadedState));
};
