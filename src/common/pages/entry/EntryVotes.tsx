
import React from 'react';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { _t } from '../../i18n';
import { activeVotes } from './EntryTypes';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
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