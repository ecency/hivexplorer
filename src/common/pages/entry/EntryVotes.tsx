
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import Theme from '../../components/theme';
import {renderPostBody, setProxyBase, catchPostImage} from "@ecency/render-helper";

import { _t } from '../../i18n';
import { getPermLink } from '../../api/urls';
import { Container } from 'react-bootstrap';
import { activeVotes } from './EntryTypes';
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
    TextField,
   } from '@material-ui/core'


interface Column {
    label: string;
    align:string;
  }
  
  const columns:Column[] = [
    { label: `${_t("table_column.voter")}`,align: 'right',},
    { label: `${_t("table_column.weight")}`,align: 'right',},
    { label: `${_t("table_column.percent")}`,align: 'right',},
    { label: `${_t("table_column.rshares")}`,align: 'right',},
    { label: `${_t("table_column.reputation")}`,align: 'right',},
    { label: `${_t("table_column.time")}`,align: 'right',},
  ];
const EntryVotes = (props:any) => {
    const {votes}=props
    
   
    // {const renderedBody = ;}

    return (
        <>
          <TableContainer >
          <Table  stickyHeader={true}  aria-label="sticky table">
            <TableHead className="card-header">
              <TableRow >
                {columns.map((column,index) => {
                    return(
                    <TableCell className="card-header" key={index}>
                        {column.label} 
                      </TableCell>
                    )
                })}
              </TableRow>
            </TableHead>
          <TableBody>
          { votes.map((vote:activeVotes,i:number)=>{
            return(
                <TableRow key={i} hover={true} role="checkbox" tabIndex={-1}>
                <TableCell><Link to={`/@${vote.voter}`}>{vote.voter}</Link></TableCell>
                <TableCell>{vote.weight}</TableCell>
                <TableCell>{vote.percent}</TableCell>
                <TableCell>{vote.rshares}</TableCell>
                <TableCell>{vote.reputation}</TableCell>
                <TableCell>{vote.time}</TableCell>
              </TableRow>
            )
        })}
          </TableBody>
        </Table>
      </TableContainer>
     
        
            
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(EntryVotes));