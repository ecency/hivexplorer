
import React,{useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { infoIcon } from '../../../img/svg';
import './blockField.scss'


export interface HomeBlocksType {
    previous:string,
    timestamp:string
}

const BlockField = (props:any) => {
    const { t } = useTranslation()
    const {number,item,value}=props;
    useEffect(() => {
       console.log(number)
    }, []);
    return (
        <Row className='row-border' key={number}>
            <Col  md={3} xs={12} className="attr-col"><span>{infoIcon} </span><span> {t(`head_block.${item}`)}:</span> </Col>
            <Col md={9} xs={12}>
                {value}
            </Col>
        </Row>
    )

};

export default BlockField;