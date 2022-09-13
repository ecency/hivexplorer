
import React,{useEffect, useState} from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { infoIcon, showLessIcon, showMoreIcon, trxIcon } from '../../../img/svg';
import './ObjectField.scss'
import { useSelector } from 'react-redux';
import { _t } from '../../../i18n';
import { Link } from 'react-router-dom';
import moment from 'moment';
import configureStore from '../../../store/configure';
import { ConfigItems } from '../../../../../config';

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
interface opValType {
    id:string
    voter:string
    json:string
}
const ObjectField = (props:any) => {
    const {number,item,value,label_for}=props;
    const [expandBtn,setExpandBtn]=useState(false)
    const currTheme = useSelector((state:any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const rowBorder = currTheme === 'day' ? 'row-border border-color-day' : 'row-border border-color-night';
    const themeBtn = currTheme === 'day' ? 'showmore-btn btn-light' : 'showmore-btn btn-dark'

    const DateTimeMoment=(timeSet:string,timeFormat:string)=>{
        return moment(timeSet).format(timeFormat)
      }
    const Date_time=(timeDate:string)=>{
        return(
            <>
                <table className='time-date-table'>
                    <tr>
                        <td>{_t('common.date')}</td>
                        <td>{DateTimeMoment(`${timeDate}`,"YYYY-MM-DD")}</td>
                    </tr>
                    <tr>
                        <td>{_t('common.time')}</td>
                        <td>{DateTimeMoment(`${timeDate}`,`hh:mm:ss`)}</td>
                    </tr>
                </table>
            </>
        )
    }
    const expand_operation=(value:any,item:string)=>{
        return(
            value.map((val:any,i:number)=>{
                const type:string=val[0]
                const opVal:opValType=val[1]
               return(
                <Row className={`${rowBorder} mt-1`} key={i}>
                    <Col md={3}>
                        <></>
                    </Col>
                    <Col md={9}>
                    <table className='time-date-table'>
                       <tbody>
                        <tr>
                            <td>{_t('common.type')}</td><td>{type}</td>
                        </tr>
                       {opVal.voter && <tr>
                            <td >{_t('common.voter')}</td><td>{opVal.voter}</td>
                        </tr>}
                        {opVal.id &&  <tr>
                            <td>{_t('common.id')}</td><td>{opVal.id}</td>
                        </tr>}
                        {opVal.json && <tr>
                            <td>{_t('common.json')}</td><td>{opVal.json}</td>
                        </tr>}
                       
                       </tbody>
                       
                    </table>
                    </Col>
                </Row>
               )
            })
        )
    }
    const expand_view=(value:any,item:string)=>{
       return(
        <Row className={`${rowBorder} mt-1`}>
            <Col>
                <ListGroup>
                    {value.slice(0,Math.ceil(value.length/2)).map((val:string,i:number)=>{
                        return(
                            <ListGroup.Item key={i}>
                                {item==='witness_votes'?
                                <a href={`${ConfigItems.baseUrl}/@${val}`}>
                                    <span><img className='avatar-img' src={`https://images.ecency.com/u/${val}/avatar`} alt="" /></span>
                                    <span>{val}</span>
                                </a>
                                :
                                <Link to={`/tx/${val}`}>
                                    <span>{trxIcon(themeContrastColor)}</span><span> {val}</span>
                                </Link>
                                }
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Col>
            <Col>
                <ListGroup>
                    {value.slice(Math.ceil(value.length/2),value.length).map((val:string,i:number)=>{
                        return(
                            <ListGroup.Item key={i}>
                               {item==='witness_votes'?
                                <a href={`${ConfigItems.baseUrl}/@${val}`}>
                                    <span><img className='avatar-img' src={`https://images.ecency.com/u/${val}/avatar`} alt="" /></span>
                                    <span>{val}</span>
                                </a>
                                :
                                <Link to={`/tx/${val}`}>
                                    <span>{trxIcon(themeContrastColor)}</span><span> {val}</span>
                                </Link>
                                }
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Col>
        </Row>
       )
    }
    return (
        <>
        <Row className={rowBorder}  key={number}>
            <Col  md={3} xs={12} className="attr-col"><span>{infoIcon(themeContrastColor)} </span><span className='pl-1'>
                {item==='voting_manabar' || item==='downvote_manabar' ?
                <span>{_t(`${label_for}.${item.object_name}`)}</span>
                :
                _t(`${label_for}.${item}`)}:</span> 
            </Col>
            <Col md={9} xs={12}>
                {item==='voting_manabar' || item ==='downvote_manabar'?
                    <table className='time-date-table'>
                    <tr>
                        <td>current_mana</td>
                        <td>{value.current_mana}</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>{value.last_update_time}</td>
                    </tr>
                </table>
                :
                item==='witness_votes' || item==='transaction_ids' || item==='operations'?
                <>
                    <Button className={themeBtn} 
                            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>setExpandBtn(!expandBtn)}>
                                {value.length} {expandBtn? <span>{showLessIcon(themeContrastColor)} </span> : <span>{showMoreIcon(themeContrastColor)}</span>}
                    </Button>
                </>
                :
                value.length}
                
            </Col> 
        </Row>
        {item==='witness_votes' && expandBtn ?expand_view(value,item):<></>}
        {item==='transaction_ids' && expandBtn ?expand_view(value,item):<></>}
        {item==='operations' && expandBtn ?expand_operation(value,item):<></>}
       
        </>
        
    )
};
export default ObjectField;