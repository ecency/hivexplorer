import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { infoIcon, showLessIcon, showMoreIcon, trxIcon } from "../../../img/svg";
import "./ObjectField.scss";
import { useSelector } from "react-redux";
import { _t } from "../../../i18n";
import { Link } from "react-router-dom";
import { ConfigItems } from "../../../../../config";
import JsonField from "./JsonField";
import JsonMetadata from "../../EntryContent/JsonMetadata";
import { Date_time_table } from "../../../api/dateTime";
import TransactionOperationTable from "../../../pages/user/UserOpTable";
import DefaultImage from "../../../img/default-avatar.png";
import { LinkAccount } from "../../../pages/fields/common_fields";
import { UserAvatar } from "../../user-avatar";

const timestampKeys = [
  "time",
  "timestamp",
  "last_owner_update",
  "last_account_update",
  "created",
  "last_account_recovery",
  "hbd_seconds_last_update",
  "hbd_last_interest_payment",
  "savings_hbd_seconds_last_update",
  "savings_hbd_last_interest_payment",
  "next_vesting_withdrawal",
  "last_post",
  "last_root_post",
  "last_vote_time",
  "governance_vote_expiration_ts",
  "expiration",
  "next_maintenance_time",
  "last_budget_time",
  "next_daily_maintenance_time"
];
interface opValType {
  id: string;
  voter: string;
  json: string;
  author: string;
  permlink: string;
  comment_author:string;
  comment_permlink:string;
  parent_author:string;
  parent_permlink:string;
  weight: number | string;
}
interface transactionType {
  ref_block_num: number;
  ref_block_prefix: number;
  expiration: string;
  operations: object;
  extension: object;
  signatures: object;
}
interface transactionTypeList extends Array<transactionType> {}
const ObjectField = (props: any) => {
  const { number, item, value, label_for, transactionOperations, changeUser } = props;
  const [expandBtn, setExpandBtn] = useState(false);
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "white";
  const rowBorder =
    currTheme === "day" ? "row-border border-color-day" : "row-border border-color-night";
  const themeBtn = currTheme === "day" ? "showmore-btn btn-light" : "showmore-btn btn-dark";
  let transactionValue: transactionTypeList = [];

  const Date_time = (timeDate: string) => {
    return (
      <>
        <table className="time-date-table">
          <tbody>
            <tr>
              <td>{_t("common.date")}</td>
              <td>{Date_time_table(`${timeDate}`, "YYYY-MM-DD")}</td>
            </tr>
            <tr>
              <td>{_t("common.time")}</td>
              <td>{Date_time_table(`${timeDate}`, `hh:mm:ss`)}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };
  // const expand_operation=(value:any,item:string)=>{
  //     return(

  //     )
  // }
  const expand_view = (value: any, item: string) => {
    return (
      <Row className={`${rowBorder} mt-1`}>
        <Col md={6} xs={12}>
          <ListGroup>
            {value.slice(0, Math.ceil(value.length / 2)).map((val: string, i: number) => {
              return (
                <ListGroup.Item key={i}>
                  {item === "witness_votes" ? (
                    <UserAvatar username={val} size="small"/>
                  ) : (
                    <>
                      <Link to={`/tx/${val}`}>
                        <span>{trxIcon(themeContrastColor)}</span>
                        <span> {val} </span>
                      </Link>
                      <JsonField transactionOperations={transactionOperations[i]} />
                    </>
                  )}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
        <Col md={6} xs={12}>
          <ListGroup>
            {value
              .slice(Math.ceil(value.length / 2), value.length)
              .map((val: string, i: number) => {
                const j = i + Math.ceil(value.length / 2);
                return (
                  <ListGroup.Item key={i}>
                    {item === "witness_votes" ? (
                      <UserAvatar username={val} size="small"/>
                    ) : (
                      <>
                        <Link to={`/tx/${val}`}>
                          <span>{trxIcon(themeContrastColor)}</span>
                          <span> {val} </span>
                        </Link>
                        <JsonField transactionOperations={transactionOperations[j]} />
                      </>
                    )}
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
    );
  };
  return (
    <>
      {item !== "posting" && item !== "owner" && item !== "active" && (
        <Row className={rowBorder} key={number}>
          <Col md={3} xs={12} className="attr-col">
            <span>{infoIcon(themeContrastColor)} </span>
            <span className="pl-2">
              {item === "voting_manabar" || item === "downvote_manabar" ? (
                <span>{_t(`${label_for}.${item}`)}</span>
              ) : (
                _t(`${label_for}.${item}`)
              )}
              :
            </span>
          </Col>
          <Col md={9} xs={12}>
            {item === "voting_manabar" || item === "downvote_manabar" ? (
              <table className="time-date-table">
                <tbody>
                  <tr>
                    <td>current_mana</td>
                    <td>{value.current_mana}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{value.last_update_time}</td>
                  </tr>
                </tbody>
              </table>
            ) : item === "transactions" ? (
              <>{transactionValue.push(...value)}</>
            ) : item === "witness_votes" || item === "transaction_ids" ? (
              <>
                <Button
                  className={themeBtn}
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                    setExpandBtn(!expandBtn)
                  }
                  disabled={value.length === 0 ? true : false}
                >
                  {value.length}{" "}
                  {expandBtn ? (
                    <span>{showLessIcon(themeContrastColor)} </span>
                  ) : (
                    <span>{showMoreIcon(themeContrastColor)}</span>
                  )}
                </Button>
              </>
            ) : item === "operations" ? (
              <>
                {value.map((val: any, i: number) => {
                  const type: string = val[0];
                  const opVal: opValType = val[1];
                  return (
                    <table key={i+type} className="time-date-table">
                      <tbody>
                        <tr>
                          <td>{_t("trans_table.type")}</td>
                          <td>{type}</td>
                        </tr>
                        {Object.keys(opVal).map((val:any,i:number)=>{
                          return(
                          <>
                          {typeof(opVal[val]) !== 'object' && opVal[val]!=="" ?
                          <tr key={i+val+type}>
                            <td>{_t(`trans_table.${val}`)}</td>
                            <td>
                              {LinkAccount.includes(val)?
                                <UserAvatar username={opVal[val]} size="small"/>
                                : 
                                val==='permlink' ? <Link to={`/@${opVal.author}/${opVal.permlink}`}>{opVal.permlink}</Link>
                                :
                                val==='comment_permlink' ? <Link to={`/@${opVal.comment_author}/${opVal.comment_permlink}`}>{opVal.comment_permlink}</Link>
                                :
                                val==='parent_permlink' ? <Link to={`/@${opVal.parent_author}/${opVal.parent_permlink}`}>{opVal.parent_permlink}</Link>
                                :
                                opVal[val]
                              }</td>
                          </tr>
                          :
                          typeof(opVal[val]) === 'object' && opVal[val].length!==0 ?
                          val==="required_auths" || val==="required_posting_auths" ?
                          <tr  key={i+val+type}>
                            <td>{_t(`trans_table.${val}`)}</td>
                            <td>
                              <UserAvatar username={opVal[val][0]} size="small"/>
                            </td>
                          </tr>
                          :
                          val==="props" ? 
                          <tr key={i+val+type}>
                          <td>{_t(`trans_table.${val}`)}</td>
                          <td>
                              <table>
                                <tbody>
                                {Object.keys(opVal[val]).map((item:any,j:number)=>{
                                  return(
                                    <tr key={j+item}>
                                      <td>{_t(`trans_table.${opVal[val][item][0]}`)}</td>
                                      <td>{opVal[val][item][1]}</td>
                                    </tr>
                                    )
                                  })}
                                </tbody>
                              </table>
                          </td>
                        </tr>
                          :
                          <tr key={i+val+type}>
                            <td>{_t(`trans_table.${val}`)}</td>
                            <td>
                                <table>
                                  <tbody>
                                  {Object.keys(opVal[val]).map((item:any,j:number)=>{
                                    return(
                                      <tr key={j+item}>
                                        <td>{_t(`trans_table.${item}`)}</td>
                                        <td>{opVal[val][item]}</td>
                                      </tr>
                                      )
                                    })}
                                  </tbody>
                                </table>
                            </td>
                          </tr>:<></>}
                          </>
                          )
                        })}
                      </tbody>
                    </table>
                  );
                })}
              </>
            ) : item === "init_hbd_supply" ||
              item === "current_hbd_supply" ||
              item === "virtual_supply" ? (
              <>{value.amount}</>
            ) : item === "json_metadata" && label_for === "entry" ? (
              <>
                <JsonMetadata data={value} />
              </>
            ) : item === "signatures" ? (
              <>{value[0]}</>
            ) : (
              <>{value.length}</>
            )}
          </Col>
        </Row>
      )}
      {item === "witness_votes" && expandBtn ? expand_view(value, item) : <></>}
      {item === "transaction_ids" && expandBtn ? expand_view(value, item) : <></>}
      {/* {item==='operations' && expandBtn ?expand_operation(value,item):<></>} */}
    </>
  );
};
export default ObjectField;
