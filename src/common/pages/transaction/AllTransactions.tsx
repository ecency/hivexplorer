
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import DataTables from '../../components/transactions/DataTables';
import Theme from '../../components/theme';


interface TransactionList extends Array<HomeTransactionType>{}
const AllTransactions = (props:any) => {
    
    const {match} = props
    const { t } = useTranslation()
    const [transactions, setTransactions] = useState<TransactionList>([]);
    var transactions_url=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=66952823`;
      useEffect(()=>{
        axios.get(transactions_url).then(res => {
            setTransactions(res.data.ops)
            console.log('ops',res.data.ops)
          })
      },[])
    return (
        <>
             <Theme global={props.global}/>
           {transactions &&  <DataTables data={transactions}/>}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(AllTransactions));