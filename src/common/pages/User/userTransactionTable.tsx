
import React, {useState,useEffect} from "react";

import '../../../style/dataTable/DataTables.scss'
import { Link } from "react-router-dom";
import {

  Paper,
  Table,
  TableBody,
  TableCell,
  IconButton,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Collapse,
  Box,
 } from '@material-ui/core';
import { useSelector } from "react-redux";
import { _t } from "../../i18n";
import { ConfigItems } from "../../../../config";
import axios from "axios";
import { UserTransactionType } from "./UserTypes";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TransactionOperationTable from "./UserOpTable";
import SpinnerEffect from "../../components/loader/spinner";
import moment from "moment";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from "react-bootstrap";
import { DateTimeTable, TimestampField } from "../../components/fields/blockFields/DateTimeTable";


interface Column {
  label: string;
  align:string;
}

const columns:Column[] = [
  { label: `${_t("common.transaction")}`,align: 'right',},
  { label: `${_t("common.block")}`,align: 'right',},
  { label: `${_t("common.timestamp")}`,align: 'right',},
  { label: `${_t("common.transaction_num")}`,align: 'right',},
  { label: `${_t("common.type")}`,align: 'right',},
  { label: `${_t("common.ops")}`,align: 'right',},
];

interface UserTransactionTypeList extends Array<UserTransactionType>{}
const UserTransactionsTable = (props:any) => {
    const {user}=props
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [transactionFrom,setTransactionForm]=useState(1000)
    const [transactionLimit,setTransactionLimit]=useState(1000)
    const currTheme = useSelector((state:any) => state.global.theme)
    const [userTransaction,setUserTransaction]=useState<UserTransactionTypeList>()
    const [allOpen, setAllOpen] = useState(false);


    const user_transaction_url=`${ConfigItems.baseUrl}/api/get_account_history?account=${user}&start=${transactionFrom}&limit=${transactionLimit}`

    useEffect(()=>{
          // axios.get(user_transaction_url).then(resp=>{
          //   setUserTransaction(resp.data.history)
          // })
          const fetchData = async () =>{
            setLoading(true);
          try {
            const {data: response} = await axios.get(user_transaction_url);
            console.log(user_transaction_url)
            setUserTransaction(response.history);
          } catch (error:any) {
            console.error(error.message);
          }
          setLoading(false);
        }
        fetchData();
      },[])
      const [inputText, setInputText] = useState("");
      let inputHandler = (e:any) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
      let filteredTransactionsData:any
      filteredTransactionsData = userTransaction?.filter((el:any) => {
      
        if (el) {
          if (inputText === '') {
              return el;
          }
          //return the item which contains the user input
          else {
              return  JSON.stringify(el).toLowerCase().includes(inputText)
          }
        }
    })
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    const TransRow=(props:any)=>{
      const {trans}=props
      const opTrans=trans[1].op
      const [openRow,setOpenRow]=useState(allOpen)

  return(
    <>
      <TableRow className="transaction-table-data-row" hover={true} role="checkbox" tabIndex={-1} >
        <TableCell  className="transaction-table-data-cell py-2">
          <Link to={`/tx/${trans[1].trx_id}`}>{trans[1].trx_id}</Link>
        </TableCell>
        <TableCell  className="transaction-table-data-cell py-2">
          <Link to={`/b/${trans[1].block}`}>{trans[1].block}</Link>
        </TableCell>
        <TableCell className="transaction-table-data-cell  px-0 text-center">
          <TimestampField timestamp={trans[1].timestamp} />
        </TableCell>
        <TableCell className="transaction-table-data-cell py-2 col-w-100 text-center">{trans[0]}</TableCell>
        <TableCell className="transaction-table-data-cell py-2">{trans[1].op.type}</TableCell>
        <TableCell className="text-center col-w-100">
          <IconButton style={{color: currTheme==='day'? '#535e65':'#fcfcfc'}} aria-label="expand row" size="small" onClick={() => setOpenRow(!openRow)}>
            {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openRow} timeout="auto" unmountOnExit={true}>
            <Box margin={1}>
              <TransactionOperationTable opTrans={...opTrans} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
  return (
    <>
     {loading && <SpinnerEffect />}
     {!loading && <div className={currTheme==='day'? "transaction-table-day px-2 pt-4":"transaction-table-night px-2 pt-4"}>
    <Paper className={currTheme==='day'? "paper-day text-dark table-paper":'paper-night text-white table-paper'}>
    <TextField
        id="outlined-basic"
        className="search-field"
        fullWidth={false}
        onChange={inputHandler}
        placeholder={`${_t('heading_label.search_transaction')}`}
      />
        <Table stickyHeader={true}  aria-label="sticky table">
            <TableHead className="card-header">
              <TableRow className="card-header">
                {columns.map((column,index) => (
                    <TableCell key={index} className="card-header py-2">
                      {column.label}
                      {column.label===`${_t("common.ops")}`? 
                       <IconButton style={{color: currTheme==='day'? '#535e65':'#fcfcfc'}} aria-label="expand row" size="small" onClick={() => setAllOpen(!allOpen)}>
                            {allOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>:<></>}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
            {filteredTransactionsData && filteredTransactionsData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((trans:any,i:number) => {
                return (
                  <TransRow key={i} trans={trans} />
                );
              })}
          </TableBody>
        </Table>
    </Paper>
    {filteredTransactionsData && 
       <TablePagination
       rowsPerPageOptions={[25,50, 100, 500,1000]}
       component="div"
       count={filteredTransactionsData.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
      }
    </div>}
    
   
    </>
  );
};

export default UserTransactionsTable


