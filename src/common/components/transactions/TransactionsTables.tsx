
import React, {useState } from "react";

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
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TextField from "@mui/material/TextField";
import { Container } from 'react-bootstrap';
import { HomeBlocksType } from "../home/BlocksComponent";
import moment from "moment";
import { useSelector } from "react-redux";
import { _t } from "../../i18n";


interface Column {
  label: string;
  align:string;
}

const columns:Column[] = [
  { label: `${_t("common.block")}`,align: 'right',},
  { label: `${_t("common.id")}`,align: 'right',},
  { label: `${_t("common.type")}`,align: 'right',},
  { label: `${_t("common.value")}`,align: 'right',},
];

interface BlockList extends Array<HomeBlocksType>{}
const TransactionsTables = (props:any) => {

 const TransactionsData=props.data
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const currTheme = useSelector((state:any) => state.global.theme)
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e:any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let filteredTransactionsData =new Array() 
  filteredTransactionsData = TransactionsData.filter((el:any) => {
   
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
const Date_time=(timeSet:string,timeFormat:string)=>{
  return moment(timeSet).format(timeFormat)
}
  return (
    <>
    <Container className="data-table-hive py-5">
    <Paper  
        className={currTheme==='day'? "paper-day text-dark px-2":'paper-night text-white px-2'} 
      >
        <h1>{_t("heading_label.latest_transaction")}</h1>
      <TextField
        id="outlined-basic"
        className="search-field"
        onChange={inputHandler}
        fullWidth={false}
        placeholder={`${_t('heading_label.search_transaction')}`}
        
      />
      <TableContainer className="pt-4">
          <Table  stickyHeader={true}  aria-label="sticky table">
            <TableHead className="card-header">
              <TableRow >
                {columns.map((column,index) => (
                    <TableCell className="card-header" key={index}>
                      {column.label}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
          <TableBody>
            {filteredTransactionsData && filteredTransactionsData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction:any,i:number) => {
                return (
                  <TableRow hover={true} role="checkbox" tabIndex={-1} key={i}>
                    <TableCell><Link to={`/b/${transaction.block}`}>{transaction.block}</Link></TableCell>
                    <TableCell><Link to={`/tx/${transaction.trx_id}`}>{transaction.trx_id}</Link></TableCell>
                    <TableCell>{transaction.op.type}</TableCell>
                    <TableCell>{transaction.op.type}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {filteredTransactionsData && 
       <TablePagination
       rowsPerPageOptions={[10, 25, 100]}
       component="div"
       count={filteredTransactionsData.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
      }
     
    </Paper>
    </Container>
    </>
  );
};

export default TransactionsTables
