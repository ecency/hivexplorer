import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField
} from "@material-ui/core";
import { Card, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { HomeBlocksType } from "../../components/home/BlocksComponent";
import { _t } from "../../i18n";
import { AscendingIcon, DescendingIcon } from "../../img/svg";
import TransactionOperationTable from "../profile/userOpTable";
import { TimestampField } from "../../components/fields/blockFields/DateTimeTable";
import { LinkAccount } from "../fields/common_fields";
import UserAvatar from "../../components/user-avatar";
import parseAsset from "../../helper/parse-asset";
import TransactionCard from '../../components/transactions/card'

interface Column {
  label: string;
  align: string;
  width: string;
}

const columns: Column[] = [
  { label: `${_t("common.id")}`, align: "right", width: "unset" },
  { label: `${_t("common.date")}`, align: "right", width: "140" },

  { label: `${_t("common.trx_in_block")}`, align: "right", width: "110" },
  { label: `${_t("common.op_in_trx")}`, align: "right", width: "110" },
  { label: `${_t("common.type")}`, align: "right", width: "260" },
  { label: `${_t("common.ops")}`, align: "right", width: "110" }
];

interface BlockList extends Array<HomeBlocksType> {}
const TransactionsCards = (props: any) => {
  const [TransactionsData, setTransactionData] = useState(props.data);

  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState("");
  const [allOpen, setAllOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const currTheme = useSelector((state: any) => state.global.theme);


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let filteredTransactionsData = new Array();
  filteredTransactionsData = TransactionsData.filter((el: any) => {
    if (el) {
      if (inputText === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return JSON.stringify(el).toLowerCase().includes(inputText);
      }
    }
  });


  return (
    <>
    
        <Paper
          className={
            currTheme === "day" ? "paper-day text-dark px-2" : "paper-night text-white px-2"
          }
        >
          <h1>{_t("heading_label.latest_transaction")}</h1>
          <Row>
            <Col lg={6}>
                <TextField
                    id="outlined-basic"
                    className="search-field"
                    onChange={inputHandler}
                    fullWidth={false}
                    placeholder={`${_t("heading_label.search_transaction")}`}
                />
            </Col>
            <Col lg={6}>
            {filteredTransactionsData && (
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                labelRowsPerPage={"Cards per page"}
                count={filteredTransactionsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
            </Col>
          </Row>
      
          <TableContainer className="py-3 trans-card-view">
            <TableBody style={{width:'100%',display:'block'}} >
            {filteredTransactionsData &&
                  filteredTransactionsData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((transaction: any, i: number) => {
                        const opVal=transaction.op.value
                      return(
                        <>
                        <TransactionCard transactionFields={transaction} transactionOp={opVal}/>
                        </>
                      );
                    })}
            </TableBody>
          </TableContainer>
       
          {filteredTransactionsData && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={filteredTransactionsData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
   
    </>
  );
};

export default TransactionsCards;
