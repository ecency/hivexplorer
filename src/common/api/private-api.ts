import axios from "axios";

import {apiBase} from "./helper";

export interface ReceivedVestingShare {
    delegatee: string;
    delegator: string;
    timestamp: string;
    vesting_shares: string;
}

export const getReceivedVestingShares = (username: string): Promise<ReceivedVestingShare[]> =>
    axios.get(apiBase(`/private-api/received-vesting/${username}`)).then((resp) => resp.data.list);


export interface RewardedCommunity {
    start_date: string;
    total_rewards: string;
    name: string;
}

export const getRewardedCommunities = (): Promise<RewardedCommunity[]> =>
    axios.get(apiBase(`/private-api/rewarded-communities`)).then((resp) => resp.data);

export interface LeaderBoardItem {
    _id: string;
    count: number;
    points: string
}

export type LeaderBoardDuration = "day" | "week" | "month";

export const getLeaderboard = (duration: LeaderBoardDuration): Promise<LeaderBoardItem[]> => {
    return axios.get(apiBase(`/private-api/leaderboard/${duration}`)).then(resp => resp.data);
};

export interface CurationItem {
    efficiency: number;
    account: string;
    vests: number;
    votes: number;
    uniques: number;
}

export type CurationDuration = "day" | "week" | "month";

export const getCuration = (duration: CurationDuration): Promise<CurationItem[]> => {
    return axios.get(apiBase(`/private-api/curation/${duration}`)).then(resp => resp.data);
};

export const signUp = (username: string, email: string, referral: string): Promise<any> =>
    axios
        .post(apiBase(`/private-api/account-create`), {
            username: username,
            email: email,
            referral: referral
        })
        .then(resp => {
            return resp;
        });

export const subscribeEmail = (email: string): Promise<any> =>
    axios
        .post(apiBase(`/private-api/subscribe`), {
            email: email
        })
        .then(resp => {
            return resp;
        });


export const getCurrencyTokenRate = (currency:string, token:string): Promise<number> => 
    axios.get(apiBase(`/private-api/market-data/${currency==="hbd" ? "usd" : currency}/${token}`)).then((resp:any) => resp.data)




