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
    const home_transactions_url=getTransactions(HeadBlock);
      useEffect(()=>{
          const fetchData = async () =>{
            setLoading(true);
          try {
            console.log("Res",home_transactions_url)
            const {data: response} = await axios.get(home_transactions_url);
            const blocks_response=response.blocks
            console.log("Res",response.ops)
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
          const req_auths:string[]=trans.op.value.required_auths
          const posting_auths:string[]=trans.op.value.required_posting_auths
          const voter:string=trans.op.value.voter
          const author:string=trans.op.value.author
          const from:string=trans.op.value.from
          const to:string=trans.op.value.to
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
                              return(
                                <>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${user}/avatar`} key={i} alt="" />
                                <Link to={`@${user}`}>{user}</Link>
                                </>
                              )
                            })}
                        </Col>
                        }
                        {posting_auths && posting_auths.length !==0 &&
                        <Col md={12}>{_t('trans_table.posting_auths')}: 
                            {posting_auths.map((user:string,i:number)=>{
                              return(
                                <>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${user}/avatar`} key={i} alt="" />
                                <Link to={`@${user}`}>{user}</Link>
                                </>
                              )
                            })}
                        </Col>
                        }
                        {voter &&
                         <Col md={6} sm={12}>{_t('trans_table.voter')}:
                                <>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${voter}/avatar`} alt="" />
                                <Link to={`@${voter}`}>{voter}</Link>
                                </>
                        </Col>
                        }
                        {author &&
                         <Col md={6} sm={12}>{_t('trans_table.author')}:
                                <>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${author}/avatar`} alt="" />
                                <Link to={`@${author}`}>{author}</Link>
                                </>
                        </Col>
                        }
                        {from &&
                         <Col md={6} sm={12}>{_t('trans_table.from')}:
                                <>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${from}/avatar`} alt="" />
                                <Link to={`@${from}`}>{from}</Link>
                                </>
                        </Col>
                        }
                        {to &&
                         <Col md={6} sm={12}>{_t('trans_table.to')}:
                                <>
                                <img className='avatar-img' src={`https://images.ecency.com/u/${to}/avatar`} alt="" />
                                <Link to={`@${to}`}>{to}</Link>
                                </>
                        </Col>
                        }
                    </Row>
                 </Col>
                
               </Row>
            )
        })}   
       </>
    )

};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(HomeTransactions));