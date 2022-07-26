
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './headBlock.scss';
import { withPersistentScroll } from '../with-persistent-scroll';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';




var url = 'http://localhost:3000/api/get_dynamic_global_properties';

export interface LatestBlock {
    head_block_number: number,
    head_block_id: string,
    time: string,
    num_pow_witnesses: number,
    init_hbd_supply:string,
    current_hbd_supply: string,
    total_vesting_fund_hive: string,
    total_vesting_shares: string,
    total_reward_fund_hive: string,
}

const HeadBlockDetail = (props:any) => {
    
    const {match} = props
    const { t } = useTranslation()
    const [result, setResult] = useState<LatestBlock>();
    useEffect(() => {
        axios.get(url).then(response => {
            setResult(response.data)
        })
    }, []);
    return (
        <div className='head-block'>
            {console.log()}
         <Container>
            {result &&
            
                <Card>
                    <Card.Header>
                        Block: {match.params.id}
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs={3}>ID: </Col>
                            <Col xs={9}>
                                {result.head_block_id}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            }
         </Container>
        </div>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HeadBlockDetail));