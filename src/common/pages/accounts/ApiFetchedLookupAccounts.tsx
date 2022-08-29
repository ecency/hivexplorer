import React from 'react'
import { Table } from 'react-bootstrap';
import { UserList } from '../home/HomePage';

export default function ApiFetchedLookupAccounts(props: any) {
    const blocksApiResult:UserList=props;
    return (
        <Table >
              <thead>
                <tr>
                  <th>User Names</th>
                </tr>
              </thead>
              {/* <tbody>
                  { accountsApiResult.map((data) => {
                    return (<tr> 
                      <td>{data}</td> 
                    </tr>)
                  })}
              </tbody> */}
            </Table>
    )
}
