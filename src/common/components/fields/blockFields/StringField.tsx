
import React,{useEffect} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { infoIcon } from '../../../img/svg';
import './stringField.scss'
import { useSelector } from 'react-redux';
import { _t } from '../../../i18n';
import { Link } from 'react-router-dom';


const StringField = (props:any) => {
    const {number,item,value,label_for}=props;
    const currTheme = useSelector((state:any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const rowBorder = currTheme === 'day' ? 'row-border border-color-day' : 'row-border border-color-night';
    console.log('label',label_for)
    return (
        <Row className={rowBorder}  key={number}>
            <Col  md={3} xs={12} className="attr-col"><span>{infoIcon(themeContrastColor)} </span><span className='pl-1'>  {_t(`${label_for}.${item}`)}:</span> </Col>
            <Col md={9} xs={12}>
                {item==='witness'?
                    <Link to={`/@${value}`}>{value}</Link> :
                    item==="transaction_ids"? <Button >{value}</Button>:value}
            </Col>
        </Row>
    )

};
export default StringField;