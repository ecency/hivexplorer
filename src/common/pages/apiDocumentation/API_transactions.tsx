
import React, { useEffect, useState } from 'react';
import { Link, match } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';

import { _t } from '../../i18n';
import { Accordion } from 'react-bootstrap';
import { showLessIcon, showMoreIcon } from '../../img/svg';
import { ConfigItems } from '../../../../config';
import Api_accordion_body from './Api_accordion_body';


const TRANS_ITEMS = [
    {
    name: _t("api_transactions.get_transaction"),
    description:_t("api_transactions.get_transaction_description"),
    url:`${ConfigItems.baseUrl}/api/get_transaction?trx_id=6fde0190a97835ea6d9e651293e90c89911f933c`,
    parameter:'trx_id (string)',
    EndPoint:`${ConfigItems.baseUrl}/api/get_transaction?trx_id=<{trx_id}>`,
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
    EndPoint:`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=<{block_num}>&only_virtual=<{only_virtual}>&include_reversible=<{include_reversible}>`,
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
const API_Transactions = (props: any) => {
    const currTheme = useSelector((state: any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const [openBody, setOpenBody] = useState(true)
    return (
        <>
        <div className='api-blocks'>
        <div className=''>
                <h1>{_t('api_transactions.title')}</h1>
                <p>{_t('api_transactions.description')}</p>
            </div>
            <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                {TRANS_ITEMS.map((item:any,i:number)=>{
                     return(
                        <Accordion.Item key={i+item.name} eventKey={`${i}`} onClick={() => setOpenBody(!openBody)}>
                        <Accordion.Header>
        
                            <span>{item.name}</span>
                            <span>{openBody ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Api_accordion_body 
                                    description={item.description}
                                    response={item.response}
                                    url={item.url}
                                    parameter={item.parameter}
                                    />
                            </Accordion.Body>
                        </Accordion.Item>
                     )

                })}
              
  
      
            </Accordion>
        </div>

        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(API_Transactions));