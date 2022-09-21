
import React, {useState,useEffect} from "react";

import '../../../style/dataTable/DataTables.scss'
import { Link } from "react-router-dom";
import {

  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  IconButton,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Collapse,
  Box,
  Typography,
 } from '@material-ui/core';
import { Card, Col, Container, Row } from 'react-bootstrap';
import moment from "moment";
import { useSelector } from "react-redux";
import { _t } from "../../i18n";
import { ConfigItems } from "../../../../config";
import axios from "axios";
import { UserTransactionType } from "./UserTypes";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TransactionOperationTable from "./UserOpTable";
import { type } from "os";


interface Column {
  label: string;
  align:string;
}

const columns:Column[] = [
  { label: `${_t("common.transaction")}`,align: 'right',},
  { label: `${_t("common.block")}`,align: 'right',},
  { label: `${_t("common.transaction_num")}`,align: 'right',},
  { label: `${_t("common.type")}`,align: 'right',},
  { label: `${_t("common.operation")}`,align: 'right',},
];
interface Authority {
    weight_threshold:number,
    account_auths:string[],
    key_auths:string[]
}
interface UserTransactionTypeList extends Array<UserTransactionType>{}
const UserAuthorities = (props:any) => {
    const AuthorityObject=(field:Authority)=>{
        return(
           <>
           {Object.keys(field).map((key,i:number)=>{
            return(
                <>
                  {field[key].length !== 0 && 
                 <Row key={i} className="m-0 py-2 row-border-dotted">
                  
                    <>
                    <Col md={3} xs={3}>{key}
                    </Col>
                    <Col md={9} xs={9}>
                       {typeof(field[key])!=="object"?
                        field[key]
                        :
                        field[key].map((inner:any,i:number)=>{
                            return(
                                <Row key={i}>
                                    <Col className="auth-col">{key==='account_auths'?
                                        <a href={`/@${inner[0]}`}>{inner[0]}</a>: <span>{inner[0]} </span> } 
                                        <span className="number-span">{`  `} {inner[1]}</span>
                                    </Col>
                                </Row>
                            )
                        })
                       }
                    </Col>
                    </>
                  
                </Row>
                  }
                </>
               
            )

           })}
           </>
        )
    }
    return(
        <>
            <table className="authority-table">
                <tbody>
                {Object.keys(props).map((authority,i:number)=>{
                    return(
                    <tr key={i} className="row-border" >
                        <td className="pt-2 pl-4 pr-2 pb-2">{authority}</td>
                        <td  className="pt-2 px-2 pb-2">
                            {AuthorityObject(props[authority])}
                        </td>
                    </tr>
                    )})}
                </tbody>
            </table>  
        </>
    )
};

export default UserAuthorities