
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { _t } from '../../i18n';
import { entryVotesType } from './EntryTypes';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
   } from '@material-ui/core'
import moment from 'moment';
import axios from 'axios';
import { getEntryVotes } from '../../api/urls';



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
    const {user,permlink}=props
    const [loading, setLoading] = useState(true);
    const [votes, setVotes] = useState([])
    const entry_votes_url=getEntryVotes(user,permlink)
    useEffect(() => {
      const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get(entry_votes_url);
            console.log(response)
            setVotes(response);
          } catch (error:any) {
            console.error(error.message);
          }
          setLoading(false);
        }
        fetchData();
  }, [])
   
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
          { votes.map((vote:entryVotesType,i:number)=>{
            return(
                <TableRow key={i} hover={true} role="checkbox" tabIndex={-1}>
                <TableCell><Link to={`/@${vote.voter}`}>{vote.voter}</Link></TableCell>
                <TableCell>{vote.weight? vote.weight:"-N/A"}</TableCell>
                <TableCell>{vote.percent? vote.percent : "-N/A"}</TableCell>
                <TableCell>{vote.rshares? vote.rshares : "-N/A"}</TableCell>
                <TableCell>{vote.reputation? vote.reputation : "-N/A"}</TableCell>
                <TableCell>{vote.time? moment(`${vote.time}`).fromNow(): "-N/A"}</TableCell>
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