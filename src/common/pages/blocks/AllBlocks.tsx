
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { Link } from 'react-router-dom';
import BlockTables from './BlocksTables';
import Theme from '../../components/theme';
import { HomeBlocksType } from '../../components/home/BlocksComponent';
import { Col, Container, Row, Card } from 'react-bootstrap';


interface BlockList extends Array<HomeBlocksType>{}
const MultipleBlocks = (props:any) => {
    
    const {match} = props
    const { t } = useTranslation()
    const [blocks, setBlocks] = useState<BlockList>([]);
    const block_num=67090459
    var blocks_url=`${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${block_num-50}&count=50`;
      useEffect(()=>{
        axios.get(blocks_url).then(res => {
            setBlocks(res.data.blocks)
            console.log('blocks',res.data.blocks)
          })
      },[])
    return (
        <>
             <Theme global={props.global}/>
           {/* {blocks &&  blocks.map((block,index)=>{
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
                        <Col md={12}>Block: <Link to={`/b/${block_num}`}>{block_num--}</Link> </Col>
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
        })} */}
        {blocks && <BlockTables data={blocks} blockNo={block_num} />}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(MultipleBlocks));