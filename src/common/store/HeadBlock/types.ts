// export interface HeadblockStatde {
//   [page: string]: {
//     scroll: number;
//   };
// }

export interface objAmountPrecisionNai {
  amount: string
  precision: number
  nai: string
}

export interface HeadblockState {

  head_block_number: string,
  head_block_id: string,
  time:string,
  current_witness:string,
  // total_pow:string,
  // num_pow_witnesses:string,
  // virtual_supply:string | objAmountPrecisionNai 
  // current_supply:string | objAmountPrecisionNai 
  // init_hbd_supply:string | objAmountPrecisionNai 
  // current_hbd_supply:string | objAmountPrecisionNai,
  // total_vesting_fund_hive:string | objAmountPrecisionNai,
  // total_vesting_shares:string | objAmountPrecisionNai,
  // total_reward_fund_hive:string | objAmountPrecisionNai,
  // total_reward_shares2:string | objAmountPrecisionNai,
  // pending_rewarded_vesting_shares:string | objAmountPrecisionNai,
  // pending_rewarded_vesting_hive:string | objAmountPrecisionNai, 
  // hbd_interest_rate:string,
  // hbd_print_rate:string,
  // maximum_block_size:string,
  // required_actions_partition_percent:string,
  // current_aslot:string,
  // recent_slots_filled:string,
  // participation_count:string,
  // last_irreversible_block_num:string,
  // vote_power_reserve_rate:string,
  // delegation_return_period:string,
  // reverse_auction_seconds:string,
  // available_account_subsidies:string,
  // hbd_stop_percent:string,
  // hbd_start_percent:string,
  // next_maintenance_time:string,
  // last_budget_time:string,
  // next_daily_maintenance_time:string,
  // content_reward_percent:string,
  // vesting_reward_percent:string,
  // sps_fund_percent:string,
  // sps_interval_ledger:string,
  // downvote_pool_percent:string,
  // proposal_fund_percent: number,
  // dhf_interval_ledger: string | objAmountPrecisionNai,
  // current_remove_threshold:string,
  // early_voting_seconds:string,
  // mid_voting_seconds:string,
  // max_consecutive_recurrent_transfer_failures:string,
  // max_recurrent_transfer_end_date:string,
  // min_recurrent_transfers_recurrence:string,
  // max_open_recurrent_transfers:string
}




export enum ActionTypes {
  SET_HEAD_BLOCK = "@headBlock/SET_DATA"
}

export interface HeadblockAction {
  type: ActionTypes.SET_HEAD_BLOCK;
  data?: HeadblockState;
}

export interface SavePageScrollData {
  pageName: string;
  scrollValue: number;
}

export type Actions = HeadblockAction;