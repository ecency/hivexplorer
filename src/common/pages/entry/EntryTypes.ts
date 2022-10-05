export interface activeVotes {
    percent:number
    reputation: number
    rshares: number
    time: string
    voter: string
    weight: string | number

}

export interface EntryType {
    author:string,
    permlink:string,
    category:string,
    title:string,
    body:string,
    json_metadata:string,
    created:string,
    last_update:string,
    depth:number
    children:number,
    last_payout:string,
    cashout_time:string,
    active_votes:activeVotes[]
}