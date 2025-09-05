import { ConfigItems } from "../../../config";
import { _t } from "../../common/i18n";

export const methods = [
  {
    api: "condenser_api",
    method: "get_trending_tags",
    description:_t("condenser_api.get_trending_tags_description"),
    params: ["tag", "limit"],
    url:`${ConfigItems.baseUrl}/api/get_trending_tags?start_tag=%22aaa%22&limit=10`,
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
    api: "block_api",
    method: "get_block_header",
    params: ["block_num"],
    url:`${ConfigItems.baseUrl}/api/get_block_header?block_num=8675309`,
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
      "header": {
        "extensions": [],
        "previous": "00845fec1c00bd07264f68c1fc50e989b7ca0160",
        "timestamp": "2017-01-21T16:33:06",
        "transaction_merkle_root": "c034bfb36fe4401ce2a4d10f3e595a62be2eddd7",
        "witness": "pfunk"
      }
    }`,
  },
  {
    api: "block_api",
    method: "get_block",
    params: ["block_num"],
    description:_t("block_api.get_block_description"),
    url:`${ConfigItems.baseUrl}/api/get_block?block_num=8675309`,
    parameter: `<p>block_num(int)</p>
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
    api: "account_history_api",
    method: "enum_virtual_ops",
    params: ["block_range_begin", "block_range_end","include_reversible","group_by_block","operation_begin","limit","filter"],
    description:_t("account_history_api.enum_virtual_ops"),
    url:`${ConfigItems.baseUrl}/api/enum_virtual_ops?block_range_begin=20000000&block_range_end=20002000&include_reversible=true&group_by_block=true&operation_begin=0&limit=10&filter=2`,
    parameter: `<ul>
      <li><code class="language-plaintext highlighter-rouge">block_range_begin:int</code> starting block number (inclusive) to search for virtual operations</li>
      <li><code class="language-plaintext highlighter-rouge">block_range_end:int</code> last block number (exclusive) to search for virtual operations</li>
      <li><code class="language-plaintext highlighter-rouge">include_reversible:boolean</code> (optional) If set to true also operations from reversible block will be included if block_num points to such block.</li>
      <li><code class="language-plaintext highlighter-rouge">group_by_block</code> (optional) true/false</li>
      <li><code class="language-plaintext highlighter-rouge">operation_begin</code> (optional) starting virtual operation in given block (inclusive)</li>
      <li><code class="language-plaintext highlighter-rouge">limit</code> (optional) a limit of retrieved operations</li>
      <li><code class="language-plaintext highlighter-rouge">filter</code> (optional) a filter that decides which an operation matches - used bitwise filtering equals to position such as:
        <ul>
          <li><code class="language-plaintext highlighter-rouge">fill_convert_request_operation                        = 0x000001</code></li>
          <li><code class="language-plaintext highlighter-rouge">author_reward_operation                               = 0x000002</code></li>
          <li><code class="language-plaintext highlighter-rouge">curation_reward_operation                             = 0x000004</code></li>
          <li><code class="language-plaintext highlighter-rouge">comment_reward_operation                              = 0x000008</code></li>
          <li><code class="language-plaintext highlighter-rouge">liquidity_reward_operation                            = 0x000010</code></li>
          <li><code class="language-plaintext highlighter-rouge">interest_operation                                    = 0x000020</code></li>
          <li><code class="language-plaintext highlighter-rouge">fill_vesting_withdraw_operation                       = 0x000040</code></li>
          <li><code class="language-plaintext highlighter-rouge">fill_order_operation                                  = 0x000080</code></li>
          <li><code class="language-plaintext highlighter-rouge">shutdown_witness_operation                            = 0x000100</code></li>
          <li><code class="language-plaintext highlighter-rouge">fill_transfer_from_savings_operation                  = 0x000200</code></li>
          <li><code class="language-plaintext highlighter-rouge">hardfork_operation                                    = 0x000400</code></li>
          <li><code class="language-plaintext highlighter-rouge">comment_payout_update_operation                       = 0x000800</code></li>
          <li><code class="language-plaintext highlighter-rouge">return_vesting_delegation_operation                   = 0x001000</code></li>
          <li><code class="language-plaintext highlighter-rouge">comment_benefactor_reward_operation                   = 0x002000</code></li>
          <li><code class="language-plaintext highlighter-rouge">producer_reward_operation                             = 0x004000</code></li>
          <li><code class="language-plaintext highlighter-rouge">clear_null_account_balance_operation                  = 0x008000</code></li>
          <li><code class="language-plaintext highlighter-rouge">proposal_pay_operation                                = 0x010000</code></li>
          <li><code class="language-plaintext highlighter-rouge">sps_fund_operation                                    = 0x020000</code></li>
          <li><code class="language-plaintext highlighter-rouge">hardfork_hive_operation                               = 0x040000</code></li>
          <li><code class="language-plaintext highlighter-rouge">hardfork_hive_restore_operation                       = 0x080000</code></li>
          <li><code class="language-plaintext highlighter-rouge">delayed_voting_operation                              = 0x100000</code></li>
          <li><code class="language-plaintext highlighter-rouge">consolidate_treasury_balance_operation                = 0x200000</code></li>
          <li><code class="language-plaintext highlighter-rouge">effective_comment_vote_operation                      = 0x400000</code></li>
          <li><code class="language-plaintext highlighter-rouge">ineffective_delete_comment_operation                  = 0x800000</code></li>
          <li><code class="language-plaintext highlighter-rouge">sps_convert_operation                                 = 0x1000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">dhf_funding_operation                                 = 0x0020000</code></li>
          <li><code class="language-plaintext highlighter-rouge">dhf_conversion_operation                              = 0x1000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">expired_account_notification_operation                = 0x2000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">changed_recovery_account_operation                    = 0x4000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">transfer_to_vesting_completed_operation               = 0x8000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">pow_reward_operation                                  = 0x10000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">vesting_shares_split_operation                        = 0x20000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">account_created_operation                             = 0x40000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">fill_collateralized_convert_request_operation         = 0x80000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">system_warning_operation                              = 0x100000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">fill_recurrent_transfer_operation                     = 0x200000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">failed_recurrent_transfer_operation                   = 0x400000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">limit_order_cancelled_operation                       = 0x800000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">producer_missed_operation                             = 0x1000000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">proposal_fee_operation                                = 0x2000000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">collateralized_convert_immediate_conversion_operation = 0x4000000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">escrow_approved_operation                             = 0x8000000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">escrow_rejected_operation                             = 0x10000000000</code></li>
          <li><code class="language-plaintext highlighter-rouge">proxy_cleared_operation                               = 0x20000000000</code></li>
        </ul>
      </li>
    </ul>`,
    response: `{
      "next_block_range_begin": 20000007,
      "next_operation_begin": "85899375984791605",
      "ops": [],
      "ops_by_block": [
        {
          "block": 20000000,
          "irreversible": true,
          "ops": [
            {
              "block": 20000000,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "gemsborg",
                  "curators_vesting_payout": {
                    "amount": "30661469",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "261",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "kingfisher-looks-totally-at-home-perched-on-the-roadside-f81d2d05fcbc9",
                  "vesting_payout": {
                    "amount": "126734073",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 5,
              "operation_id": "85899345920018995",
              "timestamp": "2018-02-19T07:16:54",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            },
            {
              "block": 20000000,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "ivelina89",
                  "curators_vesting_payout": {
                    "amount": "874873929",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "2865",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "friends-forever",
                  "vesting_payout": {
                    "amount": "1365457442",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 12,
              "operation_id": "85899345920020787",
              "timestamp": "2018-02-19T07:16:54",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            }
          ],
          "timestamp": "2018-02-19T07:16:54"
        },
        {
          "block": 20000003,
          "irreversible": true,
          "ops": [
            {
              "block": 20000003,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "s4heart",
                  "curators_vesting_payout": {
                    "amount": "921888178",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "3277",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "adobe-illustrator-cc-bangla-tutorial-part-08",
                  "vesting_payout": {
                    "amount": "1563734936",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 8,
              "operation_id": "85899358804934707",
              "timestamp": "2018-02-19T07:17:03",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            }
          ],
          "timestamp": "2018-02-19T07:17:03"
        },
        {
          "block": 20000004,
          "irreversible": true,
          "ops": [
            {
              "block": 20000004,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "jiruu",
                  "curators_vesting_payout": {
                    "amount": "16352783",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "68",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "walk-with-me-training-6b00edfc9e172",
                  "vesting_payout": {
                    "amount": "34749665",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 6,
              "operation_id": "85899363099888691",
              "timestamp": "2018-02-19T07:17:06",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            }
          ],
          "timestamp": "2018-02-19T07:17:06"
        },
        {
          "block": 20000005,
          "irreversible": true,
          "ops": [
            {
              "block": 20000005,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "derletwins",
                  "curators_vesting_payout": {
                    "amount": "468098430",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "1951",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "start-right-episode-19-do-it-now",
                  "vesting_payout": {
                    "amount": "930064566",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 12,
              "operation_id": "85899367394860595",
              "timestamp": "2018-02-19T07:17:09",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            }
          ],
          "timestamp": "2018-02-19T07:17:09"
        },
        {
          "block": 20000006,
          "irreversible": true,
          "ops": [
            {
              "block": 20000006,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "tikotiko",
                  "curators_vesting_payout": {
                    "amount": "4088195",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "25",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "re-trumpman-til-animal-prostitution-is-a-real-thing-and-u-s-military-had-developed-an-experimental-bomb-with-real-bats-20180212t071710685z",
                  "vesting_payout": {
                    "amount": "12264587",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 4,
              "operation_id": "85899371689827891",
              "timestamp": "2018-02-19T07:17:12",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            },
            {
              "block": 20000006,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "jofri47",
                  "curators_vesting_payout": {
                    "amount": "18396881",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "180",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "re-fred703-my-world-of-reading-and-jan-smuts-20180212t071706243z",
                  "vesting_payout": {
                    "amount": "85852113",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 8,
              "operation_id": "85899371689828915",
              "timestamp": "2018-02-19T07:17:12",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            },
            {
              "block": 20000006,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "zamialyusufi",
                  "curators_vesting_payout": {
                    "amount": "10220489",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "68",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "kompak-6a161466c29ee",
                  "vesting_payout": {
                    "amount": "34749665",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 14,
              "operation_id": "85899371689830451",
              "timestamp": "2018-02-19T07:17:12",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            },
            {
              "block": 20000006,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "lighteye",
                  "curators_vesting_payout": {
                    "amount": "8176391",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "30",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "re-tecnosgirl-my-40th-birthday-flower-2018-02-11-14-10-31-20180212t071626351z",
                  "vesting_payout": {
                    "amount": "14308685",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 18,
              "operation_id": "85899371689831475",
              "timestamp": "2018-02-19T07:17:12",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            }
          ],
          "timestamp": "2018-02-19T07:17:12"
        },
        {
          "block": 20000007,
          "irreversible": true,
          "ops": [
            {
              "block": 20000007,
              "op": {
                "type": "author_reward_operation",
                "value": {
                  "author": "grandeur",
                  "curators_vesting_payout": {
                    "amount": "16352783",
                    "nai": "@@000000037",
                    "precision": 6
                  },
                  "hbd_payout": {
                    "amount": "102",
                    "nai": "@@000000013",
                    "precision": 3
                  },
                  "hive_payout": {
                    "amount": "0",
                    "nai": "@@000000021",
                    "precision": 3
                  },
                  "payout_must_be_claimed": true,
                  "permlink": "coconut-milk-and-vegetable",
                  "vesting_payout": {
                    "amount": "51102448",
                    "nai": "@@000000037",
                    "precision": 6
                  }
                }
              },
              "op_in_trx": 5,
              "operation_id": "85899375984791347",
              "timestamp": "2018-02-19T07:17:15",
              "trx_id": "0000000000000000000000000000000000000000",
              "trx_in_block": 4294967295,
              "virtual_op": true
            }
          ],
          "timestamp": "2018-02-19T07:17:15"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "get_config",
    description:_t("database_api.get_config_description"),
    url:`${ConfigItems.baseUrl}/api/get_config`,
    response: `{
      "HIVE_CHAIN_ID": "beeab0de00000000000000000000000000000000000000000000000000000000",
      "HIVE_TREASURY_ACCOUNT": "hive.fund",
      "IS_TEST_NET": false,
      "HIVE_ENABLE_SMT": false,
      "HIVE_DEFAULT_HF_9_COMPROMISED_ACCOUNTS_PUBLIC_KEY_STR": "STM7sw22HqsXbz7D2CmJfmMwt9rimtk518dRzsR1f8Cgw52dQR1pR",
      "HIVE_INIT_PUBLIC_KEY_STR": "STM8GC13uCZbP44HzMLV6zPZGwVQ8Nt4Kji8PapsPiNq1BK153XTX",
      "HIVE_HF_9_COMPROMISED_ACCOUNTS_PUBLIC_KEY_STR": "STM7sw22HqsXbz7D2CmJfmMwt9rimtk518dRzsR1f8Cgw52dQR1pR",
      "HIVE_INIT_PUBLIC_KEY": "STM8GC13uCZbP44HzMLV6zPZGwVQ8Nt4Kji8PapsPiNq1BK153XTX",
      "HIVE_BLOCKCHAIN_VERSION": "1.27.3",
      "OLD_CHAIN_ID": "0000000000000000000000000000000000000000000000000000000000000000",
      "HIVE_ADDRESS_PREFIX": "STM",
      "HIVE_GENESIS_TIME": "2016-03-24T16:00:00",
      "HIVE_MINING_TIME": "2016-03-24T17:00:00",
      "HIVE_CASHOUT_WINDOW_SECONDS_PRE_HF12": 86400,
      "HIVE_CASHOUT_WINDOW_SECONDS_PRE_HF17": 43200,
      "HIVE_CASHOUT_WINDOW_SECONDS": 604800,
      "HIVE_SECOND_CASHOUT_WINDOW": 2592000,
      "HIVE_MAX_CASHOUT_WINDOW_SECONDS": 1209600,
      "HIVE_UPVOTE_LOCKOUT_HF7": 60000000,
      "HIVE_UPVOTE_LOCKOUT_SECONDS": 43200,
      "HIVE_UPVOTE_LOCKOUT_HF17": "43200000000",
      "HIVE_MIN_ACCOUNT_CREATION_FEE": 1,
      "HIVE_MAX_ACCOUNT_CREATION_FEE": 1000000000,
      "HIVE_OWNER_AUTH_RECOVERY_PERIOD": "2592000000000",
      "HIVE_ACCOUNT_RECOVERY_REQUEST_EXPIRATION_PERIOD": "86400000000",
      "HIVE_OWNER_UPDATE_LIMIT": 3600000000,
      "HIVE_OWNER_AUTH_HISTORY_TRACKING_START_BLOCK_NUM": 3186477,
      "HIVE_INIT_SUPPLY": 0,
      "HIVE_HBD_INIT_SUPPLY": 0,
      "HIVE_PROPOSAL_MAINTENANCE_PERIOD": 3600,
      "HIVE_PROPOSAL_MAINTENANCE_CLEANUP": 86400,
      "HIVE_DAILY_PROPOSAL_MAINTENANCE_PERIOD": 86400,
      "HIVE_GOVERNANCE_VOTE_EXPIRATION_PERIOD": "31536000000000",
      "HIVE_GLOBAL_REMOVE_THRESHOLD": 200,
      "HIVE_START_MINER_VOTING_BLOCK": 864000,
      "HIVE_DELAYED_VOTING_TOTAL_INTERVAL_SECONDS": 2592000,
      "HIVE_DELAYED_VOTING_INTERVAL_SECONDS": 86400,
      "HIVE_REVERSE_AUCTION_WINDOW_SECONDS_HF25": 0,
      "HIVE_EARLY_VOTING_SECONDS_HF25": 86400,
      "HIVE_MID_VOTING_SECONDS_HF25": 172800,
      "VESTS_SYMBOL": "VESTS",
      "HIVE_SYMBOL": "HIVE",
      "HBD_SYMBOL": "HBD",
      "HIVE_BLOCKCHAIN_HARDFORK_VERSION": "1.27.0",
      "HIVE_100_PERCENT": 10000,
      "HIVE_1_PERCENT": 100,
      "HIVE_1_BASIS_POINT": 1,
      "HIVE_BLOCK_INTERVAL": 3,
      "HIVE_BLOCKS_PER_YEAR": 10512000,
      "HIVE_BLOCKS_PER_DAY": 28800,
      "HIVE_START_VESTING_BLOCK": 201600,
      "HIVE_INIT_MINER_NAME": "initminer",
      "HIVE_NUM_INIT_MINERS": 1,
      "HIVE_INIT_TIME": "1970-01-01T00:00:00",
      "HIVE_MAX_WITNESSES": 21,
      "HIVE_MAX_VOTED_WITNESSES_HF0": 19,
      "HIVE_MAX_MINER_WITNESSES_HF0": 1,
      "HIVE_MAX_RUNNER_WITNESSES_HF0": 1,
      "HIVE_MAX_VOTED_WITNESSES_HF17": 20,
      "HIVE_MAX_MINER_WITNESSES_HF17": 0,
      "HIVE_MAX_RUNNER_WITNESSES_HF17": 1,
      "HIVE_HARDFORK_REQUIRED_WITNESSES": 17,
      "HIVE_MAX_TIME_UNTIL_EXPIRATION": 3600,
      "HIVE_MAX_MEMO_SIZE": 2048,
      "HIVE_MAX_PROXY_RECURSION_DEPTH": 4,
      "HIVE_VESTING_WITHDRAW_INTERVALS_PRE_HF_16": 104,
      "HIVE_VESTING_WITHDRAW_INTERVALS": 13,
      "HIVE_VESTING_WITHDRAW_INTERVAL_SECONDS": 604800,
      "HIVE_MAX_WITHDRAW_ROUTES": 10,
      "HIVE_MAX_PENDING_TRANSFERS": 255,
      "HIVE_MAX_OPEN_RECURRENT_TRANSFERS": 255,
      "HIVE_MAX_CONSECUTIVE_RECURRENT_TRANSFER_FAILURES": 10,
      "HIVE_MAX_RECURRENT_TRANSFER_END_DATE": 730,
      "HIVE_MAX_RECURRENT_TRANSFERS_PER_BLOCK": 1000,
      "HIVE_MIN_RECURRENT_TRANSFERS_RECURRENCE": 24,
      "HIVE_SAVINGS_WITHDRAW_TIME": "259200000000",
      "HIVE_SAVINGS_WITHDRAW_REQUEST_LIMIT": 100,
      "HIVE_VOTING_MANA_REGENERATION_SECONDS": 432000,
      "HIVE_MAX_VOTE_CHANGES": 5,
      "HIVE_REVERSE_AUCTION_WINDOW_SECONDS_HF6": 1800,
      "HIVE_REVERSE_AUCTION_WINDOW_SECONDS_HF20": 900,
      "HIVE_REVERSE_AUCTION_WINDOW_SECONDS_HF21": 300,
      "HIVE_MIN_VOTE_INTERVAL_SEC": 3,
      "HIVE_VOTE_DUST_THRESHOLD": 50000000,
      "HIVE_DOWNVOTE_POOL_PERCENT_HF21": 2500,
      "HIVE_MIN_ROOT_COMMENT_INTERVAL": 300000000,
      "HIVE_MIN_REPLY_INTERVAL": 20000000,
      "HIVE_MIN_REPLY_INTERVAL_HF20": 3000000,
      "HIVE_MIN_COMMENT_EDIT_INTERVAL": 3000000,
      "HIVE_POST_AVERAGE_WINDOW": 86400,
      "HIVE_POST_WEIGHT_CONSTANT": 1600000000,
      "HIVE_MAX_ACCOUNT_WITNESS_VOTES": 30,
      "HIVE_DEFAULT_HBD_INTEREST_RATE": 1000,
      "HIVE_INFLATION_RATE_START_PERCENT": 978,
      "HIVE_INFLATION_RATE_STOP_PERCENT": 95,
      "HIVE_INFLATION_NARROWING_PERIOD": 250000,
      "HIVE_CONTENT_REWARD_PERCENT_HF16": 7500,
      "HIVE_VESTING_FUND_PERCENT_HF16": 1500,
      "HIVE_PROPOSAL_FUND_PERCENT_HF0": 0,
      "HIVE_CONTENT_REWARD_PERCENT_HF21": 6500,
      "HIVE_PROPOSAL_FUND_PERCENT_HF21": 1000,
      "HIVE_HF21_CONVERGENT_LINEAR_RECENT_CLAIMS": "503600561838938636",
      "HIVE_CONTENT_CONSTANT_HF21": "2000000000000",
      "HIVE_MINER_PAY_PERCENT": 100,
      "HIVE_MAX_RATION_DECAY_RATE": 1000000,
      "HIVE_BANDWIDTH_AVERAGE_WINDOW_SECONDS": 604800,
      "HIVE_BANDWIDTH_PRECISION": 1000000,
      "HIVE_MAX_COMMENT_DEPTH_PRE_HF17": 6,
      "HIVE_MAX_COMMENT_DEPTH": 65535,
      "HIVE_SOFT_MAX_COMMENT_DEPTH": 255,
      "HIVE_MAX_RESERVE_RATIO": 20000,
      "HIVE_CREATE_ACCOUNT_WITH_HIVE_MODIFIER": 30,
      "HIVE_CREATE_ACCOUNT_DELEGATION_RATIO": 5,
      "HIVE_CREATE_ACCOUNT_DELEGATION_TIME": "2592000000000",
      "HIVE_MINING_REWARD": "1.000 HIVE",
      "HIVE_EQUIHASH_N": 140,
      "HIVE_EQUIHASH_K": 6,
      "HIVE_LIQUIDITY_TIMEOUT_SEC": "604800000000",
      "HIVE_MIN_LIQUIDITY_REWARD_PERIOD_SEC": 60000000,
      "HIVE_LIQUIDITY_REWARD_PERIOD_SEC": 3600,
      "HIVE_LIQUIDITY_REWARD_BLOCKS": 1200,
      "HIVE_MIN_LIQUIDITY_REWARD": "1200.000 HIVE",
      "HIVE_MIN_CONTENT_REWARD": "1.000 HIVE",
      "HIVE_MIN_CURATE_REWARD": "1.000 HIVE",
      "HIVE_MIN_PRODUCER_REWARD": "1.000 HIVE",
      "HIVE_MIN_POW_REWARD": "1.000 HIVE",
      "HIVE_ACTIVE_CHALLENGE_FEE": "2.000 HIVE",
      "HIVE_OWNER_CHALLENGE_FEE": "30.000 HIVE",
      "HIVE_ACTIVE_CHALLENGE_COOLDOWN": "86400000000",
      "HIVE_OWNER_CHALLENGE_COOLDOWN": "86400000000",
      "HIVE_POST_REWARD_FUND_NAME": "post",
      "HIVE_COMMENT_REWARD_FUND_NAME": "comment",
      "HIVE_RECENT_RSHARES_DECAY_TIME_HF17": "2592000000000",
      "HIVE_RECENT_RSHARES_DECAY_TIME_HF19": "1296000000000",
      "HIVE_CONTENT_CONSTANT_HF0": "2000000000000",
      "HIVE_APR_PERCENT_MULTIPLY_PER_BLOCK": "102035135585887",
      "HIVE_APR_PERCENT_SHIFT_PER_BLOCK": 87,
      "HIVE_APR_PERCENT_MULTIPLY_PER_ROUND": "133921203762304",
      "HIVE_APR_PERCENT_SHIFT_PER_ROUND": 83,
      "HIVE_APR_PERCENT_MULTIPLY_PER_HOUR": "119577151364285",
      "HIVE_APR_PERCENT_SHIFT_PER_HOUR": 77,
      "HIVE_CURATE_APR_PERCENT": 3875,
      "HIVE_CONTENT_APR_PERCENT": 3875,
      "HIVE_LIQUIDITY_APR_PERCENT": 750,
      "HIVE_PRODUCER_APR_PERCENT": 750,
      "HIVE_POW_APR_PERCENT": 750,
      "HIVE_MIN_PAYOUT_HBD": "0.020 HBD",
      "HIVE_HBD_START_PERCENT_HF14": 200,
      "HIVE_HBD_STOP_PERCENT_HF14": 500,
      "HIVE_HBD_START_PERCENT_HF20": 900,
      "HIVE_HBD_STOP_PERCENT_HF20": 1000,
      "HIVE_HBD_START_PERCENT_HF26": 2000,
      "HIVE_HBD_STOP_PERCENT_HF26": 2000,
      "HIVE_HBD_HARD_LIMIT_PRE_HF26": 1000,
      "HIVE_HBD_HARD_LIMIT": 3000,
      "HIVE_MIN_ACCOUNT_NAME_LENGTH": 3,
      "HIVE_MAX_ACCOUNT_NAME_LENGTH": 16,
      "HIVE_MIN_PERMLINK_LENGTH": 0,
      "HIVE_MAX_PERMLINK_LENGTH": 256,
      "HIVE_MAX_WITNESS_URL_LENGTH": 2048,
      "HIVE_MAX_SHARE_SUPPLY": "1000000000000000",
      "HIVE_MAX_SATOSHIS": "4611686018427387903",
      "HIVE_MAX_SIG_CHECK_DEPTH": 2,
      "HIVE_MAX_SIG_CHECK_ACCOUNTS": 125,
      "HIVE_MIN_TRANSACTION_SIZE_LIMIT": 1024,
      "HIVE_SECONDS_PER_YEAR": 31536000,
      "HIVE_HBD_INTEREST_COMPOUND_INTERVAL_SEC": 2592000,
      "HIVE_MAX_TRANSACTION_SIZE": 65536,
      "HIVE_MIN_BLOCK_SIZE_LIMIT": 65536,
      "HIVE_MAX_BLOCK_SIZE": 2097152,
      "HIVE_MIN_BLOCK_SIZE": 115,
      "HIVE_BLOCKS_PER_HOUR": 1200,
      "HIVE_FEED_INTERVAL_BLOCKS": 1200,
      "HIVE_FEED_HISTORY_WINDOW_PRE_HF_16": 168,
      "HIVE_FEED_HISTORY_WINDOW": 84,
      "HIVE_MAX_FEED_AGE_SECONDS": 604800,
      "HIVE_MIN_FEEDS": 7,
      "HIVE_CONVERSION_DELAY_PRE_HF_16": "604800000000",
      "HIVE_CONVERSION_DELAY": "302400000000",
      "HIVE_COLLATERALIZED_CONVERSION_DELAY": "302400000000",
      "HIVE_CONVERSION_COLLATERAL_RATIO": 20000,
      "HIVE_COLLATERALIZED_CONVERSION_FEE": 500,
      "HIVE_MIN_UNDO_HISTORY": 10,
      "HIVE_MAX_UNDO_HISTORY": 10000,
      "HIVE_MIN_TRANSACTION_EXPIRATION_LIMIT": 15,
      "HIVE_BLOCKCHAIN_PRECISION": 1000,
      "HIVE_BLOCKCHAIN_PRECISION_DIGITS": 3,
      "HIVE_MAX_INSTANCE_ID": "281474976710655",
      "HIVE_MAX_AUTHORITY_MEMBERSHIP": 40,
      "HIVE_MAX_ASSET_WHITELIST_AUTHORITIES": 10,
      "HIVE_MAX_URL_LENGTH": 127,
      "HIVE_IRREVERSIBLE_THRESHOLD": 7500,
      "HIVE_VIRTUAL_SCHEDULE_LAP_LENGTH": "18446744073709551615",
      "HIVE_VIRTUAL_SCHEDULE_LAP_LENGTH2": "340282366920938463463374607431768211455",
      "HIVE_INITIAL_VOTE_POWER_RATE": 40,
      "HIVE_REDUCED_VOTE_POWER_RATE": 10,
      "HIVE_MAX_LIMIT_ORDER_EXPIRATION": 2419200,
      "HIVE_DELEGATION_RETURN_PERIOD_HF0": 604800,
      "HIVE_DELEGATION_RETURN_PERIOD_HF20": 432000,
      "HIVE_RD_MIN_DECAY_BITS": 6,
      "HIVE_RD_MAX_DECAY_BITS": 32,
      "HIVE_RD_DECAY_DENOM_SHIFT": 36,
      "HIVE_RD_MAX_POOL_BITS": 64,
      "HIVE_RD_MAX_BUDGET_1": "17179869183",
      "HIVE_RD_MAX_BUDGET_2": 268435455,
      "HIVE_RD_MAX_BUDGET_3": 2147483647,
      "HIVE_RD_MAX_BUDGET": 268435455,
      "HIVE_RD_MIN_DECAY": 64,
      "HIVE_RD_MIN_BUDGET": 1,
      "HIVE_RD_MAX_DECAY": 4294967295,
      "HIVE_ACCOUNT_SUBSIDY_PRECISION": 10000,
      "HIVE_WITNESS_SUBSIDY_BUDGET_PERCENT": 12500,
      "HIVE_WITNESS_SUBSIDY_DECAY_PERCENT": 210000,
      "HIVE_DEFAULT_ACCOUNT_SUBSIDY_DECAY": 347321,
      "HIVE_DEFAULT_ACCOUNT_SUBSIDY_BUDGET": 797,
      "HIVE_DECAY_BACKSTOP_PERCENT": 9000,
      "HIVE_BLOCK_GENERATION_POSTPONED_TX_LIMIT": 5,
      "HIVE_PENDING_TRANSACTION_EXECUTION_LIMIT": 200000,
      "HIVE_CUSTOM_OP_ID_MAX_LENGTH": 32,
      "HIVE_CUSTOM_OP_DATA_MAX_LENGTH": 8192,
      "HIVE_BENEFICIARY_LIMIT": 128,
      "HIVE_COMMENT_TITLE_LIMIT": 256,
      "HIVE_ONE_DAY_SECONDS": 86400,
      "HIVE_UP_TO_DATE_MARGIN__FAST_CONFIRM": 60000000,
      "HIVE_UP_TO_DATE_MARGIN__BLOCK_STATS": 20000000,
      "HIVE_UP_TO_DATE_MARGIN__PENDING_TXS": 20000000,
      "HIVE_MINER_ACCOUNT": "miners",
      "HIVE_NULL_ACCOUNT": "null",
      "HIVE_TEMP_ACCOUNT": "temp",
      "HIVE_PROXY_TO_SELF_ACCOUNT": "",
      "HIVE_ROOT_POST_PARENT": "",
      "OBSOLETE_TREASURY_ACCOUNT": "steem.dao",
      "NEW_HIVE_TREASURY_ACCOUNT": "hive.fund",
      "HIVE_TREASURY_FEE": 10000,
      "HIVE_PROPOSAL_SUBJECT_MAX_LENGTH": 80,
      "HIVE_PROPOSAL_MAX_IDS_NUMBER": 5,
      "HIVE_PROPOSAL_FEE_INCREASE_DAYS": 60,
      "HIVE_PROPOSAL_FEE_INCREASE_DAYS_SEC": 5184000,
      "HIVE_PROPOSAL_FEE_INCREASE_AMOUNT": 1000,
      "HIVE_PROPOSAL_CONVERSION_RATE": 5
    }`
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
    isArray: true,
    description:_t("condenser_api.get_chain_properties_description"),
    url:`${ConfigItems.baseUrl}/api/get_chain_properties`,
    response: `{
      "account_creation_fee": "3.000 HIVE",
      "maximum_block_size": 65536,
      "hbd_interest_rate": 2000,
      "account_subsidy_budget": 797,
      "account_subsidy_decay": 347321
    }`
  },
  {
    api: "condenser_api",
    method: "get_feed_history",
    isArray: true,
    description:_t("condenser_api.get_feed_history_description"),
    url:`${ConfigItems.baseUrl}/api/get_feed_history`,
    response: `{
      "id": 0,
      "current_median_history": {
        "base": "0.405 HBD",
        "quote": "1.000 HIVE"
      },
      "market_median_history": {
        "base": "0.405 HBD",
        "quote": "1.000 HIVE"
      },
      "current_min_history": {
        "base": "0.397 HBD",
        "quote": "1.000 HIVE"
      },
      "current_max_history": {
        "base": "0.422 HBD",
        "quote": "1.000 HIVE"
      },
      "price_history": [
        {
          "base": "0.416 HBD",
          "quote": "1.000 HIVE"
        },
        {
          "base": "0.412 HBD",
          "quote": "1.000 HIVE"
        },
        {
          "base": "0.411 HBD",
          "quote": "1.000 HIVE"
        },
        {
          "base": "0.409 HBD",
          "quote": "1.000 HIVE"
        }
      ]
    }`
  },
  {
    api: "condenser_api",
    method: "get_current_median_history_price",
    isArray: true,
    description:_t("condenser_api.get_current_median_history_price"),
    url:`${ConfigItems.baseUrl}/api/get_current_median_history_price`,
    response: `{
      "base": "0.405 HBD",
      "quote": "1.000 HIVE"
    }`
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_author_before_date",
    params: ["author","permlink","date","limit"],
    isArray: true,
    description:_t("condenser_api.get_discussions_by_author_before_date"),
    url:`${ConfigItems.baseUrl}/api/get_discussions_by_author_before_date?author="ecency"&permlink="ecency-development-and-maintenance-4"&date=2023-11-04T22:49:43&limit=2`,
    response: `[
      {
        "active_votes": [
          {
            "percent": "4000",
            "reputation": 341233778618,
            "rshares": 768760982022,
            "voter": "boatymcboatface"
          },
          {
            "percent": "4000",
            "reputation": 2107189950411875,
            "rshares": 94384731190,
            "voter": "kingscrown"
          },
          {
            "percent": "10000",
            "reputation": 131524410663,
            "rshares": 0,
            "voter": "jazteem"
          }
        ],
        "author": "ecency",
        "author_reputation": 481129921188588,
        "beneficiaries": [],
        "body": "The #24 edition of the Monthly Guest Curation Program here on Hive was a great success, and it was a challenging task to select curators between the numerous outstanding options. In the end, an amazing group of Guest Curators joined our team and performed exceptionally well during their term. \\n\\nIt is now time to commence the #25 edition of the Guest Curation Program, which offers Ecency users the opportunity to learn about curation and, in the process also grow their profiles on the blockchain. \\n\\n\\nThe Monthly Guest Program was created to address misunderstandings and answer questions about Ecency's curation. As a member of our curation team for a month, you will have the opportunity to observe how posts are reviewed and curated by our curators. Curators have to navigate spam, abusive accounts, and individuals attempting to manipulate our encouragement system in order to identify authentic users and deserving content that deserves recognition, encouragement, and appreciation.\\n\\n# How To Apply \\n\\nIf you have become a member of our [Ecency Discord](https://discord.me/ecency) community, you can share your Hive username by commenting in the #curator-internship channel or on this post.\\n\\nAbout the Guest Curator Program\\n\\n* Two guest curators will be appointed every month for a period of 30 days.\\n\\n* The selection will be based on the user being a dedicated Ecency user, and the decision of the selectors is final.\\n\\n* The rules to be followed and the perks for being appointed as a Guest Curator will be shared upon selection.\\n\\n* As a curator, it is expected that you have a desire to help the community, and spread love, cheer, and goodwill among users of Ecency. And also, have the ability to identify and report instances of abuse.\\n\\n* If the guest curator is found to be abusing the granted role and powers, they will be immediately removed from the program.\\n\\n* If you are not selected as a Guest Curator, you may reapply in the next cycle. However, a selected Guest Curator can apply to the program again only after the end of 60 days (i.e., 2 cycles after their selection).\\n\\nWe are looking forward to hearing from you! Join [Discord](https://discord.me/ecency) and showcase your curation skills to become a member of the Ecency curator team.\\n\\nhttps://cdn.discordapp.com/attachments/1003838978920812626/1168488074662125598/boost_approval1.gif?ex=6551f252&is=653f7d52&hm=301052474bdd00df8690c53b8f030270712e80dd04932abe3cbfdf2de6587ad2&\\n\\n### Delegate Hive Power now and mine [Ecency Points + curation reward daily](https://ecency.com/hive-125125/@ecency/daily-100-curation-rewards) + help us onboard more people:  \\n \\n[50 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50%20HP) | [100 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100%20HP) | [500 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=500%20HP) | [1000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=1000%20HP) | [5000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=5000%20HP) | [10K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=10000%20HP) | [20K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=20000%20HP) | [50K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50000%20HP) | [100K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100000%20HP)  \\n \\n### Support our proposals  \\n \\n[\`Ecency\`](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B283%5D&approve=true)",
        "body_length": 3797,
        "cashout_time": "1969-12-31T23:59:59",
        "category": "ecency",
        "children": 15,
        "created": "2023-10-30T09:45:54",
        "curator_payout_value": "8.845 HBD",
        "depth": 0,
        "json_metadata": "{\\"image\\":[\\"https://cdn.discordapp.com/attachments/1003838978920812626/1168488074662125598/boost_approval1.gif?ex=6551f252&is=653f7d52&hm=301052474bdd00df8690c53b8f030270712e80dd04932abe3cbfdf2de6587ad2&\\"],\\"tags\\":[\\"ecency\\",\\"hive\\",\\"curation\\",\\"guestcurators\\"],\\"description\\":\\"\\",\\"app\\":\\"ecency/3.0.36-vision\\",\\"format\\":\\"markdown+html\\",\\"image_ratios\\":[\\"1.0000\\"]}",
        "last_payout": "2023-11-06T09:45:54",
        "last_update": "2023-11-04T11:11:30",
        "max_accepted_payout": "1000000.000 HBD",
        "net_rshares": 37317216249639,
        "parent_author": "",
        "parent_permlink": "ecency",
        "pending_payout_value": "0.000 HBD",
        "percent_hbd": 10000,
        "permlink": "ecency-monthly-guest-curation-program-d34368ec623ec",
        "post_id": 128422803,
        "promoted": "0.000 HBD",
        "replies": [],
        "root_title": "Ecency Monthly Guest Curation Program #25",
        "title": "Ecency Monthly Guest Curation Program #25",
        "total_payout_value": "8.902 HBD",
        "url": "/ecency/@ecency/ecency-monthly-guest-curation-program-d34368ec623ec"
      },
      {
        "active_votes": [
          {
            "percent": "2500",
            "reputation": 1099373991783505,
            "rshares": 52618911274147,
            "voter": "blocktrades"
          },
          {
            "percent": "10000",
            "reputation": 0,
            "rshares": 0,
            "voter": "limboxd"
          }
        ],
        "author": "ecency",
        "author_reputation": 481129921188588,
        "beneficiaries": [],
        "body": "Dear Ecencials, \\n\\nWe have released a new update for our Ecency Mobile App right after the Vision Web App update. This update brings several changes and fixes, one of which is about the popular \\"Waves\\" feature that has captured the attention of many of our users. One of the notable changes is the ability to hide spam content by downvoting them. If you are curious about the content that was hidden, you can click on the \\"Reveal content\\" button. Additionally, we have fixed an issue regarding duplicate Waves that were observed in the previous version.\\nYou now have the ability to receive Media Rich Push Notifications. When you receive notifications, they will include a thumbnail image on your phone. This feature enables you to quickly and conveniently identify the sender of a notification upon its arrival or detect relevant post quickly with thumbnail.\\n\\n![](https://images.ecency.com/DQmcGcLYsULdwyYNg95FVSwJ1MJ6RMnSJ33zRTXpZj1DF9P/mobile_release_copy.jpg)\\n\\n![](https://images.ecency.com/DQmQJSDg5rGbfFUDvwtZ5bTk7W2sRvm4xr7k2Prxh8iBMED/_.png)\\n\\n\\n\\n## What's Changed\\n\\n* using RefreshControl and List/Scroll in pair from same package by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2750\\n* Nt/wave vote percent by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2751\\n* feat: #2745 add support of repeat transfer by @gamingumar in https://github.com/ecency/ecency-mobile/pull/2749\\n* Wave duplication fix by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2752\\n* Nt/rshares cache by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2753\\n* hiding muted waves in real time by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2754\\n* hide downvoted content with reveal button by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2757\\n* Nt/wave media by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2758\\n* Nt/wave scroll top by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2759\\n* Nt/wave image ratios by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2760\\n* New Crowdin updates by @feruzm in https://github.com/ecency/ecency-mobile/pull/2743\\n* update current user data on drawer open by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2762\\n* Nt/wave post data by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2761\\n* Nt/latest wave check by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2765\\n* Improve hive uri QR support by @aliseyalvi in https://github.com/ecency/ecency-mobile/pull/2755\\n* [Bug Fix] json meta not saving in mobile editor by @aliseyalvi in https://github.com/ecency/ecency-mobile/pull/2767\\n* [Bug Fix] vote count bug in post screen by @aliseyalvi in https://github.com/ecency/ecency-mobile/pull/2768\\n* feat: GU-2766 add flash list for performance by @gamingumar in https://github.com/ecency/ecency-mobile/pull/2771\\n* fix: GU-2766 add key prop in flash list by @gamingumar in https://github.com/ecency/ecency-mobile/pull/2772\\n* Nt/ios build fix by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2773\\n* separated ImageNotifi, no longer need updating build settings by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2774\\n* fix: GU-2766 fix posts flicker and profile comments by @gamingumar in https://github.com/ecency/ecency-mobile/pull/2775\\n* avoid rendering reply title by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2776\\n* update powering down text with time by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2777\\n* New Crowdin updates by @feruzm in https://github.com/ecency/ecency-mobile/pull/2763\\n* avoid rendering undefined as vote value by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2778\\n* checking new waves on tab reactive by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2779\\n* injecting image urls and ratios in comment metadata by @noumantahir in https://github.com/ecency/ecency-mobile/pull/2780\\n\\n## New Contributors\\n* @gamingumar made their first contribution in https://github.com/ecency/ecency-mobile/pull/2749\\n\\n**Full Changelog**: https://github.com/ecency/ecency-mobile/compare/3.0.43...3.0.44\\n\\nIf you are React Native developer, feel free to join and help developing features we all love using, [our mobile application is completely opensource](https://github.com/ecency/ecency-mobile).  \\n \\n**Join mobile translation team**: https://translate-mobile.ecency.com  \\n31 languages already enabled on Ecency mobile app, thanks to [our awesome contributors](https://ecency.com/contributors).  \\n \\nStay safe, stay excited, stay united! Don't forget to share news with your friends.  \\n \\n# Download  \\n \\n[Ecency.com](https://ecency.com) | [iOS app](https://ios.ecency.com) | [Android app](https://android.ecency.com) | [Direct Android APK and iOS IPA file](https://github.com/ecency/ecency-mobile/releases)  \\n \\n---  \\n \\n## Support us  \\n \\n### Delegate HP and earn [Ecency Points + curation reward daily](https://ecency.com/hive-125125/@ecency/daily-100-curation-rewards) + help us onboard more people:  \\n \\n[500 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=500%20HP) | [1000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=1000%20HP) | [5000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=5000%20HP) | [10K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=10000%20HP) | [20K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=20000%20HP) | [50K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50000%20HP)  \\n \\n### Support our proposals  \\n \\n[\`Ecency\`](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B245%5D&approve=true)",
        "body_length": 5902,
        "cashout_time": "1969-12-31T23:59:59",
        "category": "hive-125125",
        "children": 14,
        "created": "2023-10-18T07:30:12",
        "curator_payout_value": "55.892 HBD",
        "depth": 0,
        "json_metadata": "{\\"image\\":[\\"https://images.ecency.com/DQmcGcLYsULdwyYNg95FVSwJ1MJ6RMnSJ33zRTXpZj1DF9P/mobile_release_copy.jpg\\",\\"https://images.ecency.com/DQmQJSDg5rGbfFUDvwtZ5bTk7W2sRvm4xr7k2Prxh8iBMED/_.png\\"],\\"tags\\":[\\"hive-125125\\",\\"waves\\",\\"rich\\",\\"notifications\\",\\"qr\\",\\"fixes\\",\\"ecency\\",\\"hive-uri\\",\\"caching\\",\\"android\\"],\\"description\\":\\"Media Rich Push Notifications, QR improvements and Waves fixes are part of this new Ecency mobile app update.\\",\\"app\\":\\"ecency/3.0.36-vision\\",\\"format\\":\\"markdown+html\\",\\"image_ratios\\":[\\"1.6667\\",\\"1.4781\\"]}",
        "last_payout": "2023-10-25T07:30:12",
        "last_update": "2023-10-18T07:30:12",
        "max_accepted_payout": "1000000.000 HBD",
        "net_rshares": 252426442065766,
        "parent_author": "",
        "parent_permlink": "hive-125125",
        "pending_payout_value": "0.000 HBD",
        "percent_hbd": 0,
        "permlink": "mobile-rich-notifications-waves-and",
        "post_id": 128090838,
        "promoted": "0.000 HBD",
        "replies": [],
        "root_title": "Mobile - Rich notifications, Waves and QR improvements...",
        "title": "Mobile - Rich notifications, Waves and QR improvements...",
        "total_payout_value": "55.968 HBD",
        "url": "/hive-125125/@ecency/mobile-rich-notifications-waves-and"
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_collateralized_conversion_requests",
    params: ["account"],
    isArray: true,
    description: _t("condenser_api.get_collateralized_conversion_requests"),
    url:`${ConfigItems.baseUrl}/api/get_collateralized_conversion_requests?account="hbdstabilizer"`,
    response: `[]`
  },
  {
    api: "condenser_api",
    method: "find_recurrent_transfers",
    params: ["account"],
    isArray: true,
    description: _t("condenser_api.find_recurrent_transfers"),
    url:`${ConfigItems.baseUrl}/api/find_recurrent_transfers?account="peak.open"`,
    response: `[
      {
        "amount": "3750.000 HBD",
        "consecutive_failures": 0,
        "from": "peak.open",
        "id": 1452,
        "memo": "pay 4 team members",
        "pair_id": 0,
        "recurrence": 168,
        "remaining_executions": 12,
        "to": "peakd",
        "trigger_date": "2024-05-23T12:01:54"
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_expiring_vesting_delegations",
    params: ["account", "date"],
    isArray: true,
    description: _t("condenser_api.get_expiring_vesting_delegations"),
    url:`${ConfigItems.baseUrl}/api/get_expiring_vesting_delegations?account="ecency"&date="1970-01-01T00:00:00"`,
    response: `[
      {
        "delegator": "ecency",
        "expiration": "2024-05-20T12:10:03",
        "id": 5925594,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-20T16:20:06",
        "id": 5925607,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-21T06:40:06",
        "id": 5925642,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-21T09:25:06",
        "id": 5925647,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-21T10:30:06",
        "id": 5925648,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-21T16:55:06",
        "id": 5925665,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-21T17:55:06",
        "id": 5925667,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-21T18:05:03",
        "id": 5925669,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-21T20:10:06",
        "id": 5925670,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-22T03:20:03",
        "id": 5925679,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-22T06:00:06",
        "id": 5925690,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-22T06:05:06",
        "id": 5925692,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-22T07:25:03",
        "id": 5925697,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-22T08:35:06",
        "id": 5925700,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-22T11:45:06",
        "id": 5925706,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-22T12:30:06",
        "id": 5925708,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-23T02:05:06",
        "id": 5925732,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-23T05:45:03",
        "id": 5925737,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-23T10:50:06",
        "id": 5925748,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-23T16:00:06",
        "id": 5925758,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-23T16:00:06",
        "id": 5925759,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-23T19:25:03",
        "id": 5925765,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T00:00:09",
        "id": 5925783,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T05:00:03",
        "id": 5925834,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T06:10:03",
        "id": 5925837,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T10:15:03",
        "id": 5925846,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T10:20:03",
        "id": 5925847,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T15:20:03",
        "id": 5925856,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T16:10:03",
        "id": 5925858,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-24T23:45:03",
        "id": 5925878,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-25T02:10:06",
        "id": 5925880,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-25T02:55:03",
        "id": 5925882,
        "vesting_shares": "350000.000000 VESTS"
      },
      {
        "delegator": "ecency",
        "expiration": "2024-05-25T05:25:06",
        "id": 5925893,
        "vesting_shares": "350000.000000 VESTS"
      }
    ]`
  },
  {
    api: "database_api",
    method: "get_witness_schedule",
    description:_t("condenser_api.get_witness_schedule_description"),
    url:`${ConfigItems.baseUrl}/api/get_witness_schedule`,
    response: `{
      "id": 0,
      "current_virtual_time": "779381989783310301774252553",
      "next_shuffle_block_num": 73739106,
      "current_shuffled_witnesses": [
        "deathwing",
        "abit",
        "blocktrades",
        "steempeak",
        "arcange",
        "guiltyparties",
        "roelandp",
        "good-karma",
        "stoodkev",
        "gtg",
        "threespeak",
        "ocd-witness",
        "therealwolf",
        "ausbitbank",
        "yabapmatt",
        "themarkymark",
        "emrebeyler",
        "steempress",
        "smooth.witness",
        "engrave",
        "quochuy"
      ],
      "num_scheduled_witnesses": 21,
      "elected_weight": 1,
      "timeshare_weight": 5,
      "miner_weight": 1,
      "witness_pay_normalization_factor": 25,
      "median_props": {
        "account_creation_fee": "3.000 HIVE",
        "maximum_block_size": 65536,
        "hbd_interest_rate": 2000,
        "account_subsidy_budget": 797,
        "account_subsidy_decay": 347321
      },
      "majority_version": "1.27.3",
      "max_voted_witnesses": 20,
      "max_miner_witnesses": 0,
      "max_runner_witnesses": 1,
      "hardfork_required_witnesses": 17,
      "account_subsidy_rd": {
        "resource_unit": 10000,
        "budget_per_time_unit": 797,
        "pool_eq": 157691079,
        "max_pool_size": 157691079,
        "decay_params": {
          "decay_per_time_unit": 347321,
          "decay_per_time_unit_denom_shift": 36
        },
        "min_decay": 0
      },
      "account_subsidy_witness_rd": {
        "resource_unit": 10000,
        "budget_per_time_unit": 996,
        "pool_eq": 9384019,
        "max_pool_size": 9384019,
        "decay_params": {
          "decay_per_time_unit": 7293741,
          "decay_per_time_unit_denom_shift": 36
        },
        "min_decay": 194
      },
      "min_witness_account_subsidy_decay": 0
    }`
  },
  {
    api: "database_api",
    method: "get_hardfork_version",
    description:_t("condenser_api.get_hardfork_version_description"),
    url:`${ConfigItems.baseUrl}/api/get_hardfork_version`,
    response: `"1.27.0"`
  },
  {
    api: "condenser_api",
    method: "get_next_scheduled_hardfork",
    isArray: true,
    description:_t("condenser_api.get_hardfork_version_description"),
    url:`${ConfigItems.baseUrl}/api/get_next_scheduled_hardfork`,
    response: `{
      "hf_version": "1.27.0",
      "live_time": "2022-10-24T12:00:00"
    }`
  },
  {
    api: "condenser_api",
    method: "get_key_references",
    params: ["keys"],
    isArray: true,
    description:_t("condenser_api.get_key_references_description"),
    url:`${ConfigItems.baseUrl}/api/get_key_references?keys=["STM6vJmrwaX5TjgTS9dPH8KsArso5m91fVodJvv91j7G765wqcNM9"]`,
    parameter: `<code><span class="p">[</span><span class="w">
        </span><span class="p">[</span><span class="w">
          </span><span class="s2">"STM6vJmrwaX5TjgTS9dPH8KsArso5m91fVodJvv91j7G765wqcNM9"</span><span class="w">
        </span><span class="p">]</span><span class="w">
      </span><span class="p">]</span><span class="w">
      </span></code>`,
    response: `[
      [
        "hiveio"
      ]
    ]`
  },
  {
    api: "condenser_api",
    method: "get_accounts",
    params: ["names","delayed_votes_active"],
    isArray: true,
    description:_t("condenser_api.get_accounts_description"),
    url:`${ConfigItems.baseUrl}/api/get_accounts?names=["hiveio","ecency"]`,
    parameter: `<p><code class="language-plaintext highlighter-rouge">names:string array</code>; <code class="language-plaintext highlighter-rouge">delayed_votes_active:boolean</code></p>`,
    response: `[
      {
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
          "account_auths": [
            [
              "pettycash",
              1
            ]
          ],
          "key_auths": [
            [
              "STM69zfrFGnZtU3gWFWpQJ6GhND1nz7TJsKBTjcWfebS1JzBEweQy",
              1
            ]
          ]
        },
        "posting": {
          "weight_threshold": 1,
          "account_auths": [
            [
              "threespeak",
              1
            ],
            [
              "vimm.app",
              1
            ]
          ],
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
        "previous_owner_update": "1970-01-01T00:00:00",
        "last_owner_update": "1970-01-01T00:00:00",
        "last_account_update": "2021-11-09T21:56:27",
        "created": "2020-03-06T12:22:48",
        "mined": false,
        "recovery_account": "steempeak",
        "last_account_recovery": "1970-01-01T00:00:00",
        "reset_account": "null",
        "comment_count": 0,
        "lifetime_vote_count": 0,
        "post_count": 60,
        "can_vote": true,
        "voting_manabar": {
          "current_mana": "1488034897889",
          "last_update_time": 1667197029
        },
        "downvote_manabar": {
          "current_mana": "372008724471",
          "last_update_time": 1667197029
        },
        "voting_power": 0,
        "balance": "456.266 HIVE",
        "savings_balance": "0.000 HIVE",
        "hbd_balance": "289.712 HBD",
        "hbd_seconds": "0",
        "hbd_seconds_last_update": "2020-10-21T02:45:12",
        "hbd_last_interest_payment": "2020-10-21T02:45:12",
        "savings_hbd_balance": "0.000 HBD",
        "savings_hbd_seconds": "0",
        "savings_hbd_seconds_last_update": "1970-01-01T00:00:00",
        "savings_hbd_last_interest_payment": "1970-01-01T00:00:00",
        "savings_withdraw_requests": 0,
        "reward_hbd_balance": "0.070 HBD",
        "reward_hive_balance": "0.000 HIVE",
        "reward_vesting_balance": "472.363539 VESTS",
        "reward_vesting_hive": "0.263 HIVE",
        "vesting_shares": "1488034.897889 VESTS",
        "delegated_vesting_shares": "0.000000 VESTS",
        "received_vesting_shares": "0.000000 VESTS",
        "vesting_withdraw_rate": "0.000000 VESTS",
        "post_voting_power": "1488034.897889 VESTS",
        "next_vesting_withdrawal": "1969-12-31T23:59:59",
        "withdrawn": 0,
        "to_withdraw": 0,
        "withdraw_routes": 0,
        "pending_transfers": 0,
        "curation_rewards": 0,
        "posting_rewards": 1578377,
        "proxied_vsf_votes": [
          0,
          0,
          0,
          0
        ],
        "witnesses_voted_for": 0,
        "last_post": "2023-03-21T03:05:36",
        "last_root_post": "2023-03-21T03:05:36",
        "last_vote_time": "1970-01-01T00:00:00",
        "post_bandwidth": 0,
        "pending_claimed_accounts": 0,
        "governance_vote_expiration_ts": "2023-07-14T17:52:15",
        "delayed_votes": [],
        "open_recurrent_transfers": 0,
        "vesting_balance": "0.000 HIVE",
        "reputation": "207993891756354",
        "transfer_history": [],
        "market_history": [],
        "post_history": [],
        "vote_history": [],
        "other_history": [],
        "witness_votes": [],
        "tags_usage": [],
        "guest_bloggers": []
      },
      {
        "id": 1382792,
        "name": "ecency",
        "owner": {
          "weight_threshold": 1,
          "account_auths": [],
          "key_auths": [
            [
              "STM4yhxC7Bum8St36z3nZmj9VA59EXM7DXReMLMRn8fwrazgNbKYQ",
              1
            ]
          ]
        },
        "active": {
          "weight_threshold": 1,
          "account_auths": [],
          "key_auths": [
            [
              "STM51ApnQm3HNieuy3ZUQNtXbdu8CzEFEWRPqMLY1422i8Gy7g2PJ",
              1
            ]
          ]
        },
        "posting": {
          "weight_threshold": 1,
          "account_auths": [
            [
              "ecency.app",
              1
            ]
          ],
          "key_auths": [
            [
              "STM8AZuk2ja5vSFySFL2zpB9bNew8wJAg8r4QFtbnoamEX8Jvvq43",
              1
            ]
          ]
        },
        "memo_key": "STM5vCxUjSAZAgKBornswBuzXgAZasbE3EkPHpLmDEVHmPVGMnnah",
        "json_metadata": "{\"profile\":{\"name\":\"\",\"about\":\"\",\"cover_image\":\"\",\"profile_image\":\"https://images.esteem.app/DQmWCcJcicyck5atZcgXt5rQstoQVSrumHdsmeQNKXHjgPa/ecenct_logo.png\",\"website\":\"https://ecency.com\",\"location\":\"\"}}",
        "posting_json_metadata": "{\"profile\":{\"name\":\"Ecency\",\"about\":\"Set it free, be free! Join immutable, uncensored, rewarding communities! https://ecency.com\",\"cover_image\":\"\",\"profile_image\":\"https://images.ecency.com/DQmWCcJcicyck5atZcgXt5rQstoQVSrumHdsmeQNKXHjgPa/ecenct_logo.png\",\"website\":\"https://ecency.com\",\"location\":\"Blockchain\",\"pinned\":\"ecency-development-and-maintenance-3\",\"version\":2,\"tokens\":[{\"symbol\":\"SPT\",\"type\":\"ENGINE\"},{\"symbol\":\"LEO\",\"type\":\"ENGINE\"},{\"symbol\":\"POB\",\"type\":\"ENGINE\"}]}}",
        "proxy": "good-karma",
        "previous_owner_update": "1970-01-01T00:00:00",
        "last_owner_update": "1970-01-01T00:00:00",
        "last_account_update": "2023-03-14T06:10:00",
        "created": "2020-05-13T07:50:03",
        "mined": false,
        "recovery_account": "esteemapp",
        "last_account_recovery": "1970-01-01T00:00:00",
        "reset_account": "null",
        "comment_count": 0,
        "lifetime_vote_count": 0,
        "post_count": 209860,
        "can_vote": true,
        "voting_manabar": {
          "current_mana": "1561357466363770",
          "last_update_time": 1680694197
        },
        "downvote_manabar": {
          "current_mana": "550678930593065",
          "last_update_time": 1680694197
        },
        "voting_power": 7088,
        "balance": "1108.361 HIVE",
        "savings_balance": "0.000 HIVE",
        "hbd_balance": "66.243 HBD",
        "hbd_seconds": "3282007838238",
        "hbd_seconds_last_update": "2021-06-30T13:30:33",
        "hbd_last_interest_payment": "2021-06-14T09:30:27",
        "savings_hbd_balance": "0.000 HBD",
        "savings_hbd_seconds": "187726470",
        "savings_hbd_seconds_last_update": "2023-04-02T19:38:51",
        "savings_hbd_last_interest_payment": "2023-04-01T10:26:00",
        "savings_withdraw_requests": 1,
        "reward_hbd_balance": "0.000 HBD",
        "reward_hive_balance": "0.000 HIVE",
        "reward_vesting_balance": "3383.680870 VESTS",
        "reward_vesting_hive": "1.897 HIVE",
        "vesting_shares": "224658604.259260 VESTS",
        "delegated_vesting_shares": "4844928.897781 VESTS",
        "received_vesting_shares": "1982902047.010782 VESTS",
        "vesting_withdraw_rate": "0.000000 VESTS",
        "post_voting_power": "2202715722.372261 VESTS",
        "next_vesting_withdrawal": "1969-12-31T23:59:59",
        "withdrawn": 0,
        "to_withdraw": 0,
        "withdraw_routes": 0,
        "pending_transfers": 0,
        "curation_rewards": 253211364,
        "posting_rewards": 18945709,
        "proxied_vsf_votes": [
          "1665116204971",
          0,
          0,
          0
        ],
        "witnesses_voted_for": 0,
        "last_post": "2023-04-05T11:29:57",
        "last_root_post": "2023-04-04T07:07:03",
        "last_vote_time": "2023-04-05T11:29:57",
        "post_bandwidth": 0,
        "pending_claimed_accounts": 21964,
        "governance_vote_expiration_ts": "2023-08-03T10:28:12",
        "delayed_votes": [],
        "open_recurrent_transfers": 0,
        "vesting_balance": "0.000 HIVE",
        "reputation": "378900796068348",
        "transfer_history": [],
        "market_history": [],
        "post_history": [],
        "vote_history": [],
        "other_history": [],
        "witness_votes": [],
        "tags_usage": [],
        "guest_bloggers": []
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "lookup_account_names",
    params: ["accounts","delayed_votes_active"],
    isArray: true,
    description:_t("condenser_api.lookup_account_names_description"),
    url: `${ConfigItems.baseUrl}/api/lookup_account_names?accounts=["hiveio"]&delayed_votes_active=false`,
    parameter: `<code>accounts:[string]; delayed_votes_active:boolean</code>`,
    response: `[
      {
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
          "account_auths": [
            [
              "pettycash",
              1
            ]
          ],
          "key_auths": [
            [
              "STM69zfrFGnZtU3gWFWpQJ6GhND1nz7TJsKBTjcWfebS1JzBEweQy",
              1
            ]
          ]
        },
        "posting": {
          "weight_threshold": 1,
          "account_auths": [
            [
              "threespeak",
              1
            ],
            [
              "vimm.app",
              1
            ]
          ],
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
        "previous_owner_update": "1970-01-01T00:00:00",
        "last_owner_update": "1970-01-01T00:00:00",
        "last_account_update": "2021-11-09T21:56:27",
        "created": "2020-03-06T12:22:48",
        "mined": false,
        "recovery_account": "steempeak",
        "last_account_recovery": "1970-01-01T00:00:00",
        "reset_account": "null",
        "comment_count": 0,
        "lifetime_vote_count": 0,
        "post_count": 60,
        "can_vote": true,
        "voting_manabar": {
          "current_mana": "1488034897889",
          "last_update_time": 1667197029
        },
        "downvote_manabar": {
          "current_mana": "372008724471",
          "last_update_time": 1667197029
        },
        "voting_power": 0,
        "balance": "456.266 HIVE",
        "savings_balance": "0.000 HIVE",
        "hbd_balance": "289.712 HBD",
        "hbd_seconds": "0",
        "hbd_seconds_last_update": "2020-10-21T02:45:12",
        "hbd_last_interest_payment": "2020-10-21T02:45:12",
        "savings_hbd_balance": "0.000 HBD",
        "savings_hbd_seconds": "0",
        "savings_hbd_seconds_last_update": "1970-01-01T00:00:00",
        "savings_hbd_last_interest_payment": "1970-01-01T00:00:00",
        "savings_withdraw_requests": 0,
        "reward_hbd_balance": "0.070 HBD",
        "reward_hive_balance": "0.000 HIVE",
        "reward_vesting_balance": "472.363539 VESTS",
        "reward_vesting_hive": "0.263 HIVE",
        "vesting_shares": "1488034.897889 VESTS",
        "delegated_vesting_shares": "0.000000 VESTS",
        "received_vesting_shares": "0.000000 VESTS",
        "vesting_withdraw_rate": "0.000000 VESTS",
        "post_voting_power": "1488034.897889 VESTS",
        "next_vesting_withdrawal": "1969-12-31T23:59:59",
        "withdrawn": 0,
        "to_withdraw": 0,
        "withdraw_routes": 0,
        "pending_transfers": 0,
        "curation_rewards": 0,
        "posting_rewards": 1578377,
        "proxied_vsf_votes": [
          0,
          0,
          0,
          0
        ],
        "witnesses_voted_for": 0,
        "last_post": "2023-03-21T03:05:36",
        "last_root_post": "2023-03-21T03:05:36",
        "last_vote_time": "1970-01-01T00:00:00",
        "post_bandwidth": 0,
        "pending_claimed_accounts": 0,
        "governance_vote_expiration_ts": "2023-07-14T17:52:15",
        "open_recurrent_transfers": 0
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "lookup_accounts",
    isArray: true,
    params: ["lower_bound_name", "limit"],
    parameter: `<code>lower_bound_name:string; limit:int up to 1000</code>`,
    description:_t("condenser_api.lookup_accounts_description"),
    url: `${ConfigItems.baseUrl}/api/lookup_accounts?lower_bound_name="dem"&limit=10`,
    response: `[
      "dem",
      "dem-of-ashes",
      "dem0",
      "dem0n0cracy",
      "dem0n9",
      "dem0nangel",
      "dem0nix",
      "dem0nprince",
      "dem0nyito",
      "dem0rvil"
    ]`
  },
  {
    api: "condenser_api",
    method: "get_account_count",
    isArray: true,
    description:_t("condenser_api.get_account_count_description"),
    url: `${ConfigItems.baseUrl}/api/get_account_count`,
    response: `2445188`
  },
  {
    api: "condenser_api",
    method: "get_conversion_requests",
    isArray: true,
    params: ["name"],
    parameter: `<code>name: string, username</code>`,
    description:_t("condenser_api.get_conversion_requests_description"),
    url: `${ConfigItems.baseUrl}/api/get_conversion_requests?name="hbdstabilizer"`,
    response: `[
      {
        "id": 353555,
        "owner": "hbdstabilizer",
        "requestid": 1680395898,
        "amount": "8236.567 HBD",
        "conversion_date": "2023-04-05T12:38:18"
      },
      {
        "id": 353556,
        "owner": "hbdstabilizer",
        "requestid": 1680396075,
        "amount": "100.000 HBD",
        "conversion_date": "2023-04-05T12:41:15"
      },
      {
        "id": 353557,
        "owner": "hbdstabilizer",
        "requestid": 1680396623,
        "amount": "100.875 HBD",
        "conversion_date": "2023-04-05T12:50:24"
      }
    ]`
  },
  {
    api: "account_history_api",
    description:_t("account_history_api.get_account_history_description"),
    method: "get_account_history",
    url:`${ConfigItems.baseUrl}/api/get_account_history?account=ecency&start=-1&limit=3&operation_type="vote"`,
    params: ["account", "start", "limit", "operation_type"],
    parameter:`<ul>
        <li><code class="language-plaintext highlighter-rouge">account:string</code></li>
        <li><code class="language-plaintext highlighter-rouge">start:int</code>. e.g.: -1 for reverse history or any positive numeric</li>
        <li><code class="language-plaintext highlighter-rouge">limit:int</code> up to 1000</li>
        <li><code class="language-plaintext highlighter-rouge">operation_type:string</code> (optional)</li>
      </ul>
      <p>If <code class="language-plaintext highlighter-rouge">operation_type</code> are set, the set of returned operations will include only these matching operations filter.</p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">account</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">start</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">operation_type</code> (string)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"hiveio"</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>&nbsp;</td>
            <td>Queries the account named <code class="language-plaintext highlighter-rouge">hiveio</code> starting on the latest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"alice"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>&nbsp;</td>
            <td>Queries the account named <code class="language-plaintext highlighter-rouge">alice</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"bob"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>"vote"</td>
            <td>Queries <strong>only votes</strong> by the account named <code class="language-plaintext highlighter-rouge">bob</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"charlie"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>"vote,custom_json"</td>
            <td>Queries <strong>only vote and custom jsons</strong> by the account named <code class="language-plaintext highlighter-rouge">charlie</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"emma"</code></td>
            <td><code class="language-plaintext highlighter-rouge">-1</code></td>
            <td><code class="language-plaintext highlighter-rouge">1000</code></td>
            <td>"proposal_pay"</td>
            <td>Queries <strong>only proposal payments</strong> by the account named <code class="language-plaintext highlighter-rouge">emma</code> starting on the oldest item in history, up to 1,000 results.</td>
          </tr>
        </tbody>
      </table>`,
    response: `{
      "history": [
        [
          1988393,
          {
            "trx_id": "dbe37b48e56cc6e1ebd970b6f375e96ebafb11b1",
            "block": 73739699,
            "trx_in_block": 17,
            "op_in_trx": 0,
            "virtual_op": false,
            "timestamp": "2023-04-05T12:30:03",
            "op": {
              "type": "vote_operation",
              "value": {
                "voter": "asean.hive",
                "author": "ecency",
                "permlink": "re-2023330t43324609z",
                "weight": 130
              }
            },
            "operation_id": 0
          }
        ],
        [
          1988394,
          {
            "trx_id": "dbe37b48e56cc6e1ebd970b6f375e96ebafb11b1",
            "block": 73739699,
            "trx_in_block": 17,
            "op_in_trx": 1,
            "virtual_op": true,
            "timestamp": "2023-04-05T12:30:03",
            "op": {
              "type": "effective_comment_vote_operation",
              "value": {
                "voter": "asean.hive",
                "author": "ecency",
                "permlink": "re-2023330t43324609z",
                "weight": "7292612308",
                "rshares": "58340898469",
                "total_vote_weight": "9083606577",
                "pending_payout": {
                  "amount": "39",
                  "precision": 3,
                  "nai": "@@000000013"
                }
              }
            },
            "operation_id": 0
          }
        ],
        [
          1988395,
          {
            "trx_id": "af7ad4613b76d27821e180d510e4abcdd32466cd",
            "block": 73739759,
            "trx_in_block": 10,
            "op_in_trx": 0,
            "virtual_op": false,
            "timestamp": "2023-04-05T12:33:03",
            "op": {
              "type": "claim_account_operation",
              "value": {
                "creator": "ecency",
                "fee": {
                  "amount": "0",
                  "precision": 3,
                  "nai": "@@000000021"
                },
                "extensions": []
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
    parameter: `<code>account: string, username</code>`,
    isArray: true,
    description:_t("condenser_api.get_owner_history_description"),
    url: `${ConfigItems.baseUrl}/api/get_owner_history?account="demo"`,
    response: `[
      {
        "id": 715075,
        "account": "demo",
        "previous_owner_authority": {
          "weight_threshold": 1,
          "account_auths": [],
          "key_auths": [
            [
              "STM7ZpZ5qckeukBnZ2YerFbdb3VQWaXhJHJW9XSL8mUeD8XLutq2c",
              1
            ]
          ]
        },
        "last_valid_time": "2023-03-22T13:53:18"
      },
      {
        "id": 716033,
        "account": "demo",
        "previous_owner_authority": {
          "weight_threshold": 1,
          "account_auths": [],
          "key_auths": [
            [
              "STM5RpUEnKRApjVARnvW9mgEJ9BpDNxJrtAc9FpcP9zAb4pob3aA5",
              1
            ]
          ]
        },
        "last_valid_time": "2023-04-04T21:20:48"
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_recovery_request",
    params: ["account"],
    parameter: `<code>account: string, username</code>`,
    isArray: true,
    description:_t("condenser_api.get_recovery_request_description"),
    url: `${ConfigItems.baseUrl}/api/get_recovery_request?account="demo"`,
    response: `{
      "id": 3841,
      "account_to_recover": "demo",
      "new_owner_authority": {
        "weight_threshold": 1,
        "account_auths": [],
        "key_auths": [
          [
            "STM7yCitH4Dk2EySdvAuZ9E94AZjoFvzEdqHKSZ33HbWAXDSfG1mT",
            1
          ]
        ]
      },
      "expires": "2023-04-06T18:19:51"
    }`
  },
  {
    api: "condenser_api",
    method: "get_escrow",
    params: ["from", "escrow_id"],
    parameter: `<code>from: string, username, escrow_id: int</code>`,
    isArray: true,
    description:_t("condenser_api.get_escrow_description"),
    url: `${ConfigItems.baseUrl}/api/get_escrow?from="temp"&escrow_id=12345`,
    response: `{
      "id": 143,
      "escrow_id": 12345,
      "from": "temp",
      "to": "guest123",
      "agent": "smitop",
      "ratification_deadline": "2038-01-19T03:14:06",
      "escrow_expiration": "2038-01-19T03:14:07",
      "hbd_balance": "0.000 HBD",
      "hive_balance": "0.001 HIVE",
      "pending_fee": "0.001 HIVE",
      "to_approved": false,
      "agent_approved": false,
      "disputed": false
    }`
  },
  {
    api: "condenser_api",
    method: "get_withdraw_routes",
    params: ["account", "type"],
    parameter: `<code>account:string; type:string, "incoming"|"outgoing"|"all"</code>`,
    isArray: true,
    description:_t("condenser_api.get_withdraw_routes_description"),
    url: `${ConfigItems.baseUrl}/api/get_withdraw_routes?account="blocktrades"&type="all"`,
    response: `[
      {
        "id": 924,
        "from_account": "blocktrades",
        "to_account": "anastacia",
        "percent": 2500,
        "auto_vest": false
      },
      {
        "id": 912,
        "from_account": "blocktrades",
        "to_account": "ashleigh",
        "percent": 2500,
        "auto_vest": false
      },
      {
        "id": 925,
        "from_account": "blocktrades",
        "to_account": "cleta",
        "percent": 2500,
        "auto_vest": false
      },
      {
        "id": 24484,
        "from_account": "arsahk",
        "to_account": "blocktrades",
        "percent": 10000,
        "auto_vest": true
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_savings_withdraw_from",
    isArray: true,
    params: ["account"],
    parameter: `<code>account:string;</code>`,
    description:_t("condenser_api.get_savings_withdraw_from_description"),
    url: `${ConfigItems.baseUrl}/api/get_savings_withdraw_from?account="ecency"`,
    response: `[
      {
        "id": 167869,
        "from": "ecency",
        "to": "ecency",
        "memo": "",
        "request_id": 1132116381,
        "amount": "1.570 HBD",
        "complete": "2023-04-05T19:38:51"
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_savings_withdraw_to",
    isArray: true,
    params: ["account"],
    parameter: `<code>account:string;</code>`,
    description:_t("condenser_api.get_savings_withdraw_to_description"),
    url: `${ConfigItems.baseUrl}/api/get_savings_withdraw_to?account="ecency"`,
    response: `[
      {
        "id": 167869,
        "from": "ecency",
        "to": "ecency",
        "memo": "",
        "request_id": 1132116381,
        "amount": "1.570 HBD",
        "complete": "2023-04-05T19:38:51"
      }
    ]`
  },
  {
    api: "database_api",
    method: "get_order_book",
    params: ["limit"],
    parameter: `<code>limit: int;</code>`,
    description:_t("database_api.get_order_book_description"),
    url: `${ConfigItems.baseUrl}/api/get_order_book?limit=2`,
    response: `{
      "bids": [
        {
          "order_price": {
            "base": "114.788 HBD",
            "quote": "274.343 HIVE"
          },
          "real_price": "0.41841052988412314",
          "hive": 274343,
          "hbd": 114788,
          "created": "2023-04-05T18:32:18"
        },
        {
          "order_price": {
            "base": "2.000 HBD",
            "quote": "4.780 HIVE"
          },
          "real_price": "0.41841004184100417",
          "hive": 4780,
          "hbd": 2000,
          "created": "2023-04-05T18:31:21"
        }
      ],
      "asks": [
        {
          "order_price": {
            "base": "45.564 HIVE",
            "quote": "19.114 HBD"
          },
          "real_price": "0.41949784917917654",
          "hive": 45564,
          "hbd": 19114,
          "created": "2023-04-05T18:07:09"
        },
        {
          "order_price": {
            "base": "4.325 HIVE",
            "quote": "1.816 HBD"
          },
          "real_price": "0.41988439306358383",
          "hive": 4325,
          "hbd": 1816,
          "created": "2023-04-05T18:31:24"
        }
      ]
    }`
  },
  {
    api: "condenser_api",
    method: "get_open_orders",
    isArray: true,
    params: ["owner"],
    parameter: `<code>owner: string;</code>`,
    description:_t("condenser_api.get_open_orders_description"),
    url: `${ConfigItems.baseUrl}/api/get_open_orders?owner="quicktrades"`,
    response: `[
      {
        "id": 7511029,
        "created": "2023-04-05T18:37:57",
        "expiration": "2023-04-12T18:37:54",
        "seller": "quicktrades",
        "orderid": 337320808,
        "for_sale": 2000,
        "sell_price": {
          "base": "2.000 HBD",
          "quote": "4.781 HIVE"
        },
        "real_price": "0.41832252666806108",
        "rewarded": false
      },
      {
        "id": 7511030,
        "created": "2023-04-05T18:37:57",
        "expiration": "2023-04-12T18:37:54",
        "seller": "quicktrades",
        "orderid": 1917393794,
        "for_sale": 2162,
        "sell_price": {
          "base": "2.162 HIVE",
          "quote": "0.910 HBD"
        },
        "real_price": "0.42090656799259946",
        "rewarded": false
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_transaction",
    isArray: true,
    params: ["trx_id"],
    parameter: `<code>trx_id: string</code>`,
    description:_t("condenser_api.get_transaction_description"),
    url:`${ConfigItems.baseUrl}/api/get_transaction?trx_id="131c3a1af52094efb6dc15d3c56029716eb81bd6"`,
    response: `{
      "ref_block_num": 26457,
      "ref_block_prefix": 2669742647,
      "expiration": "2020-06-04T15:42:06",
      "operations": [
        [
          "claim_account",
          {
            "creator": "ecency",
            "fee": "0.000 HIVE",
            "extensions": []
          }
        ]
      ],
      "extensions": [],
      "signatures": [
        "1f3263277fed656d2750f30f31e788c6b25984e891258a6ee72fad2975dbe2d50e6bcd9497a7f70e79c95d07e70db82ebb026c521692715a617616332d75056d8c"
      ],
      "transaction_id": "131c3a1af52094efb6dc15d3c56029716eb81bd6",
      "block_num": 44001115,
      "transaction_num": 12
    }`
  },
  {
    api: "condenser_api",
    method: "get_active_votes",
    description:_t("condenser_api.get_active_votes_description"),
    params: ["author", "permlink"],
    parameter: `<code>author:string; permlink:string</code>
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
    url:`${ConfigItems.baseUrl}/api/get_active_votes?author="ecency"&permlink="token"`,
    response: `[
      {
        "percent": 4000,
        "reputation": 341233778618,
        "rshares": 620233031504,
        "time": "2021-02-09T10:08:03",
        "voter": "boatymcboatface",
        "weight": 54637
      },
      {
        "percent": 10000,
        "reputation": 29261302889705,
        "rshares": 102981908948,
        "time": "2021-02-10T01:36:45",
        "voter": "pnc",
        "weight": 10859
      },
      {
        "percent": 4000,
        "reputation": 2113488095257878,
        "rshares": 175004643152,
        "time": "2021-02-09T10:07:51",
        "voter": "kingscrown",
        "weight": 16050
      },
      {
        "percent": 4000,
        "reputation": 4509451541223,
        "rshares": 166506389261,
        "time": "2021-02-09T10:08:03",
        "voter": "theshell",
        "weight": 14291
      },
      {
        "percent": 1000,
        "reputation": 111421113086228,
        "rshares": 53917829731,
        "time": "2021-02-09T10:30:48",
        "voter": "mammasitta",
        "weight": 3523
      },
      {
        "percent": 10000,
        "reputation": 641780297267791,
        "rshares": 1476271004323,
        "time": "2021-02-09T10:10:39",
        "voter": "good-karma",
        "weight": 122140
      }
    ]`
  },
  {
    api: "database_api",
    method: "list_votes",
    params: ["start", "limit", "order"],
    parameter: `<code>start:array; limit:int; order:string</code>
      <ul>
        <li><code class="language-plaintext highlighter-rouge">start</code> depends on <code class="language-plaintext highlighter-rouge">order</code> (see below)
          <ul>
            <li><code class="language-plaintext highlighter-rouge">voter</code> is optional</li>
            <li><code class="language-plaintext highlighter-rouge">author</code> and <code class="language-plaintext highlighter-rouge">permlink</code> are optional, but if one is blank, they must both be blank</li>
          </ul>
        </li>
        <li><code class="language-plaintext highlighter-rouge">limit</code> is up to 1000.</li>
        <li><code class="language-plaintext highlighter-rouge">order</code> can be one of:
          <ul>
            <li><code class="language-plaintext highlighter-rouge">by_comment_voter</code> - order by comment voter
              <ul>
                <li><code class="language-plaintext highlighter-rouge">start</code> is an array of three optional values: <code class="language-plaintext highlighter-rouge">author</code>, <code class="language-plaintext highlighter-rouge">permlink</code>, <code class="language-plaintext highlighter-rouge">voter</code></li>
              </ul>
            </li>
            <li><code class="language-plaintext highlighter-rouge">by_voter_comment</code> - order by voter comment
              <ul>
                <li><code class="language-plaintext highlighter-rouge">start</code> is an array of three optional values: <code class="language-plaintext highlighter-rouge">voter</code>, <code class="language-plaintext highlighter-rouge">author</code>, <code class="language-plaintext highlighter-rouge">permlink</code></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">start</code> (array)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th><code class="language-plaintext highlighter-rouge">order</code> (string)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["", "", ""]</code></td>
            <td>10</td>
            <td><code class="language-plaintext highlighter-rouge">"by_comment_voter"</code></td>
            <td>Queries first 10 votes, sort by comment voter</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["", "", ""]</code></td>
            <td>10</td>
            <td><code class="language-plaintext highlighter-rouge">"by_voter_comment"</code></td>
            <td>Queries first 10 votes, sort by voter comment</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["xeroc", "vanteem-config", ""]</code></td>
            <td>10</td>
            <td><code class="language-plaintext highlighter-rouge">"by_comment_voter"</code></td>
            <td>Queries next 10 votes starting on the post <code class="language-plaintext highlighter-rouge">@xeroc/vanteem-config</code>, sort by comment voter</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["alice", "xeroc", "vanteem-config"]</code></td>
            <td>10</td>
            <td><code class="language-plaintext highlighter-rouge">"by_voter_comment"</code></td>
            <td>Queries next 10 votes starting at alice on the post <code class="language-plaintext highlighter-rouge">@xeroc/vanteem-config</code>, sort by voter comment</td>
          </tr>
        </tbody>
      </table>`,
    description:_t("database_api.list_votes_description"),
    url:`${ConfigItems.baseUrl}/api/list_votes?start=["good-karma","ecency","token"]&limit=10&order="by_voter_comment"`,
    response: `{
      "votes": [
        {
          "id": 635177704,
          "voter": "good-karma",
          "author": "ecency",
          "permlink": "token",
          "weight": 122140,
          "rshares": 1476271004323,
          "vote_percent": 10000,
          "last_update": "2021-02-09T10:10:39",
          "num_changes": 0
        },
        {
          "id": 635512875,
          "voter": "good-karma",
          "author": "podewils",
          "permlink": "astronomy-picture-of-the-day-867b5f62880c6",
          "weight": 88629,
          "rshares": 281499436177,
          "vote_percent": 1828,
          "last_update": "2021-02-10T19:23:27",
          "num_changes": 0
        },
        {
          "id": 635184320,
          "voter": "good-karma",
          "author": "foxkoit",
          "permlink": "i-had-small-frost",
          "weight": 43494,
          "rshares": 258053213886,
          "vote_percent": 1773,
          "last_update": "2021-02-09T10:56:48",
          "num_changes": 0
        },
        {
          "id": 635187966,
          "voter": "good-karma",
          "author": "cryptaurus8",
          "permlink": "big-developer-announcements-from-e2",
          "weight": 87393,
          "rshares": 258791131071,
          "vote_percent": 1789,
          "last_update": "2021-02-09T11:24:42",
          "num_changes": 0
        },
        {
          "id": 635276324,
          "voter": "good-karma",
          "author": "drax",
          "permlink": "retro-film-review-jawbreaker-1999",
          "weight": 32728,
          "rshares": 74716690773,
          "vote_percent": 504,
          "last_update": "2021-02-09T19:50:45",
          "num_changes": 0
        },
        {
          "id": 635240423,
          "voter": "good-karma",
          "author": "tinta-tertuang",
          "permlink": "fascinating-insects-or-or-15-best-pictures-of-insects-during-drought",
          "weight": 13730,
          "rshares": 88416986177,
          "vote_percent": 596,
          "last_update": "2021-02-09T16:22:24",
          "num_changes": 0
        },
        {
          "id": 635755670,
          "voter": "good-karma",
          "author": "podewils",
          "permlink": "astronomy-picture-of-the-day-a9e3e5f8e5976",
          "weight": 65591,
          "rshares": 238656149776,
          "vote_percent": 1519,
          "last_update": "2021-02-11T19:55:09",
          "num_changes": 0
        },
        {
          "id": 635351200,
          "voter": "good-karma",
          "author": "masummim50",
          "permlink": "male-portrait-drawing-in-scribble-way-with-blue-ball-point-pen",
          "weight": 17516,
          "rshares": 105774927155,
          "vote_percent": 682,
          "last_update": "2021-02-10T02:32:21",
          "num_changes": 0
        },
        {
          "id": 635292867,
          "voter": "good-karma",
          "author": "giovannigovo",
          "permlink": "lungo-la-battigia-respiro-camino-along-the-shoreline-i-breathe-i-walk",
          "weight": 24974,
          "rshares": 75315433457,
          "vote_percent": 506,
          "last_update": "2021-02-09T21:27:03",
          "num_changes": 0
        },
        {
          "id": 635206392,
          "voter": "good-karma",
          "author": "kriang3tee",
          "permlink": "qo9ijr",
          "weight": 20481,
          "rshares": 83386433587,
          "vote_percent": 570,
          "last_update": "2021-02-09T13:13:09",
          "num_changes": 0
        }
      ]
    }`
  },
  {
    api: "condenser_api",
    method: "get_content",
    params: ["author", "permlink"],
    parameter: `<code>author:string; permlink:string;</code>`,
    description:_t("condenser_api.get_content_description"),
    url: `${ConfigItems.baseUrl}/api/get_content?author="ecency"&permlink="token"`,
    response: `{
      "author": "ecency",
      "permlink": "token",
      "category": "hive-125125",
      "title": "Token",
      "body": "Most Ecency users know about history of our [Points](https://ecency.com/esteem/@esteemapp/estm-mining-use-cases-and-investment-opportunities) and how after rebranding we gave it placeholder name as Points. Since 2nd layer tokenization is still being worked on by multiple teams on Hive, we had extra time to work on our website, apps and add more functionality. Work on improving use cases, which in this post we want to give you an update about state of Points (\"your entry to Token\").\n\n![ecen_token.png](https://images.ecency.com/DQmRUffaVuBDqWTDCNsAtYEAkLA2Q1nwRq4KPQKY9bZW14p/ecen_token.png)\n\n# Supply \n\nTotal fixed supply: 1,000,000,000\n\nMining/minting allocation: 65%\nIncentive, referral, bounty programs: 15%\nIn-app purchases: 10%\nReserve: 5%\nTeam allocation: 5%\n\n### Current state\n\nCirculating supply: 360,056,955.134\n\nTop 10 holders:\n@roundbeargames\n@lebin\n@noel83\n@melinda010100\n@tempravis\n@btscn\n@circa\n@mcoinz79\n@janton\n@gamer00\n\n# Economics\n\nWe have decided fixed supply to make sure system is self-sustaining, so with time demand and supply equation would find equilibrium. Points are minted just by using Ecency apps or by delegating to HP to @ecency, so everyone who uses either Ecency website, desktop or mobile app, already knows how earning works and how fun it is.\n\nOnce max supply is reached, pool allocation is recycled. How this works?! Currently every time user uses Points to promote or boost their content, points are sent to reward pool reserve and after max supply is reached those points are sent back to reward pool which is minted by users again, token cycles in system. Some similar token-economics usually add small fee to burn and lower the supply, which might be interesting to analize in future.  Now, we wanted to decentralize this new rewarding system but on-chain SMT or other solutions were not ready or mature enough that gives us smart contract functionality. But since current Points system is great for distribution of our actual token, we are not rushing this decision and do what's best for growth, plan long term.\n\n# Use cases\n\nPoints can be used for Promoting content which will promote content across the feeds to all Ecency users. Boosting content is getting limited boost to content in form of curation/vote. Gifting is to basically tip or transfer Points to another user. Now we are working on next use cases which we thinking might help us gradually decentralize and establish our token that's both sustainable and widely used. \nOne of such use case that we think will excite everyone is Community points and have your own community standout, as more people post in your community from Ecency the more your community account earn Points, that way you can use extra rewards to organize giveaway, contest and manage, grow your community. \nMore on other use cases later, there is one more which we think will take this into next level. Stay tuned.\n\n# Earn now\n\n- Earn Ecency Points now by using Ecency apps.\n- Refer friends to earn even more, referral link example: https://ecency.com/signup?referral=ecency\n- By delegating HP to @ecency account. Delegation rewards daily Points, for example 1000 HP delegation mints out ~100 Points daily. Delegation also helps us to onboard more users to Hive which we have been doing for few months now, successfully.\n\nLearn more in our FAQ: https://ecency.com/faq\n \n### https://ecency.com  \n##### iOS https://ios.ecency.com  \n##### Android https://android.ecency.com  \n##### Desktop https://desktop.ecency.com  \n \n---  \n \n### Do you like our work? Support [Ecency proposal](https://ecency.com/hive/@ecency/proposal-ecency-development-and-maintenance):  \nEcency: https://ecency.com/proposals/141  \nHivesigner: [Vote for Proposal](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true)",
      "json_metadata": "{\"links\":[\"https://ecency.com/esteem/@esteemapp/estm-mining-use-cases-and-investment-opportunities\",\"https://ecency.com/signup?referral=ecency\",\"https://ecency.com/faq\",\"https://ecency.com\",\"https://ios.ecency.com\",\"https://android.ecency.com\",\"https://desktop.ecency.com\",\"https://ecency.com/hive/@ecency/proposal-ecency-development-and-maintenance\",\"https://ecency.com/proposals/141\",\"https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true\"],\"image\":[\"https://images.ecency.com/DQmRUffaVuBDqWTDCNsAtYEAkLA2Q1nwRq4KPQKY9bZW14p/ecen_token.png\"],\"users\":[\"roundbeargames\",\"lebin\",\"noel83\",\"melinda010100\",\"tempravis\",\"btscn\",\"circa\",\"mcoinz79\",\"janton\",\"gamer00\",\"ecency\",\"ecency\"],\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.13-vision\",\"format\":\"markdown+html\"}",
      "created": "2021-02-09T10:02:36",
      "last_update": "2021-02-09T10:34:06",
      "depth": 0,
      "children": 44,
      "last_payout": "2021-02-16T10:02:36",
      "cashout_time": "1969-12-31T23:59:59",
      "total_payout_value": "0.000 HBD",
      "curator_payout_value": "0.000 HBD",
      "pending_payout_value": "0.000 HBD",
      "promoted": "0.000 HBD",
      "replies": [],
      "body_length": 3812,
      "author_reputation": 403995043911687,
      "parent_author": "",
      "parent_permlink": "hive-125125",
      "url": "/hive-125125/@ecency/token",
      "root_title": "Token",
      "beneficiaries": [],
      "max_accepted_payout": "0.000 HBD",
      "percent_hbd": 10000,
      "id": 101790300,
      "author_rewards": 0,
      "max_cashout_time": "1969-12-31T23:59:59",
      "reward_weight": 10000,
      "root_author": "ecency",
      "root_permlink": "token",
      "allow_replies": true,
      "allow_votes": true,
      "allow_curation_rewards": true,
      "reblogged_by": [],
      "net_votes": 242,
      "children_abs_rshares": 0,
      "total_pending_payout_value": "0.000 HBD",
      "total_vote_weight": 0,
      "vote_rshares": 0,
      "net_rshares": 0,
      "abs_rshares": 0,
      "active_votes": [
        {
          "percent": 4000,
          "reputation": 341233778618,
          "rshares": 620233031504,
          "time": "2021-02-09T10:08:03",
          "voter": "boatymcboatface",
          "weight": 54637
        },
        {
          "percent": 10000,
          "reputation": 29261302889705,
          "rshares": 102981908948,
          "time": "2021-02-10T01:36:45",
          "voter": "pnc",
          "weight": 10859
        },
        {
          "percent": 4000,
          "reputation": 2113489043779584,
          "rshares": 175004643152,
          "time": "2021-02-09T10:07:51",
          "voter": "kingscrown",
          "weight": 16050
        }
      ]
    }`
  },
  {
    api: "condenser_api",
    method: "get_content_replies",
    params: ["author", "permlink"],
    parameter: `<code>author:string; permlink:string;</code>`,
    description:_t("condenser_api.get_content_replies_description"),
    url: `${ConfigItems.baseUrl}/api/get_content_replies?author="ecency"&permlink="token"`,
    response: `[
      {
        "author": "iliyan90",
        "permlink": "re-ecency-202129t121559910z",
        "category": "hive-125125",
        "title": "",
        "body": "@ecency I'm gonna be teaching how to use ecency to the Bulgarian community from scratch very soon as I've tried to do in:\n## [This post](https://ecency.com/hive-172868/@iliyan90/predizvikatelstvo-1-den-v-socialnite-mrezhi)\n\nto show them and to use different futures of @ecency @dapplr @peakd by me sharing the rewards from the post with some of them.\n\nBut still for many of them is very complicated to operate on the network.\n\n\n![img_3051.png](https://images.ecency.com/DQme1i3maKDZHFwZqceRHWHeZ5to5NATm19V5stNcMj3Nyn/img_3051.png)\n\n\n",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T10:16:00",
        "last_update": "2021-02-09T10:16:00",
        "depth": 1,
        "children": 7,
        "last_payout": "2021-02-16T10:16:00",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.026 HBD",
        "curator_payout_value": "0.026 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 534,
        "author_reputation": 139027745069976,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@iliyan90/re-ecency-202129t121559910z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101790408,
        "author_rewards": 110,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 1,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": 2050,
            "reputation": 146260184545656,
            "rshares": 231974905961,
            "time": "2021-02-09T17:08:33",
            "voter": "gamer00",
            "weight": 112742
          },
          {
            "percent": 10000,
            "reputation": 6651953091,
            "rshares": 0,
            "time": "2022-01-11T13:10:36",
            "voter": "johnbaby54",
            "weight": 0
          }
        ]
      },
      {
        "author": "cwow2",
        "permlink": "re-ecency-202129t11162483z",
        "category": "hive-125125",
        "title": "",
        "body": "Well there be a internal system where we can buy and sell tokens? E.g to other users where ecency maybe take a fee or will the token be on HE?",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T10:16:03",
        "last_update": "2021-02-09T10:16:03",
        "depth": 1,
        "children": 3,
        "last_payout": "2021-02-16T10:16:03",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.026 HBD",
        "curator_payout_value": "0.026 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 142,
        "author_reputation": 153779939680571,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@cwow2/re-ecency-202129t11162483z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101790409,
        "author_rewards": 109,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 1,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": 2050,
            "reputation": 146260184545656,
            "rshares": 228169294789,
            "time": "2021-02-09T11:41:48",
            "voter": "gamer00",
            "weight": 110942
          },
          {
            "percent": 10000,
            "reputation": 6651953091,
            "rshares": 0,
            "time": "2022-01-11T13:10:42",
            "voter": "johnbaby54",
            "weight": 0
          }
        ]
      },
      {
        "author": "iliyan90",
        "permlink": "re-ecency-202129t121614663z",
        "category": "hive-125125",
        "title": "",
        "body": "@tipu curate",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T10:16:15",
        "last_update": "2021-02-09T10:16:15",
        "depth": 1,
        "children": 1,
        "last_payout": "2021-02-16T10:16:15",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 12,
        "author_reputation": 139027745069976,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@iliyan90/re-ecency-202129t121614663z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101790412,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": 10000,
            "reputation": 6651953091,
            "rshares": 0,
            "time": "2022-01-11T13:11:00",
            "voter": "johnbaby54",
            "weight": 0
          }
        ]
      },
      {
        "author": "melinda010100",
        "permlink": "re-ecency-202129t45253855z",
        "category": "hive-125125",
        "title": "",
        "body": "Wow! Community POINTS sounds really exciting! ♥️",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T10:52:54",
        "last_update": "2021-02-09T10:52:54",
        "depth": 1,
        "children": 2,
        "last_payout": "2021-02-16T10:52:54",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.094 HBD",
        "curator_payout_value": "0.094 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 48,
        "author_reputation": 601625354285830,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@melinda010100/re-ecency-202129t45253855z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101790780,
        "author_rewards": 392,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 2,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": 2050,
            "reputation": 146260184545656,
            "rshares": 229153686302,
            "time": "2021-02-09T17:09:12",
            "voter": "gamer00",
            "weight": 98311
          },
          {
            "percent": 580,
            "reputation": 403995043911687,
            "rshares": 549240345348,
            "time": "2021-02-09T11:18:54",
            "voter": "ecency",
            "weight": 257472
          },
          {
            "percent": 10000,
            "reputation": 6651953091,
            "rshares": 0,
            "time": "2022-01-11T13:10:18",
            "voter": "johnbaby54",
            "weight": 0
          }
        ]
      },
      {
        "author": "poshbot",
        "permlink": "re-token-20210209t113253z",
        "category": "hive-125125",
        "title": "",
        "body": "https://twitter.com/Bhattg18/status/1359102943601905669",
        "json_metadata": "{\"app\": \"beem/0.24.20\"}",
        "created": "2021-02-09T11:32:54",
        "last_update": "2021-02-09T11:32:54",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-16T11:32:54",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 55,
        "author_reputation": 5554335374496,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@poshbot/re-token-20210209t113253z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101791189,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "bhattg",
        "permlink": "re-ecency-202129t17537906z",
        "category": "hive-125125",
        "title": "",
        "body": "Wow this is really a great new 😀🙏🍻.\n",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.13-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T11:35:39",
        "last_update": "2021-02-09T11:35:39",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-16T11:35:39",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.026 HBD",
        "curator_payout_value": "0.026 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 36,
        "author_reputation": 295203113476886,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@bhattg/re-ecency-202129t17537906z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101791226,
        "author_rewards": 109,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 1,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": 2050,
            "reputation": 146260184545656,
            "rshares": 229099073265,
            "time": "2021-02-09T11:41:30",
            "voter": "gamer00",
            "weight": 111382
          },
          {
            "percent": 10000,
            "reputation": 6651953091,
            "rshares": 0,
            "time": "2022-01-11T13:10:57",
            "voter": "johnbaby54",
            "weight": 0
          }
        ]
      },
      {
        "author": "alokkumar121",
        "permlink": "re-ecency-202129t17464935z",
        "category": "hive-125125",
        "title": "",
        "body": "this is exciting and I look forward to having more details about it. ",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.13-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T12:16:03",
        "last_update": "2021-02-09T12:16:03",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-16T12:16:03",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 69,
        "author_reputation": 1249643260012318,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@alokkumar121/re-ecency-202129t17464935z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101791609,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "seckorama",
        "permlink": "re-ecency-202129t1595613z",
        "category": "hive-125125",
        "title": "",
        "body": "I support Community points. That's a good idea to form some basic fund for community functioning. 👍",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.13-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T14:09:06",
        "last_update": "2021-02-09T14:09:06",
        "depth": 1,
        "children": 1,
        "last_payout": "2021-02-16T14:09:06",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 99,
        "author_reputation": 295768300933256,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@seckorama/re-ecency-202129t1595613z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101793075,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "jozef230",
        "permlink": "re-ecency-202129t153841664z",
        "category": "hive-125125",
        "title": "",
        "body": "Great info🙏",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T14:38:42",
        "last_update": "2021-02-09T14:38:42",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-16T14:38:42",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 11,
        "author_reputation": 176437603283189,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@jozef230/re-ecency-202129t153841664z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101793501,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": -1,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": -25,
            "reputation": 68307351609170,
            "rshares": -5397906788,
            "time": "2021-02-09T14:39:51",
            "voter": "spaminator",
            "weight": 0
          }
        ]
      },
      {
        "author": "ninahaskin",
        "permlink": "re-ecency-202129t92948372z",
        "category": "hive-125125",
        "title": "",
        "body": "The techie guys and gals behind the scenes at @ecency are spoiling us with all of the upcoming bells and whistles -- but we don't mind! 💯",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-09T15:29:48",
        "last_update": "2021-02-09T15:29:48",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-16T15:29:48",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.032 HBD",
        "curator_payout_value": "0.033 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 137,
        "author_reputation": 139987441472367,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@ninahaskin/re-ecency-202129t92948372z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101794161,
        "author_rewards": 136,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 1,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": 300,
            "reputation": 403995043911687,
            "rshares": 286257316878,
            "time": "2021-02-09T18:03:48",
            "voter": "ecency",
            "weight": 138255
          },
          {
            "percent": 10000,
            "reputation": 6651953091,
            "rshares": 0,
            "time": "2022-01-11T13:10:21",
            "voter": "johnbaby54",
            "weight": 0
          }
        ]
      },
      {
        "author": "jilt",
        "permlink": "re-ecency-2021210t111416421z",
        "category": "hive-125125",
        "title": "",
        "body": "!discovery nest",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-10T10:14:15",
        "last_update": "2021-02-10T10:14:15",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-17T10:14:15",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 15,
        "author_reputation": 24866531417502,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@jilt/re-ecency-2021210t111416421z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101805305,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "discovery-it",
        "permlink": "re-ecency-qx1mi8uh5r",
        "category": "hive-125125",
        "title": "",
        "body": "<div class=\"pull-left\">https://images.hive.blog/DQmUebzCryxzBU1c2BKo1KSvcp8nnwnNTKA22ugJxtibK58/banner-smafffffll.gif</div><br><br><br>This post was shared and voted inside the discord by the curators team of <a href=\"https://discord.gg/cMMp943\"> Discovery-it</a> in collaboration with <a href=\"https://hive.blog/trending/hive-196294\"> Nestedneons</a> community. <br>Discovery-it is also a Witness, vote for us <a href = \"https://hivesigner.com/sign/account-witness-vote?witness=discovery-it&approve=true\"> here</a> <br>Delegate to us for passive income. Check our <a href = \"https://hive.blog/hive-193212/@discovery-it/delegations-program-80-fee-back\"> 80% fee-back Program</a> <hr>",
        "json_metadata": "{\"app\": \"beem/0.24.19\"}",
        "created": "2021-02-10T10:14:30",
        "last_update": "2021-02-10T10:14:30",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-17T10:14:30",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 683,
        "author_reputation": 30856212949541,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@discovery-it/re-ecency-qx1mi8uh5r",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101805308,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "stefano.massari",
        "permlink": "re-ecency-2021210t11412643z",
        "category": "hive-125125",
        "title": "",
        "body": "great news!  we are also waiting for the new token name",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-10T10:41:24",
        "last_update": "2021-02-10T10:41:24",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-17T10:41:24",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 55,
        "author_reputation": 108204028620451,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@stefano.massari/re-ecency-2021210t11412643z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101805509,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "zo3d",
        "permlink": "re-ecency-2021211t15127631z",
        "category": "hive-125125",
        "title": "",
        "body": "Is there a way to personally refer a friend to ecency? Not a generic new user link?",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-11T13:01:30",
        "last_update": "2021-02-11T13:01:30",
        "depth": 1,
        "children": 1,
        "last_payout": "2021-02-18T13:01:30",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 83,
        "author_reputation": 190810033590760,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@zo3d/re-ecency-2021211t15127631z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101822478,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "bigtakosensei",
        "permlink": "re-ecency-2021211t1281275z",
        "category": "hive-125125",
        "title": "",
        "body": "This is amazing! I just st did a walkthrough on the mobile app a couple of days ago but I didn’t know this was going on. This is puts ecency o er the top for me. I already really enjoyed using this app ",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.14-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-02-11T18:08:12",
        "last_update": "2021-02-11T18:08:12",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-02-18T18:08:12",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 202,
        "author_reputation": 46765053372711,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@bigtakosensei/re-ecency-2021211t1281275z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101826366,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "natepowers",
        "permlink": "re-ecency-2021212t17842350z",
        "category": "hive-125125",
        "title": "",
        "body": "Help @ecency I have used ecency point's to advertise and I tried advertising twice, each time the transaction went through, but I don't know if you received the right information to promote my link, I am confused with how im supposed to enter the username/permlink \n\nMy username is @natepowers than how do I add the link https://hive.blog/hive/@natepowers/hive-campaign-sam-tripoli-cash-daddies,\n please help\n\n\n\n",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.13-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-02-12T23:08:42",
        "last_update": "2021-02-12T23:08:42",
        "depth": 1,
        "children": 1,
        "last_payout": "2021-02-19T23:08:42",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 412,
        "author_reputation": 26761401660669,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@natepowers/re-ecency-2021212t17842350z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101847293,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "cmmemes",
        "permlink": "re-ecency-qoh44z",
        "category": "hive-125125",
        "title": "",
        "body": "I'm a bit confused, will current point hodlers receive an airdrop of the new ecency token or have will they a special discount on the new tokens?",
        "json_metadata": "{\"tags\":[\"hive-125125\"],\"app\":\"peakd/2021.01.3\"}",
        "created": "2021-02-13T15:24:36",
        "last_update": "2021-02-13T15:26:42",
        "depth": 1,
        "children": 2,
        "last_payout": "2021-02-20T15:24:36",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 145,
        "author_reputation": 84153997306700,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@cmmemes/re-ecency-qoh44z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 101856509,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "charlonius",
        "permlink": "re-ecency-2021616t2138473z",
        "category": "hive-125125",
        "title": "",
        "body": "Nice",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.18-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-06-15T19:01:42",
        "last_update": "2021-06-15T19:01:42",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-06-22T19:01:42",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 4,
        "author_reputation": 0,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@charlonius/re-ecency-2021616t2138473z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 104352099,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "marthaisela",
        "permlink": "re-ecency-2021728t184053824z",
        "category": "hive-125125",
        "title": "",
        "body": "Excelente!!! Feliz de estar aqui ",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.18-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-07-28T23:40:54",
        "last_update": "2021-07-28T23:40:54",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-08-04T23:40:54",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 33,
        "author_reputation": 1000954736811,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@marthaisela/re-ecency-2021728t184053824z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 105178943,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 1,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": [
          {
            "percent": 10000,
            "reputation": 967746464,
            "rshares": 3878820197,
            "time": "2021-08-04T00:08:06",
            "voter": "javier42",
            "weight": 484852524
          }
        ]
      },
      {
        "author": "shiftrox",
        "permlink": "re-ecency-2021912t175017141z",
        "category": "hive-125125",
        "title": "",
        "body": "Nice site, nice token <3",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.19-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-09-12T20:50:18",
        "last_update": "2021-09-12T20:50:18",
        "depth": 1,
        "children": 0,
        "last_payout": "2021-09-19T20:50:18",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 24,
        "author_reputation": 172286347759391,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@shiftrox/re-ecency-2021912t175017141z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 106230591,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "aulaikings0121",
        "permlink": "re-ecency-20211231t01416526z",
        "category": "hive-125125",
        "title": "",
        "body": "Awesome 👍",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.23-mobile\",\"format\":\"markdown+html\"}",
        "created": "2021-12-31T08:14:15",
        "last_update": "2021-12-31T08:14:15",
        "depth": 1,
        "children": 0,
        "last_payout": "2022-01-07T08:14:15",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 9,
        "author_reputation": 1016368938,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@aulaikings0121/re-ecency-20211231t01416526z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 109018194,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "mythcrusher",
        "permlink": "re-ecency-202229t17339395z",
        "category": "hive-125125",
        "title": "",
        "body": "I think it would be a good idea if Ecency points could also be bought and sold easier on the Hive engine.",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.21-vision\",\"format\":\"markdown+html\"}",
        "created": "2022-02-09T22:33:09",
        "last_update": "2022-02-09T22:33:09",
        "depth": 1,
        "children": 0,
        "last_payout": "2022-02-16T22:33:09",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 105,
        "author_reputation": 1642737690940,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@mythcrusher/re-ecency-202229t17339395z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 110312972,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "detroyt31",
        "permlink": "re-ecency-2022214t153935665z",
        "category": "hive-125125",
        "title": "",
        "body": "What is the minimum investment I need to make to become a participant of this program? And how long will the rewards last?",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.21-vision\",\"format\":\"markdown+html\"}",
        "created": "2022-02-14T13:39:36",
        "last_update": "2022-02-14T13:39:36",
        "depth": 1,
        "children": 0,
        "last_payout": "2022-02-21T13:39:36",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 122,
        "author_reputation": 1159055805765,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@detroyt31/re-ecency-2022214t153935665z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 110455752,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      },
      {
        "author": "svanbo",
        "permlink": "re-ecency-2022117t214239653z",
        "category": "hive-125125",
        "title": "",
        "body": "When I follow the link \"vote for proposal\" I get the message that the proposal has expired.",
        "json_metadata": "{\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"token\",\"smart-contracts\"],\"app\":\"ecency/3.0.28-vision\",\"format\":\"markdown+html\"}",
        "created": "2022-11-07T20:42:39",
        "last_update": "2022-11-07T20:42:39",
        "depth": 1,
        "children": 2,
        "last_payout": "2022-11-14T20:42:39",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 91,
        "author_reputation": 32860146642256,
        "parent_author": "ecency",
        "parent_permlink": "token",
        "url": "/hive-125125/@ecency/token#@svanbo/re-ecency-2022117t214239653z",
        "root_title": "Token",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "id": 118149501,
        "author_rewards": 0,
        "max_cashout_time": "1969-12-31T23:59:59",
        "reward_weight": 10000,
        "root_author": "ecency",
        "root_permlink": "token",
        "allow_replies": true,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "reblogged_by": [],
        "net_votes": 0,
        "children_abs_rshares": 0,
        "total_pending_payout_value": "0.000 HBD",
        "total_vote_weight": 0,
        "vote_rshares": 0,
        "net_rshares": 0,
        "abs_rshares": 0,
        "active_votes": []
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_author_before_date",
    params: ["author", "start_permlink", "before_date", "limit"],
    parameter: `<code>author: string; start_permlink: string; before_date: string; limit: int;</code>`,
    description:_t("condenser_api.get_discussions_by_author_before_date_description"),
    url: `${ConfigItems.baseUrl}/api/get_discussions_by_author_before_date?author="ecency"&start_permlink="token"&limit=2&before_date="2016-04-19T22:49:43"`,
    response: `[
      {
        "author": "ecency",
        "permlink": "desktop-search-snippets-password-change",
        "category": "hive-125125",
        "title": "Desktop - search, snippets, password change",
        "body": "We just pushed desktop update including latest [website updates and improvements](https://ecency.com/hive-125125/@ecency/vision-best-search-snippets-password). You should receive notification within desktop app about new version, feel free to try it out and let us know how new changes work for you. Are you mobile user, try [Ecency mobile app](https://ecency.com/hive-125125/@ecency/mobile-performance-reply-switch-deeplinking) as well.\n\n![ecency-blockchain-social-desktop-wallet-app](https://images.ecency.com/DQmWXQQroNnua8djg6AGbdRW4fcRkv2teoYoctoQWa3tHGj/desktop_3013.png)\n\n# What's new \n \n- Advanced search \n- Snippets\n- Italian, Bulgarian added \n- Profile edit\n- Password change\n- Other fixes included in [last website update](https://ecency.com/hive-125125/@ecency/vision-best-search-snippets-password)\n- Many more fixes and improvements which you can monitor from [our official Github page](https://github.com/ecency/ecency-vision) \n \n### https://ecency.com  \n##### Desktop https://desktop.ecency.com  \n##### iOS https://ios.ecency.com  \n##### Android https://android.ecency.com\n \n---  \n \n### Do you like our work? Support [Ecency proposal](https://ecency.com/hive/@ecency/proposal-ecency-development-and-maintenance):  \nEcency: https://ecency.com/proposals/141  \nHivesigner: [Vote for Proposal](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true)",
        "json_metadata": "{\"links\":[\"https://ecency.com/hive-125125/@ecency/vision-best-search-snippets-password\",\"https://ecency.com/hive-125125/@ecency/mobile-performance-reply-switch-deeplinking\",\"https://ecency.com/hive-125125/@ecency/vision-best-search-snippets-password\",\"https://github.com/ecency/ecency-vision\",\"https://ecency.com\",\"https://desktop.ecency.com\",\"https://ios.ecency.com\",\"https://android.ecency.com\",\"https://ecency.com/hive/@ecency/proposal-ecency-development-and-maintenance\",\"https://ecency.com/proposals/141\",\"https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true\"],\"image\":[\"https://images.ecency.com/DQmWXQQroNnua8djg6AGbdRW4fcRkv2teoYoctoQWa3tHGj/desktop_3013.png\"],\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"blockchain\",\"dapp\",\"desktop\",\"windows\",\"linux\",\"mac\"],\"app\":\"ecency/3.0.13-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-02-05T09:50:42",
        "last_update": "2021-02-05T09:54:24",
        "depth": 0,
        "children": 45,
        "last_payout": "2021-02-12T09:50:42",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "37.154 HBD",
        "curator_payout_value": "33.397 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 1391,
        "author_reputation": 403998028397345,
        "parent_author": "",
        "parent_permlink": "hive-125125",
        "url": "/hive-125125/@ecency/desktop-search-snippets-password-change",
        "root_title": "Desktop - search, snippets, password change",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "post_id": 101723002,
        "net_rshares": 203930600802336,
        "active_votes": [
          {
            "percent": "10000",
            "reputation": 992668988891913,
            "rshares": 154597460703157,
            "voter": "blocktrades"
          },
          {
            "percent": "10000",
            "reputation": 29261302889705,
            "rshares": 105078473357,
            "voter": "pnc"
          }
        ]
      },
      {
        "author": "ecency",
        "permlink": "mobile-performance-reply-switch-deeplinking",
        "category": "hive-125125",
        "title": "Mobile - performance, reply switch, deeplinking",
        "body": "This update is purely focused on performance improvements and of course some cool addition, you will all love. Normally we wait couple weeks before doing another release but this one we couldn't wait to release. 🎉\n\n![ecency-fast-social-mobile-app](https://images.ecency.com/DQmcotQaUCf1RjG3PnsUdFPUvGRUMBDF5bpER2GwG83wHBo/mobile_release3014.png)\n\n# What's new \n \n- Feeds screen - Performance issues are fixed across all feeds, you should notice some significant changes depending on your device. Here is the short video (~40seconds) showing loading differences on Feed screen, it is 2x faster  🚀\n\nhttps://youtu.be/2kNSMO_MjsE\n \n- Reply switch - in reply screen you can now change/switch your account while replying. Recent changes in account switch component allowing us to do really great things and improve user experience. When Ecency sends you mention or reply push notifications, you can open and reply them with any account without leaving screen. 🚀\n- Deeplinking - we have fixed few deeplinking issues, Ecency mobile app can open post, comment, profile, community links without issues now.\n- Thumbnail loading improved\n- Language files updated\n- Many small bug fixes which you can monitor from [our official Github page](https://github.com/ecency/ecency-mobile)\n\n**Android/Playstore update is ready for you to try!\niOS/AppStore in review, we expect it will be available later today!**\n \nIf you are React Native developer, feel free to join and help developing features we all love using, [our mobile application is opensource](https://github.com/ecency/ecency-mobile).  \n \n**Join mobile translation team**: https://translate-mobile.ecency.com  \n30 languages already enabled on Ecency mobile app, thanks to [our awesome contributors](https://ecency.com/contributors).  \n \nStay tuned, stay excited, stay united! Don't forget to share news with your friends.  \n\n# Download  \n \n### Android Playstore: https://android.ecency.com \n### iOS Appstore: https://ios.ecency.com \n### [Direct Android APK file](https://github.com/ecency/ecency-mobile/releases) \n \n--- \n \n<center> \n# Support Ecency Team \n[Approve Ecency](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true) | [Approve Hivesearcher](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B146%5D&approve=true)  \n</center>",
        "json_metadata": "{\"links\":[\"https://youtu.be/2kNSMO_MjsE\",\"https://github.com/ecency/ecency-mobile\",\"https://github.com/ecency/ecency-mobile\",\"https://translate-mobile.ecency.com\",\"https://ecency.com/contributors\",\"https://android.ecency.com\",\"https://ios.ecency.com\",\"https://github.com/ecency/ecency-mobile/releases\",\"https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true\",\"https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B146%5D&approve=true\"],\"image\":[\"https://images.ecency.com/DQmcotQaUCf1RjG3PnsUdFPUvGRUMBDF5bpER2GwG83wHBo/mobile_release3014.png\"],\"tags\":[\"hive-125125\",\"hive\",\"ecency\",\"uncensored\",\"decentralized\",\"blockchain\",\"dapp\",\"mobile\",\"android\",\"ios\"],\"app\":\"ecency/3.0.13-vision\",\"format\":\"markdown+html\"}",
        "created": "2021-02-05T04:32:00",
        "last_update": "2021-02-05T05:02:03",
        "depth": 0,
        "children": 44,
        "last_payout": "2021-02-12T04:32:00",
        "cashout_time": "1969-12-31T23:59:59",
        "total_payout_value": "38.370 HBD",
        "curator_payout_value": "34.414 HBD",
        "pending_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "body_length": 2328,
        "author_reputation": 403998028397345,
        "parent_author": "",
        "parent_permlink": "hive-125125",
        "url": "/hive-125125/@ecency/mobile-performance-reply-switch-deeplinking",
        "root_title": "Mobile - performance, reply switch, deeplinking",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "post_id": 101720248,
        "net_rshares": 214239391821698,
        "active_votes": [
          {
            "percent": "10000",
            "reputation": 992668988891913,
            "rshares": 156836019654462,
            "voter": "blocktrades"
          },
          {
            "percent": "4000",
            "reputation": 341233778618,
            "rshares": 639697359093,
            "voter": "boatymcboatface"
          }
        ]
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_witnesses",
    isArray: true,
    params: ["witness_ids"],
    parameter: `<code>witness_ids: int array;</code>`,
    description:_t("condenser_api.get_witnesses_description"),
    url: `${ConfigItems.baseUrl}/api/get_witnesses?witness_ids=[12286,9493]`,
    response: `[
      {
        "id": 12286,
        "owner": "good-karma",
        "created": "2016-09-08T04:12:18",
        "url": "https://ecency.com",
        "votes": "128452106700009483",
        "virtual_last_update": "779600793762441068600957405",
        "virtual_position": "76477066890640291006285686133305868609",
        "virtual_scheduled_time": "779602847487419253631339077",
        "total_missed": 4123,
        "last_aslot": 73979090,
        "last_confirmed_block_num": 73764568,
        "pow_worker": 0,
        "signing_key": "STM7SFYEkSyrqNem7dfea8MkBAQmgtMDQWWfCv3T7fMr7KhwcZjdZ",
        "props": {
          "account_creation_fee": "3.000 HIVE",
          "maximum_block_size": 65536,
          "hbd_interest_rate": 2000,
          "account_subsidy_budget": 797,
          "account_subsidy_decay": 347321
        },
        "hbd_exchange_rate": {
          "base": "0.457 HBD",
          "quote": "1.000 HIVE"
        },
        "last_hbd_exchange_update": "2023-04-06T07:07:42",
        "last_work": "0000000000000000000000000000000000000000000000000000000000000000",
        "running_version": "1.27.3",
        "hardfork_version_vote": "1.27.0",
        "hardfork_time_vote": "2022-10-24T12:00:00",
        "available_witness_account_subsidies": 592274
      },
      {
        "id": 9493,
        "owner": "gtg",
        "created": "2016-06-30T17:22:18",
        "url": "https://gtg.openhive.network",
        "votes": "142785211024307040",
        "virtual_last_update": "779600793762441068600957405",
        "virtual_position": "31451475055880480899755740890273218157",
        "virtual_scheduled_time": "779602956667756329045923140",
        "total_missed": 697,
        "last_aslot": 73979069,
        "last_confirmed_block_num": 73764547,
        "pow_worker": 0,
        "signing_key": "STM6BapgZRgKT72onF7p1rKuakkNqqS1bzGT31PubidXfZcWnvpJZ",
        "props": {
          "account_creation_fee": "3.000 HIVE",
          "maximum_block_size": 65536,
          "hbd_interest_rate": 2000,
          "account_subsidy_budget": 797,
          "account_subsidy_decay": 347321
        },
        "hbd_exchange_rate": {
          "base": "0.464 HBD",
          "quote": "1.000 HIVE"
        },
        "last_hbd_exchange_update": "2023-04-06T08:57:57",
        "last_work": "0000000048bf77f525731f28db7c1aa9ad853a475ccc78e71ea952a7782e5459",
        "running_version": "1.27.3",
        "hardfork_version_vote": "1.27.0",
        "hardfork_time_vote": "2022-10-24T12:00:00",
        "available_witness_account_subsidies": 888598
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_witness_by_account",
    isArray: true,
    params: ["account"],
    parameter: `<code>account: string;</code>`,
    description:_t("condenser_api.get_witness_by_account_description"),
    url: `${ConfigItems.baseUrl}/api/get_witness_by_account?account="good-karma"`,
    response: `{
      "id": 12286,
      "owner": "good-karma",
      "created": "2016-09-08T04:12:18",
      "url": "https://ecency.com",
      "votes": "128452070242055649",
      "virtual_last_update": "779600650127096638772049001",
      "virtual_position": "58026808199863247818701179538784898415",
      "virtual_scheduled_time": "779602847488012575678249523",
      "total_missed": 4123,
      "last_aslot": 73979040,
      "last_confirmed_block_num": 73764518,
      "pow_worker": 0,
      "signing_key": "STM7SFYEkSyrqNem7dfea8MkBAQmgtMDQWWfCv3T7fMr7KhwcZjdZ",
      "props": {
        "account_creation_fee": "3.000 HIVE",
        "maximum_block_size": 65536,
        "hbd_interest_rate": 2000,
        "account_subsidy_budget": 797,
        "account_subsidy_decay": 347321
      },
      "hbd_exchange_rate": {
        "base": "0.457 HBD",
        "quote": "1.000 HIVE"
      },
      "last_hbd_exchange_update": "2023-04-06T07:07:42",
      "last_work": "0000000000000000000000000000000000000000000000000000000000000000",
      "running_version": "1.27.3",
      "hardfork_version_vote": "1.27.0",
      "hardfork_time_vote": "2022-10-24T12:00:00",
      "available_witness_account_subsidies": 590594
    }`
  },
  {
    api: "condenser_api",
    method: "get_witnesses_by_vote",
    isArray: true,
    params: ["account", "limit"],
    parameter: `<p>account:string; limit:int up to 1000</p>
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
    description:_t("condenser_api.get_witnesses_by_vote_description"),
    url:`${ConfigItems.baseUrl}/api/get_witnesses_by_vote?account=null&limit=100`,
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
    isArray: true,
    params: ["lower_bound_name", "limit"],
    parameter: `<code>delegator:string; start:string; limit:int up to 1000</code>`,
    description:_t("condenser_api.lookup_witness_accounts_description"),
    url: `${ConfigItems.baseUrl}/api/lookup_witness_accounts?lower_bound_name="good-karma"&limit=4`,
    response: `[
      "good-karma",
      "gooddream",
      "goodguy24",
      "goodjob"
    ]`
  },
  {
    api: "condenser_api",
    method: "get_witness_count",
    isArray: true,
    description:_t("condenser_api.get_witness_count_description"),
    url: `${ConfigItems.baseUrl}/api/get_witness_count`,
    response: `14979`
  },
  {
    api: "database_api",
    method: "get_active_witnesses",
    description:_t("database_api.get_active_witnesses_description"),
    url: `${ConfigItems.baseUrl}/api/get_active_witnesses`,
    response: `[
      "blocktrades",
      "good-karma",
      "cervantes",
      "emrebeyler",
      "threespeak",
      "abit",
      "ocd-witness",
      "gtg",
      "smooth.witness",
      "stoodkev",
      "ausbitbank",
      "yabapmatt",
      "guiltyparties",
      "themarkymark",
      "steempeak",
      "deathwing",
      "arcange",
      "quochuy",
      "roelandp",
      "steempress",
      "therealwolf"
    ]`
  },
  {
    api: "condenser_api",
    method: "get_vesting_delegations",
    isArray: true,
    params: ["delegator", "start", "limit"],
    parameter: `<code>delegator:string; start:string; limit:int up to 1000</code><table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">delegator</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">start</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"hiveio"</code></td>
            <td><code class="language-plaintext highlighter-rouge">null</code></td>
            <td><code class="language-plaintext highlighter-rouge">10</code></td>
            <td>Queries up to 10 vesting delegations by “hiveio”.</td>
          </tr>
        </tbody>
      </table>`,
    description:_t("condenser_api.get_vesting_delegations_description"),
    url: `${ConfigItems.baseUrl}/api/get_vesting_delegations?delegator="ecency"&start="demo"&limit=4`,
    response: `[
      {
        "id": 2422655,
        "delegator": "ecency",
        "delegatee": "demo",
        "vesting_shares": "18534.406691 VESTS",
        "min_delegation_time": "2023-02-12T15:55:03"
      },
      {
        "id": 2418836,
        "delegator": "ecency",
        "delegatee": "ashokcan143",
        "vesting_shares": "18534.406691 VESTS",
        "min_delegation_time": "2023-01-18T17:20:00"
      },
      {
        "id": 2419411,
        "delegator": "ecency",
        "delegatee": "gboyegaogunmola",
        "vesting_shares": "27038.011192 VESTS",
        "min_delegation_time": "2023-01-22T17:10:00"
      },
      {
        "id": 2407154,
        "delegator": "ecency",
        "delegatee": "testers",
        "vesting_shares": "27038.011192 VESTS",
        "min_delegation_time": "2022-11-25T04:02:15"
      }
    ]`
  },
  {
    api: "database_api",
    method: "get_reward_fund",
    isArray: true,
    params: ["type"],
    parameter: `<code>type: string;</code>`,
    description:_t("database_api.get_reward_funds_description"),
    url: `${ConfigItems.baseUrl}/api/get_reward_fund?type="post"`,
    response: `{
      "id": 0,
      "name": "post",
      "reward_balance": "867628.813 HIVE",
      "recent_claims": "652524061978120982",
      "last_update": "2023-04-06T07:16:15",
      "content_constant": "2000000000000",
      "percent_curation_rewards": 5000,
      "percent_content_rewards": 10000,
      "author_reward_curve": "linear",
      "curation_reward_curve": "linear"
    }`
  },
  {
    api: "condenser_api",
    method: "get_followers",
    params: ["account", "start", "type", "limit"],
    parameter: `<code>account:string; start:string (account to start from); type:string e.g.: blog; limit:int up to 1000</code><table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">account</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">start</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">type</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"hiveio"</code></td>
            <td><code class="language-plaintext highlighter-rouge">null</code></td>
            <td><code class="language-plaintext highlighter-rouge">"blog"</code></td>
            <td><code class="language-plaintext highlighter-rouge">10</code></td>
            <td>Queries for follows of the account named <code class="language-plaintext highlighter-rouge">hiveio</code>, up to 10 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"alice"</code></td>
            <td><code class="language-plaintext highlighter-rouge">null</code></td>
            <td><code class="language-plaintext highlighter-rouge">"ignore"</code></td>
            <td><code class="language-plaintext highlighter-rouge">100</code></td>
            <td>Queries for mutes of the account named <code class="language-plaintext highlighter-rouge">alice</code>, up to 100 results.</td>
          </tr>
        </tbody>
      </table>`,
    description:_t("condenser_api.get_followers_description"),
    url: `${ConfigItems.baseUrl}/api/get_followers?account="ecency"&start=""&limit=4&type="blog"`,
    response: `[
      {
        "follower": "viclau",
        "following": "ecency",
        "what": [
          "blog"
        ]
      },
      {
        "follower": "agbostephen",
        "following": "ecency",
        "what": [
          "blog"
        ]
      },
      {
        "follower": "hairunnas",
        "following": "ecency",
        "what": [
          "blog"
        ]
      },
      {
        "follower": "esbat",
        "following": "ecency",
        "what": [
          "blog"
        ]
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_following",
    params: ["account", "start", "type", "limit"],
    parameter: `<code>account:string; start:string (account to start from); type:string e.g.: blog; limit:int up to 1000</code><table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">account</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">start</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">type</code> (string)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"hiveio"</code></td>
            <td><code class="language-plaintext highlighter-rouge">null</code></td>
            <td><code class="language-plaintext highlighter-rouge">"blog"</code></td>
            <td><code class="language-plaintext highlighter-rouge">10</code></td>
            <td>Queries for follows of the account named <code class="language-plaintext highlighter-rouge">hiveio</code>, up to 10 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">"alice"</code></td>
            <td><code class="language-plaintext highlighter-rouge">null</code></td>
            <td><code class="language-plaintext highlighter-rouge">"ignore"</code></td>
            <td><code class="language-plaintext highlighter-rouge">100</code></td>
            <td>Queries for mutes of the account named <code class="language-plaintext highlighter-rouge">alice</code>, up to 100 results.</td>
          </tr>
        </tbody>
      </table>`,
    description:_t("condenser_api.get_following_description"),
    url: `${ConfigItems.baseUrl}/api/get_following?account="ecency"&start=""&limit=4&type="blog"`,
    response: `[
      {
        "follower": "ecency",
        "following": "demo.com",
        "what": [
          "blog"
        ]
      },
      {
        "follower": "ecency",
        "following": "melinda010100",
        "what": [
          "blog"
        ]
      },
      {
        "follower": "ecency",
        "following": "hellomsq",
        "what": [
          "blog"
        ]
      },
      {
        "follower": "ecency",
        "following": "jobonlineclub",
        "what": [
          "blog"
        ]
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_follow_count",
    params: ["account"],
    parameter: `<code>account: string;</code>`,
    description:_t("condenser_api.get_follow_count_description"),
    url: `${ConfigItems.baseUrl}/api/get_follow_count?account="ecency"`,
    response: `{
      "account": "ecency",
      "following_count": 7,
      "follower_count": 11057
    }`
  },
  {
    api: "database_api",
    method: "get_version",
    description:_t("condenser_api.get_version_description"),
    url: `${ConfigItems.baseUrl}/api/get_version`,
    response: `{
      "blockchain_version": "1.27.3",
      "hive_revision": "b512d8fc126fbbfb23d4de5b9154517aa00fcc4e",
      "fc_revision": "b512d8fc126fbbfb23d4de5b9154517aa00fcc4e",
      "node_type": "mainnet",
      "chain_id": "beeab0de00000000000000000000000000000000000000000000000000000000"
    }`
  },
  {
    api: "condenser_api",
    method: "get_blog_entries",
    params: ["account", "start_entry_id", "limit"],
    parameter: `<code>account: string; start_entry_id: int; limit: int;</code>`,
    description:_t("condenser_api.get_blog_entries_description"),
    url: `${ConfigItems.baseUrl}/api/get_blog_entries?account="ecency"&limit=4`,
    response: `[
      {
        "blog": "ecency",
        "entry_id": 402,
        "author": "ecency",
        "permlink": "discord-monthly-giveaway-winners-51",
        "reblogged_on": "1970-01-01T00:00:00"
      },
      {
        "blog": "ecency",
        "entry_id": 401,
        "author": "ecency",
        "permlink": "ecency-monthly-guest-curation-program-30048fe77234e",
        "reblogged_on": "1970-01-01T00:00:00"
      },
      {
        "blog": "ecency",
        "entry_id": 400,
        "author": "thinkermind",
        "permlink": "testing-ecency-trading-alpha-version",
        "reblogged_on": "2023-03-27T19:49:36"
      },
      {
        "blog": "ecency",
        "entry_id": 399,
        "author": "ecency",
        "permlink": "mobile-performance-cache-and-bug",
        "reblogged_on": "1970-01-01T00:00:00"
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_blog",
    params: ["account", "start_entry_id", "limit"],
    parameter: `<code>account: string; start_entry_id: int; limit: int;</code>`,
    description:_t("condenser_api.get_blog_description"),
    url: `${ConfigItems.baseUrl}/api/get_blog?account="ecency"&limit=2&start_entry_id=401`,
    response: `[
      {
        "blog": "ecency",
        "entry_id": 401,
        "comment": {
          "author": "ecency",
          "permlink": "ecency-monthly-guest-curation-program-30048fe77234e",
          "category": "hive-125125",
          "title": "Ecency Monthly Guest Curation Program #18",
          "body": "![](https://images.ecency.com/DQmeWGL3PLw5AKuaDhhx8kYcXsDNFSeJaJ6jmmyiV1dcUMw/image.png)\n\n***The 17th edition of the [Monthly Guest Curation Program](https://ecency.com/hive-125125/@ecency/ecency-monthly-guest-curation-program-446d24f79b1de) here on Hive was a great success, and it was a really tough job to pick curators from all the great applications that we received. In the end, an awesome set of Guest Curators joined our team and did a fantastic job during their term. It is now time to commence the 18th edition of the Guest Curation Program, giving a chance for Ecency users to learn the ropes of curation and in the process also grow their own profiles on the blockchain.***\n\n---\n\nOur [encouragement program](https://ecency.com/esteem/@good-karma/encouragement-program-continues-82eafcd10a299) has been encouraging and rewarding users of the **Ecency Web**, **Ecency Desktop** and **Ecency Mobile** apps over the past several months, and many users have been curious about the curation program and the job our curators do.\n\nCurators have to navigate spam, abusive accounts and those trying to game our encouragement system, to find genuine users and deserving content to reward, encourage and appreciate.\n\nSince curation is an integral part of the hive ecosystem, the **Guest Curation Program** is an initiative to allow dedicated Ecency users to learn more about curation, and in the process help support several other Ecency users as well as grow their own profile on the hive blockchain.\n\n### <center>How To Apply</center>\n\nWe have a growing and thriving discord community, so join us on the [Ecency Discord](https://discord.me/ecency) if you haven't already, and fill up the form pinned in the #🏁-curator-internship discord channel.\n\n### <center>About Guest Curator Program</center>\n\n- 2 Guest curators will be appointed every month for a period of 30 days.\n\n- Selection will be based upon responses received in the questionnaire. It would be desired for the user to be a dedicated Ecency user and the decision of the selectors is final.\n\n- The rules to be followed and perks for being appointed as a **Guest Curator** will be shared upon selection.\n\n- As a curator, it is expected that you have a desire to help the community, spread some love, cheer and goodwill among users of Ecency. And also, have the ability to identify and report abuse.\n\n- If the guest curator is found to be abusing the granted role and powers, it will lead to immediate removal from the program.\n\n- If you are not selected as a Guest Curator, you may reapply again in the next cycle. But a selected Guest Curator can apply to the program again only after the end of 60 days (i.e. 2 cycles after their selection). \n\nWe are looking forward to hear from you! Join [Discord](https://discord.me/ecency) and show your curation skills to be part of the [Ecency](https://ecency.com/) curator team.\n\n---  \n \n### Delegate Hive Power now and mine [Ecency Points + curation reward daily](https://ecency.com/hive-125125/@ecency/daily-100-curation-rewards) + help us onboard more people:  \n \n[50 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50%20HP) | [100 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100%20HP) | [500 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=500%20HP) | [1000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=1000%20HP) | [5000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=5000%20HP) | [10K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=10000%20HP) | [20K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=20000%20HP) | [50K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50000%20HP) | [100K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100000%20HP)  \n \n### Support our proposals  \n \n[Ecency](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B245%5D&approve=true) ",
          "json_metadata": "{\"image\":[\"https://images.ecency.com/DQmeWGL3PLw5AKuaDhhx8kYcXsDNFSeJaJ6jmmyiV1dcUMw/image.png\"],\"tags\":[\"hive-125125\",\"vision\",\"hive\",\"curation\",\"ecency\",\"community\"],\"description\":\"\",\"app\":\"ecency/3.0.31-vision\",\"format\":\"markdown+html\",\"image_ratios\":[1.6666666666666667]}",
          "created": "2023-03-31T11:34:00",
          "last_update": "2023-03-31T11:34:00",
          "depth": 0,
          "children": 14,
          "last_payout": "1969-12-31T23:59:59",
          "cashout_time": "2023-04-07T11:34:00",
          "total_payout_value": "0.000 HBD",
          "curator_payout_value": "0.000 HBD",
          "pending_payout_value": "18.693 HBD",
          "promoted": "0.000 HBD",
          "replies": [],
          "body_length": 4242,
          "author_reputation": 403998028397345,
          "parent_author": "",
          "parent_permlink": "hive-125125",
          "url": "/hive-125125/@ecency/ecency-monthly-guest-curation-program-30048fe77234e",
          "root_title": "Ecency Monthly Guest Curation Program #18",
          "beneficiaries": [],
          "max_accepted_payout": "1000000.000 HBD",
          "percent_hbd": 10000,
          "post_id": 122138180,
          "net_rshares": 34086392177688,
          "active_votes": [
            {
              "percent": "4000",
              "reputation": 341233778618,
              "rshares": 747050035711,
              "voter": "boatymcboatface"
            },
            {
              "percent": "4000",
              "reputation": 2113489703373420,
              "rshares": 72007589633,
              "voter": "kingscrown"
            }
          ]
        },
        "reblogged_on": "1970-01-01T00:00:00"
      },
      {
        "blog": "ecency",
        "entry_id": 400,
        "comment": {
          "author": "thinkermind",
          "permlink": "testing-ecency-trading-alpha-version",
          "category": "hive-125125",
          "title": "Testing  ecency trading alpha version for TWM system (ENG/FR)",
          "body": "I manage a revenue pool that generates a portion of its profits from trading Hive (Delegation or transfert to @thinkermind with the memo \"Trade with me\" or **TWM**). Usually, I use Ecency's simplified trading interface to present my results, but in reality, I use more specialized tools and indicators to develop my strategies and forecasts.\n\nCurrently, I am testing and using more and more the advanced version of Ecency's trading interface, which adds new features.\n||\n|-----|\n|![](https://images.ecency.com/DQmTtTcCc25HqgDARxgNM16Xk53E4GBqW5N5ZG7pD3FVbBT/image.png)\n\n\n\n🌐 [Invitation for Traders to test advance trading](/@ecency/invitation-for-traders-to-test) -  by @ecency\n🌐 Interface direct link (alpha): https://alpha.ecency.com/market#advanced\n🌐 Interface direct link: https://ecency.com/market#advanced\n\n# What I particularly appreciated in ecency trading alpha version\n\n✅ Customizable blocks that allow creating an interface adapted to the needs of each trader (presentation/design, movement, zoom in/zoom out, etc.).\n\n<center> ![](https://images.ecency.com/DQmUzMovZDFMGoU6Pjh9fXp2DLg4x94rAnwJqEVSok3V7CN/image.png)</center>\n<center>Presentation/design (fonction)</center>\n\n\n<center>![](https://images.ecency.com/DQmP46o2xSBy49JuMWRJv6nuEGYgjgsaXpomZ8nar7CXo9s/image.png)</center>\n<center>Resize blocks</center>\n\n\n\n✅ Candlestick charts with time display options that facilitate tracking sudden fluctuations and allow for better short / or long-term trading\n![](https://images.ecency.com/DQmeVsV5CUArbNhEM45zpRnnmpZ1i92Sx95WnyHSvM2f2gF/image.png)\n\n<center>![](https://images.ecency.com/DQmTkju9VjhdPo6K1L3hyjVPYq7zkodoQVc6V2j5v5HXyjf/image.png)</center>\n<center>Chart & Bucket size</center>\n.\n✅ The interface that allows tracking our own trading history through the **Open/Completed/All/** tabs.\n![](https://images.ecency.com/DQmT799afyKXH1Jy7kebUkjNkjVHRp9FFRa67VYW85KcfNg/image.png)\n\n✅ Access to trade details directly linked to the block explorer (hivexplorer.com).\n\n![](https://images.ecency.com/DQmYAxtpwmu57o43KStDygJukJpVg6Zky6efCqZagRhZx2L/image.png)\n\n<center> **block explorer** </center>\n![](https://images.ecency.com/DQmZY5Lr1HQq9irHA39qkRncajUmTmVekFnFqiy3wTDudtU/image.png)\n\n\n**I think this interface, heavily inspired by Binance, is very promising and will probably continue to evolve as new customizable indicators are added.**\n\n---\n---\nVERSION EN FRANCAIS\n\nJe gère un pool de revenus qui génère une partie de ses bénéfices du trading de Hive (via une délégation à @thinkermind avec le mémo \"Trade with me\" ou TWM). Habituellement, j'utilise l'interface de trading simplifiée d'Ecency pour présenter mes résultats, mais en réalité, j'utilise des outils et des indicateurs plus spécialisés pour développer mes stratégies et mes prévisions.\n\nActuellement, je teste et utilise de plus en plus la version avancée de l'interface de trading d'Ecency, qui ajoute de nouvelles fonctionnalités.\n\n🌐 [Invitation pour tester l'interface avancée de gestion de trading via Ecency](/@ecency/invitation-for-traders-to-test) - par @ecency\n🌐 Lien direct de l'interface (alpha) : https://alpha.ecency.com/market#advanced\n🌐 Lien direct de l'interface: https://ecency.com/market#advanced\n\n# Ce que j'ai particulièrement apprécié dans leur version alpha\n\n✅ Des blocs personnalisables qui permettent de créer une interface adaptée aux besoins de chaque trader (présentation/design, mouvement, agrandisement/reduction des blocs, etc.).\n\n<center> ![](https://images.ecency.com/DQmUzMovZDFMGoU6Pjh9fXp2DLg4x94rAnwJqEVSok3V7CN/image.png)</center>\n<center>Présentation/design (fonction)</center>\n\n\n<center> ![](https://images.ecency.com/DQmP46o2xSBy49JuMWRJv6nuEGYgjgsaXpomZ8nar7CXo9s/image.png)</center>\n<center>Redimensionner les blocs</center>\n\n\n\n✅ Graphiques en chandeliers avec options d'affichage du temps qui facilitent le suivi des fluctuations brusques et permettent un meilleur trading à court / ou long terme\n![](https://images.ecency.com/DQmeVsV5CUArbNhEM45zpRnnmpZ1i92Sx95WnyHSvM2f2gF/image.png)\n\n<center> ![](https://images.ecency.com/DQmTkju9VjhdPo6K1L3hyjVPYq7zkodoQVc6V2j5v5HXyjf/image.png)</center>\n<center> Choix de la durée des affichages de trading</center>\n.\n✅ L'interface qui permet de suivre notre propre historique de trading via les onglets **Open/Completed/All/**.\n![](https://images.ecency.com/DQmT799afyKXH1Jy7kebUkjNkjVHRp9FFRa67VYW85KcfNg/image.png)\n\n✅ Accès aux détails commerciaux directement liés à l'explorateur de blocs (hivexplorer.com).\n\n![](https://images.ecency.com/DQmYAxtpwmu57o43KStDygJukJpVg6Zky6efCqZagRhZx2L/image.png)\n\n<center> **Exemple d'explorateur de blocs** </center>\n![](https://images.ecency.com/DQmZY5Lr1HQq9irHA39qkRncajUmTmVekFnFqiy3wTDudtU/image.png)\n\n\n**Je pense que cette interface, fortement inspirée de Binance, est très prometteuse et continuera probablement d'évoluer au fur et à mesure de l'ajout de nouveaux indicateurs personnalisables.**\n\n---\nAll images are screenshots of the interfaces offered by ecency applications (Toutes les images sont des captures d'écran des interfaces proposées par les applications ecency)",
          "json_metadata": "{\"tags\":[\"hive-125125\",\"bee\",\"cent\",\"pimp\",\"lolz\",\"fun\",\"archon\",\"leofinance\",\"lassecash\",\"trading\",\"testing\",\"photography\",\"ecency\",\"hive-engine\"],\"users\":[\"thinkermind\",\"ecency\"],\"image\":[\"https://images.ecency.com/DQmTtTcCc25HqgDARxgNM16Xk53E4GBqW5N5ZG7pD3FVbBT/image.png\",\"https://images.ecency.com/DQmUzMovZDFMGoU6Pjh9fXp2DLg4x94rAnwJqEVSok3V7CN/image.png\",\"https://images.ecency.com/DQmP46o2xSBy49JuMWRJv6nuEGYgjgsaXpomZ8nar7CXo9s/image.png\",\"https://images.ecency.com/DQmeVsV5CUArbNhEM45zpRnnmpZ1i92Sx95WnyHSvM2f2gF/image.png\",\"https://images.ecency.com/DQmTkju9VjhdPo6K1L3hyjVPYq7zkodoQVc6V2j5v5HXyjf/image.png\",\"https://images.ecency.com/DQmT799afyKXH1Jy7kebUkjNkjVHRp9FFRa67VYW85KcfNg/image.png\",\"https://images.ecency.com/DQmYAxtpwmu57o43KStDygJukJpVg6Zky6efCqZagRhZx2L/image.png\",\"https://images.ecency.com/DQmZY5Lr1HQq9irHA39qkRncajUmTmVekFnFqiy3wTDudtU/image.png\"],\"links\":[\"/@ecency/invitation-for-traders-to-test\"],\"format\":\"markdown+html\",\"canonical_url\":\"https://www.lassecash.com/@thinkermind/testing-ecency-trading-alpha-version\",\"app\":\"ecency/3.0.31-vision\",\"description\":\"I manage a revenue pool that generates a portion of its profits from trading Hive (Delegation or transfert to @thinkermind with the memo \\\"Trade with me\\\" or TWM). Usually, I use Ecency's simplified\",\"image_ratios\":[2.3315118397085612,4.714285714285714,9.720930232558139,2.4196597353497165,0.48044692737430167]}",
          "created": "2023-03-26T10:15:12",
          "last_update": "2023-03-26T10:26:03",
          "depth": 0,
          "children": 18,
          "last_payout": "2023-04-02T10:15:12",
          "cashout_time": "1969-12-31T23:59:59",
          "total_payout_value": "4.762 HBD",
          "curator_payout_value": "4.737 HBD",
          "pending_payout_value": "0.000 HBD",
          "promoted": "0.000 HBD",
          "replies": [],
          "body_length": 5082,
          "author_reputation": 6007464580879,
          "parent_author": "",
          "parent_permlink": "hive-125125",
          "url": "/hive-125125/@thinkermind/testing-ecency-trading-alpha-version",
          "root_title": "Testing  ecency trading alpha version for TWM system (ENG/FR)",
          "beneficiaries": [],
          "max_accepted_payout": "1000000.000 HBD",
          "percent_hbd": 10000,
          "post_id": 121977185,
          "net_rshares": 17253181765438,
          "active_votes": [
            {
              "percent": "10000",
              "reputation": 18679650010340,
              "rshares": 2880137705,
              "voter": "alexft"
            },
            {
              "percent": "2002",
              "reputation": 641780297267791,
              "rshares": 185051047662,
              "voter": "good-karma"
            },
            {
              "percent": "10000",
              "reputation": 4557676655584,
              "rshares": 846218992043,
              "voter": "themonetaryfew"
            }
          ]
        },
        "reblogged_on": "2023-03-27T19:49:36"
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_comment_discussions_by_payout",
    params: ["tag","","limit","truncate_body"],
    parameter: `<code>tag: string; limit:integer; truncate_body: integer (optional);</code>`,
    description:_t("condenser_api.get_comment_discussions_by_payout_description"),
    url: `${ConfigItems.baseUrl}/api/get_comment_discussions_by_payout?tag="ecency"&limit=2`,
    response: `[
      {
        "active_votes": [
          {
            "percent": "7500",
            "reputation": 5237585248428,
            "rshares": 30366286369,
            "voter": "ubg"
          },
          {
            "percent": "7500",
            "reputation": 1268223453927,
            "rshares": 295184273129,
            "voter": "nrg"
          },
          {
            "percent": "10000",
            "reputation": 32621424211875,
            "rshares": 361268378475,
            "voter": "dalersilfver"
          },
          {
            "percent": "10000",
            "reputation": 2783837848818,
            "rshares": 478294896899,
            "voter": "wharfagein"
          },
          {
            "percent": "10000",
            "reputation": 10900136586194,
            "rshares": 799222516436,
            "voter": "ashlinn"
          },
          {
            "percent": "100",
            "reputation": 176344643811,
            "rshares": 3138105596,
            "voter": "cowboy.curator"
          },
          {
            "percent": "10000",
            "reputation": 898998243537,
            "rshares": 3279570953,
            "voter": "fenisen"
          }
        ],
        "author": "fenisen",
        "author_reputation": 898998243537,
        "beneficiaries": [],
        "body": "I never thought about using wildflowers like that… very interesting",
        "body_length": 67,
        "cashout_time": "2024-05-25T18:24:15",
        "category": "ecency",
        "children": 1,
        "created": "2024-05-18T18:24:15",
        "curator_payout_value": "0.000 HBD",
        "depth": 1,
        "json_metadata": "{\\"type\\":\\"comment\\",\\"tags\\":[\\"ecency\\",\\"garden\\",\\"life\\",\\"photography\\",\\"plants\\",\\"foxkoit\\",\\"photos\\",\\"summer\\",\\"green\\"],\\"app\\":\\"ecency/3.1.0-mobile\\",\\"format\\":\\"markdown+html\\"}",
        "last_payout": "1969-12-31T23:59:59",
        "last_update": "2024-05-18T18:24:15",
        "max_accepted_payout": "1000000.000 HBD",
        "net_rshares": 1970754027857,
        "parent_author": "foxkoit",
        "parent_permlink": "garden-life-a418b2b185a1e",
        "pending_payout_value": "0.835 HBD",
        "percent_hbd": 10000,
        "permlink": "re-foxkoit-2024518t202415867z",
        "post_id": 133766353,
        "promoted": "0.000 HBD",
        "replies": [],
        "root_title": "Garden life ",
        "title": "",
        "total_payout_value": "0.000 HBD",
        "url": "/ecency/@foxkoit/garden-life-a418b2b185a1e#@fenisen/re-foxkoit-2024518t202415867z"
      },
      {
        "active_votes": [
          {
            "percent": "10000",
            "reputation": 32621424211875,
            "rshares": 354044775981,
            "voter": "dalersilfver"
          },
          {
            "percent": "10000",
            "reputation": 2783837848818,
            "rshares": 498018405767,
            "voter": "wharfagein"
          },
          {
            "percent": "10000",
            "reputation": 10900136586194,
            "rshares": 783237066107,
            "voter": "ashlinn"
          },
          {
            "percent": "100",
            "reputation": 176344643811,
            "rshares": 3142327852,
            "voter": "cowboy.curator"
          },
          {
            "percent": "10000",
            "reputation": 898998243537,
            "rshares": 3213005204,
            "voter": "fenisen"
          }
        ],
        "author": "fenisen",
        "author_reputation": 898998243537,
        "beneficiaries": [],
        "body": "The wild animals don’t do as I want either! ",
        "body_length": 44,
        "cashout_time": "2024-05-25T18:27:21",
        "category": "ecency",
        "children": 0,
        "created": "2024-05-18T18:27:21",
        "curator_payout_value": "0.000 HBD",
        "depth": 1,
        "json_metadata": "{\\"type\\":\\"comment\\",\\"tags\\":[\\"ecency\\",\\"photography\\",\\"life\\",\\"blog\\",\\"nature\\",\\"naturephotography\\",\\"photos\\",\\"foxkoit\\",\\"walk\\",\\"forest\\",\\"ecency\\"],\\"app\\":\\"ecency/3.1.0-mobile\\",\\"format\\":\\"markdown+html\\"}",
        "last_payout": "1969-12-31T23:59:59",
        "last_update": "2024-05-18T18:27:21",
        "max_accepted_payout": "1000000.000 HBD",
        "net_rshares": 1641655580911,
        "parent_author": "foxkoit",
        "parent_permlink": "everything-cant-always-be-perfect",
        "pending_payout_value": "0.696 HBD",
        "percent_hbd": 10000,
        "permlink": "re-foxkoit-2024518t202721385z",
        "post_id": 133766391,
        "promoted": "0.000 HBD",
        "replies": [],
        "root_title": "Everything cant always be perfect",
        "title": "",
        "total_payout_value": "0.000 HBD",
        "url": "/ecency/@foxkoit/everything-cant-always-be-perfect#@fenisen/re-foxkoit-2024518t202721385z"
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_account_reputations",
    params: ["account_lower_bound", "limit"],
    parameter: `<code>account_lower_bound: string; limit: int;</code>`,
    description:_t("condenser_api.get_account_reputations_description"),
    url: `${ConfigItems.baseUrl}/api/get_account_reputations?account_lower_bound="ecency"&limit=4`,
    response: `[
      {
        "account": "ecency",
        "reputation": 403998028397345
      },
      {
        "account": "ecency-987",
        "reputation": 0
      },
      {
        "account": "ecency-bulgaria",
        "reputation": 1158825371091
      },
      {
        "account": "ecency-indonesia",
        "reputation": 24437199429
      }
    ]`
  },
  {
    api: "condenser_api",
    method: "get_reblogged_by",
    params: ["author", "permlink"],
    parameter: `<code>author: string; permlink: string;</code>`,
    description:_t("condenser_api.get_reblogged_by_description"),
    url: `${ConfigItems.baseUrl}/api/get_reblogged_by?author="ecency"&permlink="token"`,
    response: `[
      "absgaming",
      "bigtakosensei",
      "chrisbolten",
      "eglois",
      "esteemapp",
      "gamer00",
      "good-karma",
      "guruvaj",
      "helmibireuen",
      "melinda010100",
      "returned",
      "riyuuhi",
      "roky",
      "samzine",
      "seayplum",
      "talhasch",
      "text2speech",
      "viniciotricolor"
    ]`
  },
  {
    api: "transaction_status_api",
    method: "find_transaction",
    params: ["transaction_id", "expiration"],
    parameter: `<code>transaction_id: string; expiration: string;</code><p>Possible results</p><table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">unknown</code></td>
            <td>Expiration time in future, transaction not included in block or mempool</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">within_mempool</code></td>
            <td>Transaction in mempool</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">within_reversible_block</code></td>
            <td>Transaction has been included in block, block not irreversible</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">within_irreversible_block</code></td>
            <td>Transaction has been included in block, block is irreversible</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">expired_reversible</code></td>
            <td>Transaction has expired, transaction is not irreversible (transaction could be in a fork)</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">expired_irreversible</code></td>
            <td>Transaction has expired, transaction is irreversible (transaction cannot be in a fork)</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">too_old</code></td>
            <td>Transaction is too old, I don’t know about it</td>
          </tr>
        </tbody>
      </table>`,
    description:_t("transaction_status_api.find_transaction_description"),
    url: `${ConfigItems.baseUrl}/api/find_transaction?transaction_id="0000000000000000000000000000000000000000"&expiration="2016-03-24T18:00:21"`,
    response: `{
      "status": "too_old"
    }`
  },
  {
    api: "market_history_api",
    method: "get_ticker",
    description:_t("market_history_api.get_ticker_description"),
    url: `${ConfigItems.baseUrl}/api/get_ticker`,
    response: `{
      "latest": "0.44998132857557777",
      "lowest_ask": "0.45155289039005136",
      "highest_bid": "0.44958368550722033",
      "percent_change": "7.39674430385600701",
      "hive_volume": {
        "amount": "344063878",
        "precision": 3,
        "nai": "@@000000021"
      },
      "hbd_volume": {
        "amount": "154279533",
        "precision": 3,
        "nai": "@@000000013"
      }
    }`
  },
  {
    api: "market_history_api",
    method: "get_volume",
    description:_t("market_history_api.get_volume_description"),
    url: `${ConfigItems.baseUrl}/api/get_volume`,
    response: `{
      "hive_volume": {
        "amount": "343589290",
        "precision": 3,
        "nai": "@@000000021"
      },
      "hbd_volume": {
        "amount": "154080590",
        "precision": 3,
        "nai": "@@000000013"
      }
    }`
  },
  {
    api: "market_history_api",
    method: "get_trade_history",
    params: ["start", "end", "limit"],
    parameter: `<code>limit: int; start: string; end: string;</code>`,
    description:_t("market_history_api.get_trade_history_description"),
    url: `${ConfigItems.baseUrl}/api/get_trade_history?limit=4&start="2023-04-01T11:00:00"&end="2023-04-03T11:00:00"`,
    response: `{
      "trades": [
        {
          "date": "2023-04-01T11:01:21",
          "current_pays": {
            "amount": "1428",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "3444",
            "precision": 3,
            "nai": "@@000000021"
          }
        },
        {
          "date": "2023-04-01T11:01:21",
          "current_pays": {
            "amount": "2668",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "6430",
            "precision": 3,
            "nai": "@@000000021"
          }
        },
        {
          "date": "2023-04-01T11:08:39",
          "current_pays": {
            "amount": "714",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "1722",
            "precision": 3,
            "nai": "@@000000021"
          }
        },
        {
          "date": "2023-04-01T11:08:54",
          "current_pays": {
            "amount": "3278",
            "precision": 3,
            "nai": "@@000000021"
          },
          "open_pays": {
            "amount": "1360",
            "precision": 3,
            "nai": "@@000000013"
          }
        }
      ]
    }`
  },
  {
    api: "market_history_api",
    method: "get_recent_trades",
    params: ["limit"],
    parameter: `<code>limit: int;</code>`,
    description:_t("market_history_api.get_recent_trades_description"),
    url: `${ConfigItems.baseUrl}/api/get_recent_trades?limit=4`,
    response: `{
      "trades": [
        {
          "date": "2023-04-06T07:19:39",
          "current_pays": {
            "amount": "100000",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "221458",
            "precision": 3,
            "nai": "@@000000021"
          }
        },
        {
          "date": "2023-04-06T07:19:15",
          "current_pays": {
            "amount": "1999",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "4429",
            "precision": 3,
            "nai": "@@000000021"
          }
        },
        {
          "date": "2023-04-06T07:18:00",
          "current_pays": {
            "amount": "21690",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "48202",
            "precision": 3,
            "nai": "@@000000021"
          }
        },
        {
          "date": "2023-04-06T07:17:57",
          "current_pays": {
            "amount": "100000",
            "precision": 3,
            "nai": "@@000000013"
          },
          "open_pays": {
            "amount": "222222",
            "precision": 3,
            "nai": "@@000000021"
          }
        }
      ]
    }`
  },
  {
    api: "market_history_api",
    method: "get_market_history_buckets",
    description:_t("market_history_api.get_market_history_buckets_description"),
    url: `${ConfigItems.baseUrl}/api/get_market_history_buckets`,
    response: `{
      "bucket_sizes": [
        15,
        60,
        300,
        3600,
        86400
      ]
    }`
  },
  {
    api: "market_history_api",
    method: "get_market_history",
    params: ["bucket_seconds", "start", "end"],
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
    description:_t("market_history_api.get_market_history_description"),
    url: `${ConfigItems.baseUrl}/api/get_market_history?bucket_seconds=86400&start="2023-04-01T11:00:00"&end="2023-04-03T11:00:00"`,
    response: `{
      "buckets": [
        {
          "id": 4169643,
          "open": "2023-04-02T00:00:00",
          "seconds": 86400,
          "hive": {
            "high": 4,
            "low": 132,
            "open": 12058,
            "close": 242987,
            "volume": 95716721
          },
          "non_hive": {
            "high": 2,
            "low": 53,
            "open": 5018,
            "close": 100000,
            "volume": 39013943
          }
        },
        {
          "id": 4171243,
          "open": "2023-04-03T00:00:00",
          "seconds": 86400,
          "hive": {
            "high": 2081232,
            "low": 19,
            "open": 1688,
            "close": 806,
            "volume": 223059545
          },
          "non_hive": {
            "high": 936538,
            "low": 7,
            "open": 696,
            "close": 325,
            "volume": 90983631
          }
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_accounts",
    params: ["accounts", "delayed_votes_active"],
    parameter: `<code>accounts: string array; delayed_votes_active: boolean</code>`,
    description:_t("database_api.find_accounts_description"),
    url:`${ConfigItems.baseUrl}/api/find_accounts?accounts=["demo"]`,
    response: `{
      "accounts": [
        {
          "id": 43593,
          "name": "demo",
          "owner": {
            "weight_threshold": 1,
            "account_auths": [],
            "key_auths": [
              [
                "STM7N79vVmojHW4ZkCTytB753Eg938R3f8GA3M2ra7dd7TsTQKSCb",
                1
              ]
            ]
          },
          "active": {
            "weight_threshold": 1,
            "account_auths": [],
            "key_auths": [
              [
                "STM5YR5MnAkAP4iKRWuzPv9Z33sdqDvyWHtknDse3c94M2krs9CDd",
                1
              ],
              [
                "STM5YRGgcSyWr9PWgPfMucw8sAaryQ71vaHwv1SNsSETcf5jQZj36",
                1
              ],
              [
                "STM5Z5Dmqt5hyidjhQYZkaoze3AW1BGm9LXVHL8oLt8gMTPhyZQm2",
                1
              ],
              [
                "STM5auKGdpPM5bJuQeeayASWn4yCifgrSWgn4K3tH5f123N7M41gB",
                1
              ],
              [
                "STM64nx2weChqikvdeYMzaR3hdVNrgvDtJyjNCAL4N8jQLC9kTmTX",
                1
              ],
              [
                "STM77EkCQWHwVfCESvhevCzw3TWgVLexwr2f4pxmY1oZtMnz7gsEJ",
                1
              ],
              [
                "STM7Vo1uyWAoyWKM7A7ExHEkfFCnq8ZRGyrZwZGpuJESCQ79cJ5cc",
                1
              ],
              [
                "STM7bvNHzp4nMNmVysBbicDtogYg7TyWrPxnXw9aegCzNgELsNvM4",
                1
              ],
              [
                "STM7nWjvRqLrdKKuqYZ2kL75TPMePNFc4dQpq6cHUkPJzmz5shP35",
                1
              ],
              [
                "STM7nnkD6ZdoMHKta3rA9XVeeqQ3wy41Kmv3J8JWc5hx5oHbZXEK5",
                1
              ],
              [
                "STM7sxc377Hac7vfVAT6xusAjVTMSHR4qSNy41CvZoJjnMLTePzK2",
                1
              ],
              [
                "STM8PcNaC4Zk5yKXYiUjikj4P3hadU7H6WBCKtqPQzkhMiK3YBr5t",
                1
              ],
              [
                "STM8fFik5Q7D8u9cD1WZW9pXGbqATxcyZT1SPaS21NCjqEar7zibD",
                1
              ]
            ]
          },
          "posting": {
            "weight_threshold": 1,
            "account_auths": [
              [
                "demo-app",
                1
              ],
              [
                "ecency.app",
                1
              ],
              [
                "hivesigner",
                1
              ]
            ],
            "key_auths": [
              [
                "STM62fkRnTJSeJoWMLS5r61cgQbxSo3JJ7BoxCgZrkfRuNN71hA1A",
                1
              ]
            ]
          },
          "memo_key": "STM5PV4XZSdKe9JdPXm7nxn3AtZPSzsrcD8hxFqueokxpqXbKxEs7",
          "json_metadata": "{\"profile\":{\"name\":\"Demo\",\"about\":\"Demo\",\"cover_image\":\"\",\"profile_image\":\"https://images.esteem.app/p/368La1qZAv72UNuUJmYLXh5uxTzxdkRiY9c6AefjagyHBARYpEPjZQnvFAFsXJbQA3KX4VPJXABuZJ1kcq6DadNE\",\"website\":\"\",\"location\":\"Hive\",\"is_public\":true,\"redirect_uris\":[\"https://demo.hivesigner.com\",\"http://localhost:3000\",\"http://localhost:4000\",\"http://localhost:8000\",\"http://localhost:8080\"],\"type\":\"app\",\"creator\":\"good-karma\"}}",
          "posting_json_metadata": "{\"profile\":{\"name\":\"Hello world\",\"about\":\"New way of blogging\",\"cover_image\":\"\",\"profile_image\":\"https://images.ecency.com/DQmUNLgt33m8sWssJ6bATMHq5Ws6YS2GK2aEmq4vjuuM6ek/play_icon.png\",\"website\":\"\",\"location\":\"Hive\",\"version\":2,\"is_public\":false,\"redirect_uris\":\"\",\"type\":\"user\"}}",
          "proxy": "",
          "previous_owner_update": "2017-10-30T13:03:42",
          "last_owner_update": "2017-10-30T15:34:45",
          "last_account_update": "2022-08-29T08:41:33",
          "created": "2016-08-01T14:18:51",
          "mined": false,
          "recovery_account": "esteemapp",
          "last_account_recovery": "1970-01-01T00:00:00",
          "reset_account": "null",
          "comment_count": 0,
          "lifetime_vote_count": 0,
          "post_count": 224,
          "can_vote": true,
          "voting_manabar": {
            "current_mana": "96231203710",
            "last_update_time": 1676217303
          },
          "downvote_manabar": {
            "current_mana": "24057800926",
            "last_update_time": 1676217303
          },
          "balance": {
            "amount": "0",
            "precision": 3,
            "nai": "@@000000021"
          },
          "savings_balance": {
            "amount": "100",
            "precision": 3,
            "nai": "@@000000021"
          },
          "hbd_balance": {
            "amount": "0",
            "precision": 3,
            "nai": "@@000000013"
          },
          "hbd_seconds": "23826",
          "hbd_seconds_last_update": "2021-05-27T02:54:09",
          "hbd_last_interest_payment": "2021-05-27T02:36:09",
          "savings_hbd_balance": {
            "amount": "6",
            "precision": 3,
            "nai": "@@000000013"
          },
          "savings_hbd_seconds": "1911",
          "savings_hbd_seconds_last_update": "2021-04-21T06:27:24",
          "savings_hbd_last_interest_payment": "2021-04-21T06:22:51",
          "savings_withdraw_requests": 0,
          "reward_hbd_balance": {
            "amount": "0",
            "precision": 3,
            "nai": "@@000000013"
          },
          "reward_hive_balance": {
            "amount": "0",
            "precision": 3,
            "nai": "@@000000021"
          },
          "reward_vesting_balance": {
            "amount": "0",
            "precision": 6,
            "nai": "@@000000037"
          },
          "reward_vesting_hive": {
            "amount": "0",
            "precision": 3,
            "nai": "@@000000021"
          },
          "vesting_shares": {
            "amount": "67271150624",
            "precision": 6,
            "nai": "@@000000037"
          },
          "delegated_vesting_shares": {
            "amount": "2122718300",
            "precision": 6,
            "nai": "@@000000037"
          },
          "received_vesting_shares": {
            "amount": "31082771386",
            "precision": 6,
            "nai": "@@000000037"
          },
          "vesting_withdraw_rate": {
            "amount": "0",
            "precision": 6,
            "nai": "@@000000037"
          },
          "post_voting_power": {
            "amount": "96231203710",
            "precision": 6,
            "nai": "@@000000037"
          },
          "next_vesting_withdrawal": "1969-12-31T23:59:59",
          "withdrawn": 0,
          "to_withdraw": 0,
          "withdraw_routes": 1,
          "pending_transfers": 0,
          "curation_rewards": 6239,
          "posting_rewards": 3191,
          "proxied_vsf_votes": [
            0,
            0,
            0,
            0
          ],
          "witnesses_voted_for": 0,
          "last_post": "2023-01-07T19:15:45",
          "last_root_post": "2020-07-06T14:32:24",
          "last_post_edit": "2023-01-07T19:15:45",
          "last_vote_time": "2021-08-10T05:12:30",
          "post_bandwidth": 14144,
          "pending_claimed_accounts": 0,
          "open_recurrent_transfers": 0,
          "is_smt": false,
          "delayed_votes": [],
          "governance_vote_expiration_ts": "1969-12-31T23:59:59"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_proposals",
    params: ["proposal_ids"],
    parameter: `<code>proposal_ids: int array</code>`,
    description:_t("database_api.find_proposals_description"),
    url:`${ConfigItems.baseUrl}/api/find_proposals?proposal_ids=[0]`,
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
          "total_votes": "25058961671862119",
          "status": "active"
        }
      ]
    }`
  },
  {
    api: "rc_api",
    method: "get_rc_stats",
    parameter: `none`,
    description:_t("rc_api.get_rc_stats"),
    url:`${ConfigItems.baseUrl}/api/get_rc_stats`,
    response: `{
      "rc_stats": {
        "block": 74649600,
        "regen": "2059605691947",
        "budget": [
          43403,
          797,
          72338,
          43546196,
          40000000
        ],
        "pool": [
          "17196348946",
          10422577,
          1963110198,
          "23833739365970",
          "58750912815"
        ],
        "share": [
          5322,
          10000,
          322,
          1963,
          2391
        ],
        "vote": 113563154,
        "comment": 1260730911,
        "transfer": 176746255,
        "ops": {
          "vote_operation": {
            "count": 303631,
            "avg_cost": 114915279
          },
          "comment_operation": {
            "count": 20907,
            "avg_cost": 1239215483
          },
          "transfer_operation": {
            "count": 14495,
            "avg_cost": 175394760
          },
          "transfer_to_vesting_operation": {
            "count": 489,
            "avg_cost": 117231517
          },
          "withdraw_vesting_operation": {
            "count": 102,
            "avg_cost": 132967227
          },
          "limit_order_create_operation": {
            "count": 3105,
            "avg_cost": 140598792
          },
          "limit_order_cancel_operation": {
            "count": 778,
            "avg_cost": 78815706
          },
          "feed_publish_operation": {
            "count": 1957,
            "avg_cost": 94452805
          },
          "convert_operation": {
            "count": 189,
            "avg_cost": 94730571
          },
          "account_create_operation": {
            "count": 37,
            "avg_cost": "7750933220"
          },
          "account_update_operation": {
            "count": 275,
            "avg_cost": 1082248208
          },
          "witness_update_operation": {
            "count": 2,
            "avg_cost": 161383552
          },
          "account_witness_vote_operation": {
            "count": 139,
            "avg_cost": 191072687
          },
          "account_witness_proxy_operation": {
            "count": 18,
            "avg_cost": 95008959
          },
          "delete_comment_operation": {
            "count": 61,
            "avg_cost": 96921663
          },
          "custom_json_operation": {
            "count": 1143880,
            "avg_cost": 189389329
          },
          "set_withdraw_vesting_route_operation": {
            "count": 4,
            "avg_cost": 319711848
          },
          "claim_account_operation": {
            "count": 1740,
            "avg_cost": "12909000261767"
          },
          "create_claimed_account_operation": {
            "count": 93,
            "avg_cost": "7821629104"
          },
          "transfer_to_savings_operation": {
            "count": 487,
            "avg_cost": 93344097
          },
          "transfer_from_savings_operation": {
            "count": 37,
            "avg_cost": 100506891
          },
          "cancel_transfer_from_savings_operation": {
            "count": 1,
            "avg_cost": 76385767
          },
          "claim_reward_balance_operation": {
            "count": 33680,
            "avg_cost": 110316264
          },
          "delegate_vesting_shares_operation": {
            "count": 345,
            "avg_cost": 322575115
          },
          "witness_set_properties_operation": {
            "count": 783,
            "avg_cost": 131746396
          },
          "account_update2_operation": {
            "count": 445,
            "avg_cost": 282057431
          },
          "create_proposal_operation": {
            "count": 1,
            "avg_cost": 462963338
          },
          "update_proposal_votes_operation": {
            "count": 271,
            "avg_cost": 194887009
          },
          "collateralized_convert_operation": {
            "count": 21,
            "avg_cost": 94235376
          },
          "multiop": {
            "count": 27136,
            "avg_cost": "159935519224"
          }
        },
        "payers": [
          {
            "rank": 0,
            "count": 239684,
            "lt5": 774,
            "lt10": 1446,
            "lt20": 6314,
            "cant_afford": {
              "vote": 424,
              "comment": 14024,
              "transfer": 567
            }
          },
          {
            "rank": 1,
            "count": 202208,
            "lt5": 1833,
            "lt10": 2662,
            "lt20": 3898,
            "cant_afford": {
              "vote": 604,
              "comment": 1695,
              "transfer": 816
            }
          },
          {
            "rank": 2,
            "count": 286547,
            "lt5": 1901,
            "lt10": 2017,
            "lt20": 2523,
            "cant_afford": {
              "vote": 369,
              "comment": 859,
              "transfer": 541
            }
          },
          {
            "rank": 3,
            "count": 523404,
            "lt5": 152313,
            "lt10": 155195,
            "lt20": 155572,
            "cant_afford": {
              "vote": 1074,
              "comment": 1318,
              "transfer": 1199
            }
          },
          {
            "rank": 4,
            "count": 273824,
            "lt5": 52,
            "lt10": 246,
            "lt20": 1331
          },
          {
            "rank": 5,
            "count": 19925,
            "lt5": 75,
            "lt10": 248,
            "lt20": 401
          },
          {
            "rank": 6,
            "count": 8394,
            "lt5": 534,
            "lt10": 534,
            "lt20": 618
          },
          {
            "rank": 7,
            "count": 1123,
            "lt20": 95
          }
        ]
      }
    }`
  },
  {
    api: "rc_api",
    method: "find_rc_accounts",
    params: ["accounts"],
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
    description:_t("rc_api.find_rc_accounts_description"),
    url:`${ConfigItems.baseUrl}/api/find_rc_accounts?accounts=["good-karma"]`,
    response: `{
      "rc_accounts": [
        {
          "account": "good-karma",
          "rc_manabar": {
            "current_mana": "4683593772705",
            "last_update_time": 1680766308
          },
          "max_rc_creation_adjustment": {
            "amount": "2020748973",
            "precision": 6,
            "nai": "@@000000037"
          },
          "max_rc": "4683593772705",
          "delegated_rc": "56117121104391",
          "received_delegated_rc": 10000
        }
      ]
    }`
  },
  {
    api: "rc_api",
    method: "list_rc_direct_delegations",
    params: ["start", "limit"],
    parameter: `<code>start: array [from, to]; limit: int;</code>`,
    description:_t("rc_api.list_rc_direct_delegations"),
    url: `${ConfigItems.baseUrl}/api/list_rc_direct_delegations?start=["ecency",""]&limit=3`,
    response: `{
      "rc_direct_delegations": [
        {
          "from": "ecency",
          "to": "feruz",
          "delegated_rc": "15000000000"
        },
        {
          "from": "ecency",
          "to": "hive-189310",
          "delegated_rc": "40000000000"
        },
        {
          "from": "ecency",
          "to": "xuwi",
          "delegated_rc": "25000000000"
        },
        {
          "from": "ecency",
          "to": "mtsaeed",
          "delegated_rc": "40000000000"
        },
        {
          "from": "ecency",
          "to": "ecency.devs",
          "delegated_rc": "15000000000"
        }
      ]
    }`
  },
  {
    api: "rc_api",
    method: "list_rc_accounts",
    params: ["start", "limit"],
    parameter: `<code>start: string; limit: int;</code>`,
    description:_t("rc_api.list_rc_accounts"),
    url: `${ConfigItems.baseUrl}/api/list_rc_accounts?start="ecency"&limit=3`,
    response: `{
      "rc_accounts": [
        {
          "account": "ecency",
          "rc_manabar": {
            "current_mana": "7436127842846",
            "last_update_time": 1680769293
          },
          "max_rc_creation_adjustment": {
            "amount": "5851327807",
            "precision": 6,
            "nai": "@@000000037"
          },
          "max_rc": "6665653962241377",
          "delegated_rc": "1945000000000",
          "received_delegated_rc": "4462145533767980"
        },
        {
          "account": "ecency-987",
          "rc_manabar": {
            "current_mana": "5568323871",
            "last_update_time": 1637136366
          },
          "max_rc_creation_adjustment": {
            "amount": "5568323871",
            "precision": 6,
            "nai": "@@000000037"
          },
          "max_rc": "5568323871",
          "delegated_rc": 0,
          "received_delegated_rc": 0
        },
        {
          "account": "ecency-bulgaria",
          "rc_manabar": {
            "current_mana": "149414763318",
            "last_update_time": 1680766794
          },
          "max_rc_creation_adjustment": {
            "amount": "5629189791",
            "precision": 6,
            "nai": "@@000000037"
          },
          "max_rc": "149643837483",
          "delegated_rc": 0,
          "received_delegated_rc": 0
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_account_recovery_requests",
    params: ["accounts"],
    parameter: `<p>accounts:array(string);</p>`,
    description:_t("database_api.find_account_recovery_requests"),
    url: `${ConfigItems.baseUrl}/api/find_account_recovery_requests?accounts=["ecency"]`,
    response: `{
      "requests": []
    }`
  },
  {
    api: "database_api",
    method: "find_change_recovery_account_requests",
    params: ["accounts"],
    parameter: `<p>accounts:array(string);</p>`,
    description:_t("database_api.find_change_recovery_account_requests"),
    url: `${ConfigItems.baseUrl}/api/find_change_recovery_account_requests?accounts=["ecency"]`,
    response: `{
      "requests": []
    }`
  },
  {
    api: "database_api",
    method: "find_comments",
    params: ["comments"],
    parameter: `<p>comments:array(string);</p>`,
    description:_t("database_api.find_comments"),
    url: `${ConfigItems.baseUrl}/api/find_comments?comments=[["demo","test"],["demo","tests"]]`,
    response: `{
      "comments": [
        {
          "abs_rshares": 0,
          "allow_curation_rewards": true,
          "allow_replies": true,
          "allow_votes": true,
          "author": "demo",
          "author_rewards": 0,
          "beneficiaries": [],
          "body": "testing post, don't vote\\n<div steempoll='5915e5e5440cbfd17615fae4'></div><br><h1>title of an idea</h1><p>description of it in details</p><br>\\nasdasdasdslkdjalskdjasd",
          "cashout_time": "1969-12-31T23:59:59",
          "category": "test",
          "children": 8,
          "children_abs_rshares": 0,
          "created": "2017-05-12T16:51:57",
          "curator_payout_value": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "depth": 0,
          "id": 3358533,
          "json_metadata": "{\\"tags\\":[\\"test\\",\\"steempoll\\"],\\"app\\":\\"steemit/0.1\\",\\"format\\":\\"markdown\\"}",
          "last_payout": "2017-05-19T16:51:57",
          "last_update": "2017-05-12T16:56:48",
          "max_accepted_payout": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "max_cashout_time": "1969-12-31T23:59:59",
          "net_rshares": 0,
          "net_votes": 2,
          "parent_author": "",
          "parent_permlink": "test",
          "percent_hbd": 10000,
          "permlink": "test",
          "reward_weight": 10000,
          "root_author": "demo",
          "root_permlink": "test",
          "title": "test",
          "total_payout_value": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "total_vote_weight": 0,
          "vote_rshares": 0
        },
        {
          "abs_rshares": 0,
          "allow_curation_rewards": true,
          "allow_replies": true,
          "allow_votes": true,
          "author": "demo",
          "author_rewards": 0,
          "beneficiaries": [
            {
              "account": "esteemapp",
              "weight": 100
            }
          ],
          "body": "This is test post, please don't vote..",
          "cashout_time": "1969-12-31T23:59:59",
          "category": "test",
          "children": 1,
          "children_abs_rshares": 0,
          "created": "2017-05-23T04:05:12",
          "curator_payout_value": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "depth": 0,
          "id": 3687135,
          "json_metadata": "{\\"tags\\":[\\"test\\"],\\"app\\":\\"esteem/1.4.5\\",\\"format\\":\\"markdown+html\\",\\"community\\":\\"esteem\\"}",
          "last_payout": "2017-05-30T04:05:12",
          "last_update": "2017-05-25T07:46:39",
          "max_accepted_payout": {
            "amount": "1000000000",
            "nai": "@@000000013",
            "precision": 3
          },
          "max_cashout_time": "1969-12-31T23:59:59",
          "net_rshares": 0,
          "net_votes": 0,
          "parent_author": "",
          "parent_permlink": "test",
          "percent_hbd": 10000,
          "permlink": "tests",
          "reward_weight": 10000,
          "root_author": "demo",
          "root_permlink": "tests",
          "title": "Test post",
          "total_payout_value": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "total_vote_weight": 0,
          "vote_rshares": 0
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_decline_voting_rights_requests",
    params: ["accounts"],
    parameter: `<p>account:array</p>`,
    description:_t("database_api.find_decline_voting_rights_requests"),
    url: `${ConfigItems.baseUrl}/api/find_decline_voting_rights_requests?accounts=["null","temp"]`,
    response: `{
      "requests": []
    }`
  },
  {
    api: "database_api",
    method: "find_escrows",
    params: ["from"],
    parameter: `<p>from:string</p>`,
    description:_t("database_api.find_escrows"),
    url: `${ConfigItems.baseUrl}/api/find_escrows?from="temp"`,
    response: `{
      "escrows": [
        {
          "agent": "smitop",
          "agent_approved": false,
          "disputed": false,
          "escrow_expiration": "2038-01-19T03:14:07",
          "escrow_id": 12345,
          "from": "temp",
          "hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "hive_balance": {
            "amount": "1",
            "nai": "@@000000021",
            "precision": 3
          },
          "id": 143,
          "pending_fee": {
            "amount": "1",
            "nai": "@@000000021",
            "precision": 3
          },
          "ratification_deadline": "2038-01-19T03:14:06",
          "to": "guest123",
          "to_approved": false
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_limit_orders",
    params: ["account"],
    parameter: `<p>account:string</p>`,
    description:_t("database_api.find_limit_orders"),
    url: `${ConfigItems.baseUrl}/api/find_limit_orders?account="ecency"`,
    response: `{
      "orders": [
        {
          "created": "2024-05-28T11:45:00",
          "expiration": "2024-06-24T11:44:43",
          "for_sale": 82500,
          "id": 9617759,
          "orderid": 16896683,
          "sell_price": {
            "base": {
              "amount": "82500",
              "nai": "@@000000013",
              "precision": 3
            },
            "quote": {
              "amount": "259434",
              "nai": "@@000000021",
              "precision": 3
            }
          },
          "seller": "ecency"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_owner_histories",
    params: ["owner"],
    parameter: `<p>owner:string</p>`,
    description:_t("database_api.find_owner_histories"),
    url: `${ConfigItems.baseUrl}/api/find_owner_histories?owner="noorkh"`,
    response: `{
      "owner_auths": [
        {
          "account": "noorkh",
          "id": 765309,
          "last_valid_time": "2024-05-16T11:40:09",
          "previous_owner_authority": {
            "account_auths": [],
            "key_auths": [
              [
                "STM6c31ppwyJH4MJycYw5UxdSG6zeLjykgp58GtKV5uf6twZVB5GL",
                1
              ]
            ],
            "weight_threshold": 1
          }
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_savings_withdrawals",
    params: ["account"],
    parameter: `<p>account:string</p>`,
    description:_t("database_api.find_savings_withdrawals"),
    url: `${ConfigItems.baseUrl}/api/find_savings_withdrawals?account="demo.com"`,
    response: `{
      "withdrawals": [
        {
          "amount": {
            "amount": "1",
            "nai": "@@000000021",
            "precision": 3
          },
          "complete": "2024-05-31T11:51:39",
          "from": "demo.com",
          "id": 213646,
          "memo": "",
          "request_id": 3205148605,
          "to": "demo.com"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_hbd_conversion_requests",
    params: ["account"],
    parameter: `<p>account:string</p>`,
    description:_t("database_api.find_hbd_conversion_requests"),
    url: `${ConfigItems.baseUrl}/api/find_hbd_conversion_requests?account="demo.com"`,
    response: `{
      "requests": [
        {
          "amount": {
            "amount": "20",
            "nai": "@@000000013",
            "precision": 3
          },
          "conversion_date": "2024-05-31T23:53:51",
          "id": 433539,
          "owner": "demo.com",
          "requestid": 3205281453
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_vesting_delegation_expirations",
    params: ["account"],
    parameter: `<p>account:string</p>`,
    description:_t("database_api.find_vesting_delegation_expirations"),
    url: `${ConfigItems.baseUrl}/api/find_vesting_delegation_expirations?account="ecency"`,
    response: `{
      "delegations": [
        {
          "delegator": "ecency",
          "expiration": "2024-05-28T12:25:03",
          "id": 5926131,
          "vesting_shares": {
            "amount": "350000000000",
            "nai": "@@000000037",
            "precision": 6
          }
        },
        {
          "delegator": "ecency",
          "expiration": "2024-05-28T17:00:06",
          "id": 5926144,
          "vesting_shares": {
            "amount": "350000000000",
            "nai": "@@000000037",
            "precision": 6
          }
        },
        {
          "delegator": "ecency",
          "expiration": "2024-05-28T18:20:03",
          "id": 5926148,
          "vesting_shares": {
            "amount": "350000000000",
            "nai": "@@000000037",
            "precision": 6
          }
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_vesting_delegations",
    params: ["account"],
    parameter: `<p>account:string</p>`,
    description:_t("database_api.find_vesting_delegations"),
    url: `${ConfigItems.baseUrl}/api/find_vesting_delegations?account="ecency"`,
    response: `{
      "delegations": [
        {
          "delegatee": "sharker",
          "delegator": "ecency",
          "id": 2454889,
          "min_delegation_time": "2024-03-07T15:35:00",
          "vesting_shares": {
            "amount": "350000000000",
            "nai": "@@000000037",
            "precision": 6
          }
        },
        {
          "delegatee": "demo",
          "delegator": "ecency",
          "id": 2458936,
          "min_delegation_time": "2024-05-24T03:55:06",
          "vesting_shares": {
            "amount": "350000000000",
            "nai": "@@000000037",
            "precision": 6
          }
        },
        {
          "delegatee": "seckorama",
          "delegator": "ecency",
          "id": 2458253,
          "min_delegation_time": "2024-05-09T13:20:03",
          "vesting_shares": {
            "amount": "350000000000",
            "nai": "@@000000037",
            "precision": 6
          }
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_votes",
    params: ["author","permlink"],
    parameter: `<p>author:string; permlink:string;</p>`,
    description:_t("database_api.find_votes"),
    url: `${ConfigItems.baseUrl}/api/find_votes?author="demo"&permlink="tests"`,
    response: `{
      "votes": [
        {
          "author": "demo",
          "id": 42631493,
          "last_update": "2017-07-11T22:37:51",
          "num_changes": 0,
          "permlink": "tests",
          "rshares": 0,
          "vote_percent": 83,
          "voter": "duckmast3r",
          "weight": 0
        },
        {
          "author": "demo",
          "id": 80630046,
          "last_update": "2017-10-21T20:02:36",
          "num_changes": 0,
          "permlink": "tests",
          "rshares": 0,
          "vote_percent": 10000,
          "voter": "mikolla",
          "weight": 0
        },
        {
          "author": "demo",
          "id": 46511456,
          "last_update": "2017-07-23T16:08:09",
          "num_changes": 0,
          "permlink": "tests",
          "rshares": 0,
          "vote_percent": 10000,
          "voter": "teukufata10",
          "weight": 0
        },
        {
          "author": "demo",
          "id": 147034442,
          "last_update": "2018-02-17T20:43:18",
          "num_changes": 0,
          "permlink": "tests",
          "rshares": 0,
          "vote_percent": 10000,
          "voter": "karmapala",
          "weight": 0
        },
        {
          "author": "demo",
          "id": 134255474,
          "last_update": "2018-01-31T07:10:00",
          "num_changes": 0,
          "permlink": "tests",
          "rshares": 0,
          "vote_percent": 10000,
          "voter": "zahry",
          "weight": 0
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_withdraw_vesting_routes",
    params: ["account","order"],
    parameter: `<p>account:string; order:string;</p>`,
    description:_t("database_api.find_withdraw_vesting_routes"),
    url: `${ConfigItems.baseUrl}/api/find_withdraw_vesting_routes?account="ecency"&order="by_destination"`,
    response: `{
      "routes": [
        {
          "auto_vest": true,
          "from_account": "feruz",
          "id": 49677,
          "percent": 100,
          "to_account": "ecency"
        },
        {
          "auto_vest": true,
          "from_account": "esteemapp",
          "id": 49784,
          "percent": 10000,
          "to_account": "ecency"
        },
        {
          "auto_vest": false,
          "from_account": "parker97",
          "id": 49828,
          "percent": 25,
          "to_account": "ecency"
        },
        {
          "auto_vest": false,
          "from_account": "gotinazsum2",
          "id": 50504,
          "percent": 25,
          "to_account": "ecency"
        },
        {
          "auto_vest": true,
          "from_account": "prettiblk1",
          "id": 50524,
          "percent": 1000,
          "to_account": "ecency"
        },
        {
          "auto_vest": false,
          "from_account": "good-karma",
          "id": 52240,
          "percent": 10000,
          "to_account": "ecency"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "find_witnesses",
    params: ["owners"],
    parameter: `<p>owners:array(string);</p>`,
    description:_t("database_api.find_witnesses"),
    url: `${ConfigItems.baseUrl}/api/find_witnesses?owners=["gtg","good-karma"]`,
    response: `{
      "witnesses": [
        {
          "available_witness_account_subsidies": 1724427,
          "created": "2016-06-30T17:22:18",
          "hardfork_time_vote": "2022-10-24T12:00:00",
          "hardfork_version_vote": "1.27.0",
          "hbd_exchange_rate": {
            "base": {
              "amount": "317",
              "nai": "@@000000013",
              "precision": 3
            },
            "quote": {
              "amount": "1000",
              "nai": "@@000000021",
              "precision": 3
            }
          },
          "id": 9493,
          "last_aslot": 86020960,
          "last_confirmed_block_num": 85791643,
          "last_hbd_exchange_update": "2024-05-28T11:44:54",
          "last_work": "0000000048bf77f525731f28db7c1aa9ad853a475ccc78e71ea952a7782e5459",
          "owner": "gtg",
          "pow_worker": 0,
          "props": {
            "account_creation_fee": {
              "amount": "3000",
              "nai": "@@000000021",
              "precision": 3
            },
            "account_subsidy_budget": 797,
            "account_subsidy_decay": 347321,
            "hbd_interest_rate": 1300,
            "maximum_block_size": 65536
          },
          "running_version": "1.27.5",
          "signing_key": "STM5dLh5HxjjawY4Gm6o6ugmJUmEXgnfXXXRJPRTxRnvfFBJ24c1M",
          "total_missed": 986,
          "url": "https://gtg.openhive.network",
          "virtual_last_update": "882054217388005272315736164",
          "virtual_position": "261853782346845940990230536878133812177",
          "virtual_scheduled_time": "882054773824420050938836179",
          "votes": "140947972654333105"
        },
        {
          "available_witness_account_subsidies": 1564109,
          "created": "2016-09-08T04:12:18",
          "hardfork_time_vote": "2022-10-24T12:00:00",
          "hardfork_version_vote": "1.27.0",
          "hbd_exchange_rate": {
            "base": {
              "amount": "314",
              "nai": "@@000000013",
              "precision": 3
            },
            "quote": {
              "amount": "1000",
              "nai": "@@000000021",
              "precision": 3
            }
          },
          "id": 12286,
          "last_aslot": 86020967,
          "last_confirmed_block_num": 85791650,
          "last_hbd_exchange_update": "2024-05-28T08:20:33",
          "last_work": "0000000000000000000000000000000000000000000000000000000000000000",
          "owner": "good-karma",
          "pow_worker": 0,
          "props": {
            "account_creation_fee": {
              "amount": "3000",
              "nai": "@@000000021",
              "precision": 3
            },
            "account_subsidy_budget": 797,
            "account_subsidy_decay": 347321,
            "hbd_interest_rate": 2000,
            "maximum_block_size": 65536
          },
          "running_version": "1.27.3",
          "signing_key": "STM8eCuFRWTUvbxgo1WLS8Lm1FowXCvucoYm16Uahi57ng7umEw2x",
          "total_missed": 4642,
          "url": "https://ecency.com",
          "virtual_last_update": "882054217388005272315736164",
          "virtual_position": "253045269572645035592111619059003954787",
          "virtual_scheduled_time": "882054857864213510174271017",
          "votes": "136206616617826842"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "get_current_price_feed",
    description:_t("database_api.get_current_price_feed"),
    url: `${ConfigItems.baseUrl}/api/get_current_price_feed`,
    response: `{
      "base": {
        "amount": "310",
        "nai": "@@000000013",
        "precision": 3
      },
      "quote": {
        "amount": "1000",
        "nai": "@@000000021",
        "precision": 3
      }
    }`
  },
  {
    api: "database_api",
    method: "get_hardfork_properties",
    description:_t("database_api.get_hardfork_properties"),
    url: `${ConfigItems.baseUrl}/api/get_hardfork_properties`,
    response: `{
      "current_hardfork_version": "1.27.0",
      "id": 0,
      "last_hardfork": 27,
      "next_hardfork": "1.27.0",
      "next_hardfork_time": "2022-10-24T12:00:00",
      "processed_hardforks": [
        "2016-03-24T16:00:00",
        "2016-04-25T17:30:00",
        "2016-04-26T18:00:00",
        "2016-04-27T13:00:00",
        "2016-04-30T15:00:00",
        "2016-05-31T17:00:00",
        "2016-06-30T14:00:00",
        "2016-07-04T00:00:00",
        "2016-07-04T01:00:00",
        "2016-07-14T00:00:00",
        "2016-07-15T12:00:00",
        "2016-07-17T15:00:00",
        "2016-07-26T15:00:00",
        "2016-08-15T14:00:00",
        "2016-09-20T15:00:00",
        "2016-11-08T16:00:00",
        "2016-12-06T16:00:00",
        "2017-03-30T15:00:00",
        "2017-03-30T15:00:00",
        "2017-06-20T15:00:00",
        "2018-09-25T15:00:00",
        "2019-08-27T15:00:00",
        "2019-08-29T15:00:00",
        "2020-03-20T14:00:00",
        "2020-10-06T14:00:00",
        "2021-06-30T14:00:00",
        "2022-10-11T12:00:00",
        "2022-10-24T12:00:00"
      ]
    }`
  },
  {
    api: "database_api",
    method: "get_reward_funds",
    description:_t("database_api.get_reward_funds"),
    url: `${ConfigItems.baseUrl}/api/get_reward_funds`,
    response: `{
      "funds": [
        {
          "author_reward_curve": "linear",
          "content_constant": "2000000000000",
          "curation_reward_curve": "linear",
          "id": 0,
          "last_update": "2024-06-01T06:25:45",
          "name": "post",
          "percent_content_rewards": 10000,
          "percent_curation_rewards": 5000,
          "recent_claims": "683555165086242118",
          "reward_balance": {
            "amount": "914133959",
            "nai": "@@000000021",
            "precision": 3
          }
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "list_account_recovery_requests",
    params: ["start", "limit", "order"],
    parameter: `<p>start: string; limit: int; order: string(by_account, by_expiration)</p>`,
    description:_t("database_api.list_account_recovery_requests"),
    url: `${ConfigItems.baseUrl}/api/list_account_recovery_requests?start=demo&limit=5&order=by_account`,
    response: `{
      "requests": []
    }`
  },
  {
    api: "database_api",
    method: "list_accounts",
    params: ["start", "limit", "order", "delayed_votes_active"],
    parameter: `<p>start: string; limit: int; order: string(by_name, by_proxy, by_next_vesting_withdrawal);delayed_votes_active: boolean (optional, default true)</p>`,
    description:_t("database_api.list_accounts"),
    url: `${ConfigItems.baseUrl}/api/list_accounts?start=demo&limit=5&order=by_name`,
    response: `{
      "accounts": [
        {
          "active": {
            "account_auths": [],
            "key_auths": [
              [
                "STM51ApnQm3HNieuy3ZUQNtXbdu8CzEFEWRPqMLY1422i8Gy7g2PJ",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "balance": {
            "amount": "22003",
            "nai": "@@000000021",
            "precision": 3
          },
          "can_vote": true,
          "comment_count": 0,
          "created": "2020-05-13T07:50:03",
          "curation_rewards": 404802887,
          "delayed_votes": [],
          "delegated_vesting_shares": {
            "amount": "66669866000000",
            "nai": "@@000000037",
            "precision": 6
          },
          "downvote_manabar": {
            "current_mana": 567306907775683,
            "last_update_time": 1717223442
          },
          "governance_vote_expiration_ts": "2025-02-14T09:11:30",
          "hbd_balance": {
            "amount": "16500",
            "nai": "@@000000013",
            "precision": 3
          },
          "hbd_last_interest_payment": "2021-06-14T09:30:27",
          "hbd_seconds": "3282007838238",
          "hbd_seconds_last_update": "2021-06-30T13:30:33",
          "id": 1382792,
          "is_smt": false,
          "json_metadata": "{\\"profile\\":{\\"name\\":\\"\\",\\"about\\":\\"\\",\\"cover_image\\":\\"\\",\\"profile_image\\":\\"https://images.esteem.app/DQmWCcJcicyck5atZcgXt5rQstoQVSrumHdsmeQNKXHjgPa/ecenct_logo.png\\",\\"website\\":\\"https://ecency.com\\",\\"location\\":\\"\\"}}",
          "last_account_recovery": "1970-01-01T00:00:00",
          "last_account_update": "2024-03-21T15:16:03",
          "last_owner_update": "1970-01-01T00:00:00",
          "last_post": "2024-05-29T10:24:21",
          "last_post_edit": "2024-05-29T10:24:21",
          "last_root_post": "2024-05-20T11:42:24",
          "last_vote_time": "2024-06-01T06:30:42",
          "lifetime_vote_count": 0,
          "memo_key": "STM5vCxUjSAZAgKBornswBuzXgAZasbE3EkPHpLmDEVHmPVGMnnah",
          "mined": false,
          "name": "ecency",
          "next_vesting_withdrawal": "2024-06-08T05:11:12",
          "open_recurrent_transfers": 0,
          "owner": {
            "account_auths": [],
            "key_auths": [
              [
                "STM4yhxC7Bum8St36z3nZmj9VA59EXM7DXReMLMRn8fwrazgNbKYQ",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "pending_claimed_accounts": 64746,
          "pending_transfers": 0,
          "post_bandwidth": 0,
          "post_count": 260355,
          "post_voting_power": {
            "amount": "2273875343223380",
            "nai": "@@000000037",
            "precision": 6
          },
          "posting": {
            "account_auths": [
              [
                "ecency.app",
                1
              ]
            ],
            "key_auths": [
              [
                "STM8AZuk2ja5vSFySFL2zpB9bNew8wJAg8r4QFtbnoamEX8Jvvq43",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "posting_json_metadata": "{\\"profile\\":{\\"name\\":\\"Ecency\\",\\"about\\":\\"You love something set it free! Join immutable, uncensored, rewarding communities! https://ecency.com\\",\\"cover_image\\":\\"\\",\\"profile_image\\":\\"https://images.ecency.com/DQmWCcJcicyck5atZcgXt5rQstoQVSrumHdsmeQNKXHjgPa/ecenct_logo.png\\",\\"website\\":\\"https://ecency.com\\",\\"location\\":\\"Blockchain\\",\\"pinned\\":\\"ecency-development-and-maintenance-4\\",\\"version\\":2,\\"tokens\\":[]}}",
          "posting_rewards": 23266913,
          "previous_owner_update": "1970-01-01T00:00:00",
          "proxied_vsf_votes": [
            0,
            0,
            0,
            0
          ],
          "proxy": "good-karma",
          "received_vesting_shares": {
            "amount": "2171630590677302",
            "nai": "@@000000037",
            "precision": 6
          },
          "recovery_account": "esteemapp",
          "reset_account": "null",
          "reward_hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "reward_hive_balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "reward_vesting_balance": {
            "amount": "13135338426",
            "nai": "@@000000037",
            "precision": 6
          },
          "reward_vesting_hive": {
            "amount": "7620",
            "nai": "@@000000021",
            "precision": 3
          },
          "savings_balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "savings_hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "savings_hbd_last_interest_payment": "2023-05-03T04:14:45",
          "savings_hbd_seconds": "24",
          "savings_hbd_seconds_last_update": "2023-05-03T04:14:57",
          "savings_withdraw_requests": 0,
          "to_withdraw": 60420257568383,
          "vesting_shares": {
            "amount": "168914618546078",
            "nai": "@@000000037",
            "precision": 6
          },
          "vesting_withdraw_rate": {
            "amount": "4647712120645",
            "nai": "@@000000037",
            "precision": 6
          },
          "voting_manabar": {
            "current_mana": 2042568667057063,
            "last_update_time": 1717223442
          },
          "withdraw_routes": 0,
          "withdrawn": 13943136361935,
          "witnesses_voted_for": 0
        },
        {
          "active": {
            "account_auths": [],
            "key_auths": [
              [
                "STM6SwR495DBmnqyHR9pPtBCnMfdgCgeQkSCvXdN7G4xkuRqefmFa",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "can_vote": true,
          "comment_count": 0,
          "created": "2021-11-17T08:06:06",
          "curation_rewards": 0,
          "delayed_votes": [],
          "delegated_vesting_shares": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "downvote_manabar": {
            "current_mana": 0,
            "last_update_time": 1637136366
          },
          "governance_vote_expiration_ts": "1969-12-31T23:59:59",
          "hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "hbd_last_interest_payment": "1970-01-01T00:00:00",
          "hbd_seconds": "0",
          "hbd_seconds_last_update": "1970-01-01T00:00:00",
          "id": 2262551,
          "is_smt": false,
          "json_metadata": "",
          "last_account_recovery": "1970-01-01T00:00:00",
          "last_account_update": "1970-01-01T00:00:00",
          "last_owner_update": "1970-01-01T00:00:00",
          "last_post": "1970-01-01T00:00:00",
          "last_post_edit": "1970-01-01T00:00:00",
          "last_root_post": "1970-01-01T00:00:00",
          "last_vote_time": "1970-01-01T00:00:00",
          "lifetime_vote_count": 0,
          "memo_key": "STM8V4w9L4zRZL9mbyGdo3agoMrHvoYERciH9zP9qBh1KzRoDiDmJ",
          "mined": false,
          "name": "ecency-987",
          "next_vesting_withdrawal": "1969-12-31T23:59:59",
          "open_recurrent_transfers": 0,
          "owner": {
            "account_auths": [],
            "key_auths": [
              [
                "STM7hoSVfAbCMhRe1h1NcrhCAYWaYpuxkGMs2tGLqJKxFUWpssfmH",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "pending_claimed_accounts": 0,
          "pending_transfers": 0,
          "post_bandwidth": 0,
          "post_count": 0,
          "post_voting_power": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "posting": {
            "account_auths": [
              [
                "ecency.app",
                1
              ]
            ],
            "key_auths": [
              [
                "STM5u78GBiXqvTtF5EY8ZKRbBDknaiVKg5rCihaWRsJYr85A6GHxZ",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "posting_json_metadata": "",
          "posting_rewards": 0,
          "previous_owner_update": "1970-01-01T00:00:00",
          "proxied_vsf_votes": [
            0,
            0,
            0,
            0
          ],
          "proxy": "",
          "received_vesting_shares": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "recovery_account": "appreciator",
          "reset_account": "null",
          "reward_hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "reward_hive_balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "reward_vesting_balance": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "reward_vesting_hive": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "savings_balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "savings_hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "savings_hbd_last_interest_payment": "1970-01-01T00:00:00",
          "savings_hbd_seconds": "0",
          "savings_hbd_seconds_last_update": "1970-01-01T00:00:00",
          "savings_withdraw_requests": 0,
          "to_withdraw": 0,
          "vesting_shares": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "vesting_withdraw_rate": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "voting_manabar": {
            "current_mana": 0,
            "last_update_time": 1637136366
          },
          "withdraw_routes": 0,
          "withdrawn": 0,
          "witnesses_voted_for": 0
        },
        {
          "active": {
            "account_auths": [],
            "key_auths": [
              [
                "STM7D7EW2udLzW6B6wokhSJokjoe1NY81DEmwP41CgKgYgweQhmAo",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "can_vote": true,
          "comment_count": 0,
          "created": "2021-07-12T13:59:21",
          "curation_rewards": 9186,
          "delayed_votes": [],
          "delegated_vesting_shares": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "downvote_manabar": {
            "current_mana": 48361867831,
            "last_update_time": 1717184934
          },
          "governance_vote_expiration_ts": "1969-12-31T23:59:59",
          "hbd_balance": {
            "amount": "248",
            "nai": "@@000000013",
            "precision": 3
          },
          "hbd_last_interest_payment": "1970-01-01T00:00:00",
          "hbd_seconds": "0",
          "hbd_seconds_last_update": "1970-01-01T00:00:00",
          "id": 1482618,
          "is_smt": false,
          "json_metadata": "",
          "last_account_recovery": "1970-01-01T00:00:00",
          "last_account_update": "2024-02-02T14:57:12",
          "last_owner_update": "1970-01-01T00:00:00",
          "last_post": "2024-02-12T14:56:42",
          "last_post_edit": "2024-02-12T14:56:42",
          "last_root_post": "2024-02-02T14:36:48",
          "last_vote_time": "2024-05-31T19:48:54",
          "lifetime_vote_count": 0,
          "memo_key": "STM5JFJmi2z1mH7tyDW9eY7xi5dodbdev5wqcAesBmNVXP6wWEjsU",
          "mined": false,
          "name": "ecency-bulgaria",
          "next_vesting_withdrawal": "1969-12-31T23:59:59",
          "open_recurrent_transfers": 0,
          "owner": {
            "account_auths": [],
            "key_auths": [
              [
                "STM6qP24RRyeZa1E273Podm3Xag1kP5KsyH5acMkCsPRorTDmaPY2",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "pending_claimed_accounts": 0,
          "pending_transfers": 0,
          "post_bandwidth": 0,
          "post_count": 39,
          "post_voting_power": {
            "amount": "193447471327",
            "nai": "@@000000037",
            "precision": 6
          },
          "posting": {
            "account_auths": [
              [
                "ecency.app",
                1
              ],
              [
                "engrave.app",
                1
              ],
              [
                "peakd.app",
                1
              ],
              [
                "steemauto",
                1
              ],
              [
                "threespeak",
                1
              ]
            ],
            "key_auths": [
              [
                "STM5nvQZkM5gpyohjduw1yh2jfMqkyBaoGaJ971UmytWiYzDcr79Y",
                1
              ]
            ],
            "weight_threshold": 1
          },
          "posting_json_metadata": "{\\"profile\\":{\\"name\\":\\"@ecency-bulgaria\\",\\"about\\":\\"Социална мрежа която създава стойност за вас. Ecency Bulgaria/България\\",\\"cover_image\\":\\"https://images.ecency.com/DQmSgBQPGDXg71XcoNaoiDeotE3BBwVbA8DHGSxeaGxrLrh/webp.net_resizeimage_19_.jpg\\",\\"profile_image\\":\\"https://images.ecency.com/DQmcnxeFw8L2kRMv4wEXhkwscgK9Dp8PiczADRNHi6rpXtB/263505616_617949199417178_3549995650523106033_n.png\\",\\"website\\":\\"\\",\\"location\\":\\"bulgaria\\",\\"pinned\\":\\"registraciya-pomosh-za-mrezhata-vkhod\\",\\"version\\":2}}",
          "posting_rewards": 43326,
          "previous_owner_update": "1970-01-01T00:00:00",
          "proxied_vsf_votes": [
            0,
            0,
            0,
            0
          ],
          "proxy": "",
          "received_vesting_shares": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "recovery_account": "iliyan90",
          "reset_account": "null",
          "reward_hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "reward_hive_balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "reward_vesting_balance": {
            "amount": "296617809",
            "nai": "@@000000037",
            "precision": 6
          },
          "reward_vesting_hive": {
            "amount": "172",
            "nai": "@@000000021",
            "precision": 3
          },
          "savings_balance": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "savings_hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "savings_hbd_last_interest_payment": "1970-01-01T00:00:00",
          "savings_hbd_seconds": "0",
          "savings_hbd_seconds_last_update": "1970-01-01T00:00:00",
          "savings_withdraw_requests": 0,
          "to_withdraw": 0,
          "vesting_shares": {
            "amount": "193447471327",
            "nai": "@@000000037",
            "precision": 6
          },
          "vesting_withdraw_rate": {
            "amount": "0",
            "nai": "@@000000037",
            "precision": 6
          },
          "voting_manabar": {
            "current_mana": 174900497214,
            "last_update_time": 1717184934
          },
          "withdraw_routes": 0,
          "withdrawn": 0,
          "witnesses_voted_for": 0
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "list_comments",
    params: ["start", "limit", "order"],
    parameter: `<ul>
      <li><code class="language-plaintext highlighter-rouge">start</code> depends on <code class="language-plaintext highlighter-rouge">order</code> (see below)</li>
      <li><code class="language-plaintext highlighter-rouge">limit</code> is up to 1000.</li>
      <li><code class="language-plaintext highlighter-rouge">order</code> can be one of:
        <ul>
          <li><code class="language-plaintext highlighter-rouge">by_cashout_time</code> - order by cashout time
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of three required values (two optionally blank): <code class="language-plaintext highlighter-rouge">timestamp</code>, <code class="language-plaintext highlighter-rouge">author</code>, <code class="language-plaintext highlighter-rouge">permlink</code></li>
            </ul>
          </li>
          <li><code class="language-plaintext highlighter-rouge">by_permlink</code> - order by permlink
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of two required values (both optionally blank): <code class="language-plaintext highlighter-rouge">author</code>, <code class="language-plaintext highlighter-rouge">permlink</code></li>
            </ul>
          </li>
          <li><code class="language-plaintext highlighter-rouge">by_root</code> - order by root
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of four required values (two optional blank): <code class="language-plaintext highlighter-rouge">root_author</code>, <code class="language-plaintext highlighter-rouge">root_permlink</code>, <code class="language-plaintext highlighter-rouge">child_author</code>, <code class="language-plaintext highlighter-rouge">child_permlink</code></li>
            </ul>
          </li>
          <li><code class="language-plaintext highlighter-rouge">by_parent</code> - order by parent
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of four required values (two optional blank): <code class="language-plaintext highlighter-rouge">parent_author</code>, <code class="language-plaintext highlighter-rouge">parent_permlink</code>, <code class="language-plaintext highlighter-rouge">child_author</code>, <code class="language-plaintext highlighter-rouge">child_permlink</code></li>
            </ul>
          </li>
          <li><code class="language-plaintext highlighter-rouge">by_last_update</code> - order by last update
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of four required values (two optionally blank): <code class="language-plaintext highlighter-rouge">parent_author</code>, <code class="language-plaintext highlighter-rouge">update_time</code>, <code class="language-plaintext highlighter-rouge">start_author</code>, <code class="language-plaintext highlighter-rouge">permlink</code></li>
            </ul>
          </li>
          <li><code class="language-plaintext highlighter-rouge">by_author_last_update</code> - order by author’s last update
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of four required values (two optionally blank): <code class="language-plaintext highlighter-rouge">parent_author</code>, <code class="language-plaintext highlighter-rouge">update_time</code>, <code class="language-plaintext highlighter-rouge">start_author</code>, <code class="language-plaintext highlighter-rouge">permlink</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th><code class="language-plaintext highlighter-rouge">start</code> (array)</th>
          <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
          <th><code class="language-plaintext highlighter-rouge">order</code> (string)</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["1970-01-01T00:00:00", "", ""]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_cashout_time"</code></td>
          <td>Queries first 10 comments, sort by cashout time</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["", ""]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_permlink"</code></td>
          <td>Queries first 10 comments, sort by permlink</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["hiveio","announcing-the-launch-of-hive-blockchain", "", ""]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_root"</code></td>
          <td>Queries next 10 comments starting at @hiveio/firstpost, sort by root</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["hiveio","announcing-the-launch-of-hive-blockchain", "", ""]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_parent"</code></td>
          <td>Queries next 10 comments starting at @hiveio/firstpost, sort by parent</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["hiveio","1970-01-01T00:00:00", "", ""]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_last_update"</code></td>
          <td>Queries next 10 comments starting at @hiveio’s updates since timpstamp, sort by last update</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["hiveio","1970-01-01T00:00:00", "", ""]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_author_last_update"</code></td>
          <td>Queries next 10 comments starting at @hiveio’s updates since timestamp, sort by author’s last update</td>
        </tr>
      </tbody>
    </table>`,
    description:_t("database_api.list_comments"),
    url: `${ConfigItems.baseUrl}/api/list_comments?start=["",""]&limit=5&order=by_permlink`,
    response: `{
      "comments": [
        {
          "abs_rshares": 0,
          "allow_curation_rewards": true,
          "allow_replies": true,
          "allow_votes": true,
          "author": "a-0-0-0-0-0-0",
          "author_rewards": 2146,
          "beneficiaries": [],
          "body": "<center>\\n<img src=\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\">\\n<h1>Everyday unused upvotes go in drain.\\nWhy not use it for charity.</h1></center>",
          "cashout_time": "1969-12-31T23:59:59",
          "category": "charity",
          "children": 1,
          "children_abs_rshares": 0,
          "created": "2018-06-09T04:14:03",
          "curator_payout_value": {
            "amount": "121",
            "nai": "@@000000013",
            "precision": 3
          },
          "depth": 0,
          "id": 59940601,
          "json_metadata": "{\\"tags\\":[\\"charity\\",\\"love\\",\\"life\\",\\"care\\",\\"steemit\\"],\\"image\\":[\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\"],\\"app\\":\\"steemit/0.1\\",\\"format\\":\\"markdown\\"}",
          "last_payout": "2018-06-16T04:14:03",
          "last_update": "2018-06-09T04:14:03",
          "max_accepted_payout": {
            "amount": "1000000000",
            "nai": "@@000000013",
            "precision": 3
          },
          "max_cashout_time": "1969-12-31T23:59:59",
          "net_rshares": 0,
          "net_votes": 61,
          "parent_author": "",
          "parent_permlink": "charity",
          "percent_hbd": 10000,
          "permlink": "245dkq-upvote-4-charity",
          "reward_weight": 10000,
          "root_author": "a-0-0-0-0-0-0",
          "root_permlink": "245dkq-upvote-4-charity",
          "title": "Upvote 4 Charity 👍",
          "total_payout_value": {
            "amount": "3675",
            "nai": "@@000000013",
            "precision": 3
          },
          "total_vote_weight": 0,
          "vote_rshares": 0
        },
        {
          "abs_rshares": 0,
          "allow_curation_rewards": true,
          "allow_replies": true,
          "allow_votes": true,
          "author": "a-0-0-0-0-0-0",
          "author_rewards": 30,
          "beneficiaries": [],
          "body": "<center>\\n<img src=\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\">\\n<h1>Everyday unused upvotes go in drain.\\nWhy not use it for charity.</h1></center>",
          "cashout_time": "1969-12-31T23:59:59",
          "category": "charity",
          "children": 2,
          "children_abs_rshares": 0,
          "created": "2018-06-06T16:58:30",
          "curator_payout_value": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "depth": 0,
          "id": 59557390,
          "json_metadata": "{\\"tags\\":[\\"charity\\",\\"love\\",\\"life\\",\\"care\\",\\"steemit\\"],\\"image\\":[\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\"],\\"app\\":\\"steemit/0.1\\",\\"format\\":\\"markdown\\"}",
          "last_payout": "2018-06-13T16:58:30",
          "last_update": "2018-06-06T16:58:30",
          "max_accepted_payout": {
            "amount": "1000000000",
            "nai": "@@000000013",
            "precision": 3
          },
          "max_cashout_time": "1969-12-31T23:59:59",
          "net_rshares": 0,
          "net_votes": 12,
          "parent_author": "",
          "parent_permlink": "charity",
          "percent_hbd": 10000,
          "permlink": "24w57k-upvote-4-charity",
          "reward_weight": 10000,
          "root_author": "a-0-0-0-0-0-0",
          "root_permlink": "24w57k-upvote-4-charity",
          "title": "Upvote 4 Charity 👍",
          "total_payout_value": {
            "amount": "54",
            "nai": "@@000000013",
            "precision": 3
          },
          "total_vote_weight": 0,
          "vote_rshares": 0
        },
        {
          "abs_rshares": 0,
          "allow_curation_rewards": true,
          "allow_replies": true,
          "allow_votes": true,
          "author": "a-0-0-0-0-0-0",
          "author_rewards": 104,
          "beneficiaries": [],
          "body": "<center>\\n<img src=\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\">\\n<h1>Everyday unused upvotes go in drain.\\nWhy not use it for charity.</h1></center>",
          "cashout_time": "1969-12-31T23:59:59",
          "category": "charity",
          "children": 2,
          "children_abs_rshares": 0,
          "created": "2018-06-08T03:32:39",
          "curator_payout_value": {
            "amount": "31",
            "nai": "@@000000013",
            "precision": 3
          },
          "depth": 0,
          "id": 59785240,
          "json_metadata": "{\\"tags\\":[\\"charity\\",\\"love\\",\\"life\\",\\"care\\",\\"steemit\\"],\\"image\\":[\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\"],\\"app\\":\\"steemit/0.1\\",\\"format\\":\\"markdown\\"}",
          "last_payout": "2018-06-15T03:32:39",
          "last_update": "2018-06-08T03:32:39",
          "max_accepted_payout": {
            "amount": "1000000000",
            "nai": "@@000000013",
            "precision": 3
          },
          "max_cashout_time": "1969-12-31T23:59:59",
          "net_rshares": 0,
          "net_votes": 18,
          "parent_author": "",
          "parent_permlink": "charity",
          "percent_hbd": 10000,
          "permlink": "2ahvhk-upvote-4-charity",
          "reward_weight": 10000,
          "root_author": "a-0-0-0-0-0-0",
          "root_permlink": "2ahvhk-upvote-4-charity",
          "title": "Upvote 4 Charity 👍",
          "total_payout_value": {
            "amount": "179",
            "nai": "@@000000013",
            "precision": 3
          },
          "total_vote_weight": 0,
          "vote_rshares": 0
        },
        {
          "abs_rshares": 0,
          "allow_curation_rewards": true,
          "allow_replies": true,
          "allow_votes": true,
          "author": "a-0-0-0-0-0-0",
          "author_rewards": 26,
          "beneficiaries": [],
          "body": "<center>\\n<img src=\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\">\\n<h1>Everyday unused upvotes go in drain.\\nWhy not use it for charity.</h1></center>",
          "cashout_time": "1969-12-31T23:59:59",
          "category": "charity",
          "children": 0,
          "children_abs_rshares": 0,
          "created": "2018-06-08T10:20:09",
          "curator_payout_value": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "depth": 0,
          "id": 59827763,
          "json_metadata": "{\\"tags\\":[\\"charity\\",\\"love\\",\\"life\\",\\"care\\",\\"steemit\\"],\\"image\\":[\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\"],\\"app\\":\\"steemit/0.1\\",\\"format\\":\\"markdown\\"}",
          "last_payout": "2018-06-15T10:20:09",
          "last_update": "2018-06-08T10:20:09",
          "max_accepted_payout": {
            "amount": "1000000000",
            "nai": "@@000000013",
            "precision": 3
          },
          "max_cashout_time": "1969-12-31T23:59:59",
          "net_rshares": 0,
          "net_votes": 11,
          "parent_author": "",
          "parent_permlink": "charity",
          "percent_hbd": 10000,
          "permlink": "2edar6-upvote-4-charity",
          "reward_weight": 10000,
          "root_author": "a-0-0-0-0-0-0",
          "root_permlink": "2edar6-upvote-4-charity",
          "title": "Upvote 4 Charity 👍",
          "total_payout_value": {
            "amount": "44",
            "nai": "@@000000013",
            "precision": 3
          },
          "total_vote_weight": 0,
          "vote_rshares": 0
        },
        {
          "abs_rshares": 0,
          "allow_curation_rewards": true,
          "allow_replies": true,
          "allow_votes": true,
          "author": "a-0-0-0-0-0-0",
          "author_rewards": 559,
          "beneficiaries": [],
          "body": "<center>\\n<img src=\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\">\\n<h1>Everyday unused upvotes go in drain.\\nWhy not use it for charity.</h1></center>",
          "cashout_time": "1969-12-31T23:59:59",
          "category": "charity",
          "children": 5,
          "children_abs_rshares": 0,
          "created": "2018-06-10T08:34:03",
          "curator_payout_value": {
            "amount": "250",
            "nai": "@@000000013",
            "precision": 3
          },
          "depth": 0,
          "id": 60111028,
          "json_metadata": "{\\"tags\\":[\\"charity\\",\\"love\\",\\"life\\",\\"care\\",\\"steemit\\"],\\"image\\":[\\"https://steemitimages.com/DQmPGxBK4512q2CGZ71KH8NjzTmpufQX858GRz8uC6MKjVJ/hands-connecting-logo_23-2147507857.jpg\\"],\\"app\\":\\"steemit/0.1\\",\\"format\\":\\"markdown\\"}",
          "last_payout": "2018-06-17T08:34:03",
          "last_update": "2018-06-10T08:34:03",
          "max_accepted_payout": {
            "amount": "1000000000",
            "nai": "@@000000013",
            "precision": 3
          },
          "max_cashout_time": "1969-12-31T23:59:59",
          "net_rshares": 0,
          "net_votes": 29,
          "parent_author": "",
          "parent_permlink": "charity",
          "percent_hbd": 10000,
          "permlink": "2gojbj-upvote-4-charity",
          "reward_weight": 10000,
          "root_author": "a-0-0-0-0-0-0",
          "root_permlink": "2gojbj-upvote-4-charity",
          "title": "Upvote 4 Charity 👍",
          "total_payout_value": {
            "amount": "937",
            "nai": "@@000000013",
            "precision": 3
          },
          "total_vote_weight": 0,
          "vote_rshares": 0
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "list_escrows",
    params: ["start", "limit", "order"],
    parameter: `<p>Parameters: start:array; limit:int; order:string</p><ul>
      <li><code class="language-plaintext highlighter-rouge">start</code> depends on <code class="language-plaintext highlighter-rouge">order</code> (see below)</li>
      <li><code class="language-plaintext highlighter-rouge">limit</code> is up to 1000.</li>
      <li><code class="language-plaintext highlighter-rouge">order</code> can be one of:
        <ul>
          <li><code class="language-plaintext highlighter-rouge">by_from_id</code> - order by id
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of two values: <code class="language-plaintext highlighter-rouge">account</code>, <code class="language-plaintext highlighter-rouge">escrow_id</code></li>
            </ul>
          </li>
          <li><code class="language-plaintext highlighter-rouge">by_ratification_deadline</code> - order by ratification deadline
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of three values: <code class="language-plaintext highlighter-rouge">is_approved</code>, <code class="language-plaintext highlighter-rouge">timestamp</code>, <code class="language-plaintext highlighter-rouge">escrow_id</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th><code class="language-plaintext highlighter-rouge">start</code> (array)</th>
          <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
          <th><code class="language-plaintext highlighter-rouge">order</code> (string)</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["alice", 99]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_from_id"</code></td>
          <td>Queries first 10 requests, sort by id</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">[true, "1960-01-01T00:00:00", 99]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_ratification_deadline"</code></td>
          <td>Queries first 10 requests, sort by ratification deadline</td>
        </tr>
      </tbody>
    </table>`,
    description:_t("database_api.list_escrows"),
    url: `${ConfigItems.baseUrl}/api/list_escrows?start=["",0]&limit=5&order=by_from_id`,
    response: `{
      "escrows": [
        {
          "agent": "ongame",
          "agent_approved": true,
          "disputed": false,
          "escrow_expiration": "2018-11-24T17:31:26",
          "escrow_id": 1,
          "from": "addicttolife",
          "hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "hive_balance": {
            "amount": "4832",
            "nai": "@@000000021",
            "precision": 3
          },
          "id": 158,
          "pending_fee": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "ratification_deadline": "2018-11-23T17:31:26",
          "to": "fundition.help",
          "to_approved": true
        },
        {
          "agent": "swapsteem",
          "agent_approved": true,
          "disputed": true,
          "escrow_expiration": "2019-01-23T21:01:17",
          "escrow_id": 1547992122,
          "from": "anlptl",
          "hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "hive_balance": {
            "amount": "1",
            "nai": "@@000000021",
            "precision": 3
          },
          "id": 182,
          "pending_fee": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "ratification_deadline": "2019-01-20T21:01:17",
          "to": "svijay1692",
          "to_approved": true
        },
        {
          "agent": "swapsteem",
          "agent_approved": true,
          "disputed": true,
          "escrow_expiration": "2019-01-25T18:01:09",
          "escrow_id": 1548154776,
          "from": "anlptl",
          "hbd_balance": {
            "amount": "0",
            "nai": "@@000000013",
            "precision": 3
          },
          "hive_balance": {
            "amount": "1",
            "nai": "@@000000021",
            "precision": 3
          },
          "id": 185,
          "pending_fee": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "ratification_deadline": "2019-01-22T18:01:09",
          "to": "anlptl",
          "to_approved": true
        },
        {
          "agent": "elautomatico",
          "agent_approved": true,
          "disputed": false,
          "escrow_expiration": "2019-06-26T19:08:45",
          "escrow_id": 1,
          "from": "biteosdev",
          "hbd_balance": {
            "amount": "1",
            "nai": "@@000000013",
            "precision": 3
          },
          "hive_balance": {
            "amount": "2",
            "nai": "@@000000021",
            "precision": 3
          },
          "id": 162,
          "pending_fee": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "ratification_deadline": "2019-06-25T19:08:45",
          "to": "loshombresdepaco",
          "to_approved": true
        },
        {
          "agent": "elautomatico",
          "agent_approved": true,
          "disputed": false,
          "escrow_expiration": "2019-06-26T19:08:45",
          "escrow_id": 2,
          "from": "biteosdev",
          "hbd_balance": {
            "amount": "1",
            "nai": "@@000000013",
            "precision": 3
          },
          "hive_balance": {
            "amount": "5",
            "nai": "@@000000021",
            "precision": 3
          },
          "id": 163,
          "pending_fee": {
            "amount": "0",
            "nai": "@@000000021",
            "precision": 3
          },
          "ratification_deadline": "2019-06-25T19:08:45",
          "to": "loshombresdepaco",
          "to_approved": true
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "list_limit_orders",
    params: ["start", "limit", "order"],
    parameter: `<p>Parameters: start:array; limit:int; order:string</p>
    <ul>
      <li><code class="language-plaintext highlighter-rouge">start</code> depends on <code class="language-plaintext highlighter-rouge">order</code> (see below)</li>
      <li><code class="language-plaintext highlighter-rouge">limit</code> is up to 1000.</li>
      <li><code class="language-plaintext highlighter-rouge">order</code> can be one of:
        <ul>
          <li><code class="language-plaintext highlighter-rouge">by_price</code> - order by price
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of two values: <code class="language-plaintext highlighter-rouge">price</code>, <code class="language-plaintext highlighter-rouge">order_type</code></li>
            </ul>
          </li>
          <li><code class="language-plaintext highlighter-rouge">by_account</code> - order by account
            <ul>
              <li><code class="language-plaintext highlighter-rouge">start</code> is an array of two values: <code class="language-plaintext highlighter-rouge">account</code>, <code class="language-plaintext highlighter-rouge">order_id</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th><code class="language-plaintext highlighter-rouge">start</code> (array)</th>
          <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
          <th><code class="language-plaintext highlighter-rouge">order</code> (string)</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">[{"base": {"amount": "85405", "precision": 3, "nai": "@@000000021"}, "quote": {"amount": "17192", "precision": 3, "nai": "@@000000013"}}, 0]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_price"</code></td>
          <td>Queries first 10 requests, sort by price</td>
        </tr>
        <tr>
          <td><code class="language-plaintext highlighter-rouge">["alice", 0]</code></td>
          <td>10</td>
          <td><code class="language-plaintext highlighter-rouge">"by_account"</code></td>
          <td>Queries first 10 requests, sort by account</td>
        </tr>
      </tbody>
    </table>`,
    description:_t("database_api.list_limit_orders"),
    url: `${ConfigItems.baseUrl}/api/list_limit_orders?start=["hbdstabilizer",0]&limit=5&order=by_account`,
    response: `{
      "orders": [
        {
          "created": "2024-05-31T14:34:51",
          "expiration": "2024-06-27T14:33:27",
          "for_sale": 5486327,
          "id": 9636028,
          "orderid": 1717166083,
          "sell_price": {
            "base": {
              "amount": "5486327",
              "nai": "@@000000021",
              "precision": 3
            },
            "quote": {
              "amount": "1815974",
              "nai": "@@000000013",
              "precision": 3
            }
          },
          "seller": "helcim"
        },
        {
          "created": "2024-05-31T19:46:12",
          "expiration": "2024-06-27T19:46:09",
          "for_sale": 3500,
          "id": 9637531,
          "orderid": 17184769,
          "sell_price": {
            "base": {
              "amount": "3500",
              "nai": "@@000000013",
              "precision": 3
            },
            "quote": {
              "amount": "12500",
              "nai": "@@000000021",
              "precision": 3
            }
          },
          "seller": "hindavi"
        },
        {
          "created": "2024-05-12T02:01:48",
          "expiration": "2024-06-08T01:57:44",
          "for_sale": 13790,
          "id": 9535752,
          "orderid": 1715479308,
          "sell_price": {
            "base": {
              "amount": "13790",
              "nai": "@@000000021",
              "precision": 3
            },
            "quote": {
              "amount": "13790",
              "nai": "@@000000013",
              "precision": 3
            }
          },
          "seller": "hive-158152"
        },
        {
          "created": "2024-05-29T02:22:09",
          "expiration": "2024-06-25T02:22:07",
          "for_sale": 151872,
          "id": 9620818,
          "orderid": 1716949327,
          "sell_price": {
            "base": {
              "amount": "151872",
              "nai": "@@000000021",
              "precision": 3
            },
            "quote": {
              "amount": "65305",
              "nai": "@@000000013",
              "precision": 3
            }
          },
          "seller": "hivesl"
        },
        {
          "created": "2024-06-01T06:56:09",
          "expiration": "2024-06-08T06:55:32",
          "for_sale": 40835,
          "id": 9639512,
          "orderid": 99621553,
          "sell_price": {
            "base": {
              "amount": "40835",
              "nai": "@@000000021",
              "precision": 3
            },
            "quote": {
              "amount": "12371",
              "nai": "@@000000013",
              "precision": 3
            }
          },
          "seller": "honeybot"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "list_owner_histories",
    params: ["start", "limit", ],
    parameter: `<p>Parameters: start:array; limit:int;</p>
      <table>
        <thead>
          <tr>
            <th><code class="language-plaintext highlighter-rouge">start</code> (array)</th>
            <th><code class="language-plaintext highlighter-rouge">limit</code> (int)</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["hiveio", "1970-01-01T00:00:00"]</code></td>
            <td>10</td>
            <td>Queries the owner history starting from account named “hiveio” on “1970-01-01T00:00:00”, limit 10 results.</td>
          </tr>
          <tr>
            <td><code class="language-plaintext highlighter-rouge">["alice", "1970-01-01T00:00:00"]</code></td>
            <td>10</td>
            <td>Queries the owner history starting from account named “alice”, limit 10 results.</td>
          </tr>
        </tbody>
      </table>`,
    description:_t("database_api.list_owner_histories"),
    url: `${ConfigItems.baseUrl}/api/list_owner_histories?start=["a","1970-01-01T00:00:00"]&limit=5`,
    response: `{
      "owner_auths": [
        {
          "account": "a1a2",
          "id": 765781,
          "last_valid_time": "2024-06-13T20:58:36",
          "previous_owner_authority": {
            "account_auths": [],
            "key_auths": [
              [
                "STM78Zbn5WKP84zNAtbhQ6UdGGSzWbtZySqVg21GGPXvJrfhj5mMY",
                1
              ]
            ],
            "weight_threshold": 1
          }
        },
        {
          "account": "abhi1113",
          "id": 765439,
          "last_valid_time": "2024-05-28T18:12:36",
          "previous_owner_authority": {
            "account_auths": [],
            "key_auths": [
              [
                "STM5UphcBPV73ybULuCXcVuupCzNkAptZqUDUUwcmuGLgjbAfAcDM",
                1
              ]
            ],
            "weight_threshold": 1
          }
        },
        {
          "account": "ahubasakk",
          "id": 765393,
          "last_valid_time": "2024-05-24T23:42:24",
          "previous_owner_authority": {
            "account_auths": [],
            "key_auths": [
              [
                "STM8V86owt4RxyTVE5fKhkgPpBWSNcva3y6y1r2nC2Qg2hTVpPBRg",
                1
              ]
            ],
            "weight_threshold": 1
          }
        },
        {
          "account": "ajaycrypto18",
          "id": 765796,
          "last_valid_time": "2024-06-16T20:10:33",
          "previous_owner_authority": {
            "account_auths": [],
            "key_auths": [
              [
                "STM5QeuYQLap6qeVMzg1quPiRcKMQEWAihZW4jF79ZD2WihnYdnu4",
                1
              ]
            ],
            "weight_threshold": 1
          }
        },
        {
          "account": "ajie25",
          "id": 765379,
          "last_valid_time": "2024-05-23T14:29:54",
          "previous_owner_authority": {
            "account_auths": [],
            "key_auths": [
              [
                "STM5yPuSR3xrhfhf8XN743bu81seBBKPwCiG8JxGhungMu8iJ5csw",
                1
              ]
            ],
            "weight_threshold": 1
          }
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "list_proposals",
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
    description:_t("database_api.get_proposals_description"),
    url: `${ConfigItems.baseUrl}/api/list_proposals?order="by_creator"&order_direction="ascending"&status="all"&limit=3&start=["ecency"]`,
    response: `{
      "proposals": [
        {
          "id": 141,
          "proposal_id": 141,
          "creator": "ecency",
          "receiver": "ecency",
          "start_date": "2020-11-25T00:00:00",
          "end_date": "2021-11-25T00:00:00",
          "daily_pay": {
            "amount": "350000",
            "precision": 3,
            "nai": "@@000000013"
          },
          "subject": "Proposal: Ecency opensource development and maintenance",
          "permlink": "proposal-ecency-development-and-maintenance",
          "total_votes": "55805737926128695",
          "status": "expired"
        },
        {
          "id": 197,
          "proposal_id": 197,
          "creator": "ecency",
          "receiver": "ecency",
          "start_date": "2021-11-30T00:00:00",
          "end_date": "2022-11-30T00:00:00",
          "daily_pay": {
            "amount": "369000",
            "precision": 3,
            "nai": "@@000000013"
          },
          "subject": "Ecency development and maintenance #2",
          "permlink": "ecency-development-and-maintenance-2",
          "total_votes": "85884127652126644",
          "status": "expired"
        },
        {
          "id": 245,
          "proposal_id": 245,
          "creator": "ecency",
          "receiver": "ecency",
          "start_date": "2022-11-30T00:00:00",
          "end_date": "2023-11-30T00:00:00",
          "daily_pay": {
            "amount": "396000",
            "precision": 3,
            "nai": "@@000000013"
          },
          "subject": "Ecency development and maintenance #3",
          "permlink": "ecency-development-and-maintenance-3",
          "total_votes": "78399494377340575",
          "status": "active"
        }
      ]
    }`
  },
  {
    api: "database_api",
    method: "list_proposal_votes",
    params: ["start", "limit", "order", "order_direction", "status"],
    parameter: `<code>start:array; limit:int; order:string; order_direction:string; status:string</code><ul>
        <li><code class="language-plaintext highlighter-rouge">start</code> depends on <code class="language-plaintext highlighter-rouge">order</code> (see below)
          <ul>
            <li><code class="language-plaintext highlighter-rouge">voter</code> - voter of the proposal  (account name string)</li>
            <li><code class="language-plaintext highlighter-rouge">proposal.id</code> - id the proposal (int)</li>
          </ul>
        </li>
        <li><code class="language-plaintext highlighter-rouge">limit</code> is up to 1000.</li>
        <li><code class="language-plaintext highlighter-rouge">order</code> can be one of:
          <ul>
            <li><code class="language-plaintext highlighter-rouge">by_voter_proposal</code> - order by proposal voter</li>
            <li><code class="language-plaintext highlighter-rouge">by_proposal_voter</code> - order by <code class="language-plaintext highlighter-rouge">proposal.id</code></li>
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
      </ul>`,
    description:_t("database_api.list_proposal_votes_description"),
    url:`${ConfigItems.baseUrl}/api/list_proposal_votes?order="by_proposal_voter"&start=[0]&limit=2&status="all"`,
    response: `{
      "proposal_votes": [
        {
          "id": 43163,
          "voter": "abit",
          "proposal": {
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
            "total_votes": "25059676264649756",
            "status": "active"
          }
        },
        {
          "id": 43156,
          "voter": "abitcoinskeptic",
          "proposal": {
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
            "total_votes": "25059676264649756",
            "status": "active"
          }
        }
      ]
    }`
  },
  {
    api: "bridge",
    method: "get_community",
    params: ["name", "observer"],
    parameter: `<code>name: string, observer: string </code>`,
    description:_t("bridge_api.get_community_description"),
    url:`${ConfigItems.baseUrl}/api/get_community?name=hive-125125`,
    response: `{
      "id": 1336929,
      "name": "hive-125125",
      "title": "Ecency",
      "about": "microblogging platform",
      "lang": "en",
      "type_id": 1,
      "is_nsfw": false,
      "subscribers": 6046,
      "created_at": "2019-11-12 09:52:15",
      "sum_pending": 160,
      "num_pending": 437,
      "num_authors": 144,
      "avatar_url": "",
      "description": "https://ecency.com",
      "flag_text": "",
      "settings": {},
      "context": {},
      "team": [
        [
          "hive-125125",
          "owner",
          ""
        ],
        [
          "ecency",
          "admin",
          ""
        ],
        [
          "melinda010100",
          "admin",
          ""
        ],
        [
          "esteemapp",
          "admin",
          ""
        ],
        [
          "good-karma",
          "admin",
          ""
        ],
        [
          "noumantahir",
          "mod",
          ""
        ],
        [
          "jznsamuel",
          "mod",
          ""
        ]
      ]
    }`
  },
  {
    api: "bridge",
    method: "get_community_context",
    params: ["name", "account"],
    parameter: `<code>name: string, account: string </code>`,
    description:_t("bridge_api.get_community_context"),
    url:`${ConfigItems.baseUrl}/api/get_community_context?name=hive-125125&account=demo`,
    response: `{
      "role": "guest",
      "subscribed": true,
      "title": ""
    }`
  },
  {
    api: "bridge",
    method: "list_pop_communities",
    params: ["limit"],
    parameter: `<code>limit: integer </code>`,
    description:_t("bridge_api.list_pop_communities"),
    url:`${ConfigItems.baseUrl}/api/list_pop_communities?limit=10`,
    response: `[
      [
        "hive-140169",
        "Vibes"
      ],
      [
        "hive-194913",
        "Photography Lovers"
      ],
      [
        "hive-167922",
        "LeoFinance"
      ],
      [
        "hive-187189",
        "Lifestyle"
      ],
      [
        "hive-163772",
        "Pinmapple"
      ],
      [
        "hive-153850",
        "Hive Learners"
      ],
      [
        "hive-147010",
        "Liketu"
      ],
      [
        "hive-108045",
        "Family & Friends"
      ],
      [
        "hive-161155",
        "Freewriters"
      ],
      [
        "hive-120586",
        "Foodies Bee Hive"
      ]
    ]`
  },
  {
    api: "bridge",
    method: "list_community_roles",
    params: ["community", "last", "limit"],
    parameter: `<code>community: string; last: string (optional); limit: integer </code>`,
    description:_t("bridge_api.list_community_roles"),
    url:`${ConfigItems.baseUrl}/api/list_community_roles?community=hive-125125&limit=5`,
    response: `[
      [
        "hive-125125",
        "owner",
        ""
      ],
      [
        "ecency",
        "admin",
        ""
      ],
      [
        "esteemapp",
        "admin",
        ""
      ],
      [
        "good-karma",
        "admin",
        ""
      ],
      [
        "melinda010100",
        "admin",
        ""
      ]
    ]`
  },
  {
    api: "bridge",
    method: "get_payout_stats",
    params: ["limit"],
    parameter: `<code>limit: integer </code>`,
    description:_t("bridge_api.get_payout_stats"),
    url:`${ConfigItems.baseUrl}/api/get_payout_stats?limit=5`,
    response: `{
      "blogs": 38922.225,
      "items": [
        [
          "@hbd.funder",
          "@hbd.funder",
          30720.169,
          77,
          null
        ],
        [
          "hive-167922",
          "LeoFinance",
          10030.423,
          19921,
          1155
        ],
        [
          "hive-140169",
          "Vibes",
          4981.996,
          1897,
          408
        ],
        [
          "hive-163772",
          "Pinmapple",
          2972.592,
          1906,
          404
        ],
        [
          "hive-105017",
          "HIVE CN 中文社区",
          2943.449,
          1263,
          99
        ]
      ],
      "total": 124981.732
    }`
  },
  {
    api: "bridge",
    method: "list_communities",
    params: ["last", "limit", "query", "sort", "observer"],
    parameter: `<ul>
        <li><code class="language-plaintext highlighter-rouge">last</code> - name of community; paging mechanism [optional]</li>
        <li><code class="language-plaintext highlighter-rouge">limit</code> - limit number of listed communities, default: <code class="language-plaintext highlighter-rouge">100</code> [optional]</li>
        <li><code class="language-plaintext highlighter-rouge">query</code> - filters against <code class="language-plaintext highlighter-rouge">title</code> and <code class="language-plaintext highlighter-rouge">about</code> community fields [optional]</li>
        <li><code class="language-plaintext highlighter-rouge">sort</code> - default: <code class="language-plaintext highlighter-rouge">rank</code> [optional]
          <ul>
            <li><code class="language-plaintext highlighter-rouge">rank</code> - sort by community rank</li>
            <li><code class="language-plaintext highlighter-rouge">new</code> - sort by newest community</li>
            <li><code class="language-plaintext highlighter-rouge">subs</code> - sort by subscriptions</li>
          </ul>
        </li>
        <li><code class="language-plaintext highlighter-rouge">observer</code> - a valid account [optional]</li>
      </ul>`,
    description:_t("bridge.list_communities_description"),
    url: `${ConfigItems.baseUrl}/api/list_communities?query="ecency"`,
    response: `[
      {
        "id": 1336929,
        "name": "hive-125125",
        "title": "Ecency",
        "about": "microblogging platform",
        "lang": "en",
        "type_id": 1,
        "is_nsfw": false,
        "subscribers": 6046,
        "sum_pending": 160,
        "num_pending": 436,
        "num_authors": 142,
        "created_at": "2019-11-12 09:52:15",
        "avatar_url": "",
        "context": {},
        "admins": [
          "ecency",
          "esteemapp",
          "good-karma",
          "melinda010100"
        ]
      },
      {
        "id": 1368110,
        "name": "hive-172868",
        "title": "Ecency Bulgaria",
        "about": "Това е групата на България в www.ecency.com Ecency Mobile App",
        "lang": "bg",
        "type_id": 1,
        "is_nsfw": false,
        "subscribers": 499,
        "sum_pending": 29,
        "num_pending": 289,
        "num_authors": 34,
        "created_at": "2020-02-22 07:57:15",
        "avatar_url": "",
        "context": {},
        "admins": [
          "bulgaria-sports",
          "calisthenicsdrop",
          "ecency-bulgaria",
          "hive-bulgaria",
          "iliyan90"
        ]
      },
      {
        "id": 2436676,
        "name": "hive-133311",
        "title": "Ecency Support",
        "about": "Support, promote, succeed with Ecency",
        "lang": "en",
        "type_id": 1,
        "is_nsfw": false,
        "subscribers": 94,
        "sum_pending": 23,
        "num_pending": 191,
        "num_authors": 48,
        "created_at": "2023-01-22 09:29:24",
        "avatar_url": "",
        "context": {},
        "admins": [
          "ecency-star"
        ]
      },
      {
        "id": 2434208,
        "name": "hive-125126",
        "title": "Ecency Help",
        "about": "Ecency Help Community",
        "lang": "en",
        "type_id": 1,
        "is_nsfw": false,
        "subscribers": 43,
        "sum_pending": 0,
        "num_pending": 0,
        "num_authors": 0,
        "created_at": "2022-12-27 15:35:21",
        "avatar_url": "",
        "context": {},
        "admins": [
          "ecency",
          "melinda010100"
        ]
      },
      {
        "id": 1462198,
        "name": "hive-199256",
        "title": "TrueNoble Poency",
        "about": "A community of Poets - Please create Original Poetry/Prose that cannot be found outside of Ecency :)",
        "lang": "en",
        "type_id": 1,
        "is_nsfw": false,
        "subscribers": 15,
        "sum_pending": 0,
        "num_pending": 0,
        "num_authors": 0,
        "created_at": "2021-05-05 17:49:51",
        "avatar_url": "",
        "context": {},
        "admins": [
          "unitethearts"
        ]
      },
      {
        "id": 1933555,
        "name": "hive-19219",
        "title": "Epic Cash",
        "about": "A place for the Epic Cash Community on Ecency",
        "lang": "en",
        "type_id": 1,
        "is_nsfw": false,
        "subscribers": 9,
        "sum_pending": 0,
        "num_pending": 0,
        "num_authors": 0,
        "created_at": "2021-09-26 00:09:39",
        "avatar_url": "",
        "context": {},
        "admins": [
          "grendel25"
        ]
      }
    ]`
  },
  {
    api: "bridge",
    method: "get_discussion",
    params: ["author", "permlink", "observer"],
    parameter: `<code>author: string, permlink: string, observer: string(optional) </code>`,
    description:_t("bridge.get_discussion_description"),
    url:`${ConfigItems.baseUrl}/api/get_discussion?author=hiveio&permlink=around-the-hive-reflections`,
    response: `{
      "hiveio/around-the-hive-reflections": {
        "post_id": 101867403,
        "author": "hiveio",
        "permlink": "around-the-hive-reflections",
        "category": "hiveecosystem",
        "title": "Around the Hive: Reflections",
        "body": "![hive](https://images.hive.blog/768x0/https://files.peakd.com/file/peakd-hive/hiveio/pKjrNcbK-Hive-Wallpaper-1920x1080.png)\n\nIt's been a busy year so far for developers on Hive. Layer 2 solutions are in progress, key optimization is an ongoing priority, and many excellent dapps and services are being developed. \n\n![hive](https://images.hive.blog/DQmR3iwCn9yvwXDXfuNjmMX6FrjAvFfYQWgA4QRckpens1j/hive%20dividers-02.png)\n\n## A Clear and Consistent Vision\n\nLast year we came out with the [Technical Vision](https://gitlab.syncad.com/hive/hive-whitepaper/-/blob/master/technical-vision/infographic.pdf) for Hive. Some of the key points are:\n- Lowering the operating cost of nodes and baseline infrastructure to promote robust scaling.\n- Focus on ease of integration and ease of new development.\n- Second layer solutions to support custom functions such as smart contracts, fungible and non-fungible tokens, and interactive social applications.\n- Standardized microservices to support easy integration of new 2nd layer applications into the Hive ecosystem.\n- Full utilization of and emphasis on the promotion of Open Source developed and incorporated solutions.\n\nThis document still stands and outlines our mutual journey towards testing the limits of DPoS technology while innovating new solutions.\n\n![hive](https://images.hive.blog/DQmR3iwCn9yvwXDXfuNjmMX6FrjAvFfYQWgA4QRckpens1j/hive%20dividers-02.png)\n\n## Scalable Enterprise-level Solutions\n\nFor this year, 'scalability' is the term to remember. With ongoing optimization of our underlying technology by the @Blocktrades team, @Howo and many other  talented developers, Hive is rapidly reaching its potential as an enterprise-level blockchain. \n\nDifferent developers and development teams on Hive are exploring and building a selection of unique Layer 2 solutions. There are several complimentary and competing approaches under review and consideration. We are excited about all the possibilities ahead of us.\n\n![hive](https://images.hive.blog/DQmR3iwCn9yvwXDXfuNjmMX6FrjAvFfYQWgA4QRckpens1j/hive%20dividers-02.png)\n\n## The Strength of Hive\n\nOver the last few months we've seen a troubling trend among mainstream social media platforms engaging in censorship of users and manipulation of public opinion. This has become a very concerning global norm. We are therefore proud to, as a diverse ecosystem, provide an immutable blockchain for content storage and thus support the freedoms of speech and of information to all.\n\nThe strength of Hive lies in our decentralization. In a centralized system, the user is the customer or the product. In decentralized Hive, the user is the owner. Any individual enjoys the absolute freedom of contribution to Hive; you can build a dapp, you can start a community, you can nurture a blog, you can curate others, you can test core algorithm changes, you can work on a portal, etc. And you can do one or all of those in your own way, in whatever language you speak, from wherever on the planet you call home, championing your own creativity and uniqueness. **The possibilities are endless!**",
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
          "poshbot/re-around-the-hive-reflections-20210214t094348z",
          "nathanmars/qoil53",
          "steevc/re-hiveio-qoimw3",
          "poshbot/re-around-the-hive-reflections-20210214t113818z",
          "bhattg/re-hiveio-2021214t194127326z",
          "blockchainyouth/re-hiveio-qoiydg",
          "oaldamster/qojaa5",
          "marybellrg/re-hiveio-qojkt5",
          "hiveqa/re-hiveio-qojp46",
          "antisocialist/re-hiveio-qojsft",
          "juanvegetarian/re-hiveio-qok3y9",
          "poshbot/re-around-the-hive-reflections-20210215t061513z",
          "forykw/qopys8",
          "hivebuzz/hivebuzz-notify-hiveio-20210306t131835000z"
        ],
        "author_reputation": 73.59,
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
          },
          {
            "rshares": 1716184716790,
            "voter": "lunaticpandora"
          },
          {
            "rshares": 1541319122546,
            "voter": "holger80"
          },
          {
            "rshares": 8561450494,
            "voter": "orlandumike"
          },
          {
            "rshares": 154615133660,
            "voter": "cryptosharon"
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
      "poshbot/re-around-the-hive-reflections-20210214t094348z": {
        "post_id": 101868250,
        "author": "poshbot",
        "permlink": "re-around-the-hive-reflections-20210214t094348z",
        "category": "hiveecosystem",
        "title": "RE: Around the Hive: Reflections",
        "body": "https://twitter.com/ilbiscom/status/1360887430199586816",
        "json_metadata": {
          "app": "beem/0.24.20"
        },
        "created": "2021-02-14T09:43:48",
        "updated": "2021-02-14T09:43:48",
        "depth": 1,
        "children": 0,
        "net_rshares": 0,
        "is_paidout": true,
        "payout_at": "2021-02-21T09:43:48",
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
        "url": "/hiveecosystem/@hiveio/around-the-hive-reflections#@poshbot/re-around-the-hive-reflections-20210214t094348z",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "parent_author": "hiveio",
        "parent_permlink": "around-the-hive-reflections",
        "active_votes": [],
        "blacklists": []
      },
      "nathanmars/qoil53": {
        "post_id": 101868654,
        "author": "nathanmars",
        "permlink": "qoil53",
        "category": "hiveecosystem",
        "title": "RE: Around the Hive: Reflections",
        "body": "The possibilities are endless! \n\n2021 is a mega year for HIVE",
        "json_metadata": {
          "app": "hiveblog/0.1"
        },
        "created": "2021-02-14T10:29:27",
        "updated": "2021-02-14T10:29:27",
        "depth": 1,
        "children": 0,
        "net_rshares": 347028300703,
        "is_paidout": true,
        "payout_at": "2021-02-21T10:29:27",
        "payout": 0.1,
        "pending_payout_value": "0.000 HBD",
        "author_payout_value": "0.050 HBD",
        "curator_payout_value": "0.050 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 74.74,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 3,
          "flag_weight": 0
        },
        "url": "/hiveecosystem/@hiveio/around-the-hive-reflections#@nathanmars/qoil53",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "parent_author": "hiveio",
        "parent_permlink": "around-the-hive-reflections",
        "active_votes": [
          {
            "rshares": 255702935830,
            "voter": "steevc"
          },
          {
            "rshares": 60457273296,
            "voter": "marybellrg"
          },
          {
            "rshares": 30868091577,
            "voter": "montycashmusic"
          }
        ],
        "blacklists": []
      },
      "steevc/re-hiveio-qoimw3": {
        "post_id": 101869017,
        "author": "steevc",
        "permlink": "re-hiveio-qoimw3",
        "category": "hiveecosystem",
        "title": "RE: Around the Hive: Reflections",
        "body": "Technically Hive seems to be a good place. We have lots of cool projects going on that can make it more usable. We just need more people using it. That could mean a real marketing drive. I see Justin is buying mentions from some big Twitter users, but we can be more organic and real. \n\nHive five!",
        "json_metadata": {
          "tags": [
            "hiveecosystem"
          ],
          "app": "peakd/2021.01.3"
        },
        "created": "2021-02-14T11:07:15",
        "updated": "2021-02-14T11:07:15",
        "depth": 1,
        "children": 0,
        "net_rshares": 183158584656,
        "is_paidout": true,
        "payout_at": "2021-02-21T11:07:15",
        "payout": 0.051,
        "pending_payout_value": "0.000 HBD",
        "author_payout_value": "0.026 HBD",
        "curator_payout_value": "0.025 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 78.04,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 3,
          "flag_weight": 0
        },
        "url": "/hiveecosystem/@hiveio/around-the-hive-reflections#@steevc/re-hiveio-qoimw3",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "parent_author": "hiveio",
        "parent_permlink": "around-the-hive-reflections",
        "active_votes": [
          {
            "rshares": 66800471918,
            "voter": "blockchainyouth"
          },
          {
            "rshares": 86075046512,
            "voter": "antisocialist"
          },
          {
            "rshares": 30283066226,
            "voter": "montycashmusic"
          }
        ],
        "blacklists": []
      }
    }`
  },
  {
    api: "bridge",
    method: "get_post_header",
    params: ["author", "permlink"],
    parameter: `<code>author: string; permlink: string;</code>`,
    description:_t("bridge.get_post_header_description"),
    url: `${ConfigItems.baseUrl}/api/get_post_header?author="ecency"&permlink="token"`,
    response: `{
      "author":"ecency",
      "permlink":"token",
      "category":"hive-125125",
      "depth":0
    }`
  },
  {
    api: "bridge",
    method: "get_post",
    params: ["author", "permlink", "observer"],
    parameter: `<code>author: string; permlink: string; observer: string;</code>`,
    description:_t("bridge.get_post_description"),
    url: `${ConfigItems.baseUrl}/api/get_post?author="ecency"&permlink="token"`,
    response: `{
      "post_id": 101790300,
      "author": "ecency",
      "permlink": "token",
      "category": "hive-125125",
      "title": "Token",
      "body": "Most Ecency users know about history of our [Points](https://ecency.com/esteem/@esteemapp/estm-mining-use-cases-and-investment-opportunities) and how after rebranding we gave it placeholder name as *Points*. Since 2nd layer tokenization is still being worked on by multiple teams on Hive, we had extra time to work on our website, apps and add more functionality. Work on improving use cases, which in this post we want to give you an update about state of Points (\"your entry to Token\").\n\n![ecen_token.png](https://images.ecency.com/DQmRUffaVuBDqWTDCNsAtYEAkLA2Q1nwRq4KPQKY9bZW14p/ecen_token.png)\n\n# Supply \n\nTotal fixed supply: 1,000,000,000\n\nMining/minting allocation: 65%\nIncentive, referral, bounty programs: 15%\nIn-app purchases: 10%\nReserve: 5%\nTeam allocation: 5%\n\n### Current state\n\nCirculating supply: 360,056,955.134\n\nTop 10 holders:\n@roundbeargames\n@lebin\n@noel83\n@melinda010100\n@tempravis\n@btscn\n@circa\n@mcoinz79\n@janton\n@gamer00\n\n# Economics\n\nWe have decided fixed supply to make sure system is self-sustaining, so with time demand and supply equation would find equilibrium. Points are minted just by using Ecency apps or by delegating to HP to @ecency, so everyone who uses either Ecency website, desktop or mobile app, already knows how earning works and how fun it is.\n\nOnce max supply is reached, pool allocation is recycled. How this works?! Currently every time user uses Points to promote or boost their content, points are sent to reward pool reserve and after max supply is reached those points are sent back to reward pool which is minted by users again, token cycles in system. Some similar token-economics usually add small fee to burn and lower the supply, which might be interesting to analize in future.  Now, we wanted to decentralize this new rewarding system but on-chain SMT or other solutions were not ready or mature enough that gives us smart contract functionality. But since current Points system is great for distribution of our actual token, we are not rushing this decision and do what's best for growth, plan long term.\n\n# Use cases\n\nPoints can be used for *Promoting content* which will promote content across the feeds to all Ecency users. &Boosting content* is getting limited boost to content in form of curation/vote. *Gifting* is to basically tip or transfer Points to another user. Now we are working on next use cases which we thinking might help us gradually decentralize and establish our token that's both sustainable and widely used. \nOne of such use case that we think will excite everyone is *Community points* and have your own community standout, as more people post in your community from Ecency the more your community account earn Points, that way you can use extra rewards to organize giveaway, contest and manage, grow your community. \nMore on other use cases later, there is one more which we think will take this into next level. Stay tuned.\n\n# Earn now\n\n- Earn Ecency Points now by using Ecency apps.\n- Refer friends to earn even more, referral link example: https://ecency.com/signup?referral=ecency\n- By delegating HP to @ecency account. Delegation rewards daily Points, for example 1000 HP delegation mints out ~100 Points daily. Delegation also helps us to onboard more users to Hive which we have been doing for few months now, successfully.\n\nLearn more in our FAQ: https://ecency.com/faq\n \n### https://ecency.com  \n##### iOS https://ios.ecency.com  \n##### Android https://android.ecency.com  \n##### Desktop https://desktop.ecency.com  \n \n---  \n \n### Do you like our work? Support [Ecency proposal](https://ecency.com/hive/@ecency/proposal-ecency-development-and-maintenance):  \nEcency: https://ecency.com/proposals/141  \nHivesigner: [Vote for Proposal](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true)",
      "json_metadata": {
        "links": [
          "https://ecency.com/esteem/@esteemapp/estm-mining-use-cases-and-investment-opportunities",
          "https://ecency.com/signup?referral=ecency",
          "https://ecency.com/faq",
          "https://ecency.com",
          "https://ios.ecency.com",
          "https://android.ecency.com",
          "https://desktop.ecency.com",
          "https://ecency.com/hive/@ecency/proposal-ecency-development-and-maintenance",
          "https://ecency.com/proposals/141",
          "https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B141%5D&approve=true"
        ],
        "image": [
          "https://images.ecency.com/DQmRUffaVuBDqWTDCNsAtYEAkLA2Q1nwRq4KPQKY9bZW14p/ecen_token.png"
        ],
        "users": [
          "roundbeargames",
          "lebin",
          "noel83",
          "melinda010100",
          "tempravis",
          "btscn",
          "circa",
          "mcoinz79",
          "janton",
          "gamer00",
          "ecency",
          "ecency"
        ],
        "tags": [
          "hive-125125",
          "hive",
          "ecency",
          "uncensored",
          "blockchain",
          "dapp",
          "token",
          "smart-contracts"
        ],
        "app": "ecency/3.0.13-vision",
        "format": "markdown+html"
      },
      "created": "2021-02-09T10:02:36",
      "updated": "2021-02-09T10:34:06",
      "depth": 0,
      "children": 44,
      "net_rshares": 38787708973049,
      "is_paidout": true,
      "payout_at": "2021-02-16T10:02:36",
      "payout": 0,
      "pending_payout_value": "0.000 HBD",
      "author_payout_value": "0.000 HBD",
      "curator_payout_value": "0.000 HBD",
      "promoted": "0.000 HBD",
      "replies": [],
      "author_reputation": 75.46,
      "stats": {
        "hide": false,
        "gray": false,
        "total_votes": 248,
        "flag_weight": 0
      },
      "url": "/hive-125125/@ecency/token",
      "beneficiaries": [],
      "max_accepted_payout": "0.000 HBD",
      "percent_hbd": 10000,
      "active_votes": [
        {
          "rshares": 620233031504,
          "voter": "boatymcboatface"
        },
        {
          "rshares": 102981908948,
          "voter": "pnc"
        },
        {
          "rshares": 175004643152,
          "voter": "kingscrown"
        }
      ],
      "blacklists": [],
      "community": "hive-125125",
      "community_title": "Ecency",
      "author_role": "admin",
      "author_title": ""
    }`
  },
  {
    api: "bridge",
    method: "get_profile",
    params: ["account", "observer"],
    parameter: `<code>account: string; observer: string;</code>`,
    description:_t("bridge.get_profile_description"),
    url: `${ConfigItems.baseUrl}/api/get_profile?account="ecency"`,
    response: `{
      "id": 1382793,
      "name": "ecency",
      "created": "2020-05-13T07:50:03",
      "active": "2023-04-06T07:51:03",
      "post_count": 209922,
      "reputation": 75.46,
      "blacklists": [],
      "stats": {
        "rank": 0,
        "following": 7,
        "followers": 11057
      },
      "metadata": {
        "profile": {
          "name": "Ecency",
          "about": "Set it free, be free! Join immutable, uncensored, rewarding communities! https://ecency.com",
          "website": "https://ecency.com",
          "location": "Blockchain",
          "cover_image": "",
          "profile_image": "https://images.ecency.com/DQmWCcJcicyck5atZcgXt5rQstoQVSrumHdsmeQNKXHjgPa/ecenct_logo.png",
          "blacklist_description": "",
          "muted_list_description": ""
        }
      }
    }`
  },
  {
    api: "bridge",
    method: "get_trending_topics",
    params: ["limit", "observer"],
    parameter: `<code>limit: int; observer: string;</code>`,
    description:_t("bridge.get_trending_topics_description"),
    url: `${ConfigItems.baseUrl}/api/get_trending_topics?limit=3`,
    response: `[
      [
        "hive-167922",
        "LeoFinance"
      ],
      [
        "hive-163772",
        "Pinmapple"
      ],
      [
        "hive-13323",
        "Splinterlands"
      ]
    ]`
  },
  {
    api: "bridge",
    method: "get_account_posts",
    params: ["sort", "account", "start_author", "start_permlink", "limit", "observer"],
    parameter: `<ul>
        <li><code class="language-plaintext highlighter-rouge">sort</code> - Supported values:
          <ul>
            <li><code class="language-plaintext highlighter-rouge">blog</code> - top posts authored by given account (excluding posts to communities - unless explicitely reblogged) plus reblogs ranked by creation/reblog time</li>
            <li><code class="language-plaintext highlighter-rouge">feed</code> - top posts from blogs of accounts that given account is following ranked by creation/reblog time, not older than last month</li>
            <li><code class="language-plaintext highlighter-rouge">posts</code> - op posts authored by given account, newer first   comments - replies authored by given account, newer first</li>
            <li><code class="language-plaintext highlighter-rouge">replies</code> - replies to posts of given account, newer first</li>
            <li><code class="language-plaintext highlighter-rouge">payout</code> - all posts authored by given account that were not yet cashed out</li>
          </ul>
        </li>
        <li><code class="language-plaintext highlighter-rouge">account</code>: account name, points to valid account</li>
        <li><code class="language-plaintext highlighter-rouge">start_author</code>: author account name, if passed must be passed with <code class="language-plaintext highlighter-rouge">start_permlink</code> [optional]</li>
        <li><code class="language-plaintext highlighter-rouge">start_permlink</code>: post permlink of given author, point to valid post, paging mechanism [optional]</li>
        <li><code class="language-plaintext highlighter-rouge">limit</code>: if omitted the server will use the default value of 20 [optional]</li>
        <li><code class="language-plaintext highlighter-rouge">observer</code>: ignored for <code class="language-plaintext highlighter-rouge">blog</code>, feed and <code class="language-plaintext highlighter-rouge">replies</code>, otherwise when passed has to point to valid account used to fill blacklist stats and mark posts of authors blacklisted by observer, at this time ignored [optional]</li>
      </ul>`,
    description:_t("bridge.get_account_posts_description"),
    url: `${ConfigItems.baseUrl}/api/get_account_posts?sort="posts"&account="ecency"&limit=2`,
    response: `[
      {
        "post_id": 122243074,
        "author": "ecency",
        "permlink": "discord-monthly-giveaway-winners-51",
        "category": "hive-125125",
        "title": "Discord Monthly Giveaway Winners #51",
        "body": "![ecency-discord-giveaway](https://images.ecency.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMgdruQe3hEgLEE4zkBTt.png?format=match&mode=fit)\n\n> Every month, 5 users who actively help others in our discord chat will win the following prizes on the basis of their ranking:\n1st place - 500 Points\n2nd place - 400 Points\n3rd place - 300 Points\n4th, 5th places - 100 Points each\n\n### Basic rules\n\nFor the giveaway, you need to be active on [our discord](https://discord.me/ecency) and reach at least level 1 with the Ecency bot. You must not spam or abuse to gain levels or you will be banned forever. \n\nYou can check your ranks [using this link](https://mee6.xyz/leaderboard/385034494555455488). Any changes or updates in the rules will be notified on [our Discord](https://discord.me/ecency) and here in the Ecency news.\n\n![](https://images.ecency.com/DQmdu88A2V1MXdF8kxZdR7rJx2RJ2oMzD2MHbZXHgDvE9Sk/image.png)\n\nWe would like to appreciate the efforts of @YENMENDT, @aguamiel, @nanixxx, @sacra97, @joalheal for being active and helpful on the [Ecency Discord](https://discord.me/ecency), and congratulate them for winning the [51st Discord Giveaway]().\n\n*Rewards have been sent!*\n\n> *1st & 2nd Place Winners from previous month aren't eligible for 1st & 2nd Place in current month's prizes.*\n\nGood luck and keep Ecencing! 🎉🎉🎉\nThe 52nd Ecency Discord Giveaway is now live!!\n\n---  \n \n### Delegate Hive Power now and mine [Ecency Points + curation reward daily](https://ecency.com/hive-125125/@ecency/daily-100-curation-rewards) + help us onboard more people:  \n \n[50 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50%20HP) | [100 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100%20HP) | [500 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=500%20HP) | [1000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=1000%20HP) | [5000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=5000%20HP) | [10K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=10000%20HP) | [20K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=20000%20HP) | [50K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50000%20HP) | [100K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100000%20HP)  \n \n### Support our proposals  \n \n[Ecency](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B245%5D&approve=true)",
        "json_metadata": {
          "image": [
            "https://images.ecency.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMgdruQe3hEgLEE4zkBTt.png?format=match&mode=fit",
            "https://images.ecency.com/DQmdu88A2V1MXdF8kxZdR7rJx2RJ2oMzD2MHbZXHgDvE9Sk/image.png"
          ],
          "tags": [
            "hive-125125",
            "hive",
            "ecency",
            "points",
            "discord",
            "giveaway",
            "contest"
          ],
          "description": "",
          "app": "ecency/3.0.31-vision",
          "format": "markdown+html",
          "image_ratios": [
            1.6666666666666667,
            0.9776315789473684
          ]
        },
        "created": "2023-04-04T07:07:03",
        "updated": "2023-04-04T07:07:03",
        "depth": 0,
        "children": 4,
        "net_rshares": 48861191159072,
        "is_paidout": false,
        "payout_at": "2023-04-11T07:07:03",
        "payout": 27.038,
        "pending_payout_value": "27.038 HBD",
        "author_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 75.46,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 242,
          "flag_weight": 0
        },
        "url": "/hive-125125/@ecency/discord-monthly-giveaway-winners-51",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "active_votes": [
          {
            "rshares": 147893707953,
            "voter": "steemychicken1"
          },
          {
            "rshares": 748870399980,
            "voter": "boatymcboatface"
          },
          {
            "rshares": 68975356021,
            "voter": "kingscrown"
          }
        ],
        "blacklists": [],
        "community": "hive-125125",
        "community_title": "Ecency",
        "author_role": "admin",
        "author_title": ""
      },
      {
        "post_id": 122138180,
        "author": "ecency",
        "permlink": "ecency-monthly-guest-curation-program-30048fe77234e",
        "category": "hive-125125",
        "title": "Ecency Monthly Guest Curation Program #18",
        "body": "![](https://images.ecency.com/DQmeWGL3PLw5AKuaDhhx8kYcXsDNFSeJaJ6jmmyiV1dcUMw/image.png)\n\n***The 17th edition of the [Monthly Guest Curation Program](https://ecency.com/hive-125125/@ecency/ecency-monthly-guest-curation-program-446d24f79b1de) here on Hive was a great success, and it was a really tough job to pick curators from all the great applications that we received. In the end, an awesome set of Guest Curators joined our team and did a fantastic job during their term. It is now time to commence the 18th edition of the Guest Curation Program, giving a chance for Ecency users to learn the ropes of curation and in the process also grow their own profiles on the blockchain.***\n\n---\n\nOur [encouragement program](https://ecency.com/esteem/@good-karma/encouragement-program-continues-82eafcd10a299) has been encouraging and rewarding users of the **Ecency Web**, **Ecency Desktop** and **Ecency Mobile** apps over the past several months, and many users have been curious about the curation program and the job our curators do.\n\nCurators have to navigate spam, abusive accounts and those trying to game our encouragement system, to find genuine users and deserving content to reward, encourage and appreciate.\n\nSince curation is an integral part of the hive ecosystem, the **Guest Curation Program** is an initiative to allow dedicated Ecency users to learn more about curation, and in the process help support several other Ecency users as well as grow their own profile on the hive blockchain.\n\n### <center>How To Apply</center>\n\nWe have a growing and thriving discord community, so join us on the [Ecency Discord](https://discord.me/ecency) if you haven't already, and fill up the form pinned in the #🏁-curator-internship discord channel.\n\n### <center>About Guest Curator Program</center>\n\n- 2 Guest curators will be appointed every month for a period of 30 days.\n\n- Selection will be based upon responses received in the questionnaire. It would be desired for the user to be a dedicated Ecency user and the decision of the selectors is final.\n\n- The rules to be followed and perks for being appointed as a **Guest Curator** will be shared upon selection.\n\n- As a curator, it is expected that you have a desire to help the community, spread some love, cheer and goodwill among users of Ecency. And also, have the ability to identify and report abuse.\n\n- If the guest curator is found to be abusing the granted role and powers, it will lead to immediate removal from the program.\n\n- If you are not selected as a Guest Curator, you may reapply again in the next cycle. But a selected Guest Curator can apply to the program again only after the end of 60 days (i.e. 2 cycles after their selection). \n\nWe are looking forward to hear from you! Join [Discord](https://discord.me/ecency) and show your curation skills to be part of the [Ecency](https://ecency.com/) curator team.\n\n---  \n \n### Delegate Hive Power now and mine [Ecency Points + curation reward daily](https://ecency.com/hive-125125/@ecency/daily-100-curation-rewards) + help us onboard more people:  \n \n[50 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50%20HP) | [100 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100%20HP) | [500 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=500%20HP) | [1000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=1000%20HP) | [5000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=5000%20HP) | [10K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=10000%20HP) | [20K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=20000%20HP) | [50K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50000%20HP) | [100K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100000%20HP)  \n \n### Support our proposals  \n \n[Ecency](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B245%5D&approve=true) ",
        "json_metadata": {
          "image": [
            "https://images.ecency.com/DQmeWGL3PLw5AKuaDhhx8kYcXsDNFSeJaJ6jmmyiV1dcUMw/image.png"
          ],
          "tags": [
            "hive-125125",
            "vision",
            "hive",
            "curation",
            "ecency",
            "community"
          ],
          "description": "",
          "app": "ecency/3.0.31-vision",
          "format": "markdown+html",
          "image_ratios": [
            1.6666666666666667
          ]
        },
        "created": "2023-03-31T11:34:00",
        "updated": "2023-03-31T11:34:00",
        "depth": 0,
        "children": 14,
        "net_rshares": 34086392177688,
        "is_paidout": false,
        "payout_at": "2023-04-07T11:34:00",
        "payout": 18.693,
        "pending_payout_value": "18.693 HBD",
        "author_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 75.46,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 167,
          "flag_weight": 0
        },
        "url": "/hive-125125/@ecency/ecency-monthly-guest-curation-program-30048fe77234e",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "active_votes": [
          {
            "rshares": 747050035711,
            "voter": "boatymcboatface"
          },
          {
            "rshares": 72007589633,
            "voter": "kingscrown"
          },
          {
            "rshares": 200162798696,
            "voter": "theshell"
          }
        ],
        "blacklists": [],
        "community": "hive-125125",
        "community_title": "Ecency",
        "author_role": "admin",
        "author_title": ""
      }
    ]`
  },
  {
    api: "bridge",
    method: "get_ranked_posts",
    params: ["sort", "start_author", "start_permlink", "limit", "tag", "observer"],
    parameter: `<p>Supported values for <code class="language-plaintext highlighter-rouge">sort</code>:</p><ul>
        <li><code class="language-plaintext highlighter-rouge">trending</code></li>
        <li><code class="language-plaintext highlighter-rouge">hot</code></li>
        <li><code class="language-plaintext highlighter-rouge">created</code></li>
        <li><code class="language-plaintext highlighter-rouge">promoted</code></li>
        <li><code class="language-plaintext highlighter-rouge">payout</code></li>
        <li><code class="language-plaintext highlighter-rouge">payout_comments</code></li>
        <li><code class="language-plaintext highlighter-rouge">muted</code></li>
      </ul><p>The value for <code class="language-plaintext highlighter-rouge">tag</code> can be any valid tag.</p><p>The value for <code class="language-plaintext highlighter-rouge">observer</code> can be any valid account or empty string.</p>`,
    description:_t("bridge.get_ranked_posts_description"),
    url: `${ConfigItems.baseUrl}/api/get_ranked_posts?sort="trending"&limit=2&tag="hive-125125"`,
    response: `[
      {
        "post_id": 122243074,
        "author": "ecency",
        "permlink": "discord-monthly-giveaway-winners-51",
        "category": "hive-125125",
        "title": "Discord Monthly Giveaway Winners #51",
        "body": "![ecency-discord-giveaway](https://images.ecency.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMgdruQe3hEgLEE4zkBTt.png?format=match&mode=fit)\n\n> Every month, 5 users who actively help others in our discord chat will win the following prizes on the basis of their ranking:\n1st place - 500 Points\n2nd place - 400 Points\n3rd place - 300 Points\n4th, 5th places - 100 Points each\n\n### Basic rules\n\nFor the giveaway, you need to be active on [our discord](https://discord.me/ecency) and reach at least level 1 with the Ecency bot. You must not spam or abuse to gain levels or you will be banned forever. \n\nYou can check your ranks [using this link](https://mee6.xyz/leaderboard/385034494555455488). Any changes or updates in the rules will be notified on [our Discord](https://discord.me/ecency) and here in the Ecency news.\n\n![](https://images.ecency.com/DQmdu88A2V1MXdF8kxZdR7rJx2RJ2oMzD2MHbZXHgDvE9Sk/image.png)\n\nWe would like to appreciate the efforts of @YENMENDT, @aguamiel, @nanixxx, @sacra97, @joalheal for being active and helpful on the [Ecency Discord](https://discord.me/ecency), and congratulate them for winning the [51st Discord Giveaway]().\n\n*Rewards have been sent!*\n\n> *1st & 2nd Place Winners from previous month aren't eligible for 1st & 2nd Place in current month's prizes.*\n\nGood luck and keep Ecencing! 🎉🎉🎉\nThe 52nd Ecency Discord Giveaway is now live!!\n\n---  \n \n### Delegate Hive Power now and mine [Ecency Points + curation reward daily](https://ecency.com/hive-125125/@ecency/daily-100-curation-rewards) + help us onboard more people:  \n \n[50 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50%20HP) | [100 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100%20HP) | [500 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=500%20HP) | [1000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=1000%20HP) | [5000 HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=5000%20HP) | [10K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=10000%20HP) | [20K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=20000%20HP) | [50K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=50000%20HP) | [100K HP](https://hivesigner.com/sign/delegateVestingShares?delegator=&delegatee=ecency&vesting_shares=100000%20HP)  \n \n### Support our proposals  \n \n[Ecency](https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B245%5D&approve=true)",
        "json_metadata": {
          "image": [
            "https://images.ecency.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMgdruQe3hEgLEE4zkBTt.png?format=match&mode=fit",
            "https://images.ecency.com/DQmdu88A2V1MXdF8kxZdR7rJx2RJ2oMzD2MHbZXHgDvE9Sk/image.png"
          ],
          "tags": [
            "hive-125125",
            "hive",
            "ecency",
            "points",
            "discord",
            "giveaway",
            "contest"
          ],
          "description": "",
          "app": "ecency/3.0.31-vision",
          "format": "markdown+html",
          "image_ratios": [
            1.6666666666666667,
            0.9776315789473684
          ]
        },
        "created": "2023-04-04T07:07:03",
        "updated": "2023-04-04T07:07:03",
        "depth": 0,
        "children": 4,
        "net_rshares": 48861191159072,
        "is_paidout": false,
        "payout_at": "2023-04-11T07:07:03",
        "payout": 27.038,
        "pending_payout_value": "27.038 HBD",
        "author_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 75.46,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 242,
          "flag_weight": 0,
          "is_pinned": true
        },
        "url": "/hive-125125/@ecency/discord-monthly-giveaway-winners-51",
        "beneficiaries": [],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "active_votes": [
          {
            "rshares": 147893707953,
            "voter": "steemychicken1"
          },
          {
            "rshares": 748870399980,
            "voter": "boatymcboatface"
          },
          {
            "rshares": 68975356021,
            "voter": "kingscrown"
          },
          {
            "rshares": 777208343,
            "voter": "leprechaun"
          },
          {
            "rshares": 200649099643,
            "voter": "theshell"
          }
        ],
        "blacklists": [],
        "community": "hive-125125",
        "community_title": "Ecency",
        "author_role": "admin",
        "author_title": ""
      },
      {
        "post_id": 122230378,
        "author": "melinda010100",
        "permlink": "ecency-points-for-the-engagement-dca6e55cdbcc8",
        "category": "hive-125125",
        "title": "Ecency POINTS for the Engagement League 21-30",
        "body": "\n\n![](https://images.ecency.com/DQmcKRgBzSqWJhuA39EX1fcUR4e2bo5iPjs3jbi2ZbkS38Y/1680552400383.gif)\n\n\n\n\n*Ecency is happy to once again award POINTS to Engagement League Engagers!* \n\n***This week we are celebrating 21-30 rank spots on the Engagement League list.  These Engagers will each receive 300 POINTS from @ecency!***\n\n\n\n\n### ⭐To join the [The Engagement League](https://ecency.com/hive-167922/@abh12345/the-hive-engagement-league-5m6rev) and see where the number of comments you have made during the week rank along side others, just go to the weekly post and ask @abh12345 to be included!  It is simple and easy to join! ⬇️\n\n## <center>[The Engagement League](https://ecency.com/hive-167922/@abh12345/the-hive-engagement-league-5m6rev) ⭐⭐⭐⭐⭐</center> \n\n\n![](https://images.ecency.com/DQmYN881BQGM2qcRuhtVB2vcprwzCuCtNXjiZoZRsqNbCfL/ecency_congrats.gif)\n\n\n##   <center>Congrats to POINTS WINNERS</center>\n\n### @joanstewart\n### @mypathtofire\n### @mehmetfix\n### @alokkumar121\n### @rtonline\n### @tengolotodo\n### @princessbusayo\n### @rmsadkri\n### @theinkwell\n### @woelfchen\n\n\n\n\n\n<br>\n\n![](https://images.ecency.com/DQmTE1u9tmpZAf9G1ftvSGgnDnjSCGY6LQvmBzBAJG9EmvP/1673303659943.gif)\n\n## I am sending  200 Ecency POINTS to @macchiata for being Lucky Number 40 this week! 🍀🍀\n\n**To see your POINTS go to your Ecency wallet on the app (download from Google Playstore) or the POINTS wallet on the website  https://ecency.com**\n\n## To learn more about using your [POINTS click HERE](https://ecency.com/hive-125126/@melinda010100/how-to-Use-your-Ecency) \n\n🔥By delegating to Ecency  you earn 100% ***DAILY*** curation rewards according to delegation ratio. And for your delegation, along with the Hive you receive, you also receive 10% of your delegation ***EACH DAY*** in Ecency POINTS. It's a really sweet deal!🔥 \n\n You can buy more POINTS on the Ecency mobile app or earn them each time you use @ecency! \n\n\n![](https://images.ecency.com/DQmW1ZRtKj2PUu74C6Cyzt82y3H8ekzxaddu7QxLbKfKGn9/5a5a4ca4_2d5d_469e_8feb_da4d4e5f3c81.jpg)\n\n## <center>[The Engagement League](https://ecency.com/hive-167922/@abh12345/the-hive-engagement-league-5m6rev) ⭐⭐⭐⭐⭐</center> \n\n**Remember to show your support for the contests and communities that you enjoy.**\n\n20% of this posts rewards will go to @abh12345 /The Engagement League. Thanks for tallying up all the numbers! \n\n\n![](https://images.ecency.com/DQmVgWB6LFhXFwAuVENpvCsHjB7jmHWoGxwQyZivAvAwtAt/c58e89d4_99e6_4110_b660_6b343e096e41.jpg)\n\n\n***All comments written on my posts, and any posts in Feathered Friends, Shadow Hunters, \nLadies of Hive, and Feel Good Community posts receive staked ARCHON tokens.Thanks to @taskmanager for encouraging Engagement within communities***\n\n\n![](https://images.ecency.com/DQmVgWB6LFhXFwAuVENpvCsHjB7jmHWoGxwQyZivAvAwtAt/b00c73de_003d_4e5f_bfdf_9aa85673d3ad.jpg)\n\n![](https://images.ecency.com/DQmYrGJxogFcFRWcBqAmkGmuyBaZRkyo1MtJCaJUMTNGZj8/1676942668057.gif)\n\n***Banners by @irisworld***",
        "json_metadata": {
          "image": [
            "https://images.ecency.com/DQmcKRgBzSqWJhuA39EX1fcUR4e2bo5iPjs3jbi2ZbkS38Y/1680552400383.gif",
            "https://images.ecency.com/DQmVgWB6LFhXFwAuVENpvCsHjB7jmHWoGxwQyZivAvAwtAt/c58e89d4_99e6_4110_b660_6b343e096e41.jpg",
            "https://images.ecency.com/DQmYrGJxogFcFRWcBqAmkGmuyBaZRkyo1MtJCaJUMTNGZj8/1676942668057.gif",
            "https://images.ecency.com/DQmVgWB6LFhXFwAuVENpvCsHjB7jmHWoGxwQyZivAvAwtAt/b00c73de_003d_4e5f_bfdf_9aa85673d3ad.jpg",
            "https://images.ecency.com/DQmW1ZRtKj2PUu74C6Cyzt82y3H8ekzxaddu7QxLbKfKGn9/5a5a4ca4_2d5d_469e_8feb_da4d4e5f3c81.jpg",
            "https://images.ecency.com/DQmYN881BQGM2qcRuhtVB2vcprwzCuCtNXjiZoZRsqNbCfL/ecency_congrats.gif",
            "https://images.ecency.com/DQmTE1u9tmpZAf9G1ftvSGgnDnjSCGY6LQvmBzBAJG9EmvP/1673303659943.gif"
          ],
          "image_ratios": [
            1,
            16,
            1,
            16,
            1.7391304347826086
          ],
          "tags": [
            "hive-125125",
            "engagement",
            "points",
            "archon",
            "pob"
          ],
          "app": "ecency/3.0.40-mobile",
          "format": "markdown+html"
        },
        "created": "2023-04-03T20:18:12",
        "updated": "2023-04-03T20:18:12",
        "depth": 0,
        "children": 17,
        "net_rshares": 10505767130305,
        "is_paidout": false,
        "payout_at": "2023-04-10T20:18:12",
        "payout": 5.722,
        "pending_payout_value": "5.722 HBD",
        "author_payout_value": "0.000 HBD",
        "curator_payout_value": "0.000 HBD",
        "promoted": "0.000 HBD",
        "replies": [],
        "author_reputation": 77.01,
        "stats": {
          "hide": false,
          "gray": false,
          "total_votes": 133,
          "flag_weight": 0,
          "is_pinned": true
        },
        "url": "/hive-125125/@melinda010100/ecency-points-for-the-engagement-dca6e55cdbcc8",
        "beneficiaries": [
          {
            "account": "abh12345",
            "weight": 2000
          }
        ],
        "max_accepted_payout": "1000000.000 HBD",
        "percent_hbd": 10000,
        "active_votes": [
          {
            "rshares": 303134136234,
            "voter": "ratel"
          },
          {
            "rshares": 43317894011,
            "voter": "good-karma"
          },
          {
            "rshares": 10072137806,
            "voter": "jlufer"
          }
        ],
        "blacklists": [],
        "community": "hive-125125",
        "community_title": "Ecency",
        "author_role": "admin",
        "author_title": ""
      }
    ]`
  },
  {
    api: "bridge",
    method: "account_notifications",
    params: ["account", "last_id", "limit"],
    parameter: `<code>account: string; last_id: int; limit: int;</code><p>Types:</p><ul>
        <li><code class="language-plaintext highlighter-rouge">new_community</code> - a new community was created</li>
        <li><code class="language-plaintext highlighter-rouge">set_role</code> - mod/admin adds a role to an account</li>
        <li><code class="language-plaintext highlighter-rouge">set_props</code> - properties set for a community</li>
        <li><code class="language-plaintext highlighter-rouge">set_label</code> - a title/badge/label has been set for an account</li>
        <li><code class="language-plaintext highlighter-rouge">mute_post</code> - a post has been muted, with a reason</li>
        <li><code class="language-plaintext highlighter-rouge">unmute_post</code> - a post has been unmuted, with a reason</li>
        <li><code class="language-plaintext highlighter-rouge">pin_post</code> - a post has been pinned</li>
        <li><code class="language-plaintext highlighter-rouge">unpin_post</code> - a post has been unpinned</li>
        <li><code class="language-plaintext highlighter-rouge">flag_post</code> - a post has been flagged by a member, with a reason</li>
        <li><code class="language-plaintext highlighter-rouge">error</code> - provides feedback to developers for ops that cannot be interpreted</li>
        <li><code class="language-plaintext highlighter-rouge">subscribe</code> - an account has subscribed to a community</li>
        <li><code class="language-plaintext highlighter-rouge">reply</code> - a post has been replied to</li>
        <li><code class="language-plaintext highlighter-rouge">reblog</code> - a post has been reblogged/reblogged</li>
        <li><code class="language-plaintext highlighter-rouge">follow</code> - an account has followed another account</li>
        <li><code class="language-plaintext highlighter-rouge">mention</code> - author mentions an account</li>
        <li><code class="language-plaintext highlighter-rouge">vote</code> - voter votes for an author</li>
      </ul>`,
    description:_t("bridge.account_notifications_description"),
    url: `${ConfigItems.baseUrl}/api/account_notifications?account="ecency"&limit=5`,
    response: `[
      {
        "id": 9049587,
        "type": "mention",
        "score": 40,
        "date": "2023-04-06T07:55:36",
        "msg": "@youarealive mentioned you and 2 others",
        "url": "@youarealive/re-re-ecency-202346t105514269z-20230406t075535z"
      },
      {
        "id": 9049566,
        "type": "reply_comment",
        "score": 50,
        "date": "2023-04-06T07:55:15",
        "msg": "@stdd replied to your comment",
        "url": "@stdd/re-ecency-202346t105514269z"
      },
      {
        "id": 9047772,
        "type": "vote",
        "score": 25,
        "date": "2023-04-06T07:25:39",
        "msg": "@asean.hive voted on your post ($0.03)",
        "url": "@ecency/re-2023330t21048430z"
      },
      {
        "id": 9047635,
        "type": "mention",
        "score": 60,
        "date": "2023-04-06T07:22:18",
        "msg": "@justclickindiva mentioned you and 1 others",
        "url": "@justclickindiva/re-ecency-rson55"
      },
      {
        "id": 9047633,
        "type": "reply_comment",
        "score": 60,
        "date": "2023-04-06T07:22:18",
        "msg": "@justclickindiva replied to your comment",
        "url": "@justclickindiva/re-ecency-rson55"
      }
    ]`
  },
  {
    api: "bridge",
    method: "list_all_subscriptions",
    params: ["account"],
    parameter: `<code>account: string;</code>`,
    description:_t("bridge.list_all_subscriptions_description"),
    url: `${ConfigItems.baseUrl}/api/list_all_subscriptions?account="ecency"`,
    response: `[
      [
        "hive-125125",
        "Ecency",
        "admin",
        ""
      ],
      [
        "hive-125126",
        "Ecency Help",
        "admin",
        ""
      ],
      [
        "hive-194913",
        "Photography Lovers",
        "guest",
        ""
      ],
      [
        "hive-130560",
        "Hive Diy",
        "guest",
        ""
      ],
      [
        "hive-120136",
        "Hive SEO",
        "guest",
        ""
      ]
    ]`
  },
  {
    api: "bridge",
    method: "list_subscribers",
    params: ["community"],
    parameter: `<code>community: string (community id/username);</code>`,
    description:_t("bridge.list_subscribers_description"),
    url: `${ConfigItems.baseUrl}/api/list_subscribers?community="hive-125125"`,
    response: `[
      [
        "kathryn95",
        "guest",
        null,
        "2023-04-05T19:15:51"
      ],
      [
        "azzm984",
        "guest",
        null,
        "2023-04-05T09:26:33"
      ],
      [
        "voiceless12",
        "guest",
        null,
        "2023-04-04T11:37:54"
      ],
      [
        "gigglingmistress",
        "guest",
        null,
        "2023-04-03T22:26:51"
      ],
      [
        "exerzite",
        "guest",
        null,
        "2023-04-03T10:37:54"
      ],
      [
        "yoyocuban",
        "guest",
        null,
        "2023-04-03T06:05:39"
      ],
      [
        "foundlios",
        "guest",
        null,
        "2023-04-02T20:25:45"
      ]
    ]`
  },
  {
    api: "bridge",
    method: "get_follow_list",
    params: ["observer", "follow_type"],
    parameter: `<code>observer: string; follow_type: string;</code><ul>
        <li><code class="language-plaintext highlighter-rouge">observer</code> - valid account</li>
        <li><code class="language-plaintext highlighter-rouge">follow_type</code> - Supported values:
          <ul>
            <li><code class="language-plaintext highlighter-rouge">follow_blacklist</code></li>
            <li><code class="language-plaintext highlighter-rouge">follow_muted</code></li>
            <li><code class="language-plaintext highlighter-rouge">blacklisted</code></li>
            <li><code class="language-plaintext highlighter-rouge">muted</code></li>
          </ul>
        </li>
      </ul>`,
    description:_t("bridge.get_follow_list_description"),
    url: `${ConfigItems.baseUrl}/api/get_follow_list?observer="blocktrades"&follow_type="follow_blacklist"`,
    response: `[
      {
        "name": "hive.blog",
        "blacklist_description": "",
        "muted_list_description": "Phishing accounts"
      }
    ]`
  },
  {
    api: "bridge",
    method: "does_user_follow_any_lists",
    params: ["observer"],
    parameter: `<code>observer: string;</code>`,
    description:_t("bridge.does_user_follow_any_lists_description"),
    url: `${ConfigItems.baseUrl}/api/does_user_follow_any_lists?observer="blocktrades"`,
    response: `true`
  },
  {
    api: "bridge",
    method: "get_relationship_between_accounts",
    params: ["account1", "account2"],
    parameter: `<code>account1: string; account2: string</code>`,
    description:_t("bridge.get_relationship_between_accounts_description"),
    url: `${ConfigItems.baseUrl}/api/get_relationship_between_accounts?account1="ecency"&account2="good-karma"`,
    response: `{
      "follows": true,
      "ignores": false,
      "blacklists": false,
      "follows_blacklists": false,
      "follows_muted": false
    }`
  }
  /*{
    api: "condenser_api",
    method: "get_comment_discussions_by_payout",
    params: ["query"],
    description:_t("condenser_api.get_comment_discussions_by_payout_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_trending",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_trending_description")
  },
  {
    api: "condenser_api",
    method: "get_discussions_by_created",
    params: ["query"],
    description:_t("condenser_api.get_discussions_by_created_description")
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
    method: "get_discussions_by_comments",
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
    api: "condenser_api",
    method: "get_state",
    params: ["path"],
    description:_t("condenser_api.get_state_description")
  },
  {
    api: "condenser_api",
    method: "get_account_references",
    params: ["accountId"],
    isArray: true
  },
  {
    api: "condenser_api",
    method: "get_transaction_hex",
    params: ["trx"],
    description:_t("condenser_api.get_transaction_hex_description")
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
  },*/
];
