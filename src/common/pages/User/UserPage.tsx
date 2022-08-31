
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { Link } from 'react-router-dom';
import Theme from '../../components/theme';
import { Col, Container, Row, Card } from 'react-bootstrap';
import UserHeader from '../../components/user/UserHeader';
import { kMaxLength } from 'buffer';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
import { UserTypeList } from './UserTypes';
import StringField from '../../components/fields/blockFields/StringField';

interface UserList extends Array<UserTypeList>{}

function TabPanel(props:any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <>
            {children}</>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
const UserPage = (props:any) => {
    
    const {match} = props
   const [userAccount,setUserAccount]=useState<UserList>()
   const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:number) => {
    setValue(newValue);
  };
    const account_url=`${ConfigItems.baseUrl}/api/get_accounts?name[]=${match.params.user_id}`;
      useEffect(()=>{
        console.log(account_url)
        axios.get(account_url).then(res => {
            setUserAccount(res.data)
           
          })
      },[])
      userAccount?.map((k:any,i)=>{
       console.log(typeof(i[k]))

    })
    userAccount && Object.keys(userAccount).map((key,index)=>{
        console.log(typeof(key))
    })
    function a11yProps(index:number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    return (
        <>
            <Theme global={props.global}/>
            <Container className='user-container'>
               {userAccount && userAccount.map((user,i)=>{
                return(
                  <div key={i}>
                    <UserHeader  id={user.id} name={user.name} {...JSON.parse(user.json_metadata)} />
                    <Card className='user-card'>
                        <Card.Header className='p-0'>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                        </Tabs>

                        </Card.Header>
                        <Card.Body className='py-0'>
                        <TabPanel value={value} index={0}>
                            {Object.keys(user).map((k,index)=>{
                                console.log(typeof(user[k]))
                              return(
                               typeof(user[k])!=='object' && typeof(user[k])!=='boolean'? 
                                <StringField key={index} item={k} number={index} value={user[k]} label_for='user-info' />
                                :
                                typeof(user[k])==='boolean'? 
                                <StringField key={index} item={k} number={index} value={JSON.stringify(user[k])} label_for='user-info' />
                                :
                                <></>
                              )})}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                               <h1>Transaction</h1>
                            </TabPanel>
                        </Card.Body>
                    </Card>
                    
                  </div>
                )
               })}               
            </Container>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(UserPage));