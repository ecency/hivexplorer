import React, {Component, useEffect, useState} from "react";
import { Dropdown, FormControl } from "react-bootstrap";

export const FilterDropdown=(props:any)=>{
    const {handleSelect,selectedValues,handleRemove,searchValue,handleSearchChange,filteredOptions}=props
    return (
        <>
                 <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="filter_dropdown">
            {selectedValues.length > 0 ? (
                <div className="d-flex flex-wrap">
                  {selectedValues.map((value:any) => (
                    <div
                      key={value}
                      className="btn btn-light border m-1"
                      style={{ maxWidth: 'fit-content' }}
                      onClick={() => handleRemove(value)}
                    >
                      {value}{' '}
                      <span
                        className="text-danger ms-2"
                        
                        >x</span>
                    
                    </div>
                  ))}
                </div>
              ) : (
                'Select options'
              )}
            </Dropdown.Toggle>

      <Dropdown.Menu>
        <FormControl
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        {filteredOptions.map((option:any,index:number) => (
          <Dropdown.Item key={option.value+index} eventKey={option.value}  active={selectedValues.includes(option.value)}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
        </>
    )
}