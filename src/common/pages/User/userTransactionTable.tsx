
import React, {useState,useEffect} from "react";

import '../../../style/dataTable/DataTables.scss'
import { Link } from "react-router-dom";
import {

  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
 } from '@material-ui/core';
import { Card, Container } from 'react-bootstrap';
import moment from "moment";
import { useSelector } from "react-redux";
import { _t } from "../../i18n";
import { ConfigItems } from "../../../../config";
import axios from "axios";
import { UserTransactionType } from "./UserTypes";


interface Column {
  label: string;
  align:string;
}

const columns:Column[] = [
    
  { label: `${_t("common.block")}`,align: 'right',},
  { label: `${_t("common.transaction")}`,align: 'right',},
  { label: `${_t("common.transaction_num")}`,align: 'right',},
  { label: `${_t("common.type")}`,align: 'right',},
  { label: `${_t("common.time")}`,align: 'right',},
  { label: `${_t("common.date")}`,align: 'right',},
];

interface UserTransactionTypeList extends Array<UserTransactionType>{}
const UserTransactionsTable = (props:any) => {
    const {match} = props
    const {user}=props

   const [userTransaction,setUserTransaction]=useState<UserTransactionTypeList>()
    const [transactionFrom,setTransactionForm]=useState(0)
    const [transactionLimit,setTransactionLimit]=useState(50)
    const currTheme = useSelector((state:any) => state.global.theme)

 const user_transaction_url=`${ConfigItems.baseUrl}/api/get_account_history?account=${user}&from=${transactionFrom}&limit=${transactionLimit}`
 useEffect(()=>{
        console.log(user_transaction_url)
      axios.get(user_transaction_url).then(resp=>{
        console.log('user_transaction',resp.data)
        setUserTransaction(resp.data.history)
      })
  },[])
const Date_time=(timeSet:string,timeFormat:string)=>{
  return moment(timeSet).utc().format(timeFormat)
}
  return (
    <>
    <div className="px-2 py-4">
    <Paper className={currTheme==='day'? "paper-day text-dark ":'paper-night text-white'}>
        <Table stickyHeader={true}  aria-label="sticky table">
            <TableHead className="card-header">
              <TableRow className="card-header">
                {columns.map((column,index) => (
                    <TableCell key={index} className="card-header py-2">
                      {column.label}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
            {userTransaction && userTransaction
              .map((trans:any,i:number) => {
                return (
                    // trans[1].trx_id !=='0000000000000000000000000000000000000000'?
                  <TableRow className="transaction-table-data-row" hover={true} role="checkbox" tabIndex={-1} key={i}>
                        <TableCell  className="transaction-table-data-cell py-2"><Link to={`/b/${trans[1].block}`}>{trans[1].block}</Link></TableCell>
                        <TableCell  className="transaction-table-data-cell py-2"><Link to={`/trx/${trans[1].trx_id}`}>{trans[1].trx_id}</Link></TableCell>
                        <TableCell className="transaction-table-data-cell py-2">{trans[0]}</TableCell>
                        <TableCell className="transaction-table-data-cell py-2">{trans[1].op.type}</TableCell>
                        <TableCell className="transaction-table-data-cell py-2">{trans[1].op_in_trx}</TableCell>
                        <TableCell className="transaction-table-data-cell py-2">{trans[1].virtual_op}</TableCell>
                  </TableRow>
                //   :<></>
                );
              })}
          </TableBody>
        </Table>
    </Paper>
    </div>
   
    </>
  );
};

export default UserTransactionsTable


