import { ConfigItems } from "../../../../../config";
import { _t } from "../../../i18n";

export const TRANS_ITEMS = [
    {
    name: _t("api_transactions.get_transaction"),
    description:_t("api_transactions.get_transaction_description"),
    url:`${ConfigItems.baseUrl}/api/get_transaction?trx_id=6fde0190a97835ea6d9e651293e90c89911f933c`,
    parameter:'trx_id (string)',
    end_point:`${ConfigItems.baseUrl}/api/get_transaction?trx_id=<{trx_id}>`,
    response:`
{
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
    name: _t("api_blocks.get_block_transactions"),
    description:_t("api_blocks.get_block_transactions_description"),
    url:`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=8675309&only_virtual=false&include_reversible=true`,
    parameter:`<ul>
    <li><code class="language-plaintext highlighter-rouge">block_num:int</code></li>
    <li><code class="language-plaintext highlighter-rouge">only_virtual:boolean</code></li>
    <li><code class="language-plaintext highlighter-rouge">include_reversible:boolean</code> (optional) If set to true also operations from reversible block will be included if block_num points to such block.</li>
    </ul>`,
    end_point:`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=<{block_num}>&only_virtual=<{only_virtual}>&include_reversible=<{include_reversible}>`,
    response:`
{
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

    }
];