
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
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
import './UserPage.scss'
import StringField from '../../components/fields/blockFields/StringField';
import UserTransactionsTable from './userTransactionTable';
import ObjectField from '../../components/fields/blockFields/ObjectField';
import { _t } from '../../i18n';
import { DecodeJson } from '../../../server/util';
import { downVotingPower, findRcAccounts, rcPower, votingPower } from '../../api/hive';
import { RCAccount } from '@hiveio/dhive/lib/chain/rc';
import UserAuthorities from './UserAuthorities';


interface UserList extends Array<UserTypeList>{}
 interface RCState {
  rcAccount: null | RCAccount
 }

function TabPanel(props:any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`user-tabpanel-${index}`}
        aria-labelledby={`user-tab-${index}`}
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
    const [rcUserName,setRcUserName]=useState("")
    const [userAccount,setUserAccount]=useState<UserList>()
    const [value, setValue] = useState(0);
    const [rcAccount,setRCAccount]=useState<RCAccount>()
    const handleChange = (event:any, newValue:number) => {
        setValue(newValue);
    };
    const account_url=`${ConfigItems.baseUrl}/api/get_accounts?name[]=${match.params.user_id}`;
    const rc_account_url=`${ConfigItems.baseUrl}/api/find_rc_accounts?accounts[]=${match.params.user_id}`;
    useEffect(()=>{

    axios.get(account_url).then(res => {
        setUserAccount(res.data)

        })
    },[])
    useEffect(()=>{
  
      console.log(rc_account_url)
      axios.get(rc_account_url).then(res => {
          setRCAccount(res.data.rc_accounts[0])
  
          })
      },[])
    
    function a11yProps(index:number) {
        return {
          id: `user-tab-${index}`,
          'aria-controls': `user-tabpanel-${index}`,
        };
    }
    //    const votingPower = (userAccount:UserList): number => {
    //     // @ts-ignore "Account" is compatible with dhive's "ExtendedAccount"
    //     const calc = userAccount && client.rc.calculateVPMana(userAccount);
    //     const {percentage} = calc;
    
    //     return percentage / 100;
    // };
    // console.log('voting',votingPower)
    return (
        <>
            <Theme global={props.global}/>
            <Container className='user-container'>
               {userAccount && rcAccount && userAccount.map((user,i)=>{
                console.log('rc1',rcAccount,rcPower(rcAccount))
              const VPower=votingPower(user)
              const DVPower=downVotingPower(user)
              const RCAPower=rcPower(rcAccount)
              // const RCPower=rcPower(user)
              // console.log('vp',VPower,DVPower,rcName,rcAccount)
                let Json_Meta 
                // user.json_metadata===""?
                // Json_Meta=DecodeJson(user.json_metadata) : Json_Meta=DecodeJson(user.posting_json_metadata)
                // Json_Meta=JSON.parse(user.posting_json_metadata) : Json_Meta=JSON.parse(user.json_metadata)
                 user.posting_json_metadata===""?
                 user.json_metadata===""?
                Json_Meta=JSON.parse('{"profile":{"name":"","about":"","website":"","cover_image":"","profile_image":"","dtube_pub":"","witness_description":""}}') :
                Json_Meta=DecodeJson(user.json_metadata) : Json_Meta=DecodeJson(user.posting_json_metadata) 
                
                return(
                  <div key={i}>

                    {/* Header Section */}
                     <UserHeader  
                        id={user.id} 
                        name={user.name}
                        created={user.created}
                        postCount={user.post_count}
                        metaData={Json_Meta}
                        votingPower={VPower}
                        downVotingPower={DVPower}
                        resourceCredits={RCAPower}
                         />

                    {/* Tabs view Section */}
                    <Card className='user-card'>
                        <Card.Header className='p-0'>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label={_t('common.info')} {...a11yProps(0)} />
                            <Tab label={_t('common.transaction')} {...a11yProps(1)} />
                            <Tab label={_t('common.authorities')} {...a11yProps(2)} />
                        </Tabs>
                        </Card.Header>
                        <Card.Body className='py-0'>
                            <TabPanel value={value} index={0}>
                            {Object.keys(user).map((k,index)=>{
                              return(
                               typeof(user[k])!=='object' && typeof(user[k])!=='boolean'? 
                                <StringField key={index} item={k} number={index} value={user[k]} label_for='user-info' />
                                :
                                typeof(user[k])==='boolean'? 
                                <StringField key={index} item={k} number={index} value={JSON.stringify(user[k])} label_for='user-info' />
                                :
                                typeof(user[k])==='object'?
                                <ObjectField key={index} item={k} number={index} value={user[k]} label_for='user-info'/>
                                :
                                <></>
                              )})}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                               {
                                <UserTransactionsTable user={`${match.params.user_id}`}/>
                                }
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                               {
                                  <UserAuthorities owner={user.owner} posting={user.posting} active={user.active} />
                                }
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