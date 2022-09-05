
import React,{useEffect, useState} from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { infoIcon, trxIcon } from '../../../img/svg';
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

const ObjectField = (props:any) => {
    const {number,item,value,label_for}=props;
    console.log('object',item,value)
    console.log('object-type',typeof(item))
    const [witnessBtn,setWitnessBtn]=useState(false)
    console.log('witness',witnessBtn)
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
    const witness_view=(value:any,item:string)=>{
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
                                <Link to={`/trx/${val}`}>
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
                                <Link to={`/trx/${val}`}>
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
                {item==='voting_manabar' || item==='downvote_manabar' ?<span>{_t(`${label_for}.${item.object_name}`)}</span>:_t(`${label_for}.${item}`)}:</span> 
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
                item==='witness_votes'?
                <>
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>setWitnessBtn(!witnessBtn)}>{value.length}</Button>
                </>
                :
                  item==='transaction_ids'?
                  <>
                  <Button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>setWitnessBtn(!witnessBtn)}>{value.length}</Button>
                  </>
                :value.length}
                
            </Col> 
        </Row>
        { item==='witness_votes' && witnessBtn ?witness_view(value,item):<></>}
        { item==='transaction_ids' && witnessBtn ?witness_view(value,item):<></>}
        </>
        
    )
};
export default ObjectField;