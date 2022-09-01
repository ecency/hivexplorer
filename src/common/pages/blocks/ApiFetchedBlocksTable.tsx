import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import { _t } from '../../i18n';


export default function ApiFetchedBlocksTable(props: any) {
    const blocksApiResult:HomeTransactionType=props;
    return (
        <Table className='mb-4'>
            <thead>
            <tr>
                <th>{_t("block.block_id")}</th>
                <th>{_t("block.expiration")}</th>
                <th>{_t("block.transaction_number")}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><Link to={`/b/${blocksApiResult[0].block}`}> {blocksApiResult[0].block} </Link></td>
                <td>{blocksApiResult[0].timestamp}</td>
                {/* <td>{props.blocksApiResult[0].trx_id}</td> */}
                <td>{blocksApiResult[0].trx_in_block}</td>
            </tr>
            </tbody>
        </Table>
    )
}