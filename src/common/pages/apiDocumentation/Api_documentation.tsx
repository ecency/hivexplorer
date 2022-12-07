import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import React, { useEffect, useState } from 'react';
import Meta from '../../components/meta';
import Theme from '../../components/theme';
import { getMetaProps } from '../../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { _t } from '../../i18n';
import { Container } from 'react-bootstrap';
import SwaggerUI from 'swagger-ui-react';
import API_Blocks from './APIitems/API_Blocks';
import './api_documentation.scss'
import API_transactions from './APIitems/API_transactions';
import API_witnesses from './APIitems/API_witnesses';
import BackToTopButton from '../../components/Buttons/BackToTop';
import API_Proposals from './APIitems/API_Proposals';



const APIdocumentation = (props: PageProps) => {
  let dataFetch:any
  var jsonString = '{"some":"json"}';
var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2); 
   


  return <>
   
    <Theme global={props.global}/>
             <Container className="data-table-hive api-page-container py-5">
                <div className="witness-header">
                    <h1>{_t('api_documentation.page_title')}</h1>
                    <div
                      className="body"
                      dangerouslySetInnerHTML={{ __html: _t('api_documentation.page_welcome')}}
                    />
                </div>
              <API_Blocks />
              <br />
              <API_transactions />
              <br />
              <API_witnesses />
              <br />
              <API_Proposals />
             </Container>
             <BackToTopButton />
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(APIdocumentation));