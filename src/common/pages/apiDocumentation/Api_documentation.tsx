import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import React, { useEffect, useState } from 'react';
import Theme from '../../components/theme';
import { connect} from 'react-redux';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { _t } from '../../i18n';
import { Container } from 'react-bootstrap';
import './api_documentation.scss'
import BackToTopButton from '../../components/Buttons/BackToTop';
import { methods as methodsData } from '../../../server/handlers/methods';
import CondenserAPIpart from './APIitems/condenser_apis';
import DatabaseAPIpart from './APIitems/database_apis';
import BridgeAPIpart from './APIitems/bridge_apis';
import BlockAPIpart from './APIitems/block_apis';
import RcAPIpart from './APIitems/rc_apis';
import AccountHistoryAPIpart from './APIitems/account_history_apis';
import { TextField } from '@material-ui/core';
import MarketHistoryAPIpart from './APIitems/market_history_apis';
import SpinnerEffect from '../../components/loader/spinner';
import NetworkBroadcastAPIpart from './APIitems/network_broadcast_apis';
import TransactionStatusAPIpart from './APIitems/transaction_status_apis';


const APIdocumentation = (props: PageProps) => {
  let methods = methodsData
  const [blockAPI, setBlockAPI] = useState([])
  const [condenserAPI, setCondenserAPI] = useState([])
  const [databaseAPI, setDatabaseAPI] = useState([])
  const [bridgeAPI, setBridgeAPI] = useState([])
  const [rcAPI, setRcAPI] = useState([])
  const [accHistoryAPI, setAccHistoryAPI] = useState([])
  const [marketHistoryAPI, setMarketHistoryAPI] = useState([])
  const [networkBroadcastAPI, setNetworkBroadcastAPI] = useState([])
  const [trxStatusAPI, setTrxStatusAPI] = useState([])
  const [loading, setLoading] = useState(true);
  const [filterVal, setFilterVal] = useState(true);


  const [inputText, setInputText] = useState("");
  let blockRecord: any
  let condenserRecord: any
  let DatabaseRecord: any
  let bridgeRecord: any
  let RCRecord: any
  let AccHistoryRecord: any
  let marketHistoryRecord: any
  let networkBroadcastRecord: any
  let TransactionStatusRecord: any


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
      blockRecord = filteredWitnessesData.filter((x: any) => x.api === "block_api" )
      setBlockAPI(blockRecord)
      condenserRecord = filteredWitnessesData.filter((x: any) => x.api === "condenser_api")
      setCondenserAPI(condenserRecord)
      DatabaseRecord = filteredWitnessesData.filter((x: any) => x.api === "database_api")
      setDatabaseAPI(DatabaseRecord)
      RCRecord = filteredWitnessesData.filter((x: any) => x.api === "rc_api")
      setRcAPI(RCRecord)
      bridgeRecord = filteredWitnessesData.filter((x: any) => x.api === "bridge")
      setBridgeAPI(bridgeRecord)
      AccHistoryRecord = filteredWitnessesData.filter((x: any) => x.api === "account_history_api")
      setAccHistoryAPI(AccHistoryRecord)
      marketHistoryRecord = filteredWitnessesData.filter((x: any) => x.api === "market_history_api")
      setMarketHistoryAPI(marketHistoryRecord)
      networkBroadcastRecord = filteredWitnessesData.filter((x: any) => x.api === "network_broadcast_api")
      setNetworkBroadcastAPI(networkBroadcastRecord)
      TransactionStatusRecord = filteredWitnessesData.filter((x: any) => x.api === "transaction_status_api")
      setTrxStatusAPI(TransactionStatusRecord)
      let urlCheck=filteredWitnessesData.some((x:any)=>x.hasOwnProperty('url'))
      setFilterVal(urlCheck)
    }, 1000);
    return () => clearTimeout(timer);
  }, [inputText])

  return <>

    <Theme global={props.global} />
    <Container className="data-table-hive api-page-container py-5">
      <TextField
        id="outlined-basic"
        className="search-field"
        onChange={inputHandler}
        fullWidth={false}
        placeholder={`${_t("heading_label.search_apis")}`}
      />
      <div className="witness-header">
        <h1>{_t('api_documentation.page_title')}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: _t('api_documentation.page_welcome') }}
        />
      </div>
      {loading && <SpinnerEffect />}
      {!loading && filterVal &&
        <>
          <br />
          <BlockAPIpart blockAPIs={...blockAPI} />
          <br />
          <AccountHistoryAPIpart accHistoryApis={...accHistoryAPI} />
          <br />
          <CondenserAPIpart condenserAPIs={...condenserAPI} />
          <br />
          <DatabaseAPIpart databaseAPIs={...databaseAPI} />
          <br />
          <RcAPIpart RcAPIs={...rcAPI} />
          <br />
          <BridgeAPIpart bridgeAPIs={...bridgeAPI} />
          <br />
          <MarketHistoryAPIpart marketHistoryApis={...marketHistoryAPI} />
          <br />
          <NetworkBroadcastAPIpart networkBroadcastAPIs={...networkBroadcastAPI} />
          <br />
          <TransactionStatusAPIpart transactionStatusAPIs={...trxStatusAPI}  />
        </>}
        {!loading && !filterVal && <h3 className='py-2 text-center'>No Result</h3>}
    </Container>
    <BackToTopButton />
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(APIdocumentation));