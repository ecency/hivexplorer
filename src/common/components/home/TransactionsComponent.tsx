import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../with-persistent-scroll';
import { Col, Row } from 'react-bootstrap';
import { ConfigItems } from '../../../../config';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import moment from 'moment';
import { _t } from '../../i18n';
import { Link } from 'react-router-dom';


export interface op_type {
    type: string
}

export interface HomeTransactionType {
    trx_id: string
    block: number
    trx_in_block: number
    op_in_trx: number
    virtual_op: number
    timestamp: string
    op:op_type
    
}
export interface HomeTransactionList extends Array<HomeTransactionType>{}
const HomeTransactions = (props:any) => {
    const [homeTransactions, setHomeTransactions] = useState<HomeTransactionList>([]);
    const blockNum=67065450
    const home_transactions_url=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=${blockNum-10}`;
      useEffect(()=>{
        axios.get(home_transactions_url).then(res => {
            setHomeTransactions(res.data.ops)
          })
      },[])
      const Date_time=(timeSet:string,timeFormat:string)=>{
        return moment(timeSet).utc().format(timeFormat)
      }

    return (
       <>
        {homeTransactions && homeTransactions.slice(0,10).map((trans,index)=>{
            const deviceDate=new Date()
            return(
               <Row className='m-0 block-row row-border' key={index}>
                 <Col md={6} xs={12}>
                    <Row>
                        <Col md={12}>{_t('common.id')}: <Link to={`/trx/${trans.trx_id}`}>{trans.trx_id}</Link> </Col>
                        <Col md={12}>{_t('common.type')}: {trans.op.type}</Col>
                       
                    </Row>
                 </Col>
                 <Col md={4} xs={12}>
                    <Row>
                        <Col md={12}>{_t('common.date')}: {Date_time(trans.timestamp,'YYYY-MM-DD')}</Col>
                        <Col md={12} >{_t('common.time')}: {Date_time(trans.timestamp,'hh:mm:ss')}</Col>
                    </Row>
                 </Col>
                 <Col md={2} xs={12}>
                    <Row>
{/*                         
                        <Col md={12} >Ops: {operationsCount}</Col> */}
                    </Row>
                 </Col>
               </Row>
            )
        })}   
       </>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeTransactions));