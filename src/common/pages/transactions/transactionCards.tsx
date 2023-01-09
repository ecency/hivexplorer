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
                            <Card className="trans-card" style={{width:'100%'}} >
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/tx/${transaction.trx_id}`}>{transaction.trx_id.substring(0,10)} </Link>
                                       
                                    </Card.Title>
                                    <h5 className="mb-2 text-muted">{_t("common.type")}: {transaction.op.type}</h5>
                                   <Card.Text>
                                   <table  className={
                                            currTheme === "day" ? "trans-card-table trans-card-table-day" : "trans-card-table trans-card-table-dark"
                                        }>
                                        <tbody>
                                                {Object.keys(opVal).map((val:any,i:number)=>{
                                        return(
                                        <>
                                        
                                        { typeof(opVal[val]) === 'boolean'? 
                                        <tr  key={i+val+transaction.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td className={`${opVal[val]}`}>
                                            {opVal[val].toString()}
                                        </td>
                                    </tr>
                                        :typeof(opVal[val]) !== 'object' && opVal[val]!=="" ?
                                        <tr key={i+val+transaction.op.type}>
                                            <td>{_t(`trans_table.${val}`)}</td>
                                            <td>
                                            {LinkAccount.includes(val)?
                                                <UserAvatar username={opVal[val]} size="small"/>
                                                : 
                                                val==='permlink' ? <Link to={`/@${opVal.author}/${opVal.permlink}`}>{opVal.permlink}</Link>
                                                :
                                                val==='comment_permlink' ? <Link to={`/@${opVal.comment_author}/${opVal.comment_permlink}`}>{opVal.comment_permlink}</Link>
                                                :
                                                val==='parent_permlink' ? <Link to={`/@${opVal.parent_author}/${opVal.parent_permlink}`}>{opVal.parent_permlink}</Link>
                                                :
                                                opVal[val]
                                            }</td>
                                        </tr>
                                        :
                                        typeof(opVal[val]) === 'object' && opVal[val].length!==0 ?
                                        val==="required_auths" || val==="required_posting_auths" ?
                                        <tr  key={i+val+transaction.op.type}>
                                            <td>{_t(`trans_table.${val}`)}</td>
                                            <td>
                                            <UserAvatar username={opVal[val][0]} size="small"/>
                                            </td>
                                        </tr>
                                        :
                                    
                                        val==="extensions"?
                                        <tr key={i+val+transaction.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td>
                                            <table>
                                                <tbody>
                                                {opVal[val].map((item:any,j:number)=>{
                                                  return(
                                                    <>
                                                    {typeof(item)==="object"? 
                                                    <>{Object.keys(item).map((exVal)=>{
                                                        return(
                                                           <>
                                                            {typeof(item[exVal])!=="object"?
                                                                <tr>
                                                                    <td>{exVal}</td>
                                                                    <td>{item[exVal]}</td>
                                                                </tr>
                                                                :
                                                                <>
                                                                {Object.keys(item[exVal]).map((key)=>{
                                                                    return(
                                                                       <>
                                                                       {typeof(item[exVal][key]==="object")?
                                                                         <tr>
                                                                            <td>{key}</td>
                                                                            <>{item[exVal][key].map((innerKey:any)=>{
                                                                                console.log('inner',innerKey,typeof(innerKey))
                                                                                return(
                                                                                    <>
                                                                                   {typeof(innerKey)==="object"?
                                                                                   <><table>
                                                                                    <tbody>
                                                                                        {Object.keys(innerKey).map((keyItem,i)=>{
                                                                                            return(
                                                                                                <tr key={innerKey+i+keyItem}>
                                                                                                    <td>{_t(`trans-table.${keyItem}`)}</td>
                                                                                                    <td>{innerKey[keyItem]}</td>
                                                                                                </tr>
                                                                                            )
                                                                                        })}
                                                                                    </tbody>
                                                                                    </table></>
                                                                                   :<></>}
                                                                                    </>
                                                                                )
                                                                            })}
                                                                            </>
                                                                        </tr>:
                                                                        <></>}
                                                                       </>
                                                                    )
                                                                })}
                                                              
                                                                </>
                                                            }
                                                           </>
                                                        )
                                                    })}
                                                    </>
                                                    :
                                                    <></>}
                                                    </>
                                                  )}
                                                )}
                                                </tbody>
                                            </table>
                                        </td>
                                        </tr>:
                                        val==="props" ? 
                                        <tr key={i+val+transaction.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td>
                                            <table>
                                                <tbody>
                                                {Object.keys(opVal[val]).map((item:any,j:number)=>{
                                                return(
                                                    <tr key={j+item}>
                                                    <td>{_t(`trans_table.${opVal[val][item][0]}`)}</td>
                                                    <td>{opVal[val][item][1]}</td>
                                                    </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                        </td>
                                        </tr>
                                        :
                                        <tr key={i+val+transaction.op.type}>
                                           <td>{_t(`trans_table.${val}`)}</td>
                                            <td>{parseAsset(opVal[val]).amount+' '+parseAsset(opVal[val]).symbol}</td>
                                        </tr>:<></>}
                                        
                                        </>
                                        )
                                        })}
                                        </tbody>
                                    </table>
                                   </Card.Text>
                                </Card.Body>
                                </Card>
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
