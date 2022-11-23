
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../with-persistent-scroll';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { pageMapDispatchToProps, pageMapStateToProps} from '../../pages/common';
import { _t } from '../../i18n';
import { getBlocks } from '../../api/urls';
import { Date_time_table } from '../../api/dateTime';
import SpinnerEffect from '../loader/spinner';

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
    const [loading, setLoading] = useState(true);
    const [homeBlocks, setHomeBlocks] = useState<HomeBlockList>();
   
      useEffect(()=>{
          const fetchData = async () =>{
            setLoading(true);
          try {
            const  response = await getBlocks(props.block_number,15)
            const blocks_response=response.blocks
            setHomeBlocks(blocks_response.reverse())
          } catch (error:any) {
            console.error(error.message);
          }
          setLoading(false);
        }
        fetchData();
      },[])
   
   const current = new Date();
   let blockNum:number=props.block_number
    return (
       <>
        {loading && <SpinnerEffect />}
        {!loading && homeBlocks && homeBlocks.map((block,index)=>{
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
                        <Col md={12}>{_t('common.witness')}: <Link to={`/@${block.witness}`}>{block.witness}</Link></Col>
                        
                    </Row>
                 </Col>
                 <Col md={4} xs={12}>
                    <Row>
                    <Col md={12} >{_t('common.time')}: {Date_time_table(block.timestamp,'YYYY-MM-DD')}</Col>
                        <Col md={12}>{_t('common.date')}: {Date_time_table(block.timestamp,'hh:mm:ss')}</Col>
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