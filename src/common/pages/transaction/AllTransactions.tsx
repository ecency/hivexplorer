
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import Theme from '../../components/theme';
import TransactionsTables from './TransactionsTables';
import SpinnerEffect from '../../components/loader/spinner';
import BackToTopButton from '../../components/Buttons/BackToTop';


interface TransactionList extends Array<HomeTransactionType>{}
const AllTransactions = (props:any) => {
    
    const {match} = props
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<TransactionList>([]);
    const transactions_url=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=68847337`;
      useEffect(()=>{
        axios.get(transactions_url).then(res => {
          console.log(transactions_url)
            setTransactions(res.data.ops)
          })
          const fetchData = async () =>{
            setLoading(true);
          try {
            const {data: response} = await axios.get(transactions_url);
            setTransactions(response.ops);
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