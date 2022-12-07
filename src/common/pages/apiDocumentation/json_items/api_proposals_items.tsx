import { ConfigItems } from "../../../../../config";
import { _t } from "../../../i18n";

export const PROPOSALS_ITEMS = [
    {
    name: _t("api_proposals.get_proposals"),
    description:_t("api_proposals.get_proposals_description"),
    url:`${ConfigItems.baseUrl}/api/list_proposals?order="by_total_votes"&order_direction="ascending"&status="all"&limit=5&start=["0"]`,
    parameter:`<p>start:array; limit:int; order:string; order_direction:string; status:string</p>
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
      <td>list 1 proposal with expired status, ordered by creator, ascending, by accounts starting with “a”</td>
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
</table>
    `,
    end_point:`${ConfigItems.baseUrl}/api/list_proposals?order="<{order}>"&order_direction="<{order_direction}>"&status="<{status}>"&limit=<{limit}>&start=["<{start}>"]`,
    response:`
{
"proposals": [
    {
    "id": 127,
    "proposal_id": 127,
    "creator": "marshalllife",
    "receiver": "marshalllife",
    "start_date": "2020-08-20T19:28:42",
    "end_date": "2020-10-02T19:28:47",
    "daily_pay": {
        "amount": "120000",
        "precision": 3,
        "nai": "@@000000013"
    },
    "subject": "THE HIVE COMMUNITY VIRAL THEME MUSIC EP PROPOSAL",
    "permlink": "the-hive-community-theme-music-ep-proposal",
    "total_votes": 0,
    "status": "expired"
    },
    {
    "id": 121,
    "proposal_id": 121,
    "creator": "ackza",
    "receiver": "telokanda",
    "start_date": "2020-06-30T00:00:00",
    "end_date": "2020-09-23T00:00:00",
    "daily_pay": {
        "amount": "25000",
        "precision": 3,
        "nai": "@@000000013"
    },
    "subject": "Telokanda Hive Telos EOSIO advertising blockchain faucet",
    "permlink": "telokanda-hive-telos-eosio-advertising-and-blockchain-enthusiast-network-with-telos-wps-funded-nitrous-discord-telegram-and",
    "total_votes": "13054134769450",
    "status": "expired"
    },
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
    name: _t("api_proposals.find_proposals"),
    description:_t("api_blocks.find_proposals_description"),
    url:`${ConfigItems.baseUrl}/api/find_proposals?proposal_ids=[0]`,
    parameter:'id (int)',
    end_point:`${ConfigItems.baseUrl}/api/find_proposals?proposal_ids=[<{id}>]`,
    response:`
{
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
    }
];