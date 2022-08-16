import { AnyCnameRecord } from "dns";
import React, { useMemo,useState } from "react";
import { useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import FilterComponent from "./FilteredData";
import { Container } from "react-bootstrap";
import './DataTables.scss'
import amountFormatCheck from "../../helper/amount-format-check";



const DataTables = (props:any) => {
const columns = [
    {
        name: "Block",
        selector: (row:any) => row.block,
    },
    {
        name: "ID",
        selector: (row:any) => row.trx_id,
    }, 
    {
        name: "Type",
        selector: (row:any) => row.op.type,
    },
    {
      name: "Value",
      selector: (row:any) =>amountFormatCheck( row.op.value.required_posting_auths),
    }
  ];
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const currTheme = useSelector((state:any) => state.global.theme)
  console.log('theme',currTheme)
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const ExpandedComponent = () => <pre>{JSON.stringify(props.data, null, 2)}</pre>;
  console.log('EXP',ExpandedComponent)

  const filteredItems = props.data.filter(
    (item:any) =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e:any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <>
    <Container className="data-table-container">
        <DataTable
        title="Latest Transactions"
        columns={columns}
        data={filteredItems}
        striped={true}
        pagination={true}
        subHeader={true}
        theme={currTheme==="night"? "dark":"default"}
        subHeaderComponent={subHeaderComponent}
        />
    </Container>
    
  
    </>
  );
};

export default DataTables;
