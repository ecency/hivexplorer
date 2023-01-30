import { ConfigItems } from "../../../config";
import { _t } from "../../common/i18n";

export const methods = [
  {
    api: "condenser_api",
    method: "get_trending_tags",
    description:_t("condenser_api.get_trending_tags_description"),
    params: ["tag", "limit"],
    url:`${ConfigItems.baseUrl}api/get_trending_tags?start_tag=%22aaa%22&limit=10`,
    parameter:`<table>
  <thead>
    <tr>
      <th><code class="language-plaintext highlighter-rouge">tag</code> (string)</th>
      <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
      <th>&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">null</code></td>
      <td>100</td>
      <td>Queries the top 100 trending tags.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">"hive"</code></td>
      <td>10</td>
      <td>Queries the tags after “hive”, up to 10 tags.</td>
    </tr>
  </tbody>
</table>`,
     response: `[
  {
    "name": "",
    "total_payouts": "0.000 HBD",
    "net_votes": 0,
    "top_posts": 0,
    "comments": 0,
    "trending": ""
  }
]`
  },
  {
    api: "condenser_api",
    method: "get_comment_discussions_by_payout",
    params: ["query"],
    description:_t("condenser_api.get_comment_discussions_by_payout_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_trending",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_trending_description"),
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_created",  
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_created_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_active",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_active_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_cashout",    
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_cashout_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_votes",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_votes_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_children",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_children_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_hot",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_hot_description"),
    response: `[]`
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_feed",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_feed_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_blog",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_blog_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_promoted",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_promoted_description")
  },
  {
    api: "block_api",
    method: "get_block_header",
    params: ["block_num"],
    description:_t("block_api.get_block_header_description"),
    parameter: `<table>
      <thead>
        <tr>
          <th><code class="language-plaintext highlighter-rouge">block_num</code> (int)</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">1</code></td>
          <td>Queries the block headers for the very first block.</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">8675309</code></td>
          <td>Queries block headers for block number 8,675,309.</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">62396745</code></td>
          <td>Queries block headers for block number 62,396,745.</td>
        </tr>
      </tbody>
    </table>`,
    response: `{
      "previous": "0000000000000000000000000000000000000000",
      "timestamp": "2016-03-24T16:05:00",
      "witness": "initminer",
      "transaction_merkle_root": "0000000000000000000000000000000000000000",
      "extensions": []
    }`,
  },
  {
    api: "block_api",
    method: "get_block",
    params: ["block_num"],
    description:_t("block_api.get_blocks_description"),
    url:`${ConfigItems.baseUrl}/api/get_block?block_num=8675309`,
    parameter: `<p>block_num(int)<p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">block_num</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">1</code></td>
            <td>Queries the very first block.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">8675309</code></td>
            <td>Queries block number 8,675,309.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">62396745</code></td>
            <td>Queries block number 62,396,745.</td>
          </tr>
        </tbody>
      </table>`,
    response: `{
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
      }`
  },
  {
    api: "block_api",
    method: "get_block_range",
    description:_t("block_api.get_block_range_description"),
    params: ["starting_block_num", "count"],
    url:`${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=70548020&count=15`,
    parameter: `<ul>
        <li><code class="language-plaintext highlighter-rouge">starting_block_num</code> - Height of the first block to be returned</li>
        <li><code class="language-plaintext highlighter-rouge">count</code> - the maximum number of blocks to return</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">starting_block_num</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">count</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">1</code></td>
            <td><code class="language-plaintext highlighter-rouge">10</code></td>
            <td>Queries the block headers for the very first block through the tenth block.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">8675309</code></td>
            <td><code class="language-plaintext highlighter-rouge">50</code></td>
            <td>Queries block headers for block numbers 8,675,309 through 8,675,359.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">62396745</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>Queries block headers for block numbers 62,396,745 through 62,397,745.</td>
          </tr>
        </tbody>
      </table>`,
    response: `{
      "blocks": [
        {
          "previous": "04347a33f9155dc51c88601e782dcb86c4e5088b",
          "timestamp": "2022-12-15T13:46:54",
          "witness": "arcange",
          "transaction_merkle_root": "cba20a1395221712b10fd20c38de08e2a5759cbc",
          "extensions": [],
          "witness_signature": "20f491bcfff5854cbec6105633334ce89fabbd9e1dc03866dca27969e0375056392ea2ab87355ee85c13d261fc7cd2b52bf3278035ab8227f739091474e3a1480c",
          "transactions": [
            {
              "ref_block_num": 31282,
              "ref_block_prefix": 237252741,
              "expiration": "2022-12-15T13:47:18",
              "operations": [
                {
                  "type": "custom_json_operation",
                  "value": {
                    "required_auths": [
                      "checkyzk"
                    ],
                    "required_posting_auths": [],
                    "id": "sm_market_rent",
                    "json": "{\"items\":[\"6ae699d473a4fa9613b83045192b879ceef58fdd-2\"],\"currency\":\"DEC\",\"days\":2,\"player\":\"dudoicon\"}"
                  }
                }
              ],
              "extensions": [],
              "signatures": [
                "1f4ce4b443938051dbdc6f2042a78cd86876b2beb825d1dd1ec5f4fcd9e0d54fb00c50f641a37ef04973145496512aaf7417b4285a3e212c4171c18b3bc43aa699"
              ]
            },
            {
              "ref_block_num": 31282,
              "ref_block_prefix": 237252741,
              "expiration": "2022-12-15T13:51:48",
              "operations": [
                {
                  "type": "custom_json_operation",
                  "value": {
                    "required_auths": [
                      "caocao10fkoe"
                    ],
                    "required_posting_auths": [],
                    "id": "sm_market_rent",
                    "json": "{\"limit_price\":7.000,\"items\":[\"ea35fcc97f1f28a13ff22286bea3fc533f58d645-4\"],\"currency\":\"DEC\",\"days\":2,\"app\":\"splintermate\",\"n\":\"FTOYDoA7Yw\"}"
                  }
                }
              ],
              "extensions": [],
              "signatures": [
                "1f09d01288882c0e05758e16a2883b1cf9d9b015501365557ca16a7bf72d76828e6a31c49f79a560e826d7af011f5ad1f49243b8b01a68a162bf5db9718021b656"
              ]
            },
            {
              "ref_block_num": 31278,
              "ref_block_prefix": 2028965861,
              "expiration": "2022-12-15T13:47:15",
              "operations": [
                {
                  "type": "custom_json_operation",
                  "value": {
                    "required_auths": [],
                    "required_posting_auths": [
                      "podping.bbb"
                    ],
                    "id": "pp_podcast_update",
                    "json": "{\"version\":\"1.1\",\"medium\":\"podcast\",\"reason\":\"update\",\"iris\":[\"https://feeds.transistor.fm/lieux-dits\"],\"timestampNs\":1671112003175134976,\"sessionId\":12289641614003809996}"
                  }
                }
              ],
              "extensions": [],
              "signatures": [
                "20612a0169f47d9ce28f0a5fc7da62e9bb8a7ef9e6d4eda070ba1202067faec23b555a474b0a7c3062151a2a40d4f124de02b265bd144118470531d5ba81270abf"
              ]
            },
            {
              "ref_block_num": 31282,
              "ref_block_prefix": 237252741,
              "expiration": "2022-12-15T13:47:48",
              "operations": [
                {
                  "type": "custom_json_operation",
                  "value": {
                    "required_auths": [],
                    "required_posting_auths": [
                      "trentoncasey42"
                    ],
                    "id": "sm_advance_league",
                    "json": "{\"format\":\"wild\"}"
                  }
                }
              ],
              "extensions": [],
              "signatures": [
                "1f4eabcf4deed40eaf580352289c7743a89644b758302fb992cb02747d2448461b5eba8417cdb18217011d7a5e56d4490a5ec700909f1702028ceaa7b865c16cb5"
              ]
            }
          ],
          "block_id": "04347a34af5312512765bab3a2e40c8602254957",
          "signing_key": "STM6Z9ZtRoEXPqsMRTFqLopuL9jDg5gydcwkQEoWazg6uhGTkbYKM",
          "transaction_ids": [
            "b4a607f19e4fc9ffa9da11fbc2b65c7ad26671b9",
            "67c5ae6732f4fb383f6b41f30ee3d458410cb173",
            "767783b233f97401b8383f1af431573917a10161",
            "5fe0e855a9867776e9b3b438ba457b6d75796598"
          ]
        }
      ]
    }`
  },
  {
    api: "account_history_api",
    method: "get_ops_in_block",
    params: ["block_num", "only_virtual"],
    description:_t("account_history_api.get_ops_in_block_description"),
    url:`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=8675309&only_virtual=false&include_reversible=true`,
    parameter: `<ul>
      <li><code class="language-plaintext highlighter-rouge">block_num:int</code></li>
      <li><code class="language-plaintext highlighter-rouge">only_virtual:boolean</code></li>
      <li><code class="language-plaintext highlighter-rouge">include_reversible:boolean</code> (optional) If set to true also operations from reversible block will be included if block_num points to such block.</li>
      </ul>`,
    response: `{
      "ops": [
          {
          "trx_id": "0000000000000000000000000000000000000000",
          "block": 0,
          "trx_in_block": 4294967295,
          "op_in_trx": 0,
          "virtual_op": 0,
          "timestamp": "2019-10-06T09:05:15",
          "op": {}
          }
      ]
    }`
  },
  {
    api: "condenser_api",
    method: "get_state",
    params: ["path"],
    description:_t("condenser_api.get_state_description")
  },
  {
    api: "database_api",
    method: "get_config",
    description:_t("database_api.get_config_description"),
    response: `{}`
  },
  {
    api: "database_api",
    method: "get_dynamic_global_properties",
    description:_t("block_api.head_block_description"),
    url:`${ConfigItems.baseUrl}/api/get_dynamic_global_properties`,
    response: `{
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
    api: "condenser_api",
    method: "get_chain_properties",
    description:_t("condenser_api.get_chain_properties_description")
  },
  {
    api: "database_api",
    method: "get_feed_history",
    description:_t("condenser_api.get_feed_history_description"),
    response: `{
      "id": 0,
      "current_median_history": {"base": "0.000 HIVE", "quote": "0.000 HIVE"},
      "price_history": []
    }`
  },
  {
    api: "condenser_api",
    method: "get_current_median_history_price",
    description:_t("condenser_api.get_current_median_history_price_description")
  },
  {
    api: "database_api",
    method: "get_witness_schedule",
    description:_t("condenser_api.get_witness_schedule_description"),
    response: `{
      "id": 0,
      "current_virtual_time": "0",
      "next_shuffle_block_num": 1,
      "current_shuffled_witnesses": [],
      "num_scheduled_witnesses": 1,
      "top19_weight": 1,
      "timeshare_weight": 5,
      "miner_weight": 1,
      "witness_pay_normalization_factor": 25,
      "median_props": {
        "account_creation_fee": "0.000 HIVE",
        "maximum_block_size": 131072,
        "hbd_interest_rate": 1000
      },
      "majority_version": "0.0.0",
      "max_voted_witnesses": 19,
      "max_miner_witnesses": 1,
      "max_runner_witnesses": 1,
      "hardfork_required_witnesses": 17
    }`
  },
  {
    api: "condenser_api",
    method: "get_hardfork_version",
    description:_t("condenser_api.get_hardfork_version_description")                                 
  },
  {
    api: "condenser_api",
    method: "get_next_scheduled_hardfork",
    description:_t("condenser_api.get_hardfork_version_description")                                         
  },
  {
    api: "condenser_api",
    method: "get_key_references",
    params: ["keys"],
    description:_t("condenser_api.get_key_references_description"),
    url:`${ConfigItems.baseUrl}/api/get_accounts?name[]=hiveio`,
    parameter: `<p>account:string array; delayed_votes_active:boolean</p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">account</code> (string array)</th>
            <th><code class="language-plaintext highlighter-rouge">delayed_votes_active</code> (boolean)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["hiveio"]</code></td>
            <td>&nbsp;</td>
            <td>Queries for account named “hiveio”.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["hiveio", "alice"]</code></td>
            <td>false</td>
            <td>Queries for accounts named “hiveio” and “alice” with <code class="language-plaintext highlighter-rouge">delayed_votes</code> hidden.</td>
          </tr>
        </tbody>
      </table>`,
    response: `{
      "id": 1370484,
      "name": "hiveio",
      "owner": {
      "weight_threshold": 1,
      "account_auths": [],
      "key_auths": [
          [
          "STM65PUAPA4yC4RgPtGgsPupxT6yJtMhmT5JHFdsT3uoCbR8WJ25s",
          1
          ]
      ]
      },
      "active": {
      "weight_threshold": 1,
      "account_auths": [],
      "key_auths": [
          [
          "STM69zfrFGnZtU3gWFWpQJ6GhND1nz7TJsKBTjcWfebS1JzBEweQy",
          1
          ]
      ]
      },
      "posting": {
      "weight_threshold": 1,
      "account_auths": [["threespeak", 1], ["vimm.app", 1]],
      "key_auths": [
          [
          "STM6vJmrwaX5TjgTS9dPH8KsArso5m91fVodJvv91j7G765wqcNM9",
          1
          ]
      ]
      },
      "memo_key": "STM7wrsg1BZogeK7X3eG4ivxmLaH69FomR8rLkBbepb3z3hm5SbXu",
      "json_metadata": "",
      "posting_json_metadata": "{\"profile\":{\"pinned\":\"none\",\"version\":2,\"website\":\"hive.io\",\"profile_image\":\"https://files.peakd.com/file/peakd-hive/hiveio/Jp2YHc6Q-hive-logo.png\",\"cover_image\":\"https://files.peakd.com/file/peakd-hive/hiveio/Xe1TcEBi-hive-banner.png\"}}",
      "proxy": "",
      "last_owner_update": "1970-01-01T00:00:00",
      "last_account_update": "2020-11-12T01:20:48",
      "created": "2020-03-06T12:22:48",
      "mined": false,
      "recovery_account": "steempeak",
      "last_account_recovery": "1970-01-01T00:00:00",
      "reset_account": "null",
      "comment_count": 0,
      "lifetime_vote_count": 0,
      "post_count": 31,
      "can_vote": true,
      "voting_manabar": {
      "current_mana": "598442432741",
      "last_update_time": 1591297380
      },
      "downvote_manabar": {
      "current_mana": "149610608184",
      "last_update_time": 1591297380
      },
      "voting_power": 0,
      "balance": "11.682 HIVE",
      "savings_balance": "0.000 HIVE",
      "hbd_balance": "43.575 HBD",
      "hbd_seconds": "0",
      "hbd_seconds_last_update": "2020-10-21T02:45:12",
      "hbd_last_interest_payment": "2020-10-21T02:45:12",
      "savings_hbd_balance": "0.000 HBD",
      "savings_hbd_seconds": "0",
      "savings_hbd_seconds_last_update": "1970-01-01T00:00:00",
      "savings_hbd_last_interest_payment": "1970-01-01T00:00:00",
      "savings_withdraw_requests": 0,
      "reward_hbd_balance": "0.000 HBD",
      "reward_hive_balance": "0.000 HIVE",
      "reward_vesting_balance": "0.000000 VESTS",
      "reward_vesting_hive": "0.000 HIVE",
      "vesting_shares": "598442.432741 VESTS",
      "delegated_vesting_shares": "0.000000 VESTS",
      "received_vesting_shares": "0.000000 VESTS",
      "vesting_withdraw_rate": "0.000000 VESTS",
      "post_voting_power": "598442.432741 VESTS",
      "next_vesting_withdrawal": "1969-12-31T23:59:59",
      "withdrawn": 0,
      "to_withdraw": 0,
      "withdraw_routes": 0,
      "pending_transfers": 0,
      "curation_rewards": 0,
      "posting_rewards": 604589,
      "proxied_vsf_votes": [0, 0, 0, 0],
      "witnesses_voted_for": 0,
      "last_post": "2021-03-23T18:05:48",
      "last_root_post": "2021-03-23T18:05:48",
      "last_vote_time": "1970-01-01T00:00:00",
      "post_bandwidth": 0,
      "pending_claimed_accounts": 0,
      "delayed_votes": [
      {
          "time": "2021-02-24T05:08:21",
          "val": "11550765516955"
      },
      {
          "time": "2021-02-26T15:46:06",
          "val": "633465684569"
      },
      {
          "time": "2021-03-07T17:54:39",
          "val": "1000000037683"
      },
      {
          "time": "2021-03-16T05:54:33",
          "val": "999978763511"
      },
      {
          "time": "2021-03-18T06:06:00",
          "val": "1000000171317"
      }
      ],
      "vesting_balance": "0.000 HIVE",
      "reputation": "88826789432105",
      "transfer_history": [],
      "market_history": [],
      "post_history": [],
      "vote_history": [],
      "other_history": [],
      "witness_votes": [],
      "tags_usage": [],
      "guest_bloggers": []
    }`
  },
  {
    api: "condenser_api",
    method: "get_accounts",
    params: ["names"],
    isArray: true,
    description:_t("condenser_api.get_accounts_description")    
  },
  {
    api: "condenser_api",
    method: "get_account_references",
    params: ["accountId"]
  },
  {
    api: "condenser_api",
    method: "lookup_account_names",
    params: ["accounts"],
    description:_t("condenser_api.lookup_account_names_description") 
      
  },
  {
    api: "condenser_api",
    method: "lookup_accounts",
    // "param_type": "params",
    isArray: true,
    params: ["lower_bound_name", "limit"],
    description:_t("condenser_api.lookup_accounts_description") 
  },
  {
    api: "condenser_api",
    method: "get_account_count",
    description:_t("condenser_api.get_account_count_description")                                
  },
  {
    api: "condenser_api",
    method: "get_conversion_requests",
    params: ["accountName"],
    description:_t("condenser_api.get_conversion_requests_description")
  },
  {
    api: "account_history_api",
    description:_t("account_history_api.get_account_history_description"),
    method: "get_account_history",
    url:`${ConfigItems.baseUrl}/api/get_account_history?account=ocd-witness&start=-1&limit=3`,
    params: ["account", "from", "limit", "operation_filter_low", "operation_filter_high"],
    parameter:`<ul>
        <li><code class="language-plaintext highlighter-rouge">account:string</code></li>
        <li><code class="language-plaintext highlighter-rouge">start:int</code>. e.g.: -1 for reverse history or any positive numeric</li>
        <li><code class="language-plaintext highlighter-rouge">limit:int</code> up to 1000</li>
        <li><code class="language-plaintext highlighter-rouge">operation_filter_low:int</code> (optional)</li>
        <li><code class="language-plaintext highlighter-rouge">operation_filter_high:int</code> (optional)</li>
      </ul>
      <p>If either <code class="language-plaintext highlighter-rouge">operation_filter_low</code> or <code class="language-plaintext highlighter-rouge">operation_filter_high</code> are set, the set of returned operations will include only these matching bitwise filter.</p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">account</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">start</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">operation_filter_low</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">operation_filter_low</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"hiveio"</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Queries the account named <code class="language-plaintext highlighter-rouge">hiveio</code> starting on the latest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"alice"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Queries the account named <code class="language-plaintext highlighter-rouge">alice</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"bob"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>1</td>
            <td>&nbsp;</td>
            <td>Queries <strong>only votes</strong> by the account named <code class="language-plaintext highlighter-rouge">bob</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"charlie"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>262144</td>
            <td>&nbsp;</td>
            <td>Queries <strong>only custom jsons</strong> by the account named <code class="language-plaintext highlighter-rouge">charlie</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"emma"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>0</td>
            <td>1</td>
            <td>Queries <strong>only proposal payments</strong> by the account named <code class="language-plaintext highlighter-rouge">emma</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
        </tbody>
      </table>`,
    response: `{
      "history": [
        [
          2259712,
          {
            "trx_id": "0000000000000000000000000000000000000000",
            "block": 70519001,
            "trx_in_block": 4294967295,
            "op_in_trx": 1,
            "virtual_op": true,
            "timestamp": "2022-12-14T13:34:33",
            "op": {
              "type": "producer_reward_operation",
              "value": {
                "producer": "ocd-witness",
                "vesting_shares": {
                  "amount": "476884676",
                  "precision": 6,
                  "nai": "@@000000037"
                }
              }
            },
            "operation_id": 0
          }
        ],
        [
          2259713,
          {
            "trx_id": "0000000000000000000000000000000000000000",
            "block": 70519026,
            "trx_in_block": 4294967295,
            "op_in_trx": 1,
            "virtual_op": true,
            "timestamp": "2022-12-14T13:35:48",
            "op": {
              "type": "producer_reward_operation",
              "value": {
                "producer": "ocd-witness",
                "vesting_shares": {
                  "amount": "476884642",
                  "precision": 6,
                  "nai": "@@000000037"
                }
              }
            },
            "operation_id": 0
          }
        ]
      ]
    }`
  },
  {
    api: "condenser_api",
    method: "get_owner_history",
    params: ["account"],
    isArray: true,
    description:_t("condenser_api.get_owner_history_description")
  },
  {
    api: "condenser_api",
    method: "get_recovery_request",
    params: ["account"],
    description:_t("condenser_api.get_recovery_request_description")
  },
  {
    api: "condenser_api",
    method: "get_escrow",
    params: ["from", "escrow_id"],
    description:_t("condenser_api.get_escrow_description")
  },
  {
    api: "condenser_api",
    method: "get_withdraw_routes",
    params: ["account", "withdraw_route_type"],
    description:_t("condenser_api.get_withdraw_routes_description")
  },
  {
    api: "condenser_api",
    method: "get_savings_withdraw_from",
    params: ["account"],
    description:_t("condenser_api.get_savings_withdraw_from_description")
  },
  {
    api: "condenser_api",
    method: "get_savings_withdraw_to",
    params: ["account"],
    description:_t("condenser_api.get_savings_withdraw_to_description")
  },
  {
    api: "database_api",
    method: "get_order_book",
    params: ["limit"],
    description:_t("database_api.get_order_book_description")
  },
  {
    api: "condenser_api",
    method: "get_open_orders",
    params: ["owner"],
    description:_t("condenser_api.get_open_orders_description")
  },
  {
    api: "condenser_api",
    method: "get_transaction_hex",
    params: ["trx"],
    description:_t("condenser_api.get_transaction_hex_description")
  },
  {
    api: "condenser_api",
    // "param_type": "params",
    isArray: true,
    method: "get_transaction",
    params: ["trx_id"],
    description:_t("condenser_api.get_transaction_description")
    url:`${ConfigItems.baseUrl}/api/get_transaction?trx_id=6fde0190a97835ea6d9e651293e90c89911f933c`,
    parameter: `<p>trx_id (string)</p>`,
    response: `{
      "ref_block_num": 0,
      "ref_block_prefix": 0,
      "expiration": "1970-01-01T00:00:00",
      "operations": [],
      "extensions": [],
      "signatures": [],
      "transaction_id": "0000000000000000000000000000000000000000",
      "block_num": 0,
      "transaction_num": 0
      }`
  },
  {
    api: "database_api",
    method: "get_required_signatures",
    params: ["trx", "available_keys"],
    description:_t("database_api.get_required_signatures_description"),
    response: `{"keys": []}`
  },
  {
    api: "database_api",
    method: "get_potential_signatures",
    params: ["trx"],
    description:_t("database_api.get_potential_signatures_description"),
    response: `[]`
  
  },
  {
    api: "database_api",
    method: "verify_authority",
    params: ["trx"],
    description:_t("database_api.verify_authority_description"),
    response: `false`
  },
  {
    api: "database_api",
    method: "verify_account_authority",
    params: ["account", "signers"]
  },
  {
    api: "condenser_api",
    method: "get_active_votes",
    description:_t("condenser_api.get_active_votes_description"),
    params: ["author", "permlink"],
    url:`${ConfigItems.baseUrl}/api/get_active_votes?author=deathwing&permlink=re-enforcer48-recsvv`,
    parameter: `<p> author:string; permlink:string </p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">author</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">permlink</code> (string)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"hiveio"</code></td>
            <td><code class="language-plaintext highlighter-rouge">"firstpost"</code></td>
            <td>Queries votes for content with a slug <code class="language-plaintext highlighter-rouge">@hiveio/firstpost</code></td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"alice"</code></td>
            <td><code class="language-plaintext highlighter-rouge">"a-post-by-alice"</code></td>
            <td>Queries votes for content with a slug <code class="language-plaintext highlighter-rouge">@alice/a-post-by-alice</code></td>
          </tr>
        </tbody>
      </table>`,
    response: `[
      {
        "percent": 1500,
        "reputation": 320305519364193,
        "rshares": 118699513973,
        "time": "2022-07-01T18:05:12",
        "voter": "enforcer48",
        "weight": 118699513973
      }
    ]`
  },
  {
    api: "database_api",
    method: "list_votes",
    params: ["voter"],
    description:_t("database_api.list_votes_description")
  },
  {
    api: "condenser_api",
    method: "get_content",
    params: ["author", "permlink"],
    description:_t("condenser_api.get_content_description")
  },
  {
    api: "condenser_api",
    method: "get_content_replies",
    params: ["author", "permlink"],
    description:_t("condenser_api.get_content_replies_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_author_before_date",
    params: ["author", "start_permlink", "before_date", "limit"],
    description:_t("condenser_api.get_discussions_by_author_before_date_description")
  },
  {
    api: "condenser_api",
    method: "get_replies_by_last_update",
    params: ["start_author", "start_permlink", "limit"],
    description:_t("condenser_api.get_replies_by_last_update_description")
  },
  {
    api: "condenser_api",
    method: "get_witnesses",
    // "param_type":"params",
    isArray: true,
    params: ["witnessIds"],
    description:_t("condenser_api.get_witnesses_description")
  },
  {
    api: "condenser_api",
    method: "get_witness_by_account",
    params: ["account"],
    description:_t("condenser_api.get_witness_by_account_description")
  },
  {
    api: "condenser_api",
    method: "get_witnesses_by_vote",
    // "param_type":"params",
    isArray: true,
    params: ["account", "limit"],
    description:_t("condenser_api.get_witnesses_by_vote_description"),
    url:`${ConfigItems.baseUrl}/api/get_witnesses_by_vote?account=null&limit=100`,
    parameter: `<p>start_name:string; limit:int up to 1000</p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">account</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">null</code></td>
            <td><code class="language-plaintext highlighter-rouge">21</code></td>
            <td>Queries top 21 witness votes.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"a"</code></td>
            <td><code class="language-plaintext highlighter-rouge">1</code></td>
            <td>Queries top 10 witness votes starting with “a”.</td>
          </tr>
        </tbody>
      </table>`,
    response: `[
      {
        "id": 437,
        "owner": "blocktrades",
        "created": "1970-01-01T00:00:00",
        "url": "https://blocktrades.us",
        "votes": "140599166385458645",
        "virtual_last_update": "750170082970079646417568118",
        "virtual_position": "192601692352282831240061287604396711040",
        "virtual_scheduled_time": "750171133336723811168358745",
        "total_missed": 3699,
        "last_aslot": 70583664,
        "last_confirmed_block_num": 70372914,
        "pow_worker": 0,
        "signing_key": "STM7ZReKWfMREwGQp4jDe8mxPXuLQLUro4WXks2s7rTzjAjpsGi3Y",
        "props": {
          "account_creation_fee": "3.000 HIVE",
          "maximum_block_size": 65536,
          "hbd_interest_rate": 1200,
          "account_subsidy_budget": 797,
          "account_subsidy_decay": 347321
        },
        "hbd_exchange_rate": {
          "base": "0.328 HBD",
          "quote": "1.000 HIVE"
        },
        "last_hbd_exchange_update": "2022-12-09T11:18:51",
        "last_work": "0000000df71896f1756d6a3456905da575407b4917d922042f72e076f586a2b4",
        "running_version": "1.27.0",
        "hardfork_version_vote": "1.27.0",
        "hardfork_time_vote": "2022-10-24T12:00:00",
        "available_witness_account_subsidies": 762398
      },
      {
        "id": 14798,
        "owner": "steempeak",
        "created": "2018-10-27T22:28:12",
        "url": "https://peakd.com/@peakd",
        "votes": "139881986238896666",
        "virtual_last_update": "750170082970079646417568118",
        "virtual_position": "292700512406463458494263512978676687449",
        "virtual_scheduled_time": "750170423127206334714666980",
        "total_missed": 118,
        "last_aslot": 70583682,
        "last_confirmed_block_num": 70372932,
        "pow_worker": 0,
        "signing_key": "STM78S82NxRbwV5AAh6u3ueviM6L5Jca8t3BvakHb4pjUqQHm3P3r",
        "props": {
          "account_creation_fee": "3.000 HIVE",
          "maximum_block_size": 65536,
          "hbd_interest_rate": 2000,
          "account_subsidy_budget": 797,
          "account_subsidy_decay": 347321
        },
        "hbd_exchange_rate": {
          "base": "0.351 HBD",
          "quote": "1.000 HIVE"
        },
        "last_hbd_exchange_update": "2022-12-09T09:00:03",
        "last_work": "0000000000000000000000000000000000000000000000000000000000000000",
        "running_version": "1.27.0",
        "hardfork_version_vote": "1.27.0",
        "hardfork_time_vote": "2022-10-24T12:00:00",
        "available_witness_account_subsidies": 798906
      },
      {
        "id": 9493,
        "owner": "gtg",
        "created": "1970-01-01T00:00:00",
        "url": "https://gtg.openhive.network",
        "votes": "138611322147352744",
        "virtual_last_update": "750170082970079646417568118",
        "virtual_position": "162422466525589850380802001779656723145",
        "virtual_scheduled_time": "750171366125724076907211766",
        "total_missed": 693,
        "last_aslot": 70583672,
        "last_confirmed_block_num": 70372922,
        "pow_worker": 0,
        "signing_key": "STM5wfwCPaUXwmbuX77D7Fr3oPESqALn23URUsCxB2baHZj7CTrPP",
        "props": {
          "account_creation_fee": "3.000 HIVE",
          "maximum_block_size": 65536,
          "hbd_interest_rate": 2000,
          "account_subsidy_budget": 797,
          "account_subsidy_decay": 347321
        },
        "hbd_exchange_rate": {
          "base": "0.354 HBD",
          "quote": "1.000 HIVE"
        },
        "last_hbd_exchange_update": "2022-12-09T11:43:00",
        "last_work": "0000000048bf77f525731f28db7c1aa9ad853a475ccc78e71ea952a7782e5459",
        "running_version": "1.27.0",
        "hardfork_version_vote": "1.27.0",
        "hardfork_time_vote": "2022-10-24T12:00:00",
        "available_witness_account_subsidies": 637384
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "lookup_witness_accounts",
    params: ["lower_bound_name", "limit"],
    description:_t("condenser_api.lookup_witness_accounts_description")
  },
  {
    api: "condenser_api",
    method: "get_witness_count",                      
  },
  {
    api: "database_api",
    method: "get_active_witnesses",
    description:_t("database_api.get_active_witnesses_description"),
    response: `{
      "witnesses": [
        "lukestokes.mhth",
        "gtg",
        "ausbitbank",
        "clayop",
        "yabapmatt",
        "curie",
        "thecryptodrive",
        "roelandp",
        "followbtcnews",
        "timcliff",
        "smooth.witness",
        "bhuz",
        "aggroed",
        "blocktrades",
        "cervantes",
        "utopian-io",
        "anyx",
        "jesta",
        "drakos",
        "someguy123",
        "good-karma"
      ]
    }`
  },
  {
    api: "condenser_api",
    method: "get_vesting_delegations",
    params: ["account", "from", "limit"],
    description:_t("condenser_api.get_vesting_delegations_description")
  },
  {
    api: "database_api",
    method: "get_reward_funds",
    description:_t("database_api.get_reward_funds_description"),
    response: `{
      "id": 0,
      "name": "",
      "reward_balance": "0.000 HIVE",
      "recent_claims": "0",
      "last_update": "1970-01-01T00:00:00",
      "content_constant": "0",
      "percent_curation_rewards": 0,
      "percent_content_rewards": 0,
      "author_reward_curve": "quadratic",
      "curation_reward_curve": "34723648"
    }`
  },
  {
    api: "database_api",
    method: "get_version",
    description:_t("condenser_api.get_version_description"),
    response: `{
      "haf_revision": "dd4e984ec4986ba4039e249c2bff468ec16dd332",
      "blockchain_version": "1.27.0",
      "hive_revision": "b322c4c19f11f084d09be0dd7d9c615339dce13e",
      "fc_revision": "b322c4c19f11f084d09be0dd7d9c615339dce13e",
      "chain_id": "beeab0de00000000000000000000000000000000000000000000000000000000"
    }`
  },
  {
    api: "condenser_api",
    method: "get_feed_entries",
    params: ["account", "start_entry_id", "limit"],
    description:_t("condenser_api.get_feed_entries_description")
  },
  {
    api: "condenser_api",
    method: "get_feed",
    params: ["account", "start_entry_id", "limit"],
    description:_t("block_api.get_feed_description")
  },
  {
    api: "condenser_api",
    method: "get_blog_entries",
    params: ["account", "start_entry_id", "limit"],
    description:_t("condenser_api.get_blog_entries_description")
  },
  {
    api: "condenser_api",
    method: "get_blog",
    params: ["account", "start_entry_id", "limit"],
    description:_t("condenser_api.get_blog_description")
  },
  {
    api: "condenser_api",
    method: "get_account_reputations",
    params: ["lower_bound_name", "limit"],
    description:_t("condenser_api.get_account_reputations_description")
  },
  {
    api: "condenser_api",
    method: "get_reblogged_by",
    params: ["author", "permlink"],
    description:_t("condenser_api.get_reblogged_by_description")
  },
  {
    api: "condenser_api",
    method: "get_blog_authors",
    params: ["account"],
    description:_t("condenser_api.get_blog_authors_description")
  },
  {
    api: "condenser_api",
    method: "broadcast_transaction",
    params: ["trx"],
    description:_t("condenser_api.broadcast_transaction_description")
  },
  {
    api: "condenser_api",
    method: "broadcast_transaction_synchronous",
    params: ["trx"],
    description:_t("condenser_api.gbroadcast_transaction_synchronous_description")
  },
  {
    api: "transaction_status_api",
    method: "find_transaction",
    params: ["transaction_id", "expiration"],
    description:_t("transaction_status_api.find_transaction_description"),
    response: `{"is_known": false}`
  },
  {
    api: "market_history_api",
    method: "get_ticker",
    description:_t("market_history_api.get_ticker_description"),
    response: `{
      "latest": "1.00000000000000000",
      "lowest_ask": "0.10000000000000001",
      "highest_bid": "0.00000000000000000",
      "percent_change": "0.00000000000000000",
      "hive_volume": {
        "amount": "100000",
        "precision": 3,
        "nai": "@@000000021"
      },
      "hbd_volume": {
        "amount": "100000",
        "precision": 3,
        "nai": "@@000000013"
      }
    }`
  },
  {
    api: "market_history_api",
    method: "get_volume",
    description:_t("market_history_api.get_volume_description"),
    response: `{
      "hive_volume": {
        "amount": "0",
        "precision": 3,
        "nai": "@@000000021"
      },
      "hbd_volume": {
        "amount": "0",
        "precision": 3,
        "nai": "@@000000013"
      }
    }`
  },
  {
    api: "market_history_api",
    method: "get_trade_history",
    params: ["start", "end", "limit"],
    description:_t("market_history_api.get_trade_history_description"),
    response: `[
      {
        "date": "1970-01-01T00:00:00",
        "current_pays": "0.000 HBD",
        "open_pays": "0.000 HIVE"
      }
    ]`
  },
  {
    api: "market_history_api",
    method: "get_recent_trades",
    params: ["limit"],
    description:_t("market_history_api.get_recent_trades_description"),
    response: `{
      "trades": [
        {
          "date": "2019-12-18T01:51:24",
          "current_pays": {
            "amount": "100000",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "100000",
            "precision": 3,
            "nai": "@@000000021"
          }
        }
      ]
    }`
  },
  {
    api: "market_history_api",
    method: "get_market_history",
    params: ["bucket_seconds", "start", "end"],
    description:_t("market_history_api.get_market_history_description"),
    parameter: `<table>
      <thead>
        <tr>
          <th><code class="language-plaintext highlighter-rouge">bucket_seconds</code> (int)</th>
          <th><code class="language-plaintext highlighter-rouge">start</code> (timestamp)</th>
          <th><code class="language-plaintext highlighter-rouge">end</code> (timestamp)</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">15</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-01T00:00:00"</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-02T00:00:00"</code></td>
          <td>Queries for market history between January 1st, 2018 and January 2nd, 2018, segmented by 15 seconds.</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">60</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-01T00:00:00"</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-02T00:00:00"</code></td>
          <td>Queries for market history between January 1st, 2018 and January 2nd, 2018, segmented by one minute.</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">300</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-01T00:00:00"</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-02T00:00:00"</code></td>
          <td>Queries for market history between January 1st, 2018 and January 2nd, 2018, segmented by five minutes.</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">3600</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-01T00:00:00"</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-02T00:00:00"</code></td>
          <td>Queries for market history between January 1st, 2018 and January 2nd, 2018, segmented by one hour.</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">86400</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-01T00:00:00"</code></td>
          <td><code class="language-plaintext highlighter-rouge">"2018-01-02T00:00:00"</code></td>
          <td>Queries for market history between January 1st, 2018 and January 2nd, 2018, segmented by one day.</td>
        </tr>
      </tbody>
    </table>`,
    response: `[
      {
        "id": 0,
        "open": "1970-01-01T00:00:00",
        "seconds": 0,
        "hive": {
          "high": 0,
          "low": 0,
          "open": 0,
          "close": 0,
          "volume": 0
        },
        "non_hive": {
          "high": 0,
          "low": 0,
          "open": 0,
          "close": 0,
          "volume": 0
        }
      }
    ]`
  },
  {
    api: "market_history_api",
    method: "get_market_history_buckets",
    description:_t("block_api.get_market_history_buckets_description"),
    response: `[15, 60, 300, 3600, 86400]`
  },
  {
    api: "database_api",
    method: "find_proposals",
    description:_t("database_api.find_proposals_description"),
    params: ["proposal_ids"],
    url:`${ConfigItems.baseUrl}/api/find_proposals?proposal_ids=[0]`,
    parameter: `<p>id (int)<p>`,
    response: `{
      "proposals": [
          {
          "id": 0,
          "proposal_id": 0,
          "creator": "gtg",
          "receiver": "steem.dao",
          "start_date": "2019-08-27T00:00:00",
          "end_date": "2029-12-31T23:59:59",
          "daily_pay": {
              "amount": "240000000000",
              "precision": 3,
              "nai": "@@000000013"
          },
          "subject": "Return Proposal",
          "permlink": "dhf",
          "total_votes": "25306465910393959",
          "status": "active"
          }
      ]
    }`
  },
  {
    api: "rc_api",
    method: "find_rc_accounts",
    params: ["accounts"],
    description:_t("rc_api.find_rc_accounts_description"),
    url:`${ConfigItems.baseUrl}/api/find_rc_accounts?accounts[]=good-karma`,
    parameter: `<p><code class="language-plaintext highlighter-rouge">accounts:string array</code></p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">accounts</code> (string)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"hiveio"</code></td>
            <td>Query the available resource credits for the account named “hiveio”.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"alice"</code></td>
            <td>Query the available resource credits for the accounts named “alice” and “bob”.</td>
          </tr>
        </tbody>
      </table>`,
    response: `{
      "rc_accounts": [
        {
          "account": "",
          "rc_manabar": {"current_mana": "0", "last_update_time": 0},
          "max_rc_creation_adjustment": {
            "amount": "0",
            "precision": 6,
            "nai": "@@000000037"
          },
          "max_rc": "0"
        }
      ]
    }`
  },
  {
    api: "rc_api",
    method: "list_rc_direct_delegations",
    params: ["start", "limit"],
    description:_t("block_api.list_rc_direct_delegations_description")
  },
  {
    api: "rc_api",
    method: "list_rc_accounts",
    params: ["start", "limit"],
    description:_t("block_api.list_rc_accounts_description")
  },
  {
    api: "database_api",
    method: "list_proposals",
    description:_t("database_api.get_proposals_description"),
    url:`${ConfigItems.baseUrl}/api/list_proposals?order="by_total_votes"&order_direction="ascending"&status="all"&limit=5&start=["0"]`,
    params: ["start", "limit", "order", "order_direction", "status"],
    parameter: `<p>start:array; limit:int; order:string; order_direction:string; status:string</p>
      <ul>
        <li><code class="language-plaintext highlighter-rouge">start</code> depends on <code class="language-plaintext highlighter-rouge">order</code> (see below)
          <ul>
            <li><code class="language-plaintext highlighter-rouge">creator</code> - creator of the proposal  (account name string)</li>
            <li><code class="language-plaintext highlighter-rouge">start_date</code> - start date of the proposal (date string)</li>
            <li><code class="language-plaintext highlighter-rouge">end_date</code> - end date of the proposal (date string)</li>
            <li><code class="language-plaintext highlighter-rouge">total_votes</code> - total votes of the proposal (int)</li>
          </ul>
        </li>
        <li><code class="language-plaintext highlighter-rouge">limit</code> is up to 1000.</li>
        <li><code class="language-plaintext highlighter-rouge">order</code> can be one of:
          <ul>
            <li><code class="language-plaintext highlighter-rouge">by_creator</code> - order by proposal creator</li>
            <li><code class="language-plaintext highlighter-rouge">by_start_date</code> - order by proposal start date</li>
            <li><code class="language-plaintext highlighter-rouge">by_end_date</code> - order by proposal end date</li>
            <li><code class="language-plaintext highlighter-rouge">by_total_votes</code> - order by proposal total votes</li>
          </ul>
        </li>
        <li><code class="language-plaintext highlighter-rouge">order_direction</code> can be one of:
          <ul>
            <li><code class="language-plaintext highlighter-rouge">ascending</code></li>
            <li><code class="language-plaintext highlighter-rouge">descending</code></li>
          </ul>
        </li>
        <li><code class="language-plaintext highlighter-rouge">status</code>
          <ul>
            <li><code class="language-plaintext highlighter-rouge">all</code></li>
            <li><code class="language-plaintext highlighter-rouge">inactive</code></li>
            <li><code class="language-plaintext highlighter-rouge">active</code></li>
            <li><code class="language-plaintext highlighter-rouge">expired</code></li>
            <li><code class="language-plaintext highlighter-rouge">votable</code></li>
          </ul>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">start</code> (array)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">order</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">order_direction</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">status</code> (string)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">[""]</code></td>
            <td>10</td>
            <td><code class="language-plaintext highlighter-rouge">by_creator</code></td>
            <td><code class="language-plaintext highlighter-rouge">ascending</code></td>
            <td><code class="language-plaintext highlighter-rouge">active</code></td>
            <td>list 10 proposals with active status, ordered by creator, ascending</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["2019-08-07T16:54:03"]</code></td>
            <td>1000</td>
            <td><code class="language-plaintext highlighter-rouge">by_start_date</code></td>
            <td><code class="language-plaintext highlighter-rouge">ascending</code></td>
            <td><code class="language-plaintext highlighter-rouge">inactive</code></td>
            <td>list 1000 proposals with inactive status, ordered by start date, ascending, since 2019-08-07T16:54:03</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["a"]</code></td>
            <td>1</td>
            <td><code class="language-plaintext highlighter-rouge">by_creator</code></td>
            <td><code class="language-plaintext highlighter-rouge">ascending</code></td>
            <td><code class="language-plaintext highlighter-rouge">expired</code></td>
            <td>list 1 proposal with expired status, ordered by creator, ascending, by accounts starting with "a"</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["alice"]</code></td>
            <td>10</td>
            <td><code class="language-plaintext highlighter-rouge">by_creator</code></td>
            <td><code class="language-plaintext highlighter-rouge">ascending</code></td>
            <td><code class="language-plaintext highlighter-rouge">all</code></td>
            <td>list 10 proposals with any status, ordered by creator, ascending, by alice</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">[""]</code></td>
            <td>1000</td>
            <td><code class="language-plaintext highlighter-rouge">by_creator</code></td>
            <td><code class="language-plaintext highlighter-rouge">ascending</code></td>
            <td><code class="language-plaintext highlighter-rouge">votable</code></td>
            <td>list 1000 votable proposals, ordered by creator, ascending</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">[10]</code></td>
            <td>1000</td>
            <td><code class="language-plaintext highlighter-rouge">by_total_votes</code></td>
            <td><code class="language-plaintext highlighter-rouge">ascending</code></td>
            <td><code class="language-plaintext highlighter-rouge">votable</code></td>
            <td>list 1000 votable proposals, ordered by creator, ascending, having at least 10 votes</td>
          </tr>
        </tbody>
      </table>`,
    response: `{
      "proposals": [
          {
          "id": 3,
          "proposal_id": 3,
          "creator": "geronimo.jones",
          "receiver": "geronimo.jones",
          "start_date": "2019-08-01T00:00:00",
          "end_date": "2020-08-01T00:00:00",
          "daily_pay": {
              "amount": "88888",
              "precision": 3,
              "nai": "@@000000013"
          },
          "subject": "This is a test of the SPS",
          "permlink": "a",
          "total_votes": "15032962995126",
          "status": "expired"
          },
          {
          "id": 4,
          "proposal_id": 4,
          "creator": "fabien",
          "receiver": "fabien",
          "start_date": "2019-09-01T00:00:00",
          "end_date": "2019-09-07T00:00:00",
          "daily_pay": {
              "amount": "1000",
              "precision": 3,
              "nai": "@@000000013"
          },
          "subject": "Test with steemconnect",
          "permlink": "test",
          "total_votes": "18798113686047",
          "status": "expired"
          },
          {
          "id": 32,
          "proposal_id": 32,
          "creator": "lightproject",
          "receiver": "lightproject",
          "start_date": "2019-09-13T23:14:18",
          "end_date": "2019-09-20T23:14:46",
          "daily_pay": {
              "amount": "100000",
              "precision": 3,
              "nai": "@@000000013"
          },
          "subject": "steem trx finder DevTool",
          "permlink": "devtool-sps-proposal-steem-trx-finder",
          "total_votes": "37979186248457",
          "status": "expired"
          }
          ]
      }`
  },
  {
    api: "database_api",
    method: "list_proposal_votes",
    params: ["start", "limit", "order", "order_direction", "status"],
    description:_t("block_api.list_proposal_votes_description")
  },
  {
    api: "database_api",
    method: "get_nai_pool",
    description:_t("block_api.get_nai_pool_description")
  },
  {
    api: "bridge",
    method: "get_community",
    params: ["name", "observer"],
    description:_t("block_api.get_community_description")
  },
  {
    api: "bridge",
    method: "list_communities",
    params: ["last", "limit", "query", "sort", "observer"],
    description:_t("block_api.list_communities_description"),
    response: `[
      {
        "id": 1432978,
        "name": "hive-103566",
        "title": "Wall Street Bets",
        "about": "Wall Street Bets - In Case Reddit Shuts Down.",
        "lang": "en",
        "type_id": 1,
        "is_nsfw": false,
        "subscribers": 6,
        "sum_pending": 0,
        "num_pending": 0,
        "num_authors": 0,
        "created_at": "2021-01-28 18:34:09",
        "avatar_url": "",
        "context": {},
        "admins": ["spitr"]
      }
    ]`
  },
  {
    api: "bridge",
    method: "get_discussion",
    description:_t("bridge.get_discussion_description"),
    params: ["author", "permlink"],
    url:`${ConfigItems.baseUrl}/api/get_discussion?author=hiveio&permlink=around-the-hive-reflections`,
    parameter: `<p> author: string, permlink: string </p>`,
    response: `{
      "hiveio/around-the-hive-reflections": {
        "post_id": 101867403,
        "author": "hiveio",
        "permlink": "around-the-hive-reflections",
        "category": "hiveecosystem",
        "title": "Around the Hive: Reflections",
        "body": "![hive](https://images.hive.blog/768x0/https://files.peakd.com/file/peakd-hive/hiveio/pKjrNcbK-Hive-Wallpaper-1920x1080.png)\n\nIt's been a busy year so far for developers on Hive. Layer 2 solutions are in progress, key optimization is an ongoing priority, and many excellent dapps and services are being developed. \n\n![hive](https://images.hive.blog/DQmR3iwCn9yvwXDXfuNjmMX6FrjAvFfYQWgA4QRckpens1j/hive%20dividers-02.png)\n\n## A Clear and Consistent Vision\n\nLast year we came out with the [Technical Vision](https://gitlab.syncad.com/hive/hive-whitepaper/-/blob/master/technical-vision/infographic.pdf) for Hive....",
        "json_metadata": {
          "tags": [
            "hiveecosystem"
          ],
          "users": [
            "blocktrades",
            "howo"
          ],
          "image": [
            "https://images.hive.blog/768x0/https://files.peakd.com/file/peakd-hive/hiveio/pKjrNcbK-Hive-Wallpaper-1920x1080.png",
            "https://images.hive.blog/DQmR3iwCn9yvwXDXfuNjmMX6FrjAvFfYQWgA4QRckpens1j/hive%20dividers-02.png"
          ],
          "links": [
            "https://gitlab.syncad.com/hive/hive-whitepaper/-/blob/master/technical-vision/infographic.pdf"
          ],
          "app": "hiveblog/0.1",
          "format": "markdown",
          "description": "The strength of Hive lies in our decentralization."
        },
        "created": "2021-02-14T08:16:03",
        "updated": "2021-02-14T08:16:03",
        "depth": 0,
        "children": 16,
        "net_rshares": 93531156115025,
        "is_paidout": true,
        "payout_at": "2021-02-21T08:16:03",
        "payout": 0,
        "pending_payout_value": "0.000 HBD",
        "author_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [
          "poshbot/re-around-the-hive-reflections-20210214t082348z",
          "poshbot/re-around-the-hive-reflections-20210214t083018z",
          
        ],
        "author_reputation": 72.53,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 129,
          "flag_weight": 0
        },
        "url": "/hiveecosystem/@hiveio/around-the-hive-reflections",
        "beneficiaries": [],
        "max_accepted_payout": "0.000 HBD",
        "percent_hbd": 10000,
        "active_votes": [
          {
            "rshares": 651445742025,
            "voter": "tombstone"
          },
          {
            "rshares": 738972031,
            "voter": "modeprator"
          }
    ],
     "blacklists": []
    },
      "poshbot/re-around-the-hive-reflections-20210214t082348z": {
        "post_id": 101867470,
        "author": "poshbot",
        "permlink": "re-around-the-hive-reflections-20210214t082348z",
        "category": "hiveecosystem",
        "title": "RE: Around the Hive: Reflections",
        "body": "https://twitter.com/bitinvest\\_news/status/1360867296613384195",
        "json_metadata": {
          "app": "beem/0.24.20"
        },
        "created": "2021-02-14T08:23:48",
        "updated": "2021-02-14T08:23:48",
        "depth": 1,
        "children": 0,
        "net_rshares": 0,
        "is_paidout": true,
        "payout_at": "2021-02-21T08:23:48",
        "payout": 0,
        "pending_payout_value": "0.000 HBD",
        "author_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 58.7,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 0,
          "flag_weight": 0
        },
        "url": "/hiveecosystem/@hiveio/around-the-hive-reflections#@poshbot/re-around-the-hive-reflections-20210214t082348z",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "parent_author": "hiveio",
        "parent_permlink": "around-the-hive-reflections",
        "active_votes": [],
        "blacklists": []
      },
      "poshbot/re-around-the-hive-reflections-20210214t083018z": {
        "post_id": 101867512,
        "author": "poshbot",
        "permlink": "re-around-the-hive-reflections-20210214t083018z",
        "category": "hiveecosystem",
        "title": "RE: Around the Hive: Reflections",
        "body": "https://twitter.com/hiveblocks/status/1360868932454928384",
        "json_metadata": {
          "app": "beem/0.24.20"
        },
        "created": "2021-02-14T08:30:18",
        "updated": "2021-02-14T08:30:18",
        "depth": 1,
        "children": 0,
        "net_rshares": 0,
        "is_paidout": true,
        "payout_at": "2021-02-21T08:30:18",
        "payout": 0,
        "pending_payout_value": "0.000 HBD",
        "author_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 58.7,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 0,
          "flag_weight": 0
        },
        "url": "/hiveecosystem/@hiveio/around-the-hive-reflections#@poshbot/re-around-the-hive-reflections-20210214t083018z",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "parent_author": "hiveio",
        "parent_permlink": "around-the-hive-reflections",
        "active_votes": [],
        "blacklists": []
      },
    }`
  },
  {
    api: "bridge",
    method: "get_post",
    params: ["author", "permlink", "observer"],
    description:_t("block_api.get_post_description")
  },
  {
    api: "bridge",
    method: "get_profile",
    params: ["account", "observer"],
    description:_t("block_api.get_profile_description")
  },
  {
    api: "bridge",
    method: "get_trending_topics",
    params: ["limit", "observer"]
  },
  {
    api: "bridge",
    method: "get_account_posts",
    params: ["sort", "account", "start_author", "start_permlink", "limit", "observer"],
    description:_t("block_api.get_account_posts_description")
  },
  {
    api: "bridge",
    method: "get_ranked_posts",
    params: ["sort", "start_author", "start_permlink", "limit", "tag", "observer"],
    description:_t("block_api.get_ranked_posts_description")
  },
  {
    api: "bridge",
    method: "account_notifications",
    params: ["account", "last_id", "limit"],
    description:_t("block_api.account_notifications_description")
  },
  {
    api: "bridge",
    method: "normalize_post",
    params: ["post"],
    description:_t("block_api.normalize_post_description")
  },
  {
    api: "bridge",
    method: "list_all_subscriptions",
    params: ["account"],
    description:_t("block_api.list_all_subscriptions_description")
  },
  {
    api: "bridge",
    method: "list_subscribers",
    params: ["community"],
    description:_t("block_api.list_subscribers_description")
  },
  {
    api: "bridge",
    method: "get_follow_list",
    params: ["observer", "follow_type"],
    description:_t("block_api.get_follow_list_description")
  },
  {
    api: "bridge",
    method: "does_user_follow_any_lists",
    params: ["observer"],
    description:_t("block_api.does_user_follow_any_lists_description")
  },
  {
    api: "bridge",
    method: "get_relationship_between_accounts",
    params: ["follower", "following"],
    description:_t("block_api.get_relationship_between_accounts_description")
  }
];
