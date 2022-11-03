
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import BlockTables from './BlocksTables';
import Theme from '../../components/theme';
import { HomeBlocksType } from '../../components/home/BlocksComponent';
import SpinnerEffect from '../../components/loader/spinner';
import { reverse } from 'lodash';


interface BlockList extends Array<HomeBlocksType>{}
const MultipleBlocks = (props:any) => {
    
    const {match} = props
    const [blocks, setBlocks] = useState<BlockList>([]);
    const [loading, setLoading] = useState(true);
    const HeadBlock = useSelector((state:any) => state.headBlock.head_block_number)
    console.log('Headdd',HeadBlock)
    const block_num=69053410
    const blocks_url=`${ConfigItems.baseUrl}/api/get_block_range?starting_block_num=${HeadBlock-49}&count=50`;
      useEffect(()=>{
        console.log(blocks_url)
            const fetchData = async () =>{
              setLoading(true);
            try {
              const {data: response} = await axios.get(blocks_url);
              console.log(response.blocks)
              setBlocks(reverse(response.blocks));
            } catch (error:any) {
              console.error(error.message);
            }
            setLoading(false);
          }
          fetchData();
      },[])
    return (
        <>
            <Theme global={props.global}/>
            {loading && <SpinnerEffect />}
            {!loading && blocks && <BlockTables data={blocks} blockNo={HeadBlock} />}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(MultipleBlocks));