
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Card,Button} from 'react-bootstrap';
import './headBlock.scss';
import { withPersistentScroll } from '../with-persistent-scroll';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { infoIcon,showLessIcon,showMoreIcon } from '../../img/svg';
import BlockField from '../fields/blockFields/blockField';
import Theme from '../theme';
import { useSelector } from 'react-redux';

const url = `${ConfigItems.baseUrl}/api/get_dynamic_global_properties`;
import { ConfigItems } from '../../../../config';
import { _t } from '../../i18n';

export interface LatestBlock {
    head_block_number: number,
    head_block_id: string,
    time:string,
    current_witness:string,
    total_pow:string,
    num_pow_witnesses:string,
    virtual_supply:string,
    current_supply:string,
    init_hbd_supply:string,
    current_hbd_supply:string,
    total_vesting_fund_hive:string,
    total_vesting_shares:string,
    total_reward_fund_hive:string,
    total_reward_shares2:string,
    pending_rewarded_vesting_shares:string,
    pending_rewarded_vesting_hive:string,
    hbd_interest_rate:string,
    hbd_print_rate:string,
    maximum_block_size:string,
    required_actions_partition_percent:string,
    current_aslot:string,
    recent_slots_filled:string,
    participation_count:string,
    last_irreversible_block_num:string,
    vote_power_reserve_rate:string,
    delegation_return_period:string,
    reverse_auction_seconds:string,
    available_account_subsidies:string,
    hbd_stop_percent:string,
    hbd_start_percent:string,
    next_maintenance_time:string,
    last_budget_time:string,
    next_daily_maintenance_time:string,
    content_reward_percent:string,
    vesting_reward_percent:string,
    sps_fund_percent:string,
    sps_interval_ledger:string,
    downvote_pool_percent:string,
    current_remove_threshold:string,
    early_voting_seconds:string,
    mid_voting_seconds:string,
    max_consecutive_recurrent_transfer_failures:string,
    max_recurrent_transfer_end_date:string,
    min_recurrent_transfers_recurrence:string,
    max_open_recurrent_transfers:string
}

const HeadBlockDetail = (props:any) => {
    
    const {match} = props
    const [result, setResult] = useState<LatestBlock>();
    const [showMore, setShowMore] = useState(false);
    const currTheme = useSelector((state:any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const themeBtn = currTheme === 'day' ? 'showmore-btn btn-light' : 'showmore-btn btn-dark';

    let url_global = `${ConfigItems.baseUrl}/api/get_dynamic_global_properties`;
    useEffect(() => {
        axios.get(url_global).then(response => {
            setResult(response.data)
        })
    }, []);
    return (
        <>
            <Theme global={props.global}/>
            <div className='head-block-detail'>
            <Container>
                    <Card>
                        <Card.Header>
                            {_t('common.block')}: {match.params.id}
                        </Card.Header>
                        <Card.Body className='pt-0'>
                        {showMore? result && Object.keys(result).slice(0,).map((key,index)=>{
                            return(
                            <BlockField key={index} value={result[key]}  item={key} number={index}/>
                            )
                        }) :result && Object.keys(result).slice(0,10).map((key,index)=>{
                            return(
                            <BlockField  key={index} value={result[key]}  item={key} number={index}/>
                            )
                        })}
                        </Card.Body>
                        <Card.Footer>
                            <Button className={themeBtn} onClick={()=>setShowMore(!showMore)}>
                                {_t('common.show')} {showMore? <span>{_t('common.less')} {showLessIcon(themeContrastColor)} </span> : <span>{_t('common.more')} {showMoreIcon(themeContrastColor)}</span>}
                            </Button>
                        </Card.Footer>
                    </Card>
            </Container>
            </div>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HeadBlockDetail));