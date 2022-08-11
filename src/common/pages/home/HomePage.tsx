import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meta from '../../components/meta';
import Theme from '../../components/theme';
import { getMetaProps } from '../../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { Col, Container,Row,Card } from 'react-bootstrap';
import './HomePage.scss';
import { useTranslation } from 'react-i18next';
import { ConfigItems } from '../../../../config';
import HeadBlock,{ Block } from '../../components/headBlock/headBlock';
import HomeBlocks,{HomeBlocksType } from '../../components/home/blocksComponent';

var url1 = 'https://jsonplaceholder.typicode.com/users';
var headBlock = `${ConfigItems.baseUrl}/api/get_dynamic_global_properties`;
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
  const {t}=useTranslation()
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
            setResult(response.data)
        })
    }, []);
   
  
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


  return <>
    <Meta {...metaProps} />
    <Theme global={props.global}/>
    <div className='home pt-5'>
      <Container>
        {result && <HeadBlock {...result} />}
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>{t("home.latest_block")}</Card.Header>
              <Card.Body className='p-0'>
               {result &&  <HomeBlocks block_number={result?.head_block_number} />}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} >
          <Card>
              <Card.Header>{t("home.latest_transaction")}</Card.Header>
              <Card.Body className='p-0'>
              Null
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
   
    
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(Index));