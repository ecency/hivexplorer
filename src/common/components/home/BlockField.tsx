
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../with-persistent-scroll';
import { Col, Row } from 'react-bootstrap';
import { ConfigItems } from '../../../../config';
import { Link } from 'react-router-dom';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import moment from 'moment';
import { _t } from '../../i18n';
import { any } from 'prop-types';
import transitions from '@material-ui/core/styles/transitions';

interface operationsList {
    type: string
}
export interface transactionList {
    ref_block_num:number
    operations:operationsList[]
}

export interface HomeBlocksType {
    previous:string,
    timestamp:string,
    witness:string,
    block_id:string
    transactions:transactionList[]
    transaction_ids:[]
}
interface HomeBlockList extends Array<HomeBlocksType>{}
const BlockField = (props:any) => {
    const {blockNo} = props
    const [homeBlock, setHomeBlock] = useState<HomeBlocksType>();
    const home_blocks_url=`${ConfigItems.baseUrl}/api/get_block?block_num=${blockNo}`;

      useEffect(()=>{
        axios.get(home_blocks_url).then(res => {
            setHomeBlock(res.data.block)
          })
      },[])
      const Date_time=(timeSet:string,timeFormat:string)=>{
        return moment(timeSet).format(timeFormat)
      }
   const current = new Date();
   let operationsCount=0
   homeBlock && homeBlock.transactions.map((trans,index)=>{
       if(trans.operations.length !==0){
           operationsCount+=trans.operations.length
      }
   })
    return (
       <>
        {homeBlock && 
       <Row className='m-0 block-row row-border'>
       <Col md={5} xs={12}>
          <Row>
              <Col md={12}>{_t('common.block')}: <Link to={`/b/${blockNo}`}>{blockNo}</Link> </Col>
              <Col md={12}>{_t('common.witness')}: <Link to={`/@${homeBlock.witness}`}>{homeBlock.witness}</Link></Col>
              
          </Row>
       </Col>
       <Col md={4} xs={12}>
          <Row>
          <Col md={12} >{_t('common.time')}: {Date_time(homeBlock.timestamp,'YYYY-MM-DD')}</Col>
              <Col md={12}>{_t('common.date')}: {Date_time(homeBlock.timestamp,'hh:mm:ss')}</Col>
          </Row>
       </Col>
       <Col md={3} xs={12}>
          <Row>
          <Col md={12}>{_t('common.txns')}: {homeBlock.transactions.length}</Col>
              <Col md={12} >{_t('common.ops')}: {operationsCount}</Col>
          </Row>
       </Col>
       
     </Row>
        }
       </>
    )
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(BlockField));