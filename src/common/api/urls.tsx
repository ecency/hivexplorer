import axios from "axios";
import { ConfigItems } from "../../../config";

// Get witness Account 
export const getAccount=(user:string)=>{
    return `${ConfigItems.baseUrl}/api/get_accounts?name[]=${user}`
}

// Get RC Account
export const getRCAccount=(user:string)=>{
    return `${ConfigItems.baseUrl}/api/find_rc_accounts?accounts[]=${user}`
}

//Get All Proposals
export const getProposals=(status:string)=>{
    return `${ConfigItems.baseUrl}/api/list_proposals?order="by_total_votes"&order_direction="ascending"&status="${status}"&limit=200&start=["0"]`
}

// Get single Proposal
export const getSingleProposal=(proposal_id:number)=>{
    return `${ConfigItems.baseUrl}/api/find_proposals?proposal_ids=[${proposal_id}]`
}

// Get All Blocks
export const getHeadBlock=()=>{
    return `${ConfigItems.baseUrl}/api/get_dynamic_global_properties`
}

// Get Blocks
export const getBlocks=(block_num:number,count:number):string=>{
    return `${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${block_num-(count-1)}&count=${count}`
}

// Get Single Block
export const getSingleBlock=(block_id:number)=>{
    return `${ConfigItems.baseUrl}/api/get_block?block_num=${block_id}`
}

// Get Transactions 
export const getTransactions=(block_num:number)=>{
    return `${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=${block_num}`
}

// Get Single Transaction
export const getSingleTransaction=(transaction_id:number)=>{
    return `${ConfigItems.baseUrl}/api/get_transaction?trx_id=${transaction_id}`
}
// Get Witness
export const getWitnesses=(limit:number)=>{
    return `${ConfigItems.baseUrl}/api/get_witnesses_by_vote?limit=${limit}`
}

export const getDiscussion=(user:string,permlink:string)=>{
    return `${ConfigItems.baseUrl}/api/get_discussion?author=${user}&permlink=${permlink}`
}
export const getContent=(user:string,permlink:string)=>{
    return `${ConfigItems.baseUrl}/api/get_content?author=${user}&permlink=${permlink}`
}

export const getMarketData = (coin: string, vsCurrency: string, fromTs: string, toTs: string): Promise<{ prices?: [number, number] }> => {
    const u = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${vsCurrency}&from=${fromTs}&to=${toTs}`
    return axios.get(u).then(r => r.data);
}

export const getEntryVotes=(user:string,permlink:string)=>{
    return `${ConfigItems.baseUrl}/api/get_active_votes?author=${user}&permlink=${permlink}`
}

export const getOwnerHistory=(user:string)=>{
    return `${ConfigItems.baseUrl}/api/get_owner_history?account=${user}`
}
