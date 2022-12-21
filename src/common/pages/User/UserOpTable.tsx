import React, { useEffect } from "react";
import { Link, match } from "react-router-dom";
import { useSelector } from "react-redux";
import { _t } from "../../i18n";
import { AuthorityObject } from "./UserAuthorities";
import { object } from "prop-types";
import { DecodeJson } from "../../../server/util";
import { Card } from "react-bootstrap";
import { LinkAccount, ObjectFieldArray, StringFieldArray } from "../fields/common_fields";

const TransactionOperationTable = (props: any) => {
  const { opTrans } = props;
  const opType = opTrans.type;
  const opVal = opTrans.value;

  const opAuth = opVal.author;
  const opPermlink = opVal.permlink;
  const opCommentAuth = opVal.comment_author;
  const opCommentPermlink = opVal.comment_permlink;
  const opParentAuth = opVal.parent_author;
  const opParentPermlink = opVal.parent_permlink;

  const opPayoutClaim = opVal.payout_must_be_claimed;
  const opJson = opVal.json;
  const opOwner = opVal.owner;
  const opCreator = opVal.creator;

  const opProps = opVal.props;
  const opVestShare = opVal.vesting_shares;

  const opExchange = opVal.exchange_rate;
  const opRewardHive = opVal.reward_hive;

  const opRequiredAuths = opVal.required_auths;
  const opRequiredPostingAuths = opVal.required_posting_auths;

  const opActive = opVal.active;
  const opPosting = opVal.posting;

  const jsonSplit = DecodeJson(opJson);
  const currTheme = useSelector((state: any) => state.global.theme);
  const OpValArray = new Array();
  OpValArray.push(opRewardHive, opVestShare);

  function OpObjectValue(field: any, name: string) {
    return (
      <tr>
        <td>{_t(`trans_table.${name}`)}</td>
        <td>
          <table>
            <tbody>
              <tr>
                <td>{_t(`trans_table.amount`)}</td>
                <td>{field.amount}</td>
              </tr>
              <tr>
                <td>{_t(`trans_table.precision`)}</td>
                <td>{field.precision}</td>
              </tr>
              <tr>
                <td>{_t(`trans_table.nai`)}</td>
                <td>{field.nai}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  }
  function opNestedObject(field: any, name: string) {
    return (
      <tr>
        <td>{_t(`trans_table.${name}`)}</td>
        <td>{typeof field !== "object" ? field : <AuthorityObject {...field} />}</td>
      </tr>
    );
  }
  return (
    <>
      <Card
        className={
          currTheme === "day" ? "trans-card-light trans-card" : "trans-card-dark trans-card"
        }
      >
        <Card.Body>
          <table
            className={currTheme === "day" ? "text-dark trans-table" : "text-white trans-table"}
          >
            <tbody>
              {opType && (
                <tr>
                  <td>{_t(`trans_table.type`)}</td>
                  <td>{opType}</td>
                </tr>
              )}
              {opVal && (
                <tr>
                  <td>{_t(`trans_table.value`)}</td>
                  <td>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        {Object.keys(opVal).map((key, k: number) => {
                          k = k + Math.floor(Math.random() * 10000) + 9000;
                          return (
                            <>
                              {(typeof opVal[key] === "string" || typeof opVal[key] === "number") &&
                                LinkAccount.includes(key) && (
                                  <tr key={k}>
                                    <td>{_t(`trans_table.${key}`)}</td>
                                    <td>
                                      <span>
                                        <img
                                          className="avatar-img"
                                          src={`https://images.ecency.com/u/${opVal[key]}/avatar`}
                                          alt=""
                                        />{" "}
                                        {opVal[key]}
                                      </span>
                                    </td>
                                  </tr>
                                )}
                            </>
                          );
                        })}
                        {Object.keys(opVal).map((key, i: number) => {
                          i = i + Math.floor(Math.random() * 1000);
                          return (
                            <>
                              {(typeof opVal[key] === "string" || typeof opVal[key] === "number") &&
                                StringFieldArray.includes(key) && (
                                  <tr key={i}>
                                    <td>{_t(`trans_table.${key}`)}</td>
                                    <td>{opVal[key]}</td>
                                  </tr>
                                )}
                            </>
                          );
                        })}

                        {opOwner && opNestedObject(opOwner, "owner")}

                        {opActive && opNestedObject(opActive, "active")}

                        {opPosting && opNestedObject(opPosting, "posting")}

                        {opPermlink && (
                          <tr>
                            <td>{_t(`trans_table.permlink`)}</td>
                            <td>
                              <Link to={`/@${opAuth}/${opPermlink}`}>{opPermlink}</Link>
                            </td>
                          </tr>
                        )}

                        {opCommentPermlink && (
                          <tr>
                            <td>{_t(`trans_table.comment_permlink`)}</td>
                            <td>
                              <Link to={`/@${opCommentAuth}/${opCommentPermlink}`}>
                                {opCommentPermlink}
                              </Link>
                            </td>
                          </tr>
                        )}
                        {opParentPermlink && (
                          <tr>
                            <td>{_t(`trans_table.parent_permlink`)}</td>
                            <td>
                              <Link to={`/@${opParentAuth}/${opParentPermlink}`}>
                                {opParentPermlink}
                              </Link>
                            </td>
                          </tr>
                        )}

                        {opRequiredAuths && opRequiredAuths.length !== 0 && (
                          <tr>
                            <td style={{ width: "125px" }}>{_t(`trans_table.required_auths`)}</td>
                            <td>
                              {<Link to={`/@${opRequiredAuths[0]}`}>{opRequiredAuths[0]}</Link>}
                            </td>
                          </tr>
                        )}
                        {opRequiredPostingAuths && opRequiredPostingAuths.length !== 0 && (
                          <tr>
                            <td style={{ width: "175px" }}>
                              {_t(`trans_table.required_posting_auths`)}
                            </td>
                            <td>
                              {
                                <Link to={`/@${opRequiredPostingAuths[0]}`}>
                                  {opRequiredPostingAuths[0]}
                                </Link>
                              }
                            </td>
                          </tr>
                        )}

                        {opJson && (
                          <tr>
                            <td>{_t(`trans_table.json`)}</td>
                            <td>
                              {jsonSplit.items && (
                                <table style={{ width: "100%" }}>
                                  <tr>
                                    <td>{_t(`trans_table.items`)}</td>
                                    <td>
                                      {" "}
                                      {jsonSplit.items.map((item: string, i: number) => {
                                        return (
                                          <tr key={i}>
                                            <td>{item}</td>
                                          </tr>
                                        );
                                      })}
                                    </td>
                                  </tr>
                                </table>
                              )}
                              {jsonSplit &&
                                Object.keys(jsonSplit).map((key, j: number) => {
                                  j = j + Math.floor(Math.random() * 6000) + 5000;
                                  return (
                                    <>
                                      {typeof jsonSplit[key] !== "object" ? (
                                        <table key={j} style={{ width: "100%" }}>
                                          <tbody>
                                            <tr>
                                              <td style={{ width: "50%" }}>
                                                {_t(`trans_table.${key}`)}
                                              </td>
                                              <td style={{ width: "50%" }}>
                                                {typeof jsonSplit[key] === "boolean"
                                                  ? jsonSplit[key].stringify()
                                                  : jsonSplit[key]}{" "}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  );
                                })}
                            </td>
                          </tr>
                        )}
                        {opPayoutClaim && (
                          <tr>
                            <td>{_t(`trans_table.payout_must_be_claimed`)}</td>
                            <td>{JSON.stringify(opPayoutClaim)}</td>
                          </tr>
                        )}
                        {opProps && (
                          <tr>
                            <td>{_t(`trans_table.props`)}</td>
                            <td>
                              <table>
                                <tbody>
                                  <tr>
                                    {typeof opProps !== "object" ? (
                                      <>
                                        {opProps.map((pro: any, i: number) => {
                                          i = i + Math.floor(Math.random() * 500) + 1;
                                          return (
                                            <>
                                              <td key={1}>
                                                <table>
                                                  <tbody>
                                                    <tr>
                                                      <td>{pro[0]}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>{pro[1]}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </>
                                          );
                                        })}
                                      </>
                                    ) : (
                                      <>
                                        <table>
                                          <tbody>
                                            {Object.keys(opProps).map((pro, k: number) => {
                                              k = k + Math.floor(Math.random() * 3000) + 2000;
                                              return (
                                                <>
                                                  {typeof opProps[pro] !== "object" ? (
                                                    <tr>
                                                      <td>{pro}</td>
                                                      <td>{opProps[pro]}</td>
                                                    </tr>
                                                  ) : (
                                                    <>
                                                      {opProps[pro] &&
                                                        OpObjectValue(opProps[pro], `${pro}`)}
                                                    </>
                                                  )}
                                                </>
                                              );
                                            })}
                                          </tbody>
                                        </table>
                                      </>
                                    )}
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        )}

                        {Object.keys(opVal).map((key, m: number) => {
                          m = m + Math.floor(Math.random() * 7000) + 6000;
                          return (
                            <>
                              {typeof opVal[key] === "object" &&
                                ObjectFieldArray.includes(key) &&
                                OpObjectValue(opVal[key], `${key}`)}
                            </>
                          );
                        })}
                        {opExchange && (
                          <tr>
                            <td>{_t("trans_table.exchange_rate")}</td>
                            <td>
                              <table>
                                <tbody>
                                  {opExchange.base && OpObjectValue(opExchange.base, "base")}
                                  {opExchange.quote && OpObjectValue(opExchange.quote, "quote")}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </>
  );
};
export default TransactionOperationTable;
