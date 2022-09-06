
import React,{useEffect} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { infoIcon } from '../../../img/svg';
import './stringField.scss'
import { useSelector } from 'react-redux';
import { _t } from '../../../i18n';
import { Link } from 'react-router-dom';
import moment from 'moment';

const timestampKeys=[
    "time",
    "timestamp",
    "last_owner_update",
    "last_account_update",
    "created",
    "last_account_recovery",
    "hbd_seconds_last_update",
    "hbd_last_interest_payment",
    "savings_hbd_seconds_last_update",
    "savings_hbd_last_interest_payment",
    "next_vesting_withdrawal",
    "last_post",
    "last_root_post",
    "last_vote_time",
    "governance_vote_expiration_ts",
    "expiration",
    "next_maintenance_time",
    "last_budget_time",
    "next_daily_maintenance_time"
]

const StringField = (props:any) => {
    const {number,item,value,label_for}=props;
    const currTheme = useSelector((state:any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const rowBorder = currTheme === 'day' ? 'row-border border-color-day' : 'row-border border-color-night';
    console.log('label',label_for)

    const DateTimeMoment=(timeSet:string,timeFormat:string)=>{
        return moment(timeSet).utc().format(timeFormat)
      }
    const Date_time=(timeDate:string)=>{
        return(
            <>
                <table className='time-date-table'>
                    <tr>
                        <td>Date</td>
                        <td>{DateTimeMoment(`${timeDate}`,"YYYY-MM-DD")}</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>{DateTimeMoment(`${timeDate}`,`hh:mm:ss`)}</td>
                    </tr>
                </table>
            </>
        )
    }

    return (
        <Row className={rowBorder}  key={number}>
            <Col  md={3} xs={12} className="attr-col"><span>{infoIcon(themeContrastColor)} </span><span className='pl-1'>  {_t(`${label_for}.${item}`)}:</span> </Col>
            <Col md={9} xs={12}>
                {   item==='witness' || item==='current_witness'?
                    <Link to={`/@${value}`}>{value}</Link>
                    :
                    item==='block_num'?
                    <Link to={`/b/${value}`}>{value}</Link>
    
                    :item==="transaction_ids"? <Button >{value}</Button>
                    :timestampKeys.includes(item)?
                       Date_time(value)
                    :value}
            </Col>
        </Row>
    )

};
export default StringField;