
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Card,Button} from 'react-bootstrap';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import BlockField from '../../components/fields/blockFields/blockField';
import { infoIcon } from '../../img/svg';
import { transactionList } from '../../components/home/BlocksComponent';
import Theme from '../../components/theme';
import { _t } from '../../i18n';

export interface SingleTransaction {
    block_num: number
    ref_block_num: number
    ref_block_prefix: number
    expiration: string,
    transaction_id:string,
    extensions:object,
    signature:object,
    transaction_num: number
    operations: object
}

const SingleTransaction = (props:any) => {
    const {match} = props
    const [result, setResult] = useState<SingleTransaction>();
    const url_single_transaction = `${ConfigItems.baseUrl}/api/get_transaction?trx_id=${match.params.id}`;
    useEffect(() => {
        axios.get(url_single_transaction).then(response => {
            setResult(response.data)
        })
    }, []);
    return (
        <>
            <Theme global={props.global}/>
            <div className='head-block-detail'>
            <Container>
                    <Card>
                        <Card.Header>
                            {_t('common.block')}: {match.params.id}
                        </Card.Header>
                        <Card.Body className='pt-0'>
                            { result && Object.keys(result).map((key,index)=>{
                                return(
                                    <BlockField key={index} value={typeof(result[key])==='string' || typeof(result[key])==='number' ? result[key]:result[key].length}  item={key} number={index}/>
                            
                                )})
                            }
                        </Card.Body>

                    </Card>
            </Container>
            </div>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(SingleTransaction));