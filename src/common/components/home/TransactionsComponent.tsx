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
import { getTransactions } from '../../api/urls';


export interface op_type {
    type: string
    value:{
      required_auths:string[],
      required_posting_auths:string[]
    }
}

export interface HomeTransactionType {
    map(arg0: (suggestion: any, index: number) => JSX.Element): string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined;
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
    const home_transactions_url=getTransactions(blockNum-10);
      useEffect(()=>{
        axios.get(home_transactions_url).then(res => {
            setHomeTransactions(res.data.ops)
            
          })
         
      },[])
      const Date_time=(timeSet:string,timeFormat:string)=>{
        return moment(timeSet).format(timeFormat)
      }
      

    return (
       <>
        {homeTransactions && homeTransactions.slice(0,10).map((trans,index)=>{
          const req_auths:string[]=trans.op.value.required_auths
          const posting_auths:string[]=trans.op.value.required_posting_auths

            const deviceDate=new Date()
            return(
               <Row className='m-0 block-row row-border' key={index}>
                 <Col md={12} xs={12}>
                    <Row>
                        <Col md={12}>{_t('common.id')}: <Link to={`/tx/${trans.trx_id}`}>{trans.trx_id}</Link> </Col>
                    </Row>
                 </Col>
                 <Col md={12} xs={12}>
                    <Row>
                        <Col md={6} xs={12}>{_t('common.type')}: {trans.op.type}</Col>
                        <Col md={6} xs={12}>{_t('common.trx_in_block')}: {trans.trx_in_block}</Col>
                    </Row>
                 </Col>
                 <Col md={12} xs={12}>
                    <Row>
                        <Col md={6}>{_t('common.date')}: {Date_time(trans.timestamp,'YYYY-MM-DD')}</Col>
                        <Col md={6} >{_t('common.time')}: {Date_time(trans.timestamp,'hh:mm:ss')}</Col>
                    </Row>
                 </Col>
                 <Col md={12} xs={12}>
                    <Row>
                        {req_auths.length !==0 && 
                        <Col md={6}>{_t('common.req_auth')}: 
                            {req_auths.map((user:string,i:number)=>{
                              return(
                                <img className='avatar-img' src={`https://images.ecency.com/u/${user}/avatar`} key={i} alt="" />
                              )
                            })}
                        </Col>
                        }
                        {posting_auths.length!==0 &&
                         <Col md={6}>{_t('common.req_post_auth')}:
                          {posting_auths.map((user:string,i:number)=>{
                              return(
                                <img className='avatar-img' src={`https://images.ecency.com/u/${user}/avatar`} key={i} alt="" />
                              )
                            })}
                        </Col>}
                    </Row>
                 </Col>
                
               </Row>
            )
        })}   
       </>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeTransactions));