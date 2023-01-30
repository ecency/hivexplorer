import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect, useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core";
import { RCAccount } from "@hiveio/dhive/lib/chain/rc";

import { pageMapDispatchToProps, pageMapStateToProps } from "../common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import Theme from "../../components/theme";
import UserHeader from "../../components/user-header";
import { UserTypeList } from "./userTypes";
import StringField from "../../components/fields/blockFields/StringField";
import UserTransactionsTable from "../../components/profile/userTransactionTable";
import ObjectField from "../../components/fields/blockFields/ObjectField";
import { _t } from "../../i18n";
import { DecodeJson } from "../../../server/util";
import { downVotingPower, rcPower, votingPower } from "../../api/hive";
import UserAuthorities from "../../components/profile/userAuthorities";
import { getAccount, getOwnerHistory, getRCAccount } from "../../api/urls";
import BackToTopButton from "../../components/Buttons/BackToTop";
import SpinnerEffect from "../../components/loader/spinner";
import UserHistory from "../../components/profile/userHistory";
import { cardViewSVG, tableViewSVG } from "../../img/svg";
import UserTransactionsCards from "../../components/profile/UserTransactionCards";
import { Link } from "react-router-dom";

interface UserList extends Array<UserTypeList> {}
interface RCState {
  rcAccount: null | RCAccount;
}



const UserPage = (props: any) => {
  const { match } = props;
  console.log('match',match)
  const [userId, setUserId] = useState(match.params.user_id);
  const allTabs = [`/@${userId}`,`/@${userId}/transactions`,`/@${userId}/authorities`,`/@${userId}/history`];

  const [userAccount, setUserAccount] = useState<UserList>();
  const [valueID, setValueID] = useState(allTabs.indexOf(match.url));
  const [loading, setLoading] = useState(true);
  const [rcAccount, setRCAccount] = useState<RCAccount>();
  const handleChange = (event: any, newValue: string) => {
    
    setValueID(allTabs.indexOf(newValue));
    console.log('change',newValue,valueID)
  };
  const [ownerHistory, setOwnerHistory] = useState([]);
 
  const rc_account_url = getRCAccount(userId);
  const owner_history_url = getOwnerHistory(userId);
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "#ffffffde";
  const [cardView, setCardView] = useState(true);
  function TabPanelUser(props: any) {
    const { children, value, index, ...other } = props;
    console.log('value-index',value,valueID,index,allTabs[index])
    return (
      <div
        role="tabpanel"
        hidden={valueID !== index}
        id={`user-tabpanel-${index}`}
        aria-labelledby={`user-tab-${index}`}
        {...other}
      >
        {valueID === index && <>{children}</>}
      </div>
    );
  }
  TabPanelUser.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await getAccount(userId);
  //       setUserAccount(response);
  //     } catch (error: any) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    axios.get(owner_history_url).then((res) => {
      setOwnerHistory(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(rc_account_url).then((res) => {
      setRCAccount(res.data.rc_accounts[0]);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAccount(userId);
        setUserAccount(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]);
  function a11yProps(index: number) {
    return {
      id: `user-tab-${index}`,
      "aria-controls": `user-tabpanel-${index}`,
      
    };
  }
  const changeUser = (val: string) => {
    setUserId(val);
  };
  return (
    <>
      <Theme global={props.global} />
      <Container className="user-container">
        {loading && <SpinnerEffect />}
        {!loading &&
          userAccount &&
          rcAccount &&
          userAccount.map((user, i) => {
            const VPower = votingPower(user);
            const DVPower = downVotingPower(user);
            const RCAPower = rcPower(rcAccount);

            let Json_Meta;

            user.posting_json_metadata === ""
              ? user.json_metadata === ""
                ? (Json_Meta = JSON.parse(
                    '{"profile":{"name":"","about":"","website":"","cover_image":"","profile_image":"","dtube_pub":"","witness_description":""}}'
                  ))
                : (Json_Meta = DecodeJson(user.json_metadata))
              : (Json_Meta = DecodeJson(user.posting_json_metadata));

            return (
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
                <Card className="user-card">
                  <Card.Header className="p-0">
                    <Tabs className="user-tabs" value={valueID} onChange={handleChange} aria-label="simple tabs example">
                      <Tab 
                      label={_t("common.info")}  
                      value={`/@${userId}`}
                      component={Link}
                    to={allTabs[0]}
                    disabled={valueID===0?true:false} 
                      {...a11yProps(0)} />
                      <Tab 
                      label={_t("common.transaction")}
                      value={`/@${userId}/transactions`}
                      component={Link}
                      to={allTabs[1]}
                      disabled={valueID===1?true:false}  
                       {...a11yProps(1)} />
                      <Tab 
                      label={_t("common.authorities")}
                      value={`/@${userId}/authorities`}
                      component={Link}
                      to={allTabs[2]}
                      disabled={valueID===2?true:false}  
                      {...a11yProps(2)} />
                      {ownerHistory && ownerHistory.length > 0 && (
                        <Tab label={_t("common.owner_history")} {...a11yProps(3)} />
                      )}
                    </Tabs>
                  </Card.Header>
                  <Card.Body className="py-0 user-info-card-body">
                    <TabPanelUser value={valueID} index={0}>
                      {Object.keys(user).map((k, index) => {
                        return typeof user[k] !== "object" && typeof user[k] !== "boolean" ? (
                          <StringField
                            changeUser={changeUser}
                            key={index}
                            item={k}
                            number={index}
                            value={user[k]}
                            label_for="user-info"
                          />
                        ) : typeof user[k] === "boolean" ? (
                          <StringField
                            key={index}
                            item={k}
                            number={index}
                            value={JSON.stringify(user[k])}
                            label_for="user-info"
                          />
                        ) : typeof user[k] === "object" ? (
                          <ObjectField
                            changeUser={changeUser}
                            key={index}
                            item={k}
                            number={index}
                            value={user[k]}
                            label_for="user-info"
                          />
                        ) : (
                          <></>
                        );
                      })}
                    </TabPanelUser>
                    <TabPanelUser value={valueID} index={1}>
                    <div className="text-center mt-2">
                      <button className="switch-view-btn" style={currTheme==="day"? {backgroundColor: '#bbbb'}:{backgroundColor: '#374852'}} onClick={()=>setCardView(true)} >{cardViewSVG(themeContrastColor)}</button>
                      <button className="switch-view-btn"  style={currTheme==="day"? {backgroundColor: '#bbbb'}:{backgroundColor: '#374852'}} onClick={()=>setCardView(false)} >{tableViewSVG(themeContrastColor)}</button>
                    </div>
                    <>{cardView? <UserTransactionsCards user={`${userId}`} /> :<UserTransactionsTable user={`${userId}`} />}</>
                      {/* {<UserTransactionsTable user={`${userId}`} />} */}
                    </TabPanelUser>
                    <TabPanelUser value={valueID} index={2}>
                      {
                        <UserAuthorities
                          changeUser={changeUser}
                          memo_key={user.memo_key}
                          owner={user.owner}
                          posting={user.posting}
                          active={user.active}
                        />
                      }
                    </TabPanelUser>
                    <TabPanelUser value={valueID} index={3}>
                      {<UserHistory changeUser={changeUser} ownerHistory={ownerHistory} />}
                    </TabPanelUser>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </Container>
      <BackToTopButton />
    </>
  );
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(UserPage));
