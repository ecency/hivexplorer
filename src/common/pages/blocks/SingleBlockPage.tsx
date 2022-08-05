
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Card,Button} from 'react-bootstrap';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';

import { withPersistentScroll } from '../../components/with-persistent-scroll';


var url = 'http://localhost:3000/api/get_dynamic_global_properties';

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

const SingleBlock = (props:any) => {
    
    const {match} = props
    const { t } = useTranslation()
    const [result, setResult] = useState<LatestBlock>();
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        axios.get(url).then(response => {
            setResult(response.data)
        })
    }, []);
    return (
        <div className='head-block-detail'>
         <Container>
                <Card>
                    <Card.Header>
                        Block: {match.params.id}
                    </Card.Header>
                    <Card.Body className='p-0'>
              
                    </Card.Body>
                    <Card.Footer>
                        <Button className='showmore-btn btn-theme' onClick={()=>setShowMore(!showMore)}>
                            Show
                        </Button>
                    </Card.Footer>
                </Card>
         </Container>
        </div>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(SingleBlock));