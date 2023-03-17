import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dateToFormatted, dateToRelative } from "../../helper/parse-date";
import { _t } from "../../i18n";
import DefaultImage from "../../img/default-avatar.png";
import { ObjectFieldArray } from "../../pages/fields/common_fields";
import parseAsset from "../../helper/parse-asset";
import { OpObjectValue } from "../../pages/profile/userOpTable";
import { json_operation_ids, operation_types, quest_operation } from "./operationArrays";
import { OperationCardData } from "./operationCard";



export const TransactionOperation = (props: any) => {
    const { trans_no, trans_data, time, trx_status,memo,permlink,from,to } = props
    const dateRelative = dateToRelative(time);
    const dateFormatted = dateToFormatted(time);
    const [renderedStrings, setRenderedStrings] = useState<string []>([]);
    var name: string
    return (
        <>
            {<Card className="transaction_operations_cards">
                <Card.Body >
                <div className="op-card-trx-id">{trans_no === "0000000000000000000000000000000000000000" ?
                    <span>{_t('trans_table.virtual')}</span> :
                    <Link to={`/tx/${trans_no}`}>{trans_no.substring(0, 7) + '...'}</Link>
                }
                </div>
                    { trans_data.map((item: any, index: number) => {
                        return (
                            <div key={trans_no + index} className="trans-op-card-data" >
                                {!operation_types.includes(item.type) && <p>Details not available yet,</p>}
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
                                {item.type === 'claim_reward_balance_operation' &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
                                        time={time}
                                        trx_id={trans_no}
                                        type={item.type}
                                    />
                                }
                                {item.type === 'limit_order_create_operation' &&
                                     <OperationCardData
                                        value={item.value}
                                        text={'wants'}
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
                                {item.type === 'feed_publish_operation'  &&
                                    <OperationCardData
                                        value={item.value}
                                        text={item.type.replace('_operation','').replace(/_/g,' ')}
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
                                {item.type === 'transfer_operation' &&
                                    <>
                                        <div className="trans_card_header">
                                            <div className="trans-op-basic">
                                                {Object.keys(item.value).map((val: any) => {
                                                    return (
                                                        <>
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
                                                                    </span>

                                                                </span>
                                                                </>
                                                            }
                                                        </>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                    </>
                                }


                                {/* Virtual Transactions */}
                                {trx_status && 
                                    <>
                                        {
                                        item.type==='producer_reward_operation' ? 
                                            <OperationCardData
                                            value={item.value}
                                            text={item.type.replace('_operation','').replace(/_/g,' ')}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                        />
                                        :
                                        item.type==='curation_reward_operation' ? 
                                            <OperationCardData
                                            value={item.value}
                                            text={item.type.replace('_operation','').replace(/_/g,' ')}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                        />
                                        :
                                        item.type==='fill_order_operation' ? 
                                        <OperationCardData
                                            value={item.value}
                                            text={'paid'}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                        />
                                        :
                                        item.type==='create_claimed_account_operation' ? 
                                        <OperationCardData
                                            value={item.value}
                                            text={'account created'}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                            isTable={true}
                                        />
                                        :
                                        <OperationCardData
                                            value={item.value}
                                            text={item.type.replace('_operation','').replace(/_/g,' ')}
                                            time={time}
                                            trx_id={trans_no}
                                            type={item.type}
                                            isTable={true}
                                        />}
                                        
                                    </>  
                                }
                            </div>
                        )

                    })}


                </Card.Body>
            </Card>}
        </>
    )
}
