
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
    transactions:transactionList[]
    transaction_ids:[]
}
interface HomeBlockList extends Array<HomeBlocksType>{}
const HomeBlocks = (props:any) => {
    const [homeBlocks, setHomeBlocks] = useState<HomeBlockList>();
    const home_blocks_url=`${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${props.block_number-14}&count=15`;
      useEffect(()=>{
        axios.get(home_blocks_url).then(res => {
            const blocks_response=res.data.blocks
            setHomeBlocks(blocks_response.reverse())
          })
      },[])
      const Date_time=(timeSet:string,timeFormat:string)=>{
        return moment(timeSet).utc().format(timeFormat)
      }
   const current = new Date();
   let blockNum:number=props.block_number
    return (
       <>
        {homeBlocks && homeBlocks.map((block,index)=>{
            const deviceDate=new Date()
            let operationsCount=0
            block.transactions.map((trans,index)=>{
                if(trans.operations.length !==0){
                    operationsCount+=trans.operations.length
               }
            })
            return(
               <Row className='m-0 block-row row-border' key={index}>
                 <Col md={5} xs={12}>
                    <Row>
                        <Col md={12}>{_t('common.block')}: <Link to={`/b/${blockNum}`}>{blockNum--}</Link> </Col>
                        <Col md={12}>{_t('common.witness')}: <Link to={''}>{block.witness}</Link></Col>
                        
                    </Row>
                 </Col>
                 <Col md={4} xs={12}>
                    <Row>
                    <Col md={12} >{_t('common.time')}: {Date_time(block.timestamp,'YYYY-MM-DD')}</Col>
                        <Col md={12}>{_t('common.date')}: {Date_time(block.timestamp,'hh:mm:ss')}</Col>
                    </Row>
                 </Col>
                 <Col md={3} xs={12}>
                    <Row>
                    <Col md={12}>{_t('common.txns')}: {block.transactions.length}</Col>
                        <Col md={12} >{_t('common.ops')}: {operationsCount}</Col>
                    </Row>
                 </Col>
               </Row>
            )
        })}   
       </>
    )
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeBlocks));