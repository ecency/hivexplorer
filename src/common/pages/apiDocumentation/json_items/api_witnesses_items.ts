import { ConfigItems } from "../../../../../config";
import { _t } from "../../../i18n";

export const WITNESSES_ITEMS = [
    {
    name: _t("api_witnesses.get_witnesses_by_vote"),
    description:_t("api_witnesses.get_witnesses_by_vote_description"),
    url:`${ConfigItems.baseUrl}/api/get_witnesses_by_vote?account=null&limit=100`,
    parameter:`<p>start_name:string; limit:int up to 1000</p>
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
</table>
    `,
    end_point:`${ConfigItems.baseUrl}/api/get_witnesses_by_vote?account=<{start_name}>&limit=<{limit}>`,
    response:`
[
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
    name: _t("api_witnesses.get_witnesses_account"),
    description:_t("api_witnesses.get_witnesses_account_description"),
    url:`${ConfigItems.baseUrl}/api/get_accounts?name[]=hiveio`,
    parameter:`<p>account:string array; delayed_votes_active:boolean</p>
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
    end_point:`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=<{block_num}>&only_virtual=<{only_virtual}>&include_reversible=<{include_reversible}>`,
    response:` 
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

    }
];