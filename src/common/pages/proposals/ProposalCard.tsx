import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { pageMapDispatchToProps, pageMapStateToProps } from "../common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import { Card } from "react-bootstrap";
import { _t } from "../../i18n";
import { ClippedLink } from "../../img/svg";
import { CreatedDate } from "../../api/dateTime";
import moment from "moment";
import { UserAvatar } from "../../components/user-avatar";

export interface proposalsType {
  id: Number;
  proposal_id: number;
  creator: string;
  receiver: string;
  start_date: string;
  end_date: string;
  daily_pay: {
    amount: string;
    precision: number;
    nai: string;
  };
  subject: string;
  permlink: string;
  total_votes: number | string;
  status: string;
}
const ProposalCard = (props: any) => {
  const { proposalData } = props;
  const {
    id,
    proposal_id,
    creator,
    receiver,
    subject,
    permlink,
    start_date,
    end_date,
    status,
    total_votes
  }: proposalsType = proposalData;
  const currTheme = useSelector((state: any) => state.global.theme);

  return (
    <>
      {proposalData && (
        <Card
          className={
            currTheme === "day"
              ? "proposal_card proposal_card_day"
              : "proposal_card proposal_card_night"
          }
        >
          <Card.Body>
            {creator && (
              <p className="mb-2">
                <UserAvatar username={creator} size="small"/>
                {receiver && receiver !== creator && (
                  <>
                    {` ${_t("common.for")} `}
                    <Link to={`/@${receiver}`}>{receiver}</Link>
                  </>
                )}
              </p>
            )}
            {/* Proposal Subject */}
            <h5 className="mb-3">
              <Link to={`/proposals/${proposal_id}`}>
                {subject && <span>{subject}</span>}
                {` `}
                {proposal_id && <span>{`#${proposal_id}`}</span>}
              </Link>
            </h5>
            <p>
              {status && (
                <span
                  className={
                    status === "active"
                      ? "status-span status-active"
                      : status === "expired"
                      ? "status-span status-expired"
                      : "status-span status-inactive"
                  }
                >
                  {status === "inactive"
                    ? `${_t("proposals.upcoming")}`
                    : `${_t(`proposals.${status}`)}`}
                </span>
              )}
              <span className="pl-2">
                {start_date && (
                  <>
                    {CreatedDate(start_date)}
                    {` - `}
                    {CreatedDate(end_date)}
                  </>
                )}{" "}
                <span>({moment().diff(end_date, "days").toString().substring(1)} Days Left)</span>
              </span>
            </p>
            <p>
              {permlink && (
                <Link to={`/@${creator}/${permlink}`}>
                  <span>{ClippedLink()}</span>
                  {` `}
                  <span>{permlink}</span>
                </Link>
              )}
            </p>
            <p>
              {total_votes && (
                <span>
                  Votes:{" "}
                  {total_votes.toString().length < 6
                    ? total_votes.toString()
                    : `${total_votes.toString().slice(0, -6)}m`}
                </span>
              )}
            </p>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(ProposalCard));
