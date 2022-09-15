import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { SingleTransaction } from './SingleTransactionPage';
import { _t } from '../../i18n';

export default function ApiFetchedTransationsTable(props: any) {
    const transactionsApiResult:SingleTransaction=props;
    return (
        <Table className='mb-4' >
            <thead>
            <tr>
                <th>{_t("block.block_id")}</th>
                <th>{_t("block.trx_id")}</th>
                <th>{_t("block.transaction_number")}</th>
                <th>{_t("block.expiration")}</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td><Link to={`/b/${transactionsApiResult.block_num}`}> {transactionsApiResult.block_num} </Link></td>
                <td>{transactionsApiResult.transaction_id}</td>
                <td>{transactionsApiResult.transaction_num}</td>
                <td>{transactionsApiResult.expiration}</td>
            </tr>
            </tbody>
        </Table>
    )
}
