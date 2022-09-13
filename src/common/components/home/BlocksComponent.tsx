
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
import BlockField from './BlockField';

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
    const [homeBlok, setHomeBlok] = useState<HomeBlocksType>();
    const home_blocks_url=`${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${props.block_number-15}&count=15`;
      useEffect(()=>{
        axios.get(home_blocks_url).then(res => {
            setHomeBlocks(res.data.blocks)
            console.log(res.data.blocks)
          })
      },[])
      const Date_time=(timeSet:string,timeFormat:string)=>{
        return moment(timeSet).format(timeFormat)
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
                <BlockField blockNo={blockNum--} key={index}/> 
            )  
        })}
       </>
    )
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeBlocks));