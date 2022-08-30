import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meta from '../../components/meta';
import Theme from '../../components/theme';
import { getMetaProps } from '../../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { Col, Container,Row,Card, Button, Form, Table } from 'react-bootstrap';
import './HomePage.scss';
import { ConfigItems } from '../../../../config';
import HeadBlock,{ Block } from '../../components/headBlock/headBlock';
import HomeBlocks,{HomeBlocksType } from '../../components/home/BlocksComponent';
import HomeTransactions, { HomeTransactionType } from '../../components/home/TransactionsComponent';
import ApiFetchedBlocksTable from '../blocks/ApiFetchedBlocksTable';
import ApiFetchedLookupAccounts from '../accounts/ApiFetchedLookupAccounts';
import ApiFetchedTransationsTable from '../transaction/ApiFetchedTransationsTable';
import { SingleTransaction } from '../transaction/SingleTransactionPage';
import { Link } from 'react-router-dom';
import { _t } from '../../i18n';

const headBlock = `${ConfigItems.baseUrl}/api/get_dynamic_global_properties`;


interface User{
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
        axios.get(headBlock).then(response => {
          console.log("here", headBlock);  
          console.log("here", response.data);  
          setResult(response.data)
        })
    }, []);


  const [blocksApiResult, setBlocksApiResult] = useState<HomeTransactionType>()
  const [accountsApiResult, setAccountsApiResult] = useState<User>()
  const [transationsApiResult, setTransationsApiResult] = useState<SingleTransaction>()
  const [noSearchResult, setNoSearchResult] = useState<Boolean>(false)
  
  const setSearchResultStateHandler = (blockSearch: HomeTransactionType | undefined, AccountSearch: User | undefined, TransactionSearch: SingleTransaction | undefined, noSearch: Boolean) => {
    setBlocksApiResult(blockSearch);
    setAccountsApiResult(AccountSearch);
    setTransationsApiResult(TransactionSearch);
    setNoSearchResult(noSearch);
  }

  const clearSearchResultHandler = () => {
    setSearchResultStateHandler(undefined, undefined, undefined, false);
  }
  
  const searchHandler = (e:any) => {
    e.preventDefault();
    const numeric = /^\d+$/;
    const AllInputPattern = /^[a-zA-Z0-9.-]*$/;
    
    const searchedInput = e.target[0].value;

    if (searchedInput) {
      if (numeric.test(searchedInput)) {
        const blocks=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=67096310`;
        axios.get(blocks).then(res => {
          console.log(res.data);
          setSearchResultStateHandler(res.data.ops, undefined, undefined, false);
        });
      } else if (searchedInput.length < 16 && AllInputPattern.test(searchedInput)) {
        const accounts=`${ConfigItems.baseUrl}/api/lookup_accounts?lower_bound_name=u&limit=10`;
        axios.get(accounts).then(res => {
          setSearchResultStateHandler(undefined, res.data, undefined, false);
        })
      } else if (searchedInput.length > 16) {
        const accounts=`${ConfigItems.baseUrl}/api/get_transaction?trx_id=43a56a99f5ba0066819e5923ea9f6ba62fcb30a3`;
        axios.get(accounts).then(res => {
          setSearchResultStateHandler(undefined, undefined, res.data, false);

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

  console.log(accountsApiResult, "account");
  return <>
    <Meta {...metaProps} />
    <Theme global={props.global}/>
    <div className='home py-4'>
      <Container>
        {result && 
        <>
        <Form onSubmit={(e: any) => searchHandler(e)} className="mb-4">
          <Form.Group className='d-flex col-3 col-md-4'>
            <Form.Control type="text" placeholder="Block, Account, Transaction" className="mr-2" />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>          
          { (blocksApiResult || accountsApiResult || transationsApiResult) && <Button className="mb-2 clearBtn" onClick={clearSearchResultHandler}>Clear</Button> }

          { blocksApiResult &&  <ApiFetchedBlocksTable {...blocksApiResult} /> }

          { accountsApiResult &&  <ApiFetchedLookupAccounts {...accountsApiResult} /> }

          { transationsApiResult &&  <ApiFetchedTransationsTable {...transationsApiResult} /> }

          { noSearchResult &&  <Card className="cardCollapsible">
              <Card.Header>
                Error <Button className="clearBtn" onClick={clearSearchResultHandler}>Clear</Button>
              </Card.Header>
              <Card.Body className='p-0'>
                <p className="m-3">No record found against searched input.</p>
              </Card.Body>
            </Card> 
          }
          
          {/* { searchedResult && searchedResult[0].block && <Link to={`/b/${searchedResult[0].block}`}> {searchedResult[0].block} </Link> } */}
          <HeadBlock {...result} /><Row>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Header>{_t("home.latest_block")}</Card.Header>
                  <Card.Body className='block-transaction-body p-0'>
                    <HomeBlocks block_number={result.head_block_number} />
                  </Card.Body>
                  <Card.Footer>
                    <Link  to={'/blocks'}><Button>See More Blocks</Button></Link>
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
                    <Link to={`/transactions`}><Button>See More Transaction</Button></Link>
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