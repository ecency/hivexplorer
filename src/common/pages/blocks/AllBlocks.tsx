
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import BlockTables from './BlocksTables';
import Theme from '../../components/theme';
import { HomeBlocksType } from '../../components/home/BlocksComponent';
import SpinnerEffect from '../../components/loader/spinner';
import { reverse } from 'lodash';
import { getBlocks } from '../../api/urls';


interface BlockList extends Array<HomeBlocksType>{}
const MultipleBlocks = (props:any) => {
    const [blocks, setBlocks] = useState<BlockList>([]);
    const [loading, setLoading] = useState(true);
    const HeadBlock = useSelector((state:any) => state.headBlock.head_block_number)
      useEffect(()=>{
            const fetchData = async () =>{
              setLoading(true);
            try {
              const response = await getBlocks(HeadBlock,50) ;
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