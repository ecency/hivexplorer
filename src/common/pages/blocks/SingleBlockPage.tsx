
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Card,Button} from 'react-bootstrap';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import BlockField from '../../components/fields/blockFields/blockField';
import { infoIcon } from '../../img/svg';
import { transactionList } from '../../components/home/blocksComponent';
import Theme from '../../components/theme';

export interface LatestBlock {
    previous:string
    timestamp: string
    witness: string
    transaction_merkle_root: string
    witness_signature:string
    block_id: string
    signing_key: string
    transaction:Object
    extensions:Object
}

const SingleBlock = (props:any) => {
    
    const {match} = props
    const { t } = useTranslation()
    const [result, setResult] = useState<LatestBlock>();
    const [showMore, setShowMore] = useState(false);
    console.log('id',match.params.id)
    console.log('id',match.params.id)
    var url_single_block = `${ConfigItems.baseUrl}/api/get_block?block_num=${match.params.id}`;
    useEffect(() => {
        axios.get(url_single_block).then(response => {
            setResult(response.data.block)
        })
       
    }, []);
    console.log(result?.block_id)
    return (
        <>
            <Theme global={props.global}/>
            <div className='head-block-detail'>
            <Container>
                    <Card>
                        <Card.Header>
                            Block: {match.params.id}
                        </Card.Header>
                        <Card.Body className='pt-0'>
                            { result && Object.keys(result).map((key,index)=>{
                                return(
                                    <BlockField key={index} value={ typeof(result[key])==='string'? result[key]:result[key].length}  item={key} number={index}/>
                            
                                )})
                            }
                        </Card.Body>

                    </Card>
            </Container>
            </div>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(SingleBlock));