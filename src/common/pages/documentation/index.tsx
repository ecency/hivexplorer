import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Accordion, Container } from 'react-bootstrap';
import { TextField, LinearProgress } from '@material-ui/core';

import Theme from '../../components/theme';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { _t } from '../../i18n';
import BackToTopButton from '../../components/Buttons/BackToTop';
import { methods as methodsData } from '../../../server/handlers/methods';
import Api_accordion_body from '../../components/documentation/api_accordion_body';

interface api_item_types {
  name:string,
  method:string,
  description:string,
  url:string,
  parameter:string,
  response:string
}
const APIdocumentation = (props: PageProps) => {
  let methods = methodsData
  const currTheme = useSelector((state: any) => state.global.theme)
  const [loading, setLoading] = useState(true);
  const [filterVal, setFilterVal] = useState(true);
  const [collection, setCollection] = useState({})
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let filteredWitnessesData = new Array();
  filteredWitnessesData = methods.filter((el: any) => {
    if (el) {
      if (inputText === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return JSON.stringify(el.method).toLowerCase().includes(inputText);
      }
    }
  });
  useEffect(() => {
    setLoading(true);


    const timer = setTimeout(() => {
      setLoading(false);
      let data = ["block_api", "condenser_api", "database_api", "rc_api", "bridge", "account_history_api", "market_history_api", "network_broadcast_api", "transaction_status_api"]
      let data3 = {}
      data.map((api) => {
        data3 = {
          ...data3,
          ...{ [api]: filteredWitnessesData.filter((x: any) => x.api === api) }
        }
        return
      })
      setCollection(data3)
      let urlCheck = filteredWitnessesData.some((x: any) => x.hasOwnProperty('url'))
      setFilterVal(urlCheck)
    }, 1000);
    return () => clearTimeout(timer);
  }, [inputText])


  return <>
    <Theme global={props.global} />
    <Container className="data-table-hive api-page-container py-5">
      <div className="witness-header">
        <h1>{_t('api_documentation.page_title')}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: _t('api_documentation.page_welcome') }}
        />
      </div>
      <TextField
        id="outlined-basic"
        className="search-field"
        onChange={inputHandler}
        fullWidth={false}
        type="search"
        placeholder={`${_t("heading_label.search_apis")}`}
      />
      {loading && <LinearProgress />}
      <>{filterVal && Object.keys(collection).map((api, i: number) => {
        const urlCheck = collection[api].some((item: any) => item.hasOwnProperty('url'))
        return (
          <span key={`${i}-${api}`}>
            {collection[api].length !== 0 && urlCheck && <div className='py-2 api-blocks'>
              <div >
                <h1>{_t(`${api}.title`)}</h1>
                <p>{_t(`${api}.description`)}</p>
              </div>
              <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} alwaysOpen={true}>
                {collection[api].map((item: api_item_types, i: number) => {
                  return (
                    <span key={`${i}-${item.method}`}>
                      {item.url && <Accordion.Item eventKey={`${i}`} >
                        <Accordion.Header>
                          <span>{item.method}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Api_accordion_body
                            description={item.description}
                            response={item.response}
                            url={item.url}
                            parameter={item.parameter}
                          />
                        </Accordion.Body>
                      </Accordion.Item>}
                    </span>
                  )
                })}
              </Accordion>
            </div>
            }
          </span>
        )
      })}
      </>
      {!loading && !filterVal && <h3 className='py-2 text-center'>No Result</h3>}
    </Container>
    <BackToTopButton />
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(APIdocumentation));