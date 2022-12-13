
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../common';
import { withPersistentScroll } from '../../../components/with-persistent-scroll';
import { _t } from '../../../i18n';
import { Accordion } from 'react-bootstrap';
import Api_accordion_body from '../Api_accordion_body';
import { api_item_types } from '../API_Documentation_types';

const DatabaseAPIpart = (props: any) => {
    const {databaseAPIs}=props
    const currTheme = useSelector((state: any) => state.global.theme)
    const urlCheck=databaseAPIs.some((item:any) => item.hasOwnProperty('url'))
    return (
        <>
        {databaseAPIs.length!==0 && urlCheck && <div className='api-blocks'>
        <div className=''>
                <h1>{_t('api_database.title')}</h1>
                <p>{_t('api_database.description')}</p>
            </div>
            <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} alwaysOpen={true}>
                {databaseAPIs.map((item:api_item_types,i:number)=>{
                     return(
                       <>
                       {item.url &&  <Accordion.Item key={i+item.method} eventKey={`${i}`} >
                        <Accordion.Header>
                            <span>{item.method}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Api_accordion_body 
                                description={item.description}
                                url={item.url}
                                end_point={item.end_point}
                                response={item.response}
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
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(DatabaseAPIpart));