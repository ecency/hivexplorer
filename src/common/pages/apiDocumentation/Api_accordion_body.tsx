
import React, { useEffect, useState } from 'react';
import { Link, match } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';

import { _t } from '../../i18n';
import { Accordion } from 'react-bootstrap';
import { showLessIcon, showMoreIcon } from '../../img/svg';
import { ConfigItems } from '../../../../config';


const Api_accordion_body = (props: any) => {
    const {description,parameter,response,url}=props
    return (
        <>
            <div>
                {description &&  
                <p
                className="body"
                dangerouslySetInnerHTML={{ __html: `${description}`}}
                />}
                {url && 
                    <>
                        <h6>{_t('api_documentation.example_url')}</h6>
                        <p><a href={url} target="_blank"><span>{url}</span></a></p>
                    </>
                }
                
                {response && 
                    <>
                        <h6>{_t('api_documentation.example_response')}</h6>
                        <pre className='api-response'>{response}</pre>
                    </>
                }
    
                <h6>{_t('api_documentation.parameters')}</h6>
                { parameter ?
                <>
                   <p
                className="body"
                dangerouslySetInnerHTML={{ __html: `${parameter}`}}
                />
                </>: 
                <p>None</p>}

                    
        </div>

        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(Api_accordion_body));