import { AnyCnameRecord } from "dns";
import React, { useMemo,useState } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilteredData";



const DataTables = (props:any) => {
    
  const columns = [
    {
      name: "ID",
      selector:(row: any) => `${row.props.data?.trx_id}`,
      grow: 2
    }, 
    // {
    //   name: "Email",
    //   selector: "email",
    //   sortable: true
    // },
    // {
    //   name: "Website",
    //   selector: "website",
    //   sortable: true
    // },
    // {
    //   name: "Company",
    //   selector: "company.name",
    //   sortable: true,
    //   hide: "md"
    // },
    // {
    //   name: "City",
    //   selector: "address.city",
    //   sortable: true,
    //   hide: "md"
    //}
  ];
  console.log('transaction',props.data)
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data;
  console.log('filter',filteredItems)

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
    <DataTable
      title="Contact List"
      columns={columns}
      data={filteredItems}
      striped
      pagination
      subHeader
    //   subHeaderComponent={subHeaderComponent}
    />
    </>
  );
};

export default DataTables;
