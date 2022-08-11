
import React,{useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { infoIcon } from '../../../img/svg';
import './blockField.scss'
import { useSelector } from 'react-redux';


export interface HomeBlocksType {
    previous:string,
    timestamp:string
}

const BlockField = (props:any) => {
    const { t } = useTranslation()
    const {number,item,value}=props;
    const currTheme = useSelector((state:any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const rowBorder = currTheme === 'day' ? 'row-border border-color-day' : 'row-border border-color-night';

    useEffect(() => {
       console.log(number)
    }, []);
    return (
        <Row className={rowBorder}  key={number}>
            <Col  md={3} xs={12} className="attr-col"><span>{infoIcon(themeContrastColor)} </span><span> {t(`block.${item}`)}:</span> </Col>
            <Col md={9} xs={12}>
                {value}
            </Col>
        </Row>
    )

};

export default BlockField;