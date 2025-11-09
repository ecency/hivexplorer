import axios from "axios";
import { ConfigItems } from "../../../config";
import { utils } from '@hiveio/dhive';

// Get witness Account
export const getAccount = async (user: string) => {
  const account_url = `${ConfigItems.baseUrl}/api/get_accounts?names=["${user}"]`;
  const r = await axios.get(account_url);
  return r.data;
};

// Get RC Account
export const getRCAccount = (user: string) => {
  return `${ConfigItems.baseUrl}/api/find_rc_accounts?accounts[]=${user}`;
};

//Get All Proposals
export const getProposals = async (status: string) => {
  const url_proposals = `${ConfigItems.baseUrl}/api/list_proposals?order="by_total_votes"&order_direction="ascending"&status="${status}"&limit=200&start=["0"]`;
  const r = await axios.get(url_proposals);
  return r.data;
};

// Get single Proposal
export const getSingleProposal = (proposal_id: number) => {
  return `${ConfigItems.baseUrl}/api/find_proposals?proposal_ids=[${proposal_id}]`;
};

// Get All Blocks
export const getHeadBlock = async () => {
  const head_block_url = `${ConfigItems.baseUrl}/api/get_dynamic_global_properties`;
  const reward_fund_url = `${ConfigItems.baseUrl}/api/get_reward_fund?type="post"`;

  const [headBlockResp, rewardFundResp] = await Promise.allSettled([
    axios.get(head_block_url),
    axios.get(reward_fund_url)
  ]);

  if (headBlockResp.status !== "fulfilled") {
    throw headBlockResp.reason;
  }

  const headBlockData = headBlockResp.value.data;

  if (rewardFundResp.status === "fulfilled") {
    const rewardFundData = rewardFundResp.value?.data;
    const rewardBalance =
      rewardFundData?.reward_balance ??
      rewardFundData?.result?.reward_balance ??
      rewardFundData?.reward_fund?.reward_balance;

    if (rewardBalance) {
      headBlockData.total_reward_fund_hive = rewardBalance;
    }
  }

  return headBlockData;
};

// Get Blocks
export const getBlocks = async (block_num: number, count: number) => {
  const blocks_url = `${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${
    block_num - (count - 1)
  }&count=${count}`;
  const r = await axios.get(blocks_url);
  return r.data;
};

// Get Single Block
export const getSingleBlock = async (block_id: number) => {
  const single_blocks_url = `${ConfigItems.baseUrl}/api/get_block?block_num=${block_id}`;
  const r = await axios.get(single_blocks_url);
  return r.data;
};

// Get Transactions
export const getTransactions = async (block_num: number, isVirtual:boolean) => {
  const url_transactions = `${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=${block_num}&only_virtual=${isVirtual}`;
  const r = await axios.get(url_transactions);
  return r.data;
};

// Get Single Transaction
export const getSingleTransaction = async (transaction_id: number) => {
  const url_single_transaction = `${ConfigItems.baseUrl}/api/get_transaction?trx_id=${transaction_id}`;
  const r = await axios.get(url_single_transaction);
  return r.data;
};
export const getUserTransaction = async (
  user: string,
  transactionFrom: number,
  transactionLimit: number,
  filters: any[] | string,
) => {
  const user_transaction_url = `${ConfigItems.baseUrl}/api/get_account_history?account=${user}&start=${transactionFrom}&limit=${transactionLimit}&operation_type="${filters}"`;
  const r = await axios.get(user_transaction_url);
  let resp = r.data.history;
  // let collection:any = [];
  // console.log('filters',filters)
  // if(filters===''){
    return resp
  // } else{
  //   resp.forEach(function(item:any){
  //     if(item[1]['op']['type']===filters){
  //       collection.push(item) 
  //     }
  //   })
  //     return collection
  // }
};
// Get Witness
export const getWitnesses=async (limit:number)=>{
    const witnesses_url=`${ConfigItems.baseUrl}/api/get_witnesses_by_vote?account=null&limit=${limit}`
    const r = await axios.get(witnesses_url);
    return r.data;
}


export const getDiscussion = async (user: string, permlink: string) => {
  const permlink_url = `${ConfigItems.baseUrl}/api/get_discussion?author=${user}&permlink=${permlink}`;
  const r = await axios.get(permlink_url);
  return r.data;
};
export const getContent = async (user: string, permlink: string) => {
  const single_permlink_url = `${ConfigItems.baseUrl}/api/get_content?author=${user}&permlink=${permlink}`;
  const r = await axios.get(single_permlink_url);
  return r.data;
};

export const getMarketData = (
  coin: string,
  vsCurrency: string,
  fromTs: string,
  toTs: string
): Promise<{ prices?: [number, number] }> => {
  const u = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${vsCurrency}&from=${fromTs}&to=${toTs}`;
  return axios.get(u).then((r) => r.data);
};

export const getEntryVotes = async (user: string, permlink: string) => {
  const entry_votes_url = `${ConfigItems.baseUrl}/api/get_active_votes?author=${user}&permlink=${permlink}`;
  const r = await axios.get(entry_votes_url);
  return r.data;
};

export const getOwnerHistory = (user: string) => {
  return `${ConfigItems.baseUrl}/api/get_owner_history?account=${user}`;
};

export const  getRcOperationStats= async () => {
  const rc_stats_url = `${ConfigItems.baseUrl}/api/get_rc_stats`;
  const r = await axios.get(rc_stats_url);
  return r.data;
};
