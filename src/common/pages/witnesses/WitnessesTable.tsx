
import React, {useState } from "react";

import '../../../style/dataTable/DataTables.scss'
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
  TextField,
 } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { HomeBlocksType } from "../../components/home/BlocksComponent";
import moment from "moment";
import { useSelector } from "react-redux";
import { _t } from "../../i18n";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { witnessesType } from "./WitnessesPage";
import { ExternalLink } from "../../img/svg";
import './witnesses.scss'
import { dateToRelative } from "../../helper/parse-date";



interface Column {
    label: string;
    align:string;
  }
  
  const mainColumns:Column[] = [
    { label: `${_t("witnesses.id")}`,align: 'right',},
    { label: `${_t("witnesses.owner")}`,align: 'right',},
    { label: `${_t("witnesses.votes")}`,align: 'right',},
    { label: `${_t("witnesses.url")}`,align: 'right',},
    { label: `${_t("witnesses.total_missed")}`,align: 'right',},
    { label: `${_t("witnesses.account_creation_fee")}`,align: 'right',},
    { label: `${_t("witnesses.account_creation_feed")}`,align: 'right',},
    { label: `${_t("witnesses.version")}`,align: 'right',},
    { label: `${_t("witnesses.more")}`,align: 'right',},
  ];
  const innerColumns= [
    "props",
    "hbd_exchange_rate",
    "created",
   "virtual_last_update",
   "virtual_position",
   "virtual_scheduled_time",
   "last_aslot",
   "last_confirmed_block_num",
   "pow_worker",
   "signing_key",
   "last_hbd_exchange_update",
    "last_work",
    "running_version",
    "hardfork_version_vote",
    "hardfork_time_vote",
    "available_witness_account_subsidies"
    
  ];

interface BlockList extends Array<HomeBlocksType>{}
const WitnessesTables = (props:any) => {

  const WitnessesData=props.data
  console.log(WitnessesData);
  
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [allOpen, setAllOpen] = useState(false);
  const currTheme = useSelector((state:any) => state.global.theme)
  const themeContrastColor = currTheme === 'day' ? '#357ce6' : '#357ce6';
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e:any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let filteredWitnessesData =new Array() 
  filteredWitnessesData = WitnessesData.filter((el:any) => {
   
    if (el) {
      if (inputText === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return  JSON.stringify(el.owner).toLowerCase().includes(inputText)
      }
    }
})
const Date_time=(timeSet:string,timeFormat:string)=>{
  return moment(timeSet).format(timeFormat)
}
const WitnessRow=(props:any)=>{
    const {witness}=props
    console.log(witness)
    const [open, setOpen] = useState(allOpen);

    return(
      <>
        <TableRow hover={true} role="checkbox" tabIndex={-1}>
            <TableCell >{witness.id}</TableCell>
            <TableCell >
                <span>
                    <img className="avatar-img" src={`https://images.ecency.com/u/${witness.owner}/avatar`} alt={witness.owner} />
                </span>
            <Link to={`/@${witness.owner}`}>{witness.owner}</Link>
            </TableCell>
            <TableCell>{`${witness.votes.substring(0,6)}m`}</TableCell>
            <TableCell><a className="witness-external-link" href={witness.url} target="_blank">{ExternalLink(themeContrastColor)}</a></TableCell>
            <TableCell>{witness.total_missed}</TableCell>
            <TableCell>{witness.props.account_creation_fee}</TableCell>
            <TableCell>
                <span className="inner inner-green">${witness.hbd_exchange_rate.base.replace(' HBD','')} | {dateToRelative(witness.last_hbd_exchange_update)}</span>
            </TableCell>
            <TableCell><span className="inner inner-blue">{witness.running_version}</span></TableCell>
            <TableCell className="text-center">
                <IconButton style={{color: currTheme==='day'? '#535e65':'#fcfcfc'}} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
        </TableRow>
            <TableRow className="Nested-row">
            <TableCell style={{ paddingBottom: 0, paddingTop: 0,borderTop:0 }} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit={true}>
                <Box margin={1}>
                    {/* <Table  className="witnesses-table" aria-label="sticky table">
                    <TableHead className="card-header">
              <TableRow >
                {innerColumns.map((column,index) => (
                    <TableCell 
                    className={column.label===`${_t("witnesses.owner")}` || column.label===`${_t("witnesses.account_creation_feed")}`?
                    "card-header owner-col-th"
                    :"card-header"} 
                    key={index}
                    >
                      {column.label}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
                    </Table> */}
                    <table className="witness-dropdown-table">
                        <tbody>
                         <>
                         {innerColumns.map((key,i)=>{
                               if(witness.hasOwnProperty(key)){
                                return(
                                    <>
                                    {typeof(witness[key])==="object"? 
                                           
                                            <tr>
                                             <td>{_t(`witnesses.${key}`)}</td>
                                            <td>
                                              <table>
                                                <tbody>
                                                  {Object.keys(witness[key]).map((val:any,i:number)=>{
                                                    return(
                                                      <tr key={i}>
                                                        <td>{_t(`witnesses.${val}`)}</td>
                                                        <td>{witness[key][val]}</td>
                                                      </tr>
                                                    )
                                                  })}
                                                </tbody>
                                              </table>
                                            </td>
                                        </tr>
                                    :
                                    <tr key={i}>
                                        <td>{_t(`witnesses.${key}`)}</td>
                                        <td>{key==="created"?  moment.utc(witness[key]).format("LL") : witness[key]}</td>
                                    </tr>
                                    }
                                    </>
                                )
                               }
                            })}
                        
                         </>
                        </tbody>
                    </table>
                </Box>
            </Collapse>
            </TableCell>
        </TableRow>
      </>
    )
  }
  return (
    <>
   
     
    <Paper 
        id="witnesses-paper"
        className={currTheme==='day'? "paper-day text-dark px-2":'paper-night text-white px-2'} 
      >
         <TextField
        id="outlined-basic"
        className="search-field"
        onChange={inputHandler}
        fullWidth={false}
        placeholder={`${_t('heading_label.search_witnesses')}`}
        
      />
     
      <TableContainer className="pt-4">
          <Table  stickyHeader={true} className="witnesses-table" aria-label="sticky table">
            <TableHead className="card-header">
              <TableRow >
                {mainColumns.map((column,index) => (
                    <TableCell 
                    className={column.label===`${_t("witnesses.owner")}` || column.label===`${_t("witnesses.account_creation_feed")}`?
                    "card-header owner-col-th"
                    :"card-header"} 
                    key={index}
                    >
                      {column.label}
                      {column.label===`${_t("witnesses.more")}`? 
                       <IconButton style={{color: currTheme==='day'? '#535e65':'#fcfcfc'}} aria-label="expand row" size="small" onClick={() => setAllOpen(!allOpen)}>
                            {allOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>:<></>}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
          <TableBody>
            {filteredWitnessesData && filteredWitnessesData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((witness:witnessesType,i:number) => {
                return (
                  <WitnessRow key={i} witness={witness} />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {filteredWitnessesData && 
       <TablePagination
       rowsPerPageOptions={[10, 25, 100]}
       component="div"
       count={filteredWitnessesData.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
      }
     
    </Paper>

    </>
  );
};

export default WitnessesTables