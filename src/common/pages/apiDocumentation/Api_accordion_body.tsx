
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';

import { _t } from '../../i18n';

const Api_accordion_body = (props: any) => {
    const {description,parameter,response,url,end_point}=props
    return (
        <>
            <div>
                {description &&  
                <p
                className="body text-p"
                dangerouslySetInnerHTML={{ __html: `${description}`}}
                />}
                {url && 
                    <>
                        <h6>{_t('api_documentation.example_url')}</h6>
                        <p><a href={url} target="_blank"><span>{url}</span></a></p>
                    </>
                }
                {end_point && 
                    <>
                        <h6>{_t('api_documentation.example_end_point')}</h6>
                        <p className='text-p'><span>{end_point}</span></p>
                    </>
                }
                {response && 
                    <>
                        <h6>{_t('api_documentation.example_response')}</h6>
                        <pre className='api-response'>{response}</pre>
                    </>
                }
    
                <h6>{_t('api_documentation.parameters')}</h6>
                {parameter ?
                <>
                   <p
                className="body text-p"
                dangerouslySetInnerHTML={{ __html: `${parameter}`}}
                />
                </>: 
                <p className='text-p'>None</p>}

                    
        </div>

        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(Api_accordion_body));