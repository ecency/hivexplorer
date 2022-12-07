import { ConfigItems } from "../../../../../config";
import { _t } from "../../../i18n";

export const BLOCKS_ITEMS = [
    {
    name: _t("api_blocks.head_block"),
    description:_t("api_blocks.head_block_description"),
    url:`${ConfigItems.baseUrl}/api/get_dynamic_global_properties`,
    parameter:'None',
    end_point:``,
    response:`
{
    head_block_number: 70315459
    head_block_id: "0430edc35a8a67bb605e65bb54b63ea5eef51944"
    time: "2022-12-07T11:47:27"
    current_witness: "roelandp"
    total_pow: 514415
    num_pow_witnesses: 172
    virtual_supply: "471274443.274 HIVE"
    current_supply: "393458619.704 HIVE"
    init_hbd_supply: "0.000 HBD"
    current_hbd_supply: "28091512.309 HBD"
    total_vesting_fund_hive: "164870470.187 HIVE"
    total_vesting_shares: "296867285015.055247 VESTS"
    total_reward_fund_hive: "0.000 HIVE"
    total_reward_shares2: "0"
    pending_rewarded_vesting_shares: "818149679.098882 VESTS"
    pending_rewarded_vesting_hive: "425916.360 HIVE"
    hbd_interest_rate: 2000
    hbd_print_rate: 10000
    maximum_block_size: 65536
    required_actions_partition_percent: 0
    current_aslot: 70526220
    recent_slots_filled: "340282366920938463463374607431768211455"
    participation_count: 128
    last_irreversible_block_num: 70315530
    vote_power_reserve_rate: 10
    delegation_return_period: 432000
    reverse_auction_seconds: 0
    available_account_subsidies: 12244225
    hbd_stop_percent: 2000
    hbd_start_percent: 2000
    next_maintenance_time: "2022-12-07T12:35:24"
    last_budget_time: "2022-12-07T11:35:24"
    next_daily_maintenance_time: "2022-12-07T19:31:30"
    content_reward_percent: 6500
    vesting_reward_percent: 1500
    proposal_fund_percent: 1000
    dhf_interval_ledger: "34.944 HBD"
    downvote_pool_percent: 2500
    current_remove_threshold: 200
    early_voting_seconds: 86400
    mid_voting_seconds: 172800
    max_consecutive_recurrent_transfer_failures: 10
    max_recurrent_transfer_end_date: 730
    min_recurrent_transfers_recurrence: 24
    max_open_recurrent_transfers: 255
}`
    },
    {
    name: _t("api_blocks.get_blocks"),
    description:_t("api_blocks.get_blocks_description"),
    url:`${ConfigItems.baseUrl}/api/get_block?block_num=8675309`,
    parameter:'block_num(int)',
    end_point:`${ConfigItems.baseUrl}/api/get_block?block_num=<{block_num}>`,
    response:`
{
    "previous": "0000000000000000000000000000000000000000",
    "timestamp": "2016-03-24T16:05:00",
    "witness": "initminer",
    "transaction_merkle_root": "0000000000000000000000000000000000000000",
    "extensions": [],
    "witness_signature": "204f8ad56a8f5cf722a02b035a61b500aa59b9519b2c33c77a80c0a714680a5a5a7a340d909d19996613c5e4ae92146b9add8a7a663eef37d837ef881477313043",
    "transactions": [],
    "block_id": "0000000109833ce528d5bbfb3f6225b39ee10086",
    "signing_key": "STM8GC13uCZbP44HzMLV6zPZGwVQ8Nt4Kji8PapsPiNq1BK153XTX",
    "transaction_ids": []
}
        `
    }
];