import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dateToFormatted, dateToRelative } from "../../helper/parse-date";
import { _t } from "../../i18n";
import DefaultImage from "../../img/default-avatar.png";
import parseAsset from "../../helper/parse-asset";
import { json_operation_ids, operation_types, quest_operation } from "./operationArrays";
import { OperationCardData } from "./operationCard";

export const TransactionOperation = (props: any) => {
    const { trans_no, trans_data, time, trx_status,memo,permlink,from,to, key } = props
    const dateRelative = dateToRelative(time);
    const dateFormatted = dateToFormatted(time);
    const [renderedStrings, setRenderedStrings] = useState<string []>([]);
   
    var name: string
    return (
        <div key={key}>
            {<Card className="transaction_operations_cards">
                <Card.Body >
                <div className="op-card-trx-id">{trans_no === "0000000000000000000000000000000000000000" ?
                    <span>{_t('trans_table.virtual')}</span> :
                    <Link to={`/tx/${trans_no}`}>{trans_no.substring(0, 8)}</Link>
                }
                </div>
                    { trans_data.map((item: any, index: number) => {
                        return (
                            <div key={trans_no + index+item.type+item.timestamp} className="trans-op-card-data" >
                                {!operation_types.includes(item.type) &&    
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                                {item.value.id && json_operation_ids.includes(item.value.id) &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}

                                    />
                                }
                                {item.value.id && !json_operation_ids.includes(item.value.id) && !quest_operation.includes(item.value.id) && item.type==='custom_json_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                                {item.value.id && quest_operation.includes(item.value.id) &&
                                        <OperationCardData
                                        value={item.value}
                                        text={`<code>Splinterlands</code>`+' '+_t(`operation_type.${item.value.id}`)}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={false}
                                        />
                                }
                                {item.type === 'vote_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={false}
                                    />
                                }
                                {item.type === 'comment_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={false}
                                    />
                                }
                                   {item.type === 'account_witness_vote_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={''}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={false}
                                    />
                                }
                                      {item.type === 'delegate_vesting_shares_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={' '}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={false}
                                    />
                                }
                                {item.type === 'witness_set_properties_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                                {item.type === 'account_created_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                         
                                {item.type === 'account_update2_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                                {item.type === 'claim_account_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                {item.type === 'claim_reward_balance_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                            
                                    {item.type === 'limit_order_cancel_operation' &&
                                     <OperationCardData
                                        value={item.value}
                                        text={'cancel order'}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                {item.type === 'comment_options_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                               
                                   {item.type === 'comment_benefactor_reward_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                {item.type === 'feed_publish_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                  {item.type === 'fill_vesting_withdraw_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={''}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        
                                    />
                                }
                                {item.type === 'witness_update_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                     {item.type === 'transfer_from_savings_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                                {item.type === 'interest_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                                 {item.type==='create_claimed_account_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={'account created'}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                {item.type==='account_update_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={_t('operation_type.account_update_operation')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                {item.type === 'cancel_transfer_from_savings_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                        isTable={true}
                                    />
                                }
                                    {item.type==='producer_reward_operation' && 
                                            <OperationCardData
                                            value={item.value}
                                            text={item.type.replace('_operation','').replace(/_/g,' ')}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                        />
                                    }
                                    {item.type==='curation_reward_operation' &&
                                            <OperationCardData
                                            value={item.value}
                                            text={item.type.replace('_operation','').replace(/_/g,' ')}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                        />
                                    }
                                    {item.type==='fill_order_operation' &&
                                        <OperationCardData
                                            value={item.value}
                                            text={'paid'}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                        />
                                    }
                                    {item.type==="effective_comment_vote_operation" &&   
                                        <OperationCardData
                                            value={item.value}
                                            text={item.type.replace('_operation','').replace(/_/g,' ')}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                            isTable={true}
                                        />
                                    }
                                {item.type === 'pow2_operation'  &&
                                   <>
                                   <div className="trans_card_header">
                                    <div className="trans-op-basic">
                                        <span className="trans-owner-date">
                                        {window.location.pathname.includes('/tx/')?
                                        <>
                                           <img
                                            className="avatar-img"
                                            onError={(e: any) => {
                                                e.target.src = { DefaultImage };
                                            }}
                                            src={`https://images.ecency.com/u/${item.value.work[1].input.worker_account}/avatar`}
                                            alt=""
                                        />
                                        <span>
                                        <Link to={`/@$${item.value.work[1].input.worker_account}`}>
                                            {item.value.work[1].input.worker_account}
                                        </Link>
                                        </span>
                                        </>
                                        :
                                        <>
                                           <img
                                            className="avatar-img"
                                            onError={(e: any) => {
                                                e.target.src = { DefaultImage };
                                            }}
                                            src={`https://images.ecency.com/u/${item.value.work.value.input.worker_account}/avatar`}
                                            alt=""
                                        />
                                        <span>
                                        <Link to={`/@${item.value.work.value.input.worker_account}`}>
                                            {item.value.work.value.input.worker_account}
                                        </Link>
                                        </span>
                                        </>
                                        }
                                        <span>&nbsp;found a pow</span>
                                        <span className="time-span">
                                            &nbsp;(<span className="date" title={dateFormatted}>{dateRelative}</span>)
                                        </span>
                                     
                                        </span>
                                    </div>
                                   </div>
                                   </>
                                }
                                {item.type === 'transfer_operation' &&
                                    <>
                                        <div className="trans_card_header">
                                            <div className="trans-op-basic">
                                                {Object.keys(item.value).map((val: any) => {
                                                    return (
                                                        <div key={val}>
                                                            {val==='from' && <>
                                                                <span className="trans-owner-date">
                                                                    <img
                                                                        className="avatar-img"
                                                                        onError={(e: any) => {
                                                                            e.target.src = { DefaultImage };
                                                                        }}
                                                                        src={`https://images.ecency.com/u/${item.value.from}/avatar`}
                                                                        alt=""
                                                                    />

                                                                    <span>
                                                                        <Link to={`/@${item.value.from}`}>{item.value.from}</Link>
                                                                        &nbsp;{item.type.replace('_operation','').replace(/_/g,' ')}&nbsp;
                                                                        {parseAsset(item.value.amount).amount+' '+parseAsset(item.value.amount).symbol} to&nbsp;
                                                                        <Link to={`/@${item.value.to}`}>{item.value.to}</Link>
                                                                        <code>&nbsp;{item.value.memo}</code>
                                                                        <span className="time-span">
                                                                            &nbsp;(<span className="date" title={dateFormatted}>{dateRelative}</span>)
                                                                        </span>
                                                                    </span>

                                                                </span>
                                                                </>
                                                            }
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>}
        </div>
    )
}
