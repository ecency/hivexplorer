
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
import { BLOCKS_ITEMS } from '../json_items/api_blocks_items';

const API_Blocks = (props: any) => {
    const currTheme = useSelector((state: any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const [openBody, setOpenBody] = useState(true)
    return (
        <>
        <div className='api-blocks'>
        <div className=''>
                <h1>{_t('api_blocks.title')}</h1>
                <p>{_t('api_blocks.description')}</p>
            </div>
            <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                {BLOCKS_ITEMS.map((item:api_item_types,i:number)=>{
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
                                parameters={item.parameter}
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
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(API_Blocks));