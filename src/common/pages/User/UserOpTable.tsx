
import React from 'react';
import { Link, match } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { _t } from '../../i18n';
import { AuthorityObject } from './UserAuthorities';
import { object } from 'prop-types';
import { DecodeJson } from '../../../server/util';



const TransactionOperationTable = (props: any) => {
    const { opTrans } = props
    const opType = opTrans.type
    const opVal = opTrans.value

    const opAuth = opVal.author
    const opPermlink = opVal.permlink

    const opPayoutClaim = opVal.payout_must_be_claimed
    const opJson = opVal.json
    const opOwner = opVal.owner
    const opCreator = opVal.creator

    const opProps = opVal.props
    const opVestShare = opVal.vesting_shares

    const opExchange = opVal.exchange_rate
    const opRewardHive = opVal.reward_hive

    const opRequiredAuths = opVal.required_auths
    const opRequiredPostingAuths = opVal.required_posting_auths

    const opActive = opVal.active
    const opPosting = opVal.posting

    const jsonSplit = DecodeJson(opJson)
    console.log('json split', jsonSplit)

    const currTheme = useSelector((state: any) => state.global.theme)
    console.log('location', window.location.href.includes("@"))
    const OpValArray = new Array()
    OpValArray.push(opRewardHive, opVestShare)

    const StringFieldArray=[
        "id",
        "producer",
        "opCurator",
        "publisher",
        "json_meta",
        "voter",
        "author",
        "benefactor",
        "weight",
        "rshares",
        "total_vote_weight",
        "account",
        "from",
        "to",
        "memo",
        "author_rewards",
        "comment_author",
        "comment_permlink"

    ]
    
    const ObjectFieldArray=[
        "vesting_shares",
        "reward",
        "amount",
        "reward_hive",
        "hbd_payout",
        "fee",
        "pending_payout",
        "reward_hbd",
        "reward_vests",
        "hive_payout",
        "vesting_payout",
        "total_payout_value",
        "curator_payout_value",
        "beneficiary_payout_value",
        "curators_vesting_payout",
        "initial_vesting_shares",
        "initial_delegation",
    ]

    function OpObjectValue(field: any, name: string) {
        return (
            <tr>
                <td>{_t(`trans_table.${name}`)}</td>
                <td>
                    <table>
                        <tbody>
                            <tr>
                                <td>{_t(`trans_table.amount`)}</td>
                                <td>{field.amount}</td>
                            </tr>
                            <tr>
                                <td>{_t(`trans_table.precision`)}</td>
                                <td>{field.precision}</td>
                            </tr>
                            <tr>
                                <td>{_t(`trans_table.nai`)}</td>
                                <td>{field.nai}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
    function opNestedObject(field: any, name: string) {
        return (
            <tr>
                <td>{_t(`trans_table.${name}`)}</td>
                <td>
                    {typeof (field) !== "object" ? field :
                        <AuthorityObject {...field} />
                    }
                </td>
            </tr>
        )
    }
    return (
        <>
            <table className={currTheme === 'day' ? 'text-dark trans-table' : 'text-white trans-table'} >
                <tbody>
                    {opType && <tr>
                        <td>{_t(`trans_table.type`)}</td>
                        <td>{opType}</td>
                    </tr>}
                    {opVal && <tr>
                        <td>{_t(`trans_table.value`)}</td>
                        <td>
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    {Object.keys(opVal).map((key)=>{
                                        return(
                                            <>
                                            {(typeof(opVal[key])==="string" || typeof(opVal[key])==="number") 
                                                && StringFieldArray.includes(key)
                                                && 
                                                <tr>
                                                    <td>{_t(`trans_table.${key}`)}</td><td>{opVal[key]}</td>
                                                </tr>
                                            }
                                            </>
                                        )
                                    })}
                               
                                    {opOwner && opNestedObject(opOwner, 'owner')}

                                    {opActive && opNestedObject(opActive, 'active')}

                                    {opPosting && opNestedObject(opPosting, 'posting')}

                                    {opPermlink && <tr><td>{_t(`trans_table.permlink`)}</td><td><Link to={`/@${opAuth}/${opPermlink}`}>{opPermlink}</Link></td></tr>}
                               
                                    {opCreator && <tr><td>{_t(`trans_table.creator`)}</td><td><a href={`@${opCreator}`}>{opCreator}</a></td></tr>}
                                 
                                    {opRequiredAuths && opRequiredAuths.length !== 0 &&
                                        <tr>
                                            <td style={{ width: '125px' }}>{_t(`trans_table.required_auths`)}</td>
                                            <td>
                                                {window.location.href.includes("@") ?
                                                    <a href={`/@${opRequiredAuths[0]}`}>{opRequiredAuths[0]}</a>
                                                    :
                                                    <Link to={`/@${opRequiredAuths[0]}`}>{opRequiredAuths[0]}</Link>
                                                }
                                            </td>
                                        </tr>
                                    }
                                    {opRequiredPostingAuths && opRequiredPostingAuths.length !== 0 &&
                                        <tr>
                                            <td style={{ width: '175px' }}>{_t(`trans_table.required_posting_auths`)}</td>
                                            <td>
                                                {window.location.href.includes("@") ?
                                                    <a href={`/@${opRequiredPostingAuths[0]}`}>{opRequiredPostingAuths[0]}</a>
                                                    :
                                                    <Link to={`/@${opRequiredPostingAuths[0]}`}>{opRequiredPostingAuths[0]}</Link>
                                                }
                                            </td>
                                        </tr>
                                    }
                                    {/* {jsonSplit.currency && 
                                    <tr>
                                        <td>{_t(`trans_table.json`)}</td>
                                        <td>
                                         <table>
                                            <tr>
                                                <td>Items</td>
                                                <td>   {jsonSplit.items.map((item:string,i:number)=>{
                                            return(
                                                <tr key={i}>
                                                <td>{item}</td>
                                            </tr>
                                            )
                                        })}</td>
                                            </tr>
                                         </table>
                                        </td>
                                    </tr>} */}
                                    {opJson &&
                                        <tr>
                                            <td>{_t(`trans_table.json`)}</td>
                                            <td>
                                            {jsonSplit.items &&
                                               
                                                    <table>
                                                        <tr>
                                                            <td>{_t(`trans_table.items`)}</td>
                                                            <td>   {jsonSplit.items.map((item: string, i: number) => {
                                                                return (
                                                                    <tr key={i}>
                                                                        <td>{item}</td>
                                                                    </tr>
                                                                )
                                                            })}</td>
                                                        </tr>
                                                    </table>
                                               
                                                }

                                            {jsonSplit && Object.keys(jsonSplit).map((key,j)=>{
                                          
                                                return(
                                                    <>
                                                    {typeof(jsonSplit[key]) !== "object" ? <table key={j}>
                                                      <tbody>
                                                      <tr>
                                                            <td>{_t(`trans_table.${key}`)}</td>
                                                            <td>{jsonSplit[key]}</td>
                                                        </tr>
                                                      </tbody>
                                                    </table>:<></>}
                                                    </>
                                                )
                                            })}
                                            
                                            </td>
                                        </tr>}
                                    {opPayoutClaim && <tr><td>{_t(`trans_table.payout_must_be_claimed`)}</td><td>{JSON.stringify(opPayoutClaim)}</td></tr>}
                                    {opProps &&
                                        <tr>
                                            <td>{_t(`trans_table.props`)}</td>
                                            <td>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            {typeof (opProps) !== "object" ?
                                                                <>
                                                                    {opProps.map((pro: any, i: number) => {
                                                                        return (
                                                                            <>
                                                                                <td key={1}>
                                                                                    <table>
                                                                                        <tbody>
                                                                                            <tr><td>{pro[0]}</td></tr>
                                                                                            <tr><td>{pro[1]}</td></tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </> :
                                                                <>
                                                                    <table>
                                                                        <tbody>
                                                                            {Object.keys(opProps).map((pro) => {
                                                                                return (
                                                                                    <>
                                                                                        {typeof (opProps[pro]) !== "object" ?
                                                                                            <tr>
                                                                                                <td>{pro}</td>
                                                                                                <td>{opProps[pro]}</td>
                                                                                            </tr>
                                                                                            :
                                                                                            <>{opProps[pro] && OpObjectValue(opProps[pro], `${pro}`)}</>

                                                                                        }
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </tbody>
                                                                    </table>
                                                                </>


                                                            }

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>}
                             
                                    {Object.keys(opVal).map((key)=>{
                                        console.log("value",key,opVal[key],ObjectFieldArray.includes(key),typeof(opVal[key]))
                                        return(
                                            <>
                                                {typeof(opVal[key])==="object" && ObjectFieldArray.includes(key) && OpObjectValue(opVal[key], `${key}`)}
                                            </>
                                        )
                                    })}
                                    {opExchange &&
                                        <tr>
                                            <td>{_t('trans_table.exchange_rate')}</td>
                                            <td>
                                                <table>
                                                    <tbody>
                                                        {opExchange.base && OpObjectValue(opExchange.base, 'base')}
                                                        {opExchange.quote && OpObjectValue(opExchange.quote, 'quote')}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>}

                                </tbody>
                            </table>
                        </td>
                    </tr>}

                </tbody>
            </table>
        </>
    )
};
export default TransactionOperationTable;