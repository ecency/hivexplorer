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
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { HomeBlocksType } from "../../components/home/BlocksComponent";
import { _t } from "../../i18n";
import { AscendingIcon, DescendingIcon } from "../../img/svg";
import TransactionOperationTable from "../profile/userOpTable";
import { TimestampField } from "../../components/fields/blockFields/DateTimeTable";

interface Column {
  label: string;
  align: string;
  width: string;
  class:string
}

const columns: Column[] = [
  { label: `${_t("common.id")}`, align: "right", width: "unset",class:"id"},
  { label: `${_t("common.date")}`, align: "right", width: "140",class:"date" },

  { label: `${_t("common.trx_in_block")}`, align: "right", width: "110",class:"trx_in_block" },
  { label: `${_t("common.op_in_trx")}`, align: "right", width: "110",class:"op_in_trx" },
  { label: `${_t("common.type")}`, align: "right", width: "260",class:"type" },
  { label: `${_t("common.ops")}`, align: "right", width: "110",class:"ops" }
];

interface BlockList extends Array<HomeBlocksType> {}
const TransactionsTables = (props: any) => {
  const [TransactionsData, setTransactionData] = useState(props.data);

  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState("");
  const [allOpen, setAllOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "#ffffffde";
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
  const Date_time = (timeSet: string, timeFormat: string) => {
    return moment(timeSet).format(timeFormat);
  };

  const sortTransaction = (colName: string, sortState: boolean) => {
    if (colName === `${_t("common.trx_in_block")}` && sortState === true) {
      setTransactionData(
        filteredTransactionsData.sort(
          (b: any, a: any) =>
            parseFloat(b.trx_in_block.toLocaleString()) -
            parseFloat(a.trx_in_block.toLocaleString())
        )
      );
    }
    if (colName === `${_t("common.trx_in_block")}` && sortState === false) {
      setTransactionData(
        filteredTransactionsData.sort(
          (b: any, a: any) =>
            parseFloat(a.trx_in_block.toLocaleString()) -
            parseFloat(b.trx_in_block.toLocaleString())
        )
      );
    }
    if (colName === `${_t("common.op_in_trx")}` && sortState === true) {
      setTransactionData(
        filteredTransactionsData.sort(
          (b: any, a: any) =>
            parseFloat(b.op_in_trx.toLocaleString()) - parseFloat(a.op_in_trx.toLocaleString())
        )
      );
    }
    if (colName === `${_t("common.op_in_trx")}` && sortState === false) {
      setTransactionData(
        filteredTransactionsData.sort(
          (b: any, a: any) =>
            parseFloat(a.op_in_trx.toLocaleString()) - parseFloat(b.op_in_trx.toLocaleString())
        )
      );
    }
  };
  const TransRow = (props: any) => {
    const { transaction } = props;
    const [open, setOpen] = useState(allOpen);
    return (
      <>
        <TableRow hover={true} role="checkbox" tabIndex={-1}>
          <TableCell>
            <>{transaction.trx_id==="0000000000000000000000000000000000000000"?
            <p>{_t('trans_table.virtual')}</p>:
            <Link to={`/tx/${transaction.trx_id}`}>{transaction.trx_id.substring(0,7)+'...'}</Link>
            }</>
           
          </TableCell>
          {/* <TableCell>{Date_time(`${transaction.timestamp}`,"YYYY-MM-DD")}</TableCell> */}
          <TableCell>
            <TimestampField timestamp={transaction.timestamp} />
          </TableCell>

          <TableCell className="text-center px-2">{transaction.trx_in_block}</TableCell>
          <TableCell className="text-center px-2">{transaction.op_in_trx}</TableCell>
          <TableCell className="tablecell-type">
            {transaction.op.type === "custom_json_operation" ? (
              <span className="badge bg-secondary">{transaction.op.type}</span>
            ) : transaction.op.type === "effective_comment_vote_operation" ? (
              <span className="badge bg-success">{transaction.op.type}</span>
            ) : transaction.op.type === "vote_operation" ? (
              <span className="badge bg-info">{transaction.op.type}</span>
            ) : transaction.op.type === "producer_reward_operation" ? (
              <span className="badge bg-danger">{transaction.op.type}</span>
            ) : transaction.op.type === "curation_reward_operation" ? (
              <span className="badge bg-primary">{transaction.op.type}</span>
            ) : transaction.op.type === "comment_benefactor_reward_operation" ? (
              <span className="badge bg-semi-primary">{transaction.op.type}</span>
            ) : (
              <span className="badge bg-warning text-dark">{transaction.op.type}</span>
            )}
          </TableCell>

          <TableCell className="text-center">
            <IconButton
              style={{ color: currTheme === "day" ? "#535e65" : "#fcfcfc" }}
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit={true}>
              <Box margin={1}>
                {/* <TransactionOpTable opTrans={transaction.op} /> */}
                <TransactionOperationTable opTrans={...transaction.op} />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };
  return (
    <>
        <Paper
          className={
            currTheme === "day" ? "paper-day text-dark px-2" : "paper-night text-white px-2"
          }
        >
          
          <Row>
            <Col md={6}>
                <TextField
                    id="outlined-basic"
                    className="search-field"
                    onChange={inputHandler}
                    fullWidth={false}
                    placeholder={`${_t("heading_label.search_transaction")}`}
                />
                </Col>
                <Col md={6}>
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
              </Col>
          </Row>
   
          <TableContainer className="pt-4">
            <Table stickyHeader={true} aria-label="sticky table">
              <TableHead className="card-header">
                <TableRow>
                  {columns.map((column, index) => {
                    const [sortBtn, setSortBtn] = useState(false);
                    return (
                      <>
                        {column.label === `${_t("common.trx_in_block")}` ||
                        column.label === `${_t("common.op_in_trx")}` ? (
                          <TableCell className="card-header px-2 card-header-sort" key={index + 1}>
                            {
                              <>
                                <span
                                  onClick={(e) => {
                                    setSortBtn(!sortBtn);
                                    sortTransaction(
                                      e.currentTarget.innerText.substring(-1),
                                      sortBtn
                                    );
                                  }}
                                >
                                  {column.label}
                                  {sortBtn
                                    ? AscendingIcon(themeContrastColor)
                                    : DescendingIcon(themeContrastColor)}
                                </span>
                              </>
                            }
                          </TableCell>
                        ) : (
                          <TableCell
                            className={`card-header card-header-${column.class} col-w-${column.width}`}
                            key={index + 2}
                          >
                            {column.label}
                            {column.label === `${_t("common.ops")}` ? (
                              <IconButton
                                style={{ color: currTheme === "day" ? "#535e65" : "#fcfcfc" }}
                                aria-label="expand row"
                                size="small"
                                onClick={() => setAllOpen(!allOpen)}
                              >
                                {allOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                              </IconButton>
                            ) : (
                              <></>
                            )}
                          </TableCell>
                        )}
                      </>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTransactionsData &&
                  filteredTransactionsData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((transaction: any, i: number) => {
                      return <TransRow key={i} transaction={transaction} />;
                    })}
              </TableBody>
            </Table>
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

export default TransactionsTables;
