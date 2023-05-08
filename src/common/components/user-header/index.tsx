import { RCAccount } from "@hiveio/dhive/lib/chain/rc";
import React, { useEffect, useState } from "react";
import { Card, Col, Modal, ProgressBar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import DefaultImage from "../../img/default-avatar.png";
import { CreatedDate } from "../../api/dateTime";
import { _t } from "../../i18n";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  gitHubIcon,
  websiteIcon,
  youtubeIcon
} from "../../img/svg";
import RcProgressCircle from "../rc-progress-circle";
import { findRcAccounts } from "../../api/hive";
import { rcFormatter } from "../../util/formatted-number";
import { getRcOperationStats } from "../../api/urls";

interface RCState {
  rcAccount: null | RCAccount;
}
const UserHeader = (props: any) => {
  const { id, name, created, postCount, metaData, votingPower, downVotingPower, resourceCredits } =
    props;
  const [rcAccount, setRCAccount] = useState<RCState>();
  const [showModal,setShowModal]=useState(false)
  const [showRcInfo, setShowRcInfo] = useState(false);
  const metaProfile = metaData.profile;
  const [delegated, setDelegated] = useState();
  const [resourceCredit, setResourceCredit] = useState<any>();
  const currTheme = useSelector((state: any) => state.global.theme);
  const [commentAmount, setCommentAmount] = useState(0);
  const [voteAmount, setVoteAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [customJsonAmount, setCustomJsonAmount] = useState(0);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "white";
  console.log(resourceCredits)
  // Created Date

  const createdDate = CreatedDate(created);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const radius = 70;
  const dasharray = 440;
  const unUsedOffset = (resourceCredits / 100) * dasharray;
  const usedOffset = ((100 - resourceCredits) / 100) * dasharray;
  
  useEffect(() => {
  findRcAccounts(name)
  .then((r) => {
    const outGoing = r.map((a: any) => a.delegated_rc);
    const delegated = outGoing[0];
    const formatOutGoing: any = rcFormatter(delegated);
    setDelegated(formatOutGoing);
    const availableResourceCredit: any = r.map((a: any) => Number(a.rc_manabar.current_mana));
    const inComing: any = r.map((a: any) => Number(a.received_delegated_rc));
    const formatIncoming = rcFormatter(inComing);
    const totalRc = Number(availableResourceCredit) + Number(inComing);
    setResourceCredit(totalRc);

    const rcOperationsCost = async () => {
      const rcStats: any = await getRcOperationStats();
      const operationCosts = rcStats.rc_stats.ops;
      const commentCost = operationCosts.comment_operation.avg_cost;
      const transferCost = operationCosts.transfer_operation.avg_cost;
      const voteCost = operationCosts.vote_operation.avg_cost;
      const customJsonOperationsCosts = operationCosts.custom_json_operation.avg_cost;

      const commentCount: number = Math.ceil(Number(availableResourceCredit) / commentCost);
      const votetCount: number = Math.ceil(Number(availableResourceCredit) / voteCost);
      const transferCount: number = Math.ceil(Number(availableResourceCredit) / transferCost);
      const customJsonCount: number = Math.ceil(
        Number(availableResourceCredit) / customJsonOperationsCosts
      );
      setCommentAmount(commentCount);
      setVoteAmount(votetCount);
      setTransferAmount(transferCount);
      setCustomJsonAmount(customJsonCount);
    };
    rcOperationsCost();
  })
  .catch(console.log);
}, []);
  return (
    <>
      {metaProfile && (
        <Card className="cover-profile-tabs-container">
          <div
            className="cover-profile-container"
            style={{ backgroundImage: `url(${metaProfile.cover_image})` }}
          >
            <Row className="userInfoProfileRow m-0">
              <div className="profile-image-container">
                <img
                  onError={(e: any) => {
                    e.target.src = DefaultImage;
                  }}
                  className="profile-image-user"
                  src={`${metaProfile.profile_image}`}
                  alt=""
                />
              </div>
              <div className="profile-user-info">
                <div className="grey-div">
                  <div>
                    <h3 className="text-light text-capitalize mb-0">
                      {metaProfile.name ? metaProfile.name : name}
                    </h3>
                    <h6 className="text-light text-capitalize">{_t('common.id')}: {id}</h6>
                    {metaProfile.about && (
                      <h6 className="text-light text-capitalize">{_t('common.about')}: {metaProfile.about}</h6>
                    )}
                  </div>
                </div>
              </div>
            </Row>
            <Row className="user-profile-feature-row">
              <Col md={12} className="user-header-info" >
              <div>
                    <h3 className="text-capitalize mh-0">
                      {metaProfile.name ? metaProfile.name : name}
                    </h3>
                    <h6 className="text-capitalize">{_t('common.id')}: {id}</h6>
                    {metaProfile.about && (
                      <h6 className="text-capitalize">{_t('common.about')}: {metaProfile.about}</h6>
                    )}
                  </div>
              </Col>
              <Col lg={2} md={3}>
                <div className="user-links-container">
                  <ul className="user-link-list-ul">
                    {metaProfile.facebook && (
                      <li className="user-link-list">
                        <a
                          href={`https://www.facebook.com/${metaProfile.facebook}`}
                          target={"_blank"}
                        >
                          <span className={currTheme === "day" ? "icon-bg-white" : "icon-bg-dark"}>
                            {facebookIcon(themeContrastColor)}
                          </span>
                          <span className="link-text">{_t('common.facebook')}</span>
                        </a>
                      </li>
                    )}
                    {metaProfile.twitter && (
                      <li className="user-link-list">
                        <a
                          href={`https://www.twitter.com/${metaProfile.twitter}`}
                          target={"_blank"}
                        >
                          <span className={currTheme === "day" ? "icon-bg-white" : "icon-bg-dark"}>
                            {twitterIcon(themeContrastColor)}
                          </span>
                          <span className="link-text">{_t('common.twitter')}</span>
                        </a>
                      </li>
                    )}
                    {metaProfile.instagram && (
                      <li className="user-link-list">
                        <a
                          href={`https://www.instagram.com/${metaProfile.instagram}`}
                          target={"_blank"}
                        >
                          <span className={currTheme === "day" ? "icon-bg-white" : "icon-bg-dark"}>
                            {instagramIcon(themeContrastColor)}
                          </span>
                          <span className="link-text">{_t('common.instagram')}</span>
                        </a>
                      </li>
                    )}
                    {metaProfile.youtube && (
                      <li className="user-link-list">
                        <a
                          href={`https://www.facebook.com/${metaProfile.youtube}`}
                          target={"_blank"}
                        >
                          <span className={currTheme === "day" ? "icon-bg-white" : "icon-bg-dark"}>
                            {youtubeIcon(themeContrastColor)}
                          </span>
                          <span className="link-text">{_t('common.youtube')}</span>
                        </a>
                      </li>
                    )}
                    {metaProfile.github && (
                      <li className="user-link-list">
                        <a href={`https://github.com/${metaProfile.github}`} target={"_blank"}>
                          <span className={currTheme === "day" ? "icon-bg-white" : "icon-bg-dark"}>
                            {gitHubIcon(themeContrastColor)}
                          </span>
                          <span className="link-text">{_t('common.github')}</span>
                        </a>
                      </li>
                    )}
                    {metaProfile.website && (
                      <li className="user-link-list">
                        <a href={`${metaProfile.website}`} target={"_blank"}>
                          <span className={currTheme === "day" ? "icon-bg-white" : "icon-bg-dark"}>
                            {websiteIcon(themeContrastColor)}
                          </span>
                          <span className="link-text">{_t('common.website')}</span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </Col>
              <Col lg={10} md={9}>
                <div className="user-progress-container">
                  <Row>
                    <Col sm={3} xs={5}>
                      <p>{_t("user-info.created")}:</p>
                    </Col>
                    <Col sm={9} xs={7}>
                      <p>{createdDate}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={3} xs={5}>
                      <p>{_t("user-info.post_count")}:</p>
                    </Col>
                    <Col sm={9} xs={7}>
                      <p>{postCount}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <p className="pt-1">{_t("user-info.vote_power")}</p>
                    </Col>
                    <Col md={9}>
                      <ProgressBar striped={true} now={votingPower} label={`${votingPower}%`} />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <p className="pt-1">{_t("user-info.down_vote_power")}</p>
                    </Col>
                    <Col md={9}>
                      <ProgressBar
                        striped={true}
                        variant="warning"
                        now={downVotingPower}
                        label={`${downVotingPower}%`}
                      />
                    </Col>
                  </Row>
                  <Row onClick={handleModalShow}>
                    <Col md={3}>
                      <p className="pt-1 text-action" >{_t("user-info.resource_credits")}</p>
                    </Col>
                    <Col md={9}>
                      <ProgressBar
                        striped={true}
                        variant="success"
                        now={resourceCredits}
                        label={`${resourceCredits}%`}
                      />
                    </Col>
                  </Row>
                  {/* {openModal && ( */}
                  <Modal
        size="lg"
        animation={false}
        show={showModal}
        centered={true}
        onHide={handleModalClose}
        keyboard={false}
        className="purchase-qr-dialog"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>
            <div className="rc-header">
              <span>{_t("user-info.resource_credits")}</span>
          
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rc-infocontainer">
            <div className="percent">
              <div className="circle">
                <div className="outer-circle progress">
                  <div className="inner-circle">
                    <span>{resourceCredits}</span>
                  </div>
                </div>
                <RcProgressCircle
                  radius={radius}
                  usedOffset={usedOffset}
                  dasharray={dasharray}
                  unUsedOffset={unUsedOffset}
                />
              </div>

              <div className="percentage-info">
                <div className="unused">
                  <div className="unused-box" />
                  <span>{`${_t("rc_api.rc-available")}: ${rcFormatter(
                    (resourceCredits / 100) * resourceCredit
                  )}`}</span>
                </div>
                <div className="used">
                  <div className="used-box" />
                  <span>
                    {`${_t("rc_api.rc-used")}: ${rcFormatter(
                      ((100 - resourceCredits) / 100) * resourceCredit
                    )}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="rc-details">
        
              <div className="extra-details">
                <p>{_t("rc_api.extra-details-heading")}</p>
                <div className="extras">
                  <ul>
                    <li>{`${_t("rc_api.comments-posts")}: ${commentAmount}`}</li>
                    <li>{`${_t("rc_api.votes")}: ${voteAmount}`}</li>
                    <li>{`${_t("rc_api.transfers")}: ${transferAmount}`}</li>
                    <li>{`${_t("rc_api.reblogs-follows")}: ${customJsonAmount}`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

      
        </Modal.Body>
      </Modal>
                {/* )} */}
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      )}
    </>
  );
};
export default UserHeader;

function githubIcon(themeContrastColor: string): React.ReactNode {
  throw new Error("Function not implemented.");
}
