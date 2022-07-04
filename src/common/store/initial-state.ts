import {AppState} from "./index";

import {initialState as globalInitialState} from "./global";
import {initialState as dynamicPropsInitialState} from "./dynamic-props";
import {initialState as trendingTagsInitialState} from "./trending-tags";
import {initialState as accountsInitialState} from "./accounts";
import {initialState as communitiesInitialState} from "./communities";
import {initialState as transactionsInitialState} from "./transactions";
import {initialState as discussionInitialState} from "./discussion";
import {initialState as subscriptionsInitialState} from "./subscriptions";
import {initialState as entriesInitialState} from "./entries";
import {initialState as persistentPageScrollInitialState} from "./persistent-page-scroll";

const initialState: AppState = {
    global: globalInitialState,
    dynamicProps: dynamicPropsInitialState,
    trendingTags: trendingTagsInitialState,
    accounts: accountsInitialState,
    communities: communitiesInitialState,
    transactions: transactionsInitialState,
    discussion: discussionInitialState,
    subscriptions: subscriptionsInitialState,
    entries: entriesInitialState,
    persistentPageScroll: persistentPageScrollInitialState
}


export default initialState;
