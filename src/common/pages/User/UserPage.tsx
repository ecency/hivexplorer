
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import Theme from '../../components/theme';
import { Container, Card } from 'react-bootstrap';
import UserHeader from '../../components/user/UserHeader';
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
import { getAccount, getOwnerHistory, getRCAccount } from '../../api/urls';
import BackToTopButton from '../../components/Buttons/BackToTop';
import SpinnerEffect from '../../components/loader/spinner';
import UserHistory from './UserHistory';


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
    const [userAccount,setUserAccount]=useState<UserList>()
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);
    const [rcAccount,setRCAccount]=useState<RCAccount>()
    const handleChange = (event:any, newValue:number) => {
        setValue(newValue);
    };
    const [ownerHistory,setOwnerHistory]=useState([])
    const [userId,setUserId]=useState(match.params.user_id)
    const account_url=getAccount(userId);
    const rc_account_url=getRCAccount(userId);
    const owner_history_url=getOwnerHistory(userId)
    useEffect(()=>{
      console.log('account url',account_url)
        // axios.get(account_url).then(res => {
        //   setUserAccount(res.data)
        // })
        const fetchData = async () =>{
          setLoading(true);
        try {
          const response = await getAccount(userId);
          setUserAccount(response);
        } catch (error:any) {
          console.error(error.message);
        }
        setLoading(false);
      }
      fetchData();

    },[])
    useEffect(()=>{
      console.log(owner_history_url)
      axios.get(owner_history_url).then(res => {
         console.log("history",res)
         setOwnerHistory(res.data)
          })
      },[])
      useEffect(()=>{
        console.log(rc_account_url)
        axios.get(rc_account_url).then(res => {
            setRCAccount(res.data.rc_accounts[0])
            })
        },[])
      useEffect(()=>{
  
        console.log("changeUser",userId)
        const fetchData = async () =>{
          setLoading(true);
        try {
          const response= await getAccount(userId)
          setUserAccount(response);
        } catch (error:any) {
          console.error(error.message);
        }
        setLoading(false);
      }
      fetchData();
        },[userId])
    function a11yProps(index:number) {
        return {
          id: `user-tab-${index}`,
          'aria-controls': `user-tabpanel-${index}`,
        };
    }
    const changeUser=(val:string)=>{
      console.log('clicked',val)
      setUserId(val)
    }
    return (
        <>
            <Theme global={props.global}/>
            <Container className='user-container'>
                {loading && <SpinnerEffect />}
               {!loading && userAccount && rcAccount && userAccount.map((user,i)=>{
                console.log('rc1',rcAccount,rcPower(rcAccount))
                const VPower=votingPower(user)
                const DVPower=downVotingPower(user)
                const RCAPower=rcPower(rcAccount)
             
                let Json_Meta 
  
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
                            {ownerHistory && ownerHistory.length>0 && <Tab label={_t('common.owner_history')} {...a11yProps(3)} />}
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
                                <ObjectField changeUser={changeUser} key={index} item={k} number={index} value={user[k]} label_for='user-info'/>
                                :
                                <></>
                              )})}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                               {
                                <UserTransactionsTable user={`${userId}`}/>
                                }
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                               {
                                  <UserAuthorities changeUser={changeUser} memo_key={user.memo_key} owner={user.owner} posting={user.posting} active={user.active} />
                                }
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                               {
                                 <UserHistory changeUser={changeUser} ownerHistory={ownerHistory} />
                                }
                            </TabPanel>
                        </Card.Body>
                    </Card>
                    
                  </div>
                )
               })}               
            </Container>
            <BackToTopButton />
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(UserPage));