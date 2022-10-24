import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meta from '../../components/meta';
import Theme from '../../components/theme';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { Col, Container,Row,Card, Button, Form, Table } from 'react-bootstrap';
import './HomePage.scss';
import { ConfigItems } from '../../../../config';
import HeadBlock,{ Block } from '../../components/headBlock/headBlock';
import HomeBlocks from '../../components/home/BlocksComponent';
import HomeTransactions, { HomeTransactionType } from '../../components/home/TransactionsComponent';
import { SingleTransaction } from '../transaction/SingleTransactionPage';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { _t } from '../../i18n';
import { eyeBoldSvg, eyeSvg } from '../../img/svg';
import moment from 'moment';
import Market from '../../components/market/market';

const headBlock = `${ConfigItems.baseUrl}/api/get_dynamic_global_properties`;


interface User{
  map(arg0: (suggestion: any, index: number) => JSX.Element): string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined;
  id:number,
  name:string,
  email:string,
  address:{
    zipcode: string,
  }
}
export interface UserList extends Array<User>{}

const Index = (props: PageProps) => {
  const [metaProps, setMetaProps] = useState({});
  // const [users, setUsers]  = useState<UserList>([])
  // useEffect(() => {
  //   setMetaProps(getMetaProps(props));

  //   axios.get(url).then(response => {

  //     var user_data: UserList = []
  //     response.data.map((row: any, i: any) => {
  //       user_data.push({
  //         id:row.id,
  //         name:row.name,
  //         email:row.email,
  //         address:{
  //           zipcode:row.address.zipcode
  //         }
  //       })
  //     })
  //     console.log(user_data)
  //     setUsers(user_data)
  //   });
  // }, []);
  const [result, setResult] = useState<Block>();
    useEffect(() => {
      console.log(headBlock)
        axios.get(headBlock).then(response => { 
          setResult(response.data)
        })
    }, []);

  const currTheme = useSelector((state:any) => state.global.theme)
  const [blocksApiResult, setBlocksApiResult] = useState<HomeTransactionType>()
  const [accountsApiResult, setAccountsApiResult] = useState<User>()
  const [transationsApiResult, setTransationsApiResult] = useState<SingleTransaction>()
  const [noSearchResult, setNoSearchResult] = useState<Boolean>(false)
  const [clear, setClear] = useState(true)
  const [visible, setVisible] = useState(false)
  const [enteredValue, setEnteredValue] = useState('')
  const fromTs = moment().subtract(2, "days").format("X");
        const toTs = moment().format("X");

  
  const setSearchResultStateHandler = (blockSearch: HomeTransactionType | undefined, AccountSearch: User | undefined, TransactionSearch: SingleTransaction | undefined, noSearch: Boolean) => {
    setBlocksApiResult(blockSearch);
    setAccountsApiResult(AccountSearch);
    setTransationsApiResult(TransactionSearch);
    setNoSearchResult(noSearch);
  }

  const clearSearchResultHandler = () => {
    setClear(true)
  }




  const searchHandler = (value: any) => {

    const numeric = /^\d+$/;
    const AllInputPattern = /^[a-zA-Z0-9.-]*$/;
    if (value) {
      if (numeric.test(value)) {
        const blocks=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=${(value)}`;
        axios.get(blocks).then(res => {
          res.data.ops.length > 0 ? setSearchResultStateHandler(res.data.ops, undefined, undefined, false) : setSearchResultStateHandler(undefined, undefined, undefined, true) 
        });
      } else if (value.length < 16 && AllInputPattern.test(value)) {
        const accounts=`${ConfigItems.baseUrl}/api/lookup_accounts?lower_bound_name=${value}&limit=100`;
        axios.get(accounts).then(res => {
          const responseData = res.data
          let matches = []
          if (value.length > 0 ) {
            matches = responseData.filter((usr:any) => {
              const regex = new RegExp(`${value}`, "gi");
              return usr.match(regex)
            })
          }
          matches.length > 0 ? setSearchResultStateHandler(undefined, matches, undefined, false) : setSearchResultStateHandler(undefined, undefined, undefined, true);
        })
      } else if (value.length > 16) {
        const accounts=`${ConfigItems.baseUrl}/api/get_transaction?trx_id=${value}`;
        axios.get(accounts).then(res => {
          res.data.name === 'RPCError' ? setSearchResultStateHandler(undefined, undefined, undefined, true) : setSearchResultStateHandler(undefined, undefined, res.data, false);

        })
      } else {
        setSearchResultStateHandler(undefined, undefined, undefined, true);
      }
    } else {
      setSearchResultStateHandler(undefined, undefined, undefined, true);
    }
  }
   
  
  // const displayUsers = () => {
   
  //     return users.map((user, index)=>{
  //       return (
  //       <div className='card-row' key={user.id}>
  //         <Row >
  //         <Col md={1} xs={1}>
  //             {user.id}
  //           </Col>
  //           <Col md={3} xs={3}>
  //             {user.name}
  //           </Col>
  //           <Col md={4} xs={4}>
  //             {user.email}
  //           </Col>
  //           <Col md={4} xs={4}>
  //             {user.address.zipcode}
  //           </Col>
  //         </Row>
          
  //       </div>
  //       )
  //     })
  // }

  useEffect(() => {
    if (!blocksApiResult &&  !accountsApiResult && !transationsApiResult) {
      setClear(false)
      setNoSearchResult(true)
    }
  }, [blocksApiResult, accountsApiResult, transationsApiResult])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchHandler(enteredValue)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [enteredValue])


  return <>
    <Meta {...metaProps} />
    <Theme global={props.global}/>
    <div className='home py-4'>
    <Container>
        <Row>
          <Col md={6}>
          <div style={{ verticalAlign: 'center'}}>
          <Form  className="m-0 search-form">
            <Form.Group className=' col-12 p-0'>
              <Form.Control className="rounded" onChange={(e) => setEnteredValue(e.target.value)} type="text" placeholder="Block, Account, Transaction"/>
            </Form.Group>
          </Form> 
          {!noSearchResult &&  
          //   <div className=" col-md-12 mt-2 mb-2">
          //     { !clear && <>
          //       <p className="d-inline-block">No search results found</p>
          //       <Button className="d-inline-block ml-2 btn-sm" onClick={clearSearchResultHandler}>X</Button>
          //     </>}
          // </div>  : 
          <div className={currTheme==='day'? "day-background d-block m-0 col-md-12 search-dropdown":"night-background d-block m-0 col-md-12 search-dropdown"}>

            { blocksApiResult &&
              <div className=" col-md-12 mt-2 mb-2">
                <Link to={`/b/${blocksApiResult[0].block}`}> 
                    {blocksApiResult[0].block} 
                </Link>
                <hr />
              </div>
            }
            { accountsApiResult && accountsApiResult.map((suggestion, index) => {
              return (<><div key={index} className=" col-md-12 mt-2 mb-2">
                <Link to={`/@${suggestion}`}>
                  <img className="search-user" src={`https://images.ecency.com/u/${suggestion}/avatar`} alt={`suggestion`} />
                    {suggestion} 
                </Link>
                
              </div><hr /></>)
            })}
            { transationsApiResult && <div className=" col-md-12 mt-2 mb-2">
                <Link to={`/tx/${transationsApiResult.transaction_id}`}> {transationsApiResult.transaction_id} </Link>
            </div> }
            </div>}

        </div>
          </Col>
          <Col md={6}>
          <div className="market-data-header">
                <span className="title d-flex align-items-center">{_t("market-data.title")}
                    <div className="pointer ml-2" onClick={() => setVisible(!visible)}>
                        {visible ? eyeSvg : eyeBoldSvg}
                    </div>
                </span>
            </div>
          </Col>
          {visible && 
          <>
            <Col md={12} className="chart-col pt-4">
             <Row>
              <Col md={6} sm={12} className="upper-chart"><Market label="HIVE" coin="hive" vsCurrency="usd" fromTs={fromTs} toTs={toTs} formatter="0.000$" theme={currTheme}/></Col>
              <Col md={6} sm={12} ><Market label="HBD" coin="hive_dollar" vsCurrency="usd" fromTs={fromTs} toTs={toTs} formatter="0.000$" theme={currTheme}/></Col>
             </Row>
            
            </Col>
          </>
          }
        </Row>
        {result && 
        <>
        

          {/* { searchedResult && searchedResult[0].block && <Link to={`/b/${searchedResult[0].block}`}> {searchedResult[0].block} </Link> } */}
          <HeadBlock {...result} /><Row>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Header>{_t("home.latest_block")}</Card.Header>
                  <Card.Body className='block-transaction-body p-0'>
                    <HomeBlocks block_number={result.head_block_number} />
                  </Card.Body>
                  <Card.Footer>
                    <Link  to={'/blocks'}><Button>{_t('button-label.see_more_blocks')}</Button></Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Header>{_t("home.latest_transaction")}</Card.Header>
                  <Card.Body className='block-transaction-body p-0'>
                    <HomeTransactions block_number={result.head_block_number} />
                  </Card.Body>
                  <Card.Footer>
                    <Link to={`/transactions`}><Button>{_t('button-label.see_more_transactions')}</Button></Link>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </>
        }
      </Container>
    </div>
   
    
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(Index));