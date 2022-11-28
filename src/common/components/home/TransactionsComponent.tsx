import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { withPersistentScroll } from '../with-persistent-scroll';
import { Col, Row } from 'react-bootstrap';
import { pageMapDispatchToProps, pageMapStateToProps} from '../../pages/common';
import { _t } from '../../i18n';
import { Link } from 'react-router-dom';
import { getTransactions } from '../../api/urls';
import { Date_time_table } from '../../api/dateTime';
import SpinnerEffect from '../loader/spinner';


export interface op_type {
    type: string
    value:{
      voter:string,
      author:string,
      from:string,
      to:string,
      creator:string,
      required_auths:string[],
      required_posting_auths:string[]
    }
}

export interface HomeTransactionType {
    map(arg0: (suggestion: any, index: number) => JSX.Element): string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined;
    trx_id: string
    block: number
    trx_in_block: number
    op_in_trx: number
    virtual_op: number
    timestamp: string
    op:op_type
    
}


export interface HomeTransactionList extends Array<HomeTransactionType>{}
const HomeTransactions = (props:any) => {
  const [loading, setLoading] = useState(true);
    const [homeTransactions, setHomeTransactions] = useState<HomeTransactionList>([]);
    const HeadBlock = useSelector((state:any) => state.headBlock.head_block_number)
    console.log("headBlck",HeadBlock)

    const userType = [
      "voter",
      "author",
      "delegator",
      "delegatee",
      "from",
      "to",
      "creator",
      "seller",
      "owner",
      "curator"
    ]
      useEffect(()=>{
          const fetchData = async () =>{
            setLoading(true);
          try {
            const response= await getTransactions(props.block_number)
            setHomeTransactions(response.ops)
          } catch (error:any) {
            console.error(error.message);
          }
          setLoading(false);
        }
        fetchData();
      },[])
    
    return (
       <>
       {loading && <SpinnerEffect />}
        {!loading && homeTransactions && homeTransactions.slice(0,10).map((trans,index)=>{
          const transOpVal=trans.op.value
          const req_auths:string[]=trans.op.value.required_auths
          const posting_auths:string[]=trans.op.value.required_posting_auths
            const deviceDate=new Date()
            return(
               <Row className='m-0 block-row row-border' key={index}>
                 <Col md={12} xs={12}>
                    <Row>
                        <Col md={12}>{_t('common.id')}: <Link to={`/tx/${trans.trx_id}`}>{trans.trx_id}</Link> </Col>
                    </Row>
                 </Col>
                 <Col md={12} xs={12}>
                    <Row>
                        <Col md={7} xs={12}>{_t('common.type')}: {trans.op.type}</Col>
                        <Col md={5} xs={12}>{_t('common.trx_in_block')}: {trans.trx_in_block}</Col>
                    </Row>
                 </Col>
                 <Col md={12} xs={12}>
                    <Row>
                        <Col md={7}>{_t('common.date')}: {Date_time_table(trans.timestamp,'YYYY-MM-DD')}</Col>
                        <Col md={5} >{_t('common.time')}: {Date_time_table(trans.timestamp,'hh:mm:ss')}</Col>
                    </Row>
                 </Col>
                 <Col md={12} xs={12}>
                    <Row>
                        {req_auths && req_auths.length !==0 &&
                        <Col md={12}>{_t('trans_table.req_auth')}: 
                            {req_auths.map((user:string,i:number)=>{
                               i = i + Math.floor(Math.random() * 3000)+2000;
                               console.log("i",i)
                              return(
                                <>
                                <span className={`${i}`} id={`${i}`} key={i}>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${user}/avatar`} alt="" />
                                <Link to={`@${user}`}>{user}</Link>
                                </span>
                                </>
                              )
                            })}
                        </Col>
                        }
                        {posting_auths && posting_auths.length !==0 &&
                        <Col md={12}>{_t('trans_table.posting_auths')}: 
                            {posting_auths.map((user:string,j:number)=>{
                                j = j + Math.floor(Math.random() * 4000)+3000;
                                console.log("j",j)
                              return(
                                <>
                                <span className={`${j}`} id={`${j}`} key={j+Math.floor(Math.random() * 4000)}>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${user}/avatar`} alt="" />
                                <Link to={`@${user}`}>{user}</Link>
                                </span>
                                </>
                              )
                            })}
                        </Col>
                        }
                        {transOpVal && Object.keys(transOpVal).map((key,k:number)=>{
                           k = k + Math.floor(Math.random() * 50000)+40000;
                           console.log("k",k)
                          return(
                            <>
                            {typeof(key)==="string" && userType.includes(key)?
                            <Col key={k+Math.floor(Math.random() * 5000)+4000} id={`${k}`} md={6} sm={12}>{_t(`trans_table.${key}`)}:
                                <>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${transOpVal[key]}/avatar`} alt="" />
                                <Link to={`@${transOpVal[key]}`}>{transOpVal[key]}</Link>
                                </>
                              </Col>:<></>}
                            </>
                          )
                        })}
                    </Row>
                 </Col>
                
               </Row>
            )
        })}   
       </>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeTransactions));