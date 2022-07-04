import {AnyAction, bindActionCreators, Dispatch} from "redux";
import {AppState} from "../store";

import {History, Location} from "history";
import {Global} from "../store/global/types";


import {
  toggleTheme,
  setCurrency,
  setLang,
  setLastIndexPath
} from '../store/global';
import {fetchEntries, addEntry, updateEntry, invalidateEntries} from "../store/entries";
import {fetchDiscussion, sortDiscussion, resetDiscussion} from "../store/discussion";
import {addAccount} from "../store/accounts";
import {addCommunity} from "../store/communities";
import {fetchTransactions, resetTransactions} from "../store/transactions";

import {Account, Accounts} from "../store/accounts/types";
import {Community, Communities} from "../store/communities/types";
import {DynamicProps} from "../store/dynamic-props/types";
import {Entries, Entry} from "../store/entries/types";
import {Discussion as DiscussionType, SortOrder} from "../store/discussion/types";
import {Transactions, OperationGroup} from "../store/transactions/types";

export interface PageProps {
    history: History;
    location: Location;

    global: Global;
    toggleTheme: () => void;
    setCurrency: (currency: string, rate: number, symbol: string) => void;
    setLang: (lang: string) => void;
    setLastIndexPath: (path: string | null) => void;

    dynamicProps: DynamicProps;

    entries: Entries;
    fetchEntries: (what: string, tag: string, more: boolean) => void;
    addEntry: (entry: Entry) => void;
    updateEntry: (entry: Entry) => void;
    invalidateEntries: (groupKey: string) => void;

    discussion: DiscussionType;
    fetchDiscussion: (parent_author: string, parent_permlink: string) => void;
    sortDiscussion: (order: SortOrder) => void;
    resetDiscussion: () => void;

    accounts: Accounts;
    addAccount: (data: Account) => void;

    communities: Communities;
    addCommunity: (data: Community) => void;

    transactions: Transactions;
    fetchTransactions: (username: string, group?: OperationGroup | "", start?: number, limit?: number) => void;
    resetTransactions: () => void;

    persistentPageScroll: any;
}

export const pageMapStateToProps = (state: AppState) => ({
    ...state
});

export const pageMapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators(
        {
            toggleTheme,
            setCurrency,
            setLang,
            setLastIndexPath,
            fetchEntries,
            addEntry,
            updateEntry,
            invalidateEntries,
            fetchDiscussion,
            sortDiscussion,
            resetDiscussion,
            addAccount,
            addCommunity,
            fetchTransactions,
            resetTransactions,
        },
        dispatch
    );
