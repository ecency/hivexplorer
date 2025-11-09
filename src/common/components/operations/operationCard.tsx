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


const formatAsset = (assetValue: any): string => {
    const asset = parseAsset(assetValue);
    return `${asset.formatted} ${asset.symbol}`;
};


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
                                                    :&nbsp;{formatAsset(value.vesting_shares)}
                                                </span>}
                                                {type==='delegate_vesting_shares_operation' && <span>
                                                &nbsp;{_t('common.delegate')} {formatAsset(value.vesting_shares)} {_t('common.to')} {value.delegatee}

                                                </span>}
                                                {type==='curation_reward_operation' && <span>
                                                    :&nbsp;{formatAsset(value.reward)} {_t('common.for')} <Link to={`/@${value.comment_author}/${value.comment_permlink}`}>&nbsp;@{value.comment_author}/{value.comment_permlink}</Link>
                                                </span>}
                                                {type==='limit_order_create_operation' && <span>
                                                    &nbsp;{formatAsset(value.min_to_receive)} {_t('common.for')} {formatAsset(value.amount_to_sell)}
                                                </span>}
                                                {type==='comment_benefactor_reward_operation' && <span>
                                                    :&nbsp;{formatAsset(value.hbd_payout)} {_t('common.and')}
                                                    :&nbsp;{formatAsset(value.vesting_payout)} {_t('common.for')}
                                                    <Link to={`/@${value.author}/${value.permlink}`}>&nbsp;@{value.author}/{value.permlink}</Link>
                                                </span>}
                                                {type==='fill_vesting_withdraw_operation' && <span>
                                                    {_t('common.withdraw')}&nbsp;{formatAsset(value.withdrawn)} {_t('common.as')}
                                                    &nbsp;{formatAsset(value.deposited)} {_t('common.to')}
                                                    <Link to={`/@${value.to_account}`}>&nbsp;{value.to_account}</Link>
                                                    &nbsp;(<span className="text-action" onClick={()=>setShowTable(!showTable)}>show details</span>)
                                                </span>}
                                                {type==='feed_publish_operation' && <span>
                                                    &nbsp;{formatAsset(value.exchange_rate.base)}
                                                </span>}
                                                {type==='feed_publish_operation' && <span>
                                                    &nbsp;{formatAsset(value.exchange_rate.base)}
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
                                                    &nbsp;{formatAsset(value.current_pays)} {_t('common.for')} {formatAsset(value.open_pays)}  {_t('common.from')}&nbsp;<Link to={`/@${value.open_owner}`}>{value.open_owner}</Link>
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
                                    <td>{formatAsset(value[val])}</td>
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
