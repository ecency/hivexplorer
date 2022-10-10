
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Card,Button} from 'react-bootstrap';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import StringField from '../../components/fields/blockFields/StringField';
import { infoIcon } from '../../img/svg';
import { transactionList } from '../../components/home/BlocksComponent';
import Theme from '../../components/theme';
import { _t } from '../../i18n';
import ObjectField from '../../components/fields/blockFields/ObjectField';
import BackToTopButton from '../../components/Buttons/BackToTop';

export interface LatestBlock {
    block_id: string
    previous:string
    timestamp: string
    witness: string
    transaction_merkle_root: string
    witness_signature:string
    signing_key: string
    transaction:Object
    extensions:Object
    transaction_ids:Object
}

const SingleBlock = (props:any) => {
    
    const {match} = props
    const [result, setResult] = useState<LatestBlock>();
    const [showMore, setShowMore] = useState(false);
    const url_single_block = `${ConfigItems.baseUrl}/api/get_block?block_num=${match.params.id}`;
    useEffect(() => {
        console.log('block-url',url_single_block)
        axios.get(url_single_block).then(response => {
            setResult(response.data.block)
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
                                    typeof(result[key])==='string' || typeof(result[key])==='number'?
                                    <StringField key={index} value={result[key]}  item={key} number={index} label_for='block'/>
                                    :
                                    <ObjectField transactionOperations={result['transactions']} key={index} value={result[key]}  item={key} number={index} label_for='block'/>
                                )
                            }
                        )}
                        </Card.Body>

                    </Card>
            </Container>
           
            </div>
            <BackToTopButton />
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(SingleBlock));