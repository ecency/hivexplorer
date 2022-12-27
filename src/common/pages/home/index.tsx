import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";
//import { browserHistory } from 'react-router';
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from "../common";
import Meta from "../../components/meta";
import Theme from "../../components/theme";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import { ConfigItems } from "../../../../config";
import HeadBlock, { Block } from "../../components/headBlock/headBlock";
import HomeBlocks from "../../components/home/BlocksComponent";
import HomeTransactions, { HomeTransactionType } from "../../components/home/TransactionsComponent";
import { SingleTransaction } from "../transaction";
import { _t } from "../../i18n";
import Market from "../../components/market/market";
import { setHeadBlockData } from "../../store/HeadBlock";
import { getHeadBlock } from "../../api/urls";
import SpinnerEffect from "../../components/loader/spinner";
import { UserAvatar } from "../../components/user-avatar";

interface User {
  map(
    arg0: (suggestion: any, index: number) => JSX.Element
  ):
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  id: number;
  name: string;
  email: string;
  address: {
    zipcode: string;
  };
}
export interface UserList extends Array<User> {}

const Index = (props: PageProps) => {
  const dispatch = useDispatch();

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
  //     setUsers(user_data)
  //   });
  // }, []);
  const [result, setResult] = useState<Block>();
  const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //     axios.get(headBlock).then(response => {
  //       setResult(response.data)
  //       dispatch(setHeadBlockData(response.data))
  //     })

  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getHeadBlock();
        setResult(response);
        dispatch(setHeadBlockData(response));
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const currTheme = useSelector((state: any) => state.global.theme);
  const [blocksApiResult, setBlocksApiResult] = useState<HomeTransactionType>();
  const [accountsApiResult, setAccountsApiResult] = useState<User>();
  const [transationsApiResult, setTransationsApiResult] = useState<SingleTransaction>();
  const [noSearchResult, setNoSearchResult] = useState<Boolean>(false);
  const [clear, setClear] = useState(true);
  const [visible, setVisible] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const fromTs = moment().subtract(2, "days").format("X");
  const toTs = moment().format("X");

  const setSearchResultStateHandler = (
    blockSearch: HomeTransactionType | undefined,
    AccountSearch: User | undefined,
    TransactionSearch: SingleTransaction | undefined,
    noSearch: Boolean
  ) => {
    setBlocksApiResult(blockSearch);
    setAccountsApiResult(AccountSearch);
    setTransationsApiResult(TransactionSearch);
    setNoSearchResult(noSearch);
  };

  const clearSearchResultHandler = () => {
    setClear(true);
  };

  const searchHandler = (value: any) => {
    const numeric = /^\d+$/;
    const AllInputPattern = /^[a-zA-Z0-9.-]*$/;
    if (value) {
      if (numeric.test(value)) {
        const blocks = `${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=${value}`;
        axios.get(blocks).then((res) => {
          if ( res.data.ops.length > 0 ) {
            res.data.ops.length > 5 ? setSearchResultStateHandler(res.data.ops.slice(0, 5), undefined, undefined, false) : setSearchResultStateHandler(res.data.ops, undefined, undefined, false)
          } else {
            setSearchResultStateHandler(undefined, undefined, undefined, true);
          }
        });
      } else if (value.length < 16 && AllInputPattern.test(value)) {
        const accounts = `${ConfigItems.baseUrl}/api/lookup_accounts?lower_bound_name=${value}&limit=100`;
        axios.get(accounts).then((res) => {
          const responseData = res.data;
          let matches = [];
          if (value.length > 0) {
            matches = responseData.filter((usr: any) => {
              const regex = new RegExp(`${value}`, "gi");
              return usr.match(regex);
            });
          }
          if ( matches.length > 0 ) {
            matches.length > 5 ? setSearchResultStateHandler(undefined, matches.slice(0, 5), undefined, false) : setSearchResultStateHandler(undefined, matches, undefined, false)
          } else {
            setSearchResultStateHandler(undefined, undefined, undefined, true);
          }
        });
      } else if (value.length > 16) {
        const accounts = `${ConfigItems.baseUrl}/api/get_transaction?trx_id=${value}`;
        axios.get(accounts).then((res) => {
          res.data.name === "RPCError"
            ? setSearchResultStateHandler(undefined, undefined, undefined, true)
            : setSearchResultStateHandler(undefined, undefined, res.data, false);
        });
      } else {
        setSearchResultStateHandler(undefined, undefined, undefined, true);
      }
    } else {
      setBlocksApiResult(undefined);
      setSearchResultStateHandler(undefined, undefined, undefined, true);
    }
  };

  useEffect(() => {
    if (!blocksApiResult && !accountsApiResult && !transationsApiResult) {
      setClear(false);
      setNoSearchResult(true);
    }
  }, [blocksApiResult, accountsApiResult, transationsApiResult]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchHandler(enteredValue);
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [enteredValue]);

  const redirectToFirstLink = (e: any) => {
    console.log('before submit');
    //e.preventDefault()
    // console.log('before submit');
    // if (e.key === 'Enter') {
    //   const history = useHistory();

    //   console.log("Aslam yes entered");
    //   history.push({
    //     pathname:  `/abc`,
    //  })
    //   if(accountsApiResult) {
    //     history.push({
    //       pathname:  `/@${accountsApiResult[0]}`,
    //    })
    //   }
    //   if(blocksApiResult)  {
    //     history.push({
    //       pathname:  `/b/${blocksApiResult[0].block}`,
    //    })
    //   }
    //   if(transationsApiResult)  {
    //     history.push({
    //       pathname:  `/tx/${transationsApiResult.transaction_id}`,
    //    })
    //   }
    // return <Redirect to='/login'  />
    // if(accountsApiResult) return <Redirect to={`/@${accountsApiResult[0]}`}  />
    // if(blocksApiResult) return <Redirect to={`/b/${blocksApiResult[0].block}`}  />
    // if(transationsApiResult)  return <Redirect to={`/tx/${transationsApiResult.transaction_id}`}  />
    //}
    
  }
  return (
    <>
      <Meta {...metaProps} />
      <Theme global={props.global} />
      <div className="home py-4">
        <Container>
          <Row>
            <Col md={6}>
              <div style={{ verticalAlign: "center" }}>
                <Form /* onSubmit={(e) => e.preventDefault()} */ className="m-0 search-form">
                  <Form.Group className=" col-12 p-0">
                    <Form.Control
                      className="rounded"
                      onChange={(e) => setEnteredValue(e.target.value)}
                      //onKeyPress={(e) => redirectToFirstLink(e)}
                      type="text"
                      placeholder="Block, Account, Transaction"
                    />
                  </Form.Group>
                </Form>
                {!noSearchResult && (
                  <div
                    className={
                      currTheme === "day"
                        ? "day-background d-block m-0 col-md-12 search-dropdown"
                        : "night-background d-block m-0 col-md-12 search-dropdown"
                    }
                  >
                    {blocksApiResult && (
                      <div className=" col-md-12 mt-2 mb-2">
                        <Link to={`/b/${blocksApiResult[0].block}`}>
                          {blocksApiResult[0].block}
                        </Link>
                        <hr />
                      </div>
                    )}
                    {accountsApiResult &&
                      accountsApiResult.map((suggestion, index) => {
                        return (
                          <>
                            <div  style={{background: (index===0 ? '#E6E6E6' : 'none') }}  key={index} className=" col-md-12 mt-2 p-1 rounded-2 mb-2">

                              <Link to={`/@${suggestion}`}>
                                <img
                                  className="search-user"
                                  src={`https://images.ecency.com/u/${suggestion}/avatar`}
                                  alt={`suggestion`}
                                />
                                {suggestion}
                              </Link>
                            </div>
                            <hr />
                          </>
                        );
                      })}
                    {transationsApiResult && (
                      <div className=" col-md-12 mt-2 mb-2">
                        <Link to={`/tx/${transationsApiResult.transaction_id}`}>
                          {" "}
                          {transationsApiResult.transaction_id}{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Col>
            {/* <Col md={6} className="col-market">
          <div className="market-data-header">
                <span className="title d-flex align-items-center">{_t("home.title_market")}
                    <div className="pointer ml-2" onClick={() => setVisible(!visible)}>
                        {visible ? eyeSvg : eyeBoldSvg}
                    </div>
                </span>
            </div>
          </Col> */}

            <>
              {fromTs && toTs && (
                <Col md={12} className="chart-col pt-4">
                  <Row>
                    <Col md={6} sm={12} className="upper-chart">
                      <Market
                        label="HIVE"
                        coin="hive"
                        vsCurrency="usd"
                        fromTs={fromTs}
                        toTs={toTs}
                        formatter="0.000$"
                        theme={currTheme}
                      />
                    </Col>
                    <Col md={6} sm={12}>
                      <Market
                        label="HBD"
                        coin="hive_dollar"
                        vsCurrency="usd"
                        fromTs={fromTs}
                        toTs={toTs}
                        formatter="0.000$"
                        theme={currTheme}
                      />
                    </Col>
                  </Row>
                </Col>
              )}
            </>
          </Row>
          {loading && <SpinnerEffect />}
          {!loading && result && (
            <>
              <HeadBlock {...result} />
              <Row>
                <Col xs={12} md={6}>
                  <Card>
                    <Card.Header>{_t("home.latest_block")}</Card.Header>
                    <Card.Body className="block-transaction-body p-0">
                      <HomeBlocks block_number={result.head_block_number} />
                    </Card.Body>
                    <Card.Footer>
                      <Link to={"/blocks"}>
                        <Button>{_t("button-label.see_more_blocks")}</Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card>
                    <Card.Header>{_t("home.latest_transaction")}</Card.Header>
                    <Card.Body className="block-transaction-body p-0">
                      <HomeTransactions block_number={result.head_block_number} />
                    </Card.Body>
                    <Card.Footer>
                      <Link to={`/transactions`}>
                        <Button>{_t("button-label.see_more_transactions")}</Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </>
  );
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(Index));
