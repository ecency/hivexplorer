import React, { useState, useEffect } from "react";
import { Col, Dropdown, FormControl, Row } from "react-bootstrap";
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
import options_operations from "../operations/operationArrays";
import MyPagination from "../pagination";
import { FilterDropdown } from "../filterTypes";




type Option = {
  value: string;
  label: string;
};
interface UserTransactionTypeList extends Array<UserTransactionType> {}
const UserTransactionsCards = (props: any) => {
  const { user } = props;
  const [page,setPage]=useState(1)
  const [loading, setLoading] = useState(true);
  const [transactionFrom, setTransactionForm] = useState(-1);
  const [transactionLimit, setTransactionLimit] = useState(250);
  const currTheme = useSelector((state: any) => state.global.theme);
  const [userTransaction, setUserTransaction] = useState<UserTransactionTypeList>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [options, setOptions] = useState<Option[]>(options_operations);
  const [searchValue, setSearchValue] = useState<string>('');


  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getUserTransaction(user, transactionFrom, transactionLimit,selectedValues);
        setUserTransaction(response.reverse());
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
   
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getUserTransaction(user, transactionFrom, transactionLimit,selectedValues);
        setUserTransaction(response.reverse());
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [selectedValues]);
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

  const handleSelect = (value:any) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }

  };
  const handleRemove = (value: string) => {
    setSelectedValues(selectedValues.filter((val) => val !== value));
  
  };
  const filteredOptions = options_operations.filter((option:any) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );
 

  return (
    <>
      {loading && <SpinnerEffect />}
      {!loading && (
     
       <div
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
            <Col md={6}>
              <MyPagination dataLength={250} pageSize={12} maxItems={4} page={page} onPageChange={(page) => {
                            setPage(page)
                        }}/>
            </Col>
     
          </Row>
        
        <TableContainer className="py-3 trans-card-view">
            <TableBody style={{width:'100%',display:'block'}} >
            {filteredTransactionsData &&
                  filteredTransactionsData
                    .map((transaction: any, i: number) => {
                       const transactionInfo=transaction[1]
                      return(
                        <>  
                            <TransactionOperation trans_no={transactionInfo.trx_id} trans_data={[transactionInfo.op]} time={transactionInfo.timestamp} trx_status={transactionInfo.virtual_op}/>
                            {/* <TransactionCard transaction={transaction} transactionFields={transactionInfo} transactionOp={opVal} />  */}
                        </>
                      );
                    })}
            </TableBody>
          </TableContainer>
          </div>
      )}
    </>
  );
};

export default UserTransactionsCards;