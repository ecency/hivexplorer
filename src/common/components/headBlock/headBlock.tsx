import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meta from '../meta';
import Theme from '../theme';
import { getMetaProps } from '../../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../with-persistent-scroll';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './headBlock.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ConfigItems } from '../../../../config';

export interface Block {
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

const HeadBlock = (props:Block) => {
    const { t } = useTranslation()
    const result=props
      console.log(props.current_hbd_supply)
   
    return (
        <div className='head-block'>
           {props &&
            <Card>
                <Card.Header>
                <span className='head-block-attr-span'>Block: </span><Link to={`/head/b/${result.head_block_number}`}>
                    {result.head_block_number}</Link>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4} xs={12}>
                            <div>
                                <div className='pt-2'><span className='head-block-attr-span'>Time: </span>{result.time}</div>
                                <div className='pt-2'><span className='head-block-attr-span'>Witnesses: </span>{result.num_pow_witnesses}</div>
                            </div>
                        </Col>
                        <Col md={4} xs={12} className="head-block-middle">
                            <div >
                                <div className='pt-2'><span className='head-block-attr-span'>Reward Fund: </span>{result.total_reward_fund_hive}</div>
                                <div className='pt-2'><span className='head-block-attr-span'>Vesting Fund: </span>{result.total_vesting_fund_hive}</div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div>
                                <div className='pt-2'><span className='head-block-attr-span'>Vesting Shares: </span>{result.total_vesting_shares}</div>
                                <div className='pt-2'><span className='head-block-attr-span'>Supply: </span>{result.init_hbd_supply}</div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
           }
        </div>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HeadBlock));