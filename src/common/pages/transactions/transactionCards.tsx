import React, {useState } from "react";
import { useSelector } from "react-redux";
import {
  Paper,
  TableBody,
  TableContainer,
  TablePagination,
  TextField
} from "@material-ui/core";
import { Col,Row } from "react-bootstrap";
import { HomeBlocksType } from "../../components/home/BlocksComponent";
import { _t } from "../../i18n";
import { TransactionOperation } from "../../components/operations";

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
    
        <div
          className={
            currTheme === "day" ? "paper-day text-dark px-2" : "paper-night text-white px-2"
          }
        >
         
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
       
          </Row>
      
          <TableContainer className="py-3 trans-card-view">
            <TableBody style={{width:'100%',display:'block'}} >
            {filteredTransactionsData &&
                  filteredTransactionsData
                    .map((transaction: any, i: number) => {
                        const opVal=transaction.op.value
                      return(
                        <>
                        <div key={i+'vt'+transaction.trx_id}>
                          <TransactionOperation trans_no={transaction.trx_id} trans_data={[transaction.op]} time={transaction.timestamp} trx_status={transaction.virtual_op}/>
                        </div>
                        </>
                      );
                    })}
            </TableBody>
          </TableContainer>
       
          
        </div>
   
    </>
  );
};

export default TransactionsCards;
