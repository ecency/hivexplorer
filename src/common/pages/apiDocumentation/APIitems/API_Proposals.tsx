
import React, { useEffect, useState } from 'react';
import { Link, match } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../common';
import { withPersistentScroll } from '../../../components/with-persistent-scroll';

import { _t } from '../../../i18n';
import { Accordion } from 'react-bootstrap';
import { showLessIcon, showMoreIcon } from '../../../img/svg';
import { ConfigItems } from '../../../../../config';
import Api_accordion_body from '../Api_accordion_body';
import { api_item_types } from '../API_Documentation_types';
import { PROPOSALS_ITEMS } from '../json_items/api_proposals_items';


const API_Proposals = (props: any) => {
    const currTheme = useSelector((state: any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const [openBody, setOpenBody] = useState(true)
    return (
        <>
        <div className='api-blocks'>
        <div className=''>
                <h1>{_t('api_proposals.title')}</h1>
                <p>{_t('api_proposals.description')}</p>
            </div>
            <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                {PROPOSALS_ITEMS.map((item:api_item_types,i:number)=>{
                     return(
                        <Accordion.Item key={i+item.name} eventKey={`${i}`} onClick={() => setOpenBody(!openBody)}>
                        <Accordion.Header>
        
                            <span>{item.name}</span>
                            <span>{openBody ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
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
                        </Accordion.Item>
                     )

                })}
              
  
      
            </Accordion>
        </div>

        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(API_Proposals));