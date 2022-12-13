
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../common';
import { withPersistentScroll } from '../../../components/with-persistent-scroll';
import { _t } from '../../../i18n';
import { Accordion } from 'react-bootstrap';
import Api_accordion_body from '../Api_accordion_body';
import { api_item_types } from '../API_Documentation_types';

const MarketHistoryAPIpart = (props: any) => {
    const {marketHistoryApis}=props
    const currTheme = useSelector((state: any) => state.global.theme)
    const urlCheck=marketHistoryApis.some((item:any) => item.hasOwnProperty('url'))
    return (
        <>
        {marketHistoryApis.length!==0 && urlCheck && <div className='api-blocks'>
        <div className=''>
                <h1>{_t('api_market_history.title')}</h1>
                <p>{_t('api_market_history.description')}</p>
            </div>
            <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} alwaysOpen={true}>
                {marketHistoryApis.map((item:api_item_types,i:number)=>{
                     return(
                       <>
                       {item.url && <Accordion.Item key={i+item.method} eventKey={`${i}`} >
                        <Accordion.Header>
                            <span>{item.method}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Api_accordion_body 
                                description={item.description}
                                response={item.response}
                                url={item.url}
                                end_point={item.end_point}
                                parameter={item.parameter}
                                />
                            </Accordion.Body>
                        </Accordion.Item>}
                       </>
                     )
                })}
            </Accordion>
        </div>}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(MarketHistoryAPIpart));