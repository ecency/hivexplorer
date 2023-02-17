import { RCAccount } from "@hiveio/dhive/lib/chain/rc";
import React, { useState } from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

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

interface RCState {
  rcAccount: null | RCAccount;
}
const UserHeader = (props: any) => {
  const { id, name, created, postCount, metaData, votingPower, downVotingPower, resourceCredits } =
    props;
  const [rcAccount, setRCAccount] = useState<RCState>();

  const metaProfile = metaData.profile;
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "white";

  // Created Date

  const createdDate = CreatedDate(created);

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
                    e.target.src = `https://images.ecency.com/u/${name}/avatar`;
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
                  <Row>
                    <Col md={3}>
                      <p className="pt-1">{_t("user-info.resource_credits")}</p>
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
