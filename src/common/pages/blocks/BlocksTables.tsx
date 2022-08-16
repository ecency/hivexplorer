import { AnyCnameRecord } from "dns";
import React, { useEffect, useMemo,useState } from "react";
import { useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import FilterComponent from "./FilteredData";
import './DataTables.scss'
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Container } from 'react-bootstrap';
import { HomeBlocksType } from "../../components/home/BlocksComponent";
import moment from "moment";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchBar from "material-ui-search-bar";


interface Column {
  label: string;
  align:string;
}
const columns:Column[] = [
  { label: 'Block #',align: 'right',},
  { label: 'Date',align: 'right',},
  { label: 'Time',align: 'right',},
  { label: 'Witness',align: 'right',},
  { label: 'Transactions',align: 'right',},
  { label: 'Operations',align: 'right',},
];

interface BlockList extends Array<HomeBlocksType>{}
const BlocksTables = (props:any) => {
 const blocksData=props.data
  // const [blocksData, setBlocksData] =useState<BlockList>()
  // useEffect(()=>{
  //   setBlocksData(props.data)
  // },[])
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  console.log(typeof(blocksData),blocksData)
  console.log('blocks',blocksData)
  let block_number_page=67096310
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const requestSearch = (searchedVal:any) => {
  //   const filteredRows = blocksData?.filter((row:any) => {
  //     return JSON.stringify(row)
  //       .toLowerCase()
  //       .includes(searchedVal.toLowerCase());
  //   });
  //   setBlocksData(filteredRows);
  // };

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };


  return (
    <>
    <Container className="data-table-blocks">
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <SearchBar
          value={searched}
          // onChange={(searchVal) => requestSearch(searchVal)}
          // onCancelSearch={() => cancelSearch()}
        />
      <TableContainer >
          <Table  stickyHeader={true}  aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column,index) => (
                    <TableCell key={index}>
                      {column.label}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
          <TableBody>
            {blocksData && blocksData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((block:any,i:number) => {
                var operationsTableCount=0
                block.transactions.map((trans:any,ind:number)=>{
                    if(trans.operations.length !==0){
                        operationsTableCount+=trans.operations.length
                   }
                })
                return (
                  <TableRow hover={true} role="checkbox" tabIndex={-1} key={i}>
                    {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? <a>{column.format(value)}</a>
                            : value}
                        </TableCell>
                      );
                    })} */}
                    <TableCell><Link to={`/b/${block_number_page}`}>{block_number_page--}</Link></TableCell>
                    <TableCell>{moment(`${block.timestamp}`).utc().format('DD-MM-YYYY')} </TableCell>
                    <TableCell>{moment(`${block.timestamp}`).utc().format('hh:mm:ss')}</TableCell>
                    <TableCell><span><img className="avatar-img" src={`https://images.ecency.com/u/${block.witness}/avatar`} alt={block.witness} /></span>{block.witness}</TableCell>
                    <TableCell style={{textAlign:'center'}}>{block.transactions.length}</TableCell>
                    <TableCell style={{textAlign:'center'}}>{operationsTableCount}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {blocksData && 
       <TablePagination
       rowsPerPageOptions={[10, 25, 100]}
       component="div"
       count={blocksData.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
      }
     
    </Paper>
    </Container>
    </>
  );
};

export default BlocksTables;