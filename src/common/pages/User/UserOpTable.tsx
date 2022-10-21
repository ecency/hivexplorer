
import React from 'react';
import { Link, match } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { _t } from '../../i18n';
import { AuthorityObject } from './UserAuthorities';
import { object } from 'prop-types';



const TransactionOperationTable = (props: any) => {
    const { opTrans } = props
    const opType = opTrans.type
    const opVal = opTrans.value
    const opProd = opVal.producer
    const opCurator = opVal.curator
    const opPublish = opVal.publisher
    const opVoter = opVal.voter
    const opAuth = opVal.author
    const opPermlink = opVal.permlink
    const opWeight = opVal.weight
    const opRshares = opVal.rshares
    const opTVweight = opVal.total_vote_weight
    const opCommentAuthor = opVal.comment_author
    const opCommentLink = opVal.comment_permlink
    const opPayoutClaim = opVal.payout_must_be_claimed
    const opId = opVal.id
    const opJson = opVal.json
    const opOwner = opVal.owner
    const opCreator = opVal.creator
    const opBenefactor = opVal.benefactor
    const opAccount = opVal.account
    const opFrom = opVal.from
    const opTo = opVal.to
    const opMemo = opVal.memo
    const opProps = opVal.props
    const opAuthorRewards = opVal.author_rewards
    const opVestShare = opVal.vesting_shares
    const opReward = opVal.reward
    const opFee = opVal.fee
    const opPendingPay = opVal.pending_payout
    const opExchange = opVal.exchange_rate
    const opRewardHive = opVal.reward_hive
    const opAmount = opVal.amount
    const opRewardHbd = opVal.reward_hbd
    const opRewardVests = opVal.reward_vests
    const opHBDpayout = opVal.hbd_payout
    const opHivePayout = opVal.hive_payout
    const opVestingPayout = opVal.vesting_payout
    const opCuratorsVestPayout = opVal.curators_vesting_payout
    const opPayout = opVal.payout
    const opTotalPayoutVal = opVal.total_payout_value
    const opCuratorPayoutVal = opVal.curator_payout_value
    const opBenefPayoutVal = opVal.beneficiary_payout_value
    const opRequiredAuths = opVal.required_auths
    const opRequiredPostingAuths = opVal.required_posting_auths
    const opNewAccountName = opVal.new_account_name
    const opInitialVestingShares = opVal.initial_vesting_shares
    const opInitialDelegation = opVal.initial_delegation
    const opActive = opVal.active
    const opPosting = opVal.posting
    const opMemoKey = opVal.memo_key
    const opJsonMeta = opVal.json_metadata


    const currTheme = useSelector((state: any) => state.global.theme)
    console.log('location', window.location.href.includes("@"))
    const OpValArray = new Array()
    OpValArray.push(opRewardHive, opVestShare)

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
                            <table>
                                <tbody>
                                    {opProd && <tr><td>{_t(`trans_table.producer`)}</td><td>{opProd}</td></tr>}
                                    {opCurator && <tr><td>{_t(`trans_table.curator`)}</td><td>{opCurator}</td></tr>}
                                    {opPublish && <tr><td>{_t(`trans_table.publisher`)}</td><td>{opPublish}</td></tr>}
                                    {opMemoKey && <tr><td>{_t(`trans_table.memo_key`)}</td><td>{opMemoKey}</td></tr>}
                                    {opOwner && opNestedObject(opOwner, 'owner')}

                                    {opActive && opNestedObject(opActive, 'active')}

                                    {opPosting && opNestedObject(opPosting, 'posting')}

                                    {opJsonMeta && <tr><td>{_t(`trans_table.json_meta`)}</td> <td>{opJsonMeta}</td></tr>}
                                    {opVoter && <tr><td>{_t(`trans_table.voter`)}</td> <td>{opVoter}</td></tr>}
                                    {opAuth && <tr><td>{_t(`trans_table.author`)}</td><td>{opAuth}</td></tr>}
                                    {opBenefactor && <tr><td>{_t(`trans_table.benefactor`)}</td><td>{opBenefactor}</td></tr>}
                                    {opPermlink && <tr><td>{_t(`trans_table.permlink`)}</td><td><Link to={`/@${opAuth}/${opPermlink}`}>{opPermlink}</Link></td></tr>}
                                    {opWeight && <tr><td>{_t(`trans_table.weight`)}</td><td>{opWeight}</td></tr>}
                                    {opRshares && <tr><td>{_t(`trans_table.rshares`)}</td><td>{opRshares}</td></tr>}
                                    {opTVweight && <tr><td>{_t(`trans_table.total_vote_weight`)}</td><td>{opTVweight}</td></tr>}
                                    {opCreator && <tr><td>{_t(`trans_table.creator`)}</td><td><a href={`@${opCreator}`}>{opCreator}</a></td></tr>}
                                    {opAccount && <tr><td>{_t(`trans_table.account`)}</td><td>{opAccount}</td></tr>}
                                    {opFrom && <tr><td>{_t(`trans_table.from`)}</td><td>{opFrom}</td></tr>}
                                    {opTo && <tr><td>{_t(`trans_table.to`)}</td><td>{opTo}</td></tr>}
                                    {opMemo && <tr><td>{_t(`trans_table.memo`)}</td><td>{opMemo}</td></tr>}
                                    {opAuthorRewards && <tr><td>{_t(`trans_table.author_rewards`)}</td><td>{opAuthorRewards}</td></tr>}
                                    {opRequiredAuths && opRequiredAuths.length !== 0 &&
                                        <tr>
                                            <td style={{ width: '175px' }}>{_t(`trans_table.required_auths`)}</td>
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

                                    {opId && <tr><td>{_t(`trans_table.id`)}</td><td>{opId}</td></tr>}

                                    {opJson && <tr><td>{_t(`trans_table.json`)}</td><td>{opJson}</td></tr>}
                                    {opCommentAuthor && <tr><td>{_t(`trans_table.comment_author`)}</td><td>{opCommentAuthor}</td></tr>}
                                    {opCommentLink && <tr><td>{_t(`trans_table.comment_permlink`)}</td><td>{opCommentLink}</td></tr>}
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
                                    {opVestShare && OpObjectValue(opVestShare, 'vesting_shares')}
                                    {opReward && OpObjectValue(opReward, 'reward')}
                                    {opAmount && OpObjectValue(opAmount, 'amount')}
                                    {opRewardHive && OpObjectValue(opRewardHive, 'reward_hive')}
                                    {opHBDpayout && OpObjectValue(opHBDpayout, 'hbd_payout')}
                                    {opFee && OpObjectValue(opFee, 'fee')}
                                    {opPendingPay && OpObjectValue(opPendingPay, 'pending_payout')}
                                    {opRewardHbd && OpObjectValue(opRewardHbd, 'reward_hbd')}
                                    {opRewardVests && OpObjectValue(opRewardVests, 'reward_vests')}
                                    {opHivePayout && OpObjectValue(opHivePayout, 'hive_payout')}
                                    {opVestingPayout && OpObjectValue(opVestingPayout, 'vesting_payout')}
                                    {/* Total Payout Value */}
                                    {opTotalPayoutVal && OpObjectValue(opTotalPayoutVal, 'total_payout_value')}

                                    {/* Curator Payout Value */}
                                    {opVestingPayout && OpObjectValue(opVestingPayout, 'curator_payout_value')}

                                    {/* beneficiary_payout_value */}
                                    {opBenefPayoutVal && OpObjectValue(opBenefPayoutVal, 'beneficiary_payout_value')}

                                    {/* curators_vesting_payout */}
                                    {opCuratorPayoutVal && OpObjectValue(opCuratorPayoutVal, 'curators_vesting_payout')}

                                    {opInitialVestingShares && OpObjectValue(opInitialVestingShares, 'initial_vesting_shares')}

                                    {opInitialDelegation && OpObjectValue(opInitialDelegation, 'initial_delegation')}

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