import React, { useState } from "react";
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
  TextField
} from "@material-ui/core";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import { HomeBlocksType } from "../../components/home/BlocksComponent";
import { _t } from "../../i18n";
import { Date_time_table } from "../../api/dateTime";
import UserAvatar from "../../components/user-avatar";

interface Column {
  label: string;
  align: string;
}

const columns: Column[] = [
  { label: `${_t("table_column.block")}`, align: "right" },
  { label: `${_t("table_column.date")}`, align: "right" },
  { label: `${_t("table_column.time")}`, align: "right" },
  { label: `${_t("table_column.witness")}`, align: "right" },
  { label: `${_t("table_column.transactions")}`, align: "right" },
  { label: `${_t("table_column.operations")}`, align: "right" }
];

interface BlockList extends Array<HomeBlocksType> {}
const BlocksTables = (props: any) => {
  const blocksData = props.data;
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const currTheme = useSelector((state: any) => state.global.theme);
  let block_number_page = props.blockNo;
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
  let filteredBlocksData = new Array();
  filteredBlocksData = blocksData.filter((el: any) => {
    if (el) {
      if (inputText === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return el.witness.toLowerCase().includes(inputText);
      }
    }
  });
  return (
    <>
      <Container className="data-table-hive py-5">
        <Paper
          className={
            currTheme === "day" ? "paper-day text-dark px-2" : "paper-night text-white px-2"
          }
        >
          <h1>{_t("heading_label.latest_block")}</h1>
          <TextField
            className="search-field"
            onChange={inputHandler}
            fullWidth={false}
            placeholder={`${_t("heading_label.search_block")}`}
          />
          <TableContainer className="pt-4">
            <Table stickyHeader={true} aria-label="sticky table">
              <TableHead className="card-header">
                <TableRow className="card-header">
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      className={
                        column.label === "Transactions" || column.label === "Operations"
                          ? "text-center card-header"
                          : "card-header"
                      }
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBlocksData &&
                  filteredBlocksData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((block: any, i: number) => {
                      let operationsTableCount = 0;
                      block.transactions.map((trans: any, ind: number) => {
                        if (trans.operations.length !== 0) {
                          operationsTableCount += trans.operations.length;
                        }
                      });
                      return (
                        <TableRow hover={true} role="checkbox" tabIndex={-1} key={i}>
                          <TableCell>
                            <Link to={`/b/${block_number_page}`}>{block_number_page--}</Link>
                          </TableCell>
                          <TableCell>
                            {Date_time_table(`${block.timestamp}`, "YYYY-MM-DD")}{" "}
                          </TableCell>
                          <TableCell>{Date_time_table(`${block.timestamp}`, "hh:mm:ss")}</TableCell>
                          <TableCell>
                            <UserAvatar username={block.witness} size="small"/>
                          </TableCell>
                          <TableCell className="text-center">{block.transactions.length}</TableCell>
                          <TableCell className="text-center">{operationsTableCount}</TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          {filteredBlocksData && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={filteredBlocksData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      </Container>
    </>
  );
};

export default BlocksTables;
