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
  Box
} from "@material-ui/core";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { _t } from "../../i18n";
import { UserTransactionType } from "../../pages/profile/userTypes";
import SpinnerEffect from "../loader/spinner";
import { TimestampField } from "../fields/blockFields/DateTimeTable";
import { AscendingIcon, DescendingIcon } from "../../img/svg";
import { getUserTransaction } from "../../api/urls";
import { Col, Row } from "react-bootstrap";
import { FilterDropdown } from "../filterTypes";
import options_operations from "../operations/operationArrays";
import { useHistory, useLocation } from "react-router";
import MyPagination from "../pagination";
import { renderData } from "../fields/blockFields/ObjectField";

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
type Option = {
  value: string;
  label: string;
};
interface UserTransactionTypeList extends Array<UserTransactionType> {}
const UserTransactionsTable = (props: any) => {
  const { user } = props;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [transactionFrom, setTransactionForm] = useState(-1);
  const [transactionLimit, setTransactionLimit] = useState(250);
  const currTheme = useSelector((state: any) => state.global.theme);
  const [userTransaction, setUserTransaction] = useState<UserTransactionTypeList>();
  const [allOpen, setAllOpen] = useState(false);
  const [sortBlockBtn, setSortBlockBtn] = useState(false);
  const [sortTransBtn, setSortTransBtn] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [options, setOptions] = useState<Option[]>(options_operations);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageLimit, setPageLimit] = useState(1);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "#ffffffde ";

  // Determine initial page from query string with explicit radix and sensible
  // default when the parameter is absent or malformed.
  const initialPage = (() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("page") || "1", 10);
    return Number.isNaN(p) ? 1 : p;
  })();
  const [targetPage, setTargetPage] = useState<number>(initialPage);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getUserTransaction(
          user,
          transactionFrom,
          transactionLimit,
          selectedValues
        );
        setUserTransaction(response.reverse());
        setPageLimit(response.reverse()[0][0]);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [targetPage < 1]);
  useEffect(() => {
    setPage(targetPage);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getUserTransaction(
          user,
          transactionFrom,
          transactionLimit,
          selectedValues
        );

        const countStart = Math.ceil(response.reverse()[0][0]);
        //console.log('count start',`${countStart}-(${targetPage}*250)`,response.reverse()[0][0]/250)
        const respPage = await getUserTransaction(
          user,
          countStart - targetPage * 250,
          transactionLimit,
          selectedValues
        );
        if (targetPage === 1) {
          setUserTransaction(response.reverse());
        } else {
          setUserTransaction(respPage.reverse());
        }
        setPageLimit(response.reverse()[0][0]);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [targetPage, selectedValues]);
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelect = (value: any) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  const handleRemove = (value: string) => {
    setSelectedValues(selectedValues.filter((val) => val !== value));
  };
  const filteredOptions = options_operations.filter((option: any) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortTransaction = (colName: string, sortState: boolean) => {
    if (colName === `${_t("common.block")}` && sortState === true) {
      setUserTransaction(
        filteredTransactionsData.sort(
          (b: any, a: any) =>
            parseFloat(b[1].block.toLocaleString()) - parseFloat(a[1].block.toLocaleString())
        )
      );
    }
    if (colName === `${_t("common.block")}` && sortState === false) {
      setUserTransaction(
        filteredTransactionsData.sort(
          (b: any, a: any) =>
            parseFloat(a[1].block.toLocaleString()) - parseFloat(b[1].block.toLocaleString())
        )
      );
    }
    if (colName === `${_t("common.transaction_num")}` && sortState === true) {
      setUserTransaction(
        filteredTransactionsData.sort(
          (b: any, a: any) => parseFloat(b[0].toLocaleString()) - parseFloat(a[0].toLocaleString())
        )
      );
    }
    if (colName === `${_t("common.transaction_num")}` && sortState === false) {
      setUserTransaction(
        filteredTransactionsData.sort(
          (b: any, a: any) => parseFloat(a[0].toLocaleString()) - parseFloat(b[0].toLocaleString())
        )
      );
    }
  };
  const TransRow = (props: any) => {
    const { trans } = props;
    const opTrans = trans[1].op;
    const [openRow, setOpenRow] = useState(allOpen);

    return (
      <>
        <TableRow className="transaction-table-data-row" hover={true} role="checkbox" tabIndex={-1}>
          <TableCell className="transaction-table-data-cell py-2">
            <>
              {trans[1].trx_id === "0000000000000000000000000000000000000000" ? (
                <p>{_t("trans_table.virtual")}</p>
              ) : (
                <Link to={`/tx/${trans[1].trx_id}`}>{trans[1].trx_id.substring(0, 7) + "..."}</Link>
              )}
            </>
          </TableCell>
          <TableCell className="transaction-table-data-cell py-2">
            <Link to={`/b/${trans[1].block}`}>{trans[1].block}</Link>
          </TableCell>
          <TableCell className="transaction-table-data-cell  px-0 text-center">
            <TimestampField timestamp={trans[1].timestamp} />
          </TableCell>
          <TableCell className="transaction-table-data-cell py-2 col-w-100 text-center">
            {trans[0]}
          </TableCell>
          <TableCell className="transaction-table-data-cell py-2">{trans[1].op.type}</TableCell>
          <TableCell className="text-center col-w-100">
            <IconButton
              style={{ color: currTheme === "day" ? "#535e65" : "#fcfcfc" }}
              aria-label="expand row"
              size="small"
              onClick={() => setOpenRow(!openRow)}
            >
              {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={openRow} timeout="auto" unmountOnExit={true}>
              <Box margin={1} className="trans-op-box">
                {/* <TransactionOperationTable opTrans={...opTrans} /> */}
                <>{renderData({ ...opTrans })}</>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
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
          <div
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
              {/* <Col lg={6}>

            </Col> */}
            </Row>

            <Row>
              <Col lg={6} className="select_dropdown">
                <FilterDropdown
                  handleSelect={handleSelect}
                  selectedValues={selectedValues}
                  handleRemove={handleRemove}
                  searchValue={searchValue}
                  handleSearchChange={handleSearchChange}
                  filteredOptions={filteredOptions}
                />
              </Col>
              {userTransaction && (
                <Col md={6} className="pagination-col">
                  <MyPagination
                    dataLength={pageLimit}
                    pageSize={250}
                    maxItems={4}
                    page={page}
                    onPageChange={(page) => {
                      setPage(page);
                      setTargetPage(page);
                      history.push(`?page=${page}`);
                    }}
                  />
                </Col>
              )}
            </Row>
            <br />

            <Table stickyHeader={true} aria-label="sticky table">
              <TableHead className="card-header">
                <TableRow className="card-header">
                  {columns.map((column, index) => {
                    return (
                      <div key={index + 1 + column.label}>
                        {column.label === `${_t("common.block")}` ? (
                          <TableCell
                            className={`card-header px-2 col-w-${column.width} card-header-sort`}
                          >
                            {
                              <>
                                <span
                                  onClick={(e) => {
                                    setSortBlockBtn(!sortBlockBtn);
                                    sortTransaction(
                                      e.currentTarget.innerText.substring(-1),
                                      sortBlockBtn
                                    );
                                  }}
                                >
                                  {column.label}
                                  {sortBlockBtn
                                    ? DescendingIcon(themeContrastColor)
                                    : AscendingIcon(themeContrastColor)}
                                </span>
                              </>
                            }
                          </TableCell>
                        ) : (
                          <TableCell
                            key={index}
                            className={`card-header px-2 col-w-${column.width} card-header-sort`}
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
                      </div>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTransactionsData &&
                  filteredTransactionsData.map((trans: any, i: number) => {
                    return <TransRow key={i + trans + "-"} trans={trans} />;
                  })}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default UserTransactionsTable;
