import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { SingleTransaction } from './SingleTransactionPage';
import { _t } from '../../i18n';

export default function ApiFetchedTransationsTable(props: any) {
    const blocksApiResult:SingleTransaction=props;
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
