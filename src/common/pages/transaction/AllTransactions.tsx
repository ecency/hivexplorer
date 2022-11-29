
import React, { useEffect, useState } from 'react';
import { connect,useDispatch, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import Theme from '../../components/theme';
import TransactionsTables from './TransactionsTables';
import SpinnerEffect from '../../components/loader/spinner';
import BackToTopButton from '../../components/Buttons/BackToTop';
import { getHeadBlock, getTransactions } from '../../api/urls';
import { setHeadBlockData } from '../../store/HeadBlock';


interface TransactionList extends Array<HomeTransactionType>{}
const AllTransactions = (props:any) => {
    
    const {match} = props
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<TransactionList>([]);
    const dispatch = useDispatch()
    const HeadBlock = useSelector((state:any) => state.headBlock.head_block_number)
    // const HeadBlock = 69369062
  
      useEffect(()=>{
 
          const fetchData = async () =>{
            setLoading(true);
          try {
          if(HeadBlock===""){
            const resp = await getHeadBlock();
            dispatch(setHeadBlockData(resp))
            console.log('res-disptach',resp.head_block_number)
            const response = await getTransactions(resp.head_block_number);
            setTransactions(response.ops);
          }
          else{
            const response = await getTransactions(HeadBlock);
            setTransactions(response.ops);
          }
            
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
           {!loading && transactions &&  <TransactionsTables data={transactions}/>}
           <BackToTopButton />
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(AllTransactions));


