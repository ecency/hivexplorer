
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
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
    const [blocks, setBlocks] = useState<BlockList>([]);
    const block_num=67090459
    const blocks_url=`${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${block_num-50}&count=50`;
      useEffect(()=>{
        console.log(blocks_url)
        axios.get(blocks_url).then(res => {
            setBlocks(res.data.blocks)
          })
      },[])
    return (
        <>
            <Theme global={props.global}/>
            {blocks && <BlockTables data={blocks} blockNo={block_num} />}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(MultipleBlocks));