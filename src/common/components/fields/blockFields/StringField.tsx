import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./stringField.scss";
import { useSelector } from "react-redux";
import { _t } from "../../../i18n";
import { Link } from "react-router-dom";
import { DateTimeTable } from "./DateTimeTable";
import {UserAvatar} from "../../user-avatar";
import formatNumericValue from "../../../util/format-numeric-value";

const timestampKeys = [
  "time",
  "timestamp",
  "last_owner_update",
  "last_account_update",
  "created",
  "previous_owner_update",
  "last_account_recovery",
  "hbd_seconds_last_update",
  "hbd_last_interest_payment",
  "savings_hbd_seconds_last_update",
  "savings_hbd_last_interest_payment",
  "next_vesting_withdrawal",
  "last_post",
  "last_update",
  "last_payout",
  "cashout_time",
  "last_root_post",
  "last_vote_time",
  "governance_vote_expiration_ts",
  "expiration",
  "next_maintenance_time",
  "last_budget_time",
  "next_daily_maintenance_time"
];

const StringField = (props: any) => {
  const { number, item, value, label_for, changeUser } = props;
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "white";
  const rowBorder =
    currTheme === "day" ? "row-border border-color-day" : "row-border border-color-night";

  const shouldFormatValue = typeof value === "number" || typeof value === "string";
  const formattedValue = shouldFormatValue ? formatNumericValue(value) : value;

  return (
    <Row className={rowBorder} key={number}>
      <Col lg={2} md={3} xs={12} className="attr-col">
        <span className="pl-2"> {_t(`${label_for}.${item}`)}:</span>{" "}
      </Col>
      <Col className="val-col" lg={10} md={9} xs={12}>
        {item === "witness" || item === "current_witness" ? (
          <UserAvatar username={value} size="small"/>
        ) : item === "recovery_account" ? (
          <UserAvatar username={value} size="small"/>
        ) : item === "block_num" ? (
          <Link to={`/b/${value}`}>{formattedValue}</Link>
        ) : item === "transaction_ids" ? (
          <Button>{value}</Button>
        ) : timestampKeys.includes(item) ? (
          DateTimeTable(value)
        ) : (
          formattedValue
        )}
      </Col>
    </Row>
  );
};
export default StringField;
