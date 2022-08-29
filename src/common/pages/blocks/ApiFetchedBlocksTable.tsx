import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';

export default function ApiFetchedBlocksTable(props: any) {
    const blocksApiResult:HomeTransactionType=props;
    return (
        <Table>
            <thead>
            <tr>
                <th>Block Id</th>
                <th>Expiration</th>
                <th>Transaction Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><Link to={`/b/${blocksApiResult[0].timestamp}`}> {blocksApiResult[0].timestamp} </Link></td>
                <td>{blocksApiResult[0].trx_id}</td>
                {/* <td>{props.blocksApiResult[0].trx_id}</td> */}
                <td>{blocksApiResult[0].timestamp}</td>
            </tr>
            </tbody>
        </Table>
    )
}
