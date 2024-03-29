import React, { useState } from "react";
import { isInteger } from "lodash";
import { Link } from "react-router-dom";
import { dateToFormatted, dateToRelative } from "../../helper/parse-date";
import DefaultImage from "../../img/default-avatar.png";
import { transAvatars } from "./operationArrays";
import parseAsset from "../../helper/parse-asset";
import { ObjectFieldArray } from "../../pages/fields/common_fields";
import { _t } from "../../i18n";
import { renderData } from "../fields/blockFields/ObjectField";


export const OperationCardData=(props:any)=>{
    const {value,text,time,trx_id,type,isTable}=props
    const [showTable,setShowTable]=useState(isTable)
    const dateRelative = dateToRelative(time);
    const dateFormatted = dateToFormatted(time);
    const [renderedStrings, setRenderedStrings] = useState([]);
    let name: string
    return(
        <>
            <div className="trans_card_header">
                <div className="trans-op-basic">
                    {Object.keys(value).map((val:any,index:number) => {
                        //  setRenderedStrings([...renderedStrings,val])
                        if (typeof (value[val] === 'string')) {
                            name = value[val]
                            // setRenderedStrings([...renderedStrings,val])
                        }
                        else if (typeof (value[val] === 'object')) {
                            name = value[val][0]
                        }
                        return (
                            <div key={value[val]+val+index}>
                                {transAvatars.includes(val) && value[val][0] !== undefined &&
                                    <>

                                        {val === 'author'  && Object.keys(value).includes('voter') ? <></> :
                                        val === 'author'  && Object.keys(value).includes('benefactor') ? <></> :  <>
                                        <span key={index+type+val} className="trans-owner-date">

                                            <img
                                                className="avatar-img"
                                                onError={(e: any) => {
                                                    e.target.src = DefaultImage
                                                }}
                                                src={typeof (value[val] === 'string') && index===0 ?`https://images.ecency.com/u/${value[val]}/avatar`:`https://images.ecency.com/u/${value[val][0]}/avatar`}
                                                alt=""
                                            />

                                            <span>
                                                <Link to={typeof (value[val] === 'string')?`/@${value[val]}`:`/@${value[val][0]}`}>{typeof (value[val] === 'string') ? value[val]:value[val][0]}&nbsp;</Link>
                                                <span dangerouslySetInnerHTML={{ __html: type==='comment_operation' && value.hasOwnProperty('parent_permlink')? 'replied to' : type==='comment_operation' && value.hasOwnProperty('comment_permlink')? 'comments to':text}} />

                                                {type==='vote_operation' && <span >
                                                    {value.weight && <span>&nbsp;({parseFloat(value.weight) / 100}%)</span>}
                                                    <Link to={`/@${value.author}/${value.permlink}`}>&nbsp;@{value.author}/{value.permlink}</Link>

                                                </span>}
                                                {type==='comment_operation' &&  value.hasOwnProperty('parent_permlink') && <span >
                                                    <Link to={`/@${value.parent_author}/${value.parent_permlink}`}>&nbsp;@{value.parent_author}/{value.parent_permlink}</Link>
                                                    {/* {value.weight && <span>&nbsp;({parseFloat(value.weight) / 100}%)</span>} */}
                                                </span>}
                                                {type==='comment_operation' &&  value.hasOwnProperty('comment_operation') && <span >
                                                    <Link to={`/@${value.author}/${value.permlink}`}>&nbsp;@{value.author}/{value.permlink}</Link>
                                                    {/* {value.weight && <span>&nbsp;({parseFloat(value.weight) / 100}%)</span>} */}
                                                </span>}
                                                {type==='producer_reward_operation' && <span>
                                                    :&nbsp;{parseAsset(value.vesting_shares).amount+' '+parseAsset(value.vesting_shares).symbol}
                                                </span>}
                                                {type==='delegate_vesting_shares_operation' && <span>
                                                &nbsp;{_t('common.delegate')} {parseAsset(value.vesting_shares).amount+' '+parseAsset(value.vesting_shares).symbol} {_t('common.to')} {value.delegatee}

                                                </span>}
                                                {type==='curation_reward_operation' && <span>
                                                    :&nbsp;{parseAsset(value.reward).amount+' '+parseAsset(value.reward).symbol} {_t('common.for')} <Link to={`/@${value.comment_author}/${value.comment_permlink}`}>&nbsp;@{value.comment_author}/{value.comment_permlink}</Link>
                                                </span>}
                                                {type==='limit_order_create_operation' && <span>
                                                    &nbsp;{parseAsset(value.min_to_receive).amount+' '+parseAsset(value.min_to_receive).symbol} {_t('common.for')} {parseAsset(value.amount_to_sell).amount+' '+parseAsset(value.amount_to_sell).symbol}
                                                </span>}
                                                {type==='comment_benefactor_reward_operation' && <span>
                                                    :&nbsp;{parseAsset(value.hbd_payout).amount+' '+parseAsset(value.hbd_payout).symbol} {_t('common.and')}
                                                    :&nbsp;{parseAsset(value.vesting_payout).amount+' '+parseAsset(value.vesting_payout).symbol} {_t('common.for')}
                                                    <Link to={`/@${value.author}/${value.permlink}`}>&nbsp;@{value.author}/{value.permlink}</Link>
                                                </span>}
                                                {type==='fill_vesting_withdraw_operation' && <span>
                                                    {_t('common.withdraw')}&nbsp;{parseAsset(value.withdrawn).amount+' '+parseAsset(value.withdrawn).symbol} {_t('common.as')}
                                                    &nbsp;{parseAsset(value.deposited).amount+' '+parseAsset(value.deposited).symbol} {_t('common.to')}
                                                    <Link to={`/@${value.to_account}`}>&nbsp;{value.to_account}</Link>
                                                    &nbsp;(<span className="text-action" onClick={()=>setShowTable(!showTable)}>show details</span>)
                                                </span>}
                                                {type==='feed_publish_operation' && <span>
                                                    &nbsp;{parseAsset(value.exchange_rate.base).amount+' '+parseAsset(value.exchange_rate.base).symbol}
                                                </span>}
                                                {type==='feed_publish_operation' && <span>
                                                    &nbsp;{parseAsset(value.exchange_rate.base).amount+' '+parseAsset(value.exchange_rate.base).symbol}
                                                </span>}

                                                {type==='comment_options_operation' && <span>
                                                    &nbsp;{value.percent_hbd}% HBD, {_t('operation.allow_votes')}: {value.allow_votes.toString()}, {_t('operation.allow_curation_rewards')}: {value.allow_curation_rewards.toString()}
                                                </span>}
                                                {type==='limit_order_cancel_operation' && <span >
                                                    &nbsp;#{value.orderid}
                                                </span>}
                                                {type==='account_witness_vote_operation' && <span >
                                                    &nbsp;{value.approve?'approve witness':'unapprove witness'}&nbsp;<Link to={`/@${value.witness}`}>{value.witness}</Link>
                                                </span>}
                                                {type==='fill_order_operation' && <span >
                                                    &nbsp;{parseAsset(value.current_pays).amount+' '+parseAsset(value.current_pays).symbol} {_t('common.for')} {parseAsset(value.open_pays).amount+' '+parseAsset(value.open_pays).symbol}  {_t('common.from')}&nbsp;<Link to={`/@${value.open_owner}`}>{value.open_owner}</Link>
                                                </span>}

                                                <span className="time-span">
                                                    &nbsp;(<span className="date" title={dateFormatted}>{dateRelative}</span>)
                                                </span>
                                            </span>


                                        </span>

                                        </>}

                                    </>
                                }
                            </div>
                        )
                    })}

                </div>


            </div>
            {showTable && <table  className="transaction-operation-table">
                <tbody>
                    {Object.keys(value).map((val: any, index: number) => {
                        return (
                            <>
                                {typeof(value[val]) ==='object' && ObjectFieldArray.includes(val) ?
                                <tr key={val + index +value.id}>
                                    <th className="th-operation">{val}</th>
                                    <td>{parseAsset(value[val]).amount+' '+parseAsset(value[val]).symbol}</td>
                                </tr>
                                :
                                typeof(value[val]) ==='object' && !ObjectFieldArray.includes(val) ?
                                <tr key={index}>

                                <td>
                                   {val}
                                </td>
                                <td>
                                {renderData(value[val])}
                                </td>
                                </tr>
                                :
                                <tr key={val + index + value.id}>
                                    <th  className="th-operation">{val}</th>
                                    <td>{value[val].length !== 0 ? value[val].toString() : <span>[ ]</span>}</td>
                                </tr>
                                }

                            </>
                        )
                    })}
                </tbody>
            </table>}
        </>
    )
}
