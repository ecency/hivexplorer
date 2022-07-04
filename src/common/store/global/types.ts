export enum Theme {
    day = "day",
    night = "night"
}

export enum EntryFilter {
    trending = "trending",
    hot = "hot",
    created = "created",
    payout = "payout",
    payout_comments = "payout_comments",
    muted = "muted"
}

export enum ProfileFilter {
    blog = "blog",
    posts = "posts",
    comments = "comments",
    replies = "replies"
}

// TODO: Find a proper way to merge EntryFilter and ProfileFilter
export enum AllFilter {
    trending = "trending",
    hot = "hot",
    created = "created",
    payout = "payout",
    payout_comments = "payout_comments",
    muted = "muted",  // To see muted accounts
    blog = "blog",  // This might be deleted
    posts = "posts",
    comments = "comments",
    replies = "replies",
    communities = "communities",
    feed = "feed"
}

export interface Global {
    filter: EntryFilter | ProfileFilter | AllFilter;
    tag: string;
    theme: Theme;
    currency: string;
    currencyRate: number;
    currencySymbol: string;
    lang: string;
    searchIndexCount: number;
    isMobile: boolean;
    lastIndexPath: string | null;
}

export enum ActionTypes {
    THEME_CHANGE = "@global/THEME_CHANGE",
    CURRENCY_SET = "@global/CURRENCY_SET",
    LANG_SET = "@global/LANG_SET",
    SET_LAST_INDEX_PATH = "@global/SET_LAST_INDEX_PATH",
}

export interface ThemeChangeAction {
    type: ActionTypes.THEME_CHANGE;
    theme: Theme;
}

export interface CurrencySetAction {
    type: ActionTypes.CURRENCY_SET;
    currency: string;
    currencyRate: number;
    currencySymbol: string;
}

export interface LangSetAction {
    type: ActionTypes.LANG_SET;
    lang: string;
}


export interface SetLastIndexPathAction {
    type: ActionTypes.SET_LAST_INDEX_PATH;
    path: string | null;
}

export type Actions =
    ThemeChangeAction
    | CurrencySetAction
    | LangSetAction
    | SetLastIndexPathAction;