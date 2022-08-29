import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { SingleTransaction } from './SingleTransactionPage';

export default function ApiFetchedTransationsTable(props: any) {
    const blocksApiResult:SingleTransaction=props;
    return (
        <Table>
            <thead>
            <tr>
                <th>Block Id</th>
                <th>Trx Id</th>
                <th>Transation Number</th>
                <th>Expiration</th>
            </tr>
            </thead>
            {/* <tbody>
            <tr>
                <td><Link to={`/b/${transationsApiResult.block_num}`}> {transationsApiResult.block_num} </Link></td>
                <td>{transationsApiResult.transaction_id}</td>
                <td>{transationsApiResult.transaction_num}</td>
                <td>{transationsApiResult.expiration}</td>
            </tr>
            </tbody> */}
        </Table>
    )
}
