
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import Theme from '../../components/theme';
import TransactionsTables from '../../components/transactions/TransactionsTables';


interface TransactionList extends Array<HomeTransactionType>{}
const AllTransactions = (props:any) => {
    
    const {match} = props
    const [transactions, setTransactions] = useState<TransactionList>([]);
    const transactions_url=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=66952823`;
      useEffect(()=>{
        axios.get(transactions_url).then(res => {
            setTransactions(res.data.ops)
          })
      },[])
    return (
        <>
             <Theme global={props.global}/>
           {transactions &&  <TransactionsTables data={transactions}/>}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(AllTransactions));