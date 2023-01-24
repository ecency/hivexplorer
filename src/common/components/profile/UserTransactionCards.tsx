import React, { useState, useEffect } from "react";
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
  TableContainer
} from "@material-ui/core";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { _t } from "../../i18n";
import { UserTransactionType } from "../../pages/profile/userTypes";
import TransactionOperationTable from "../../pages/profile/userOpTable";
import SpinnerEffect from "../loader/spinner";
import { TimestampField } from "../fields/blockFields/DateTimeTable";
import { AscendingIcon, DescendingIcon } from "../../img/svg";
import { getUserTransaction } from "../../api/urls";
import UserAvatar from "../user-avatar";
import { LinkAccount } from "../../pages/fields/common_fields";
import parseAsset from "../../helper/parse-asset";
import { Card, Col, Row } from "react-bootstrap";
import  TransactionCard  from '../transactions/card'

interface Column {
  label: string;
  align: string;
  width: string;
}

const columns: Column[] = [
  { label: `${_t("common.transaction")}`, align: "right", width: "unset" },
  { label: `${_t("common.block")}`, align: "right", width: "unset" },
  { label: `${_t("common.timestamp")}`, align: "right", width: "140" },
  { label: `${_t("common.transaction_num")}`, align: "right", width: "unset" },
  { label: `${_t("common.type")}`, align: "right", width: "unset" },
  { label: `${_t("common.ops")}`, align: "right", width: "unset" }
];

interface UserTransactionTypeList extends Array<UserTransactionType> {}
const UserTransactionsCards = (props: any) => {
  const { user } = props;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [transactionFrom, setTransactionForm] = useState(-1);
  const [transactionLimit, setTransactionLimit] = useState(1000);
  const currTheme = useSelector((state: any) => state.global.theme);
  const [userTransaction, setUserTransaction] = useState<UserTransactionTypeList>();
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getUserTransaction(user, transactionFrom, transactionLimit);
        setUserTransaction(response.history.reverse());
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let filteredTransactionsData: any;
  filteredTransactionsData = userTransaction?.filter((el: any) => {
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
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 

  return (
    <>
      {loading && <SpinnerEffect />}
      {!loading && (
        <div
          className={
            currTheme === "day"
              ? "transaction-table-day px-2 pt-4"
              : "transaction-table-night px-2 pt-4"
          }
        >
          <Paper
            className={
              currTheme === "day"
                ? "paper-day text-dark table-paper"
                : "paper-night text-white table-paper"
            }
          >
        <Row>
            <Col lg={6}>
            <TextField
              id="outlined-basic"
              className="search-field"
              fullWidth={false}
              onChange={inputHandler}
              placeholder={`${_t("heading_label.search_transaction")}`}
            />
            </Col>
            <Col lg={6}>
                {filteredTransactionsData && (
                <TablePagination
                rowsPerPageOptions={[1,25, 50, 100, 500, 1000]}
                component="div"
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
                       const transactionInfo=transaction[1]
                       const opVal=transaction[1].op.value
                      return(
                        <>
                            <TransactionCard transaction={transaction} transactionFields={transactionInfo} transactionOp={opVal} /> 
                        </>
                      );
                    })}
            </TableBody>
          </TableContainer>
          </Paper>
          {filteredTransactionsData && (
            <TablePagination
              rowsPerPageOptions={[25, 50, 100, 500, 1000]}
              component="div"
              count={filteredTransactionsData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default UserTransactionsCards;