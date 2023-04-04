import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Paper,
  TableBody,
  TextField,
  TableContainer
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { _t } from "../../i18n";
import { UserTransactionType } from "../../pages/profile/userTypes";
import SpinnerEffect from "../loader/spinner";
import { getUserTransaction } from "../../api/urls";
import { TransactionOperation } from "../operations";

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
  const [loading, setLoading] = useState(true);
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

 

  return (
    <>
      {loading && <SpinnerEffect />}
      {!loading && (
        <div
          className={
            currTheme === "day"
              ? "transaction-table-day px-2 pt-2"
              : "transaction-table-night px-2 pt-2"
          }
        >
          <Paper
            className={
              currTheme === "day"
                ? "paper-day text-dark card-paper"
                : "paper-night text-white card-paper"
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
     
          </Row>
        
        <TableContainer className="py-3 trans-card-view">
            <TableBody style={{width:'100%',display:'block'}} >
            {filteredTransactionsData &&
                  filteredTransactionsData
                    .map((transaction: any, i: number) => {
                       const transactionInfo=transaction[1]
                       const opVal=transaction[1].op.value
                      return(
                        <>  
                            <TransactionOperation trans_no={transactionInfo.trx_id} trans_data={[transactionInfo.op]} time={transactionInfo.timestamp} trx_status={transactionInfo.virtual_op}/>
                            {/* <TransactionCard transaction={transaction} transactionFields={transactionInfo} transactionOp={opVal} />  */}
                        </>
                      );
                    })}
            </TableBody>
          </TableContainer>
          </Paper>
      
        </div>
      )}
    </>
  );
};

export default UserTransactionsCards;