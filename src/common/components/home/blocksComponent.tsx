import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meta from '../meta';
import Theme from '../theme';
import { getMetaProps } from '../../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../with-persistent-scroll';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'
import { ConfigItems } from '../../../../config';
import { Link } from 'react-router-dom';

export interface HomeBlocksType {
    previous:string,
    timestamp:string
}
interface HomeBlockList extends Array<HomeBlocksType>{}
const HomeBlocks = (props:any) => {
    const { t } = useTranslation()

  const [homeBlocks, setHomeBlocks] = useState<HomeBlockList>([]);
      
      useEffect(()=>{
        console.log("result",props)
        axios.get(`http://localhost:3000/api/get_block_range?starting_block_num=${props.block_number}&count=15`).then(res => {
            console.log(`http://localhost:3000/api/get_block_range?starting_block_num=${props.block_number}&count=15`)
            setHomeBlocks(res.data.blocks)
             res.data.blocks.map((block:HomeBlocksType)=>{
                console.log("Home",block.previous)
             })
          })
      },[])
   console.log(homeBlocks,typeof(homeBlocks))
   const current = new Date();
   var blockNum:number=props.block_number

    return (
       <>
        {homeBlocks && homeBlocks.map((block,index)=>{
            const deviceDate=new Date()
            return(
               <Row className='my-0'>
                 <Col md={6} xs={12} >
                    <Row>
                        <Col md={12}>Block: <Link to={`/b/${blockNum}`}>{blockNum--}</Link> </Col>
                        <Col md={12}>Time: {block.timestamp}</Col>
                    </Row>
                 </Col>
                 <Col md={3} xs={12}>
                 </Col>
                 <Col md={3} xs={12}>
                 </Col>
               </Row>
            )
        })}   
       </>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeBlocks));