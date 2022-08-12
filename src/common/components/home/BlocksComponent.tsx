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
    const { t } = useTranslation()
    const [homeBlocks, setHomeBlocks] = useState<HomeBlockList>();
    var home_blocks_url=`${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${props.block_number}&count=15`;
      useEffect(()=>{
        axios.get(home_blocks_url).then(res => {
            setHomeBlocks(res.data.blocks)
          })
      },[])
   console.log(homeBlocks,typeof(homeBlocks))
   const current = new Date();
   var blockNum:number=props.block_number
   

    return (
       <>
        {homeBlocks && homeBlocks.map((block,index)=>{
            const deviceDate=new Date()
            var operationsCount=0
            block.transactions.map((trans,index)=>{
                if(trans.operations.length !==0){
                    operationsCount+=trans.operations.length
               }
            })
            return(
               <Row className='m-0 block-row row-border' key={index}>
                 <Col md={5} xs={12}>
                    <Row>
                        <Col md={12}>Block: <Link to={`/b/${blockNum}`}>{blockNum--}</Link> </Col>
                        <Col md={12} >Time: {block.timestamp.replace('T',' & ')}</Col>
                    </Row>
                 </Col>
                 <Col md={5} xs={12}>
                    <Row>
                        <Col md={12}>Witness: <Link to={''}>{block.witness}</Link></Col>
                        <Col md={12}>Txns: {block.transactions.length}</Col>
                    </Row>
                 </Col>
                 <Col md={2} xs={12}>
                    <Row>
                        
                        <Col md={12} >Ops: {operationsCount}</Col>
                    </Row>
                 </Col>
               </Row>
            )
        })}   
       </>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeBlocks));