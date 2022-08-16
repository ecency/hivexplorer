import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import React, { useEffect, useState } from 'react';
import axios, { responseEncoding } from 'axios';
import Meta from '../meta';
import Theme from '../theme';
import { getMetaProps } from '../../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../with-persistent-scroll';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'
import { ConfigItems } from '../../../../config';
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
interface HomeTransactionList extends Array<HomeTransactionType>{}
const HomeTransactions = (props:any) => {
    const { t } = useTranslation()
    const [homeTransactions, setHomeTransactions] = useState<HomeTransactionList>([]);
    var home_transactions_url=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=${props.block_number-15}`;
    console.log('bid',props.block_number-10)
      useEffect(()=>{
        axios.get(home_transactions_url).then(res => {
            setHomeTransactions(res.data.ops)
            console.log('ops',res.data.ops)
          })
      },[])

    return (
       <>
        {homeTransactions && homeTransactions.slice(0,10).map((trans,index)=>{
            const deviceDate=new Date()
            return(
               <Row className='m-0 block-row row-border' key={index}>
                 <Col md={6} xs={12}>
                    <Row>
                        <Col md={12}>ID: {trans.trx_id}  </Col>
                        <Col md={12} >Time: {trans.timestamp.replace('T',' & ')}</Col>
                    </Row>
                 </Col>
                 <Col md={4} xs={12}>
                    <Row>
                        <Col md={12}>Type: {trans.op.type}</Col>
                        
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