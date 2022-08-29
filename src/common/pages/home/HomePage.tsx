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
import HomeTransactions, { HomeTransactionList } from '../../components/home/TransactionsComponent';
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
interface UserList extends Array<User>{}

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


  const [blocksApiResult, setBlocksApiResult] = useState<HomeTransactionList>()
  const [accountsApiResult, setAccountsApiResult] = useState()
  const [transationsApiResult, setTransationsApiResult] = useState()
    
  const searchHandler = (e:any) => {
    e.preventDefault();
    const numeric = /^\d+$/;
    const AllInputPattern = /^[a-zA-Z0-9.-]*$/;
    
    const searchedInput = e.target[0].value;

    if (numeric.test(searchedInput)) {
      const blocks=`${ConfigItems.baseUrl}/api/get_ops_in_block?block_num=67096310`;
      axios.get(blocks).then(res => {
        console.log(res.data);
        console.log("Blocks API", res.data.ops);
        setBlocksApiResult(res.data.ops);
      });
    } else if (searchedInput.length < 16 && AllInputPattern.test(searchedInput)) {
      const accounts=`${ConfigItems.baseUrl}/api/lookup_accounts?lower_bound_name=u&limit=10`;
      axios.get(accounts).then(res => {
          console.log("Accounts API", res.data);
          setAccountsApiResult(res.data);
        })
    } else if (searchedInput.length > 16) {
      const accounts=`${ConfigItems.baseUrl}/api/get_transaction?trx_id=43a56a99f5ba0066819e5923ea9f6ba62fcb30a3`;
      axios.get(accounts).then(res => {
          console.log("Transactions API", res.data);
          setTransationsApiResult(res.data);
      })
    } else {
      alert('Invalid input!')
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
        <Form onSubmit={(e: any) => searchHandler(e)}>
          <Form.Group className='d-flex col-3 col-md-4'>
            <Form.Control type="text" placeholder="Search" className="mr-2" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
          {blocksApiResult &&  
            <Table>
              <thead>
                <tr>
                  <th>Block Id</th>
                  <th>Expiration</th>
                  <th>Transaction Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to={`/b/${blocksApiResult[0].block}`}> {blocksApiResult[0].block} </Link></td>
                  <td>{blocksApiResult[0].trx_id}</td>
                  <td>{blocksApiResult[0].timestamp}</td>
                </tr>
              </tbody>
            </Table>
          }

          {accountsApiResult &&  
            <Table >
              <thead>
                <tr>
                  <th>User Names</th>
                </tr>
              </thead>
              {/* <tbody>
                  { accountsApiResult.map((data) => {
                    return (<tr> 
                      <td>{data}</td> 
                    </tr>)
                  })}
              </tbody> */}
            </Table>
          }

          {transationsApiResult &&  
            <Table>
              <thead>
                <tr>
                  <th>Block Id</th>
                  <th>Trx Id</th>
                  <th>Transation Number</th>
                  <th>Expiration</th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td><Link to={`/b/${transationsApiResult.block_num}`}> {transationsApiResult.block_num} </Link></td>
                  <td>{transationsApiResult.transaction_id}</td>
                  <td>{transationsApiResult.transaction_num}</td>
                  <td>{transationsApiResult.expiration}</td>
                </tr>
              </tbody> */}
            </Table>
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