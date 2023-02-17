import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { isInteger, isNumber } from "lodash";
import { _t } from "../../i18n";
import { AuthorityObject } from "../../components/profile/userAuthorities";
import { DecodeJson } from "../../../server/util";
import { LinkAccount, ObjectFieldArray, StringFieldArray } from "../fields/common_fields";
import { UserAvatar } from "../../components/user-avatar";
import parseAsset from "../../helper/parse-asset";
export const OpObjectValue=(field: any, name: string)=> {
  return (
    <tr key={field+name}>
      <td>{_t(`trans_table.${name}`)}</td>
      <td>{parseAsset(field).amount+' '+parseAsset(field).symbol}</td>
      {/* <td>
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
      </td> */}
    </tr>
  );
}
export function opNestedObject(field: any, name: string) {
  return (
    <tr>
      <td>{_t(`trans_table.${name}`)}</td>
      <td>{typeof field !== "object" ? field : <AuthorityObject {...field} />}</td>
    </tr>
  );
}

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
  let count=0
  const opActive = opVal.active;
  const opPosting = opVal.posting;

  const jsonSplit = DecodeJson(opJson);
  const currTheme = useSelector((state: any) => state.global.theme);
  const OpValArray = new Array();
  OpValArray.push(opRewardHive, opVestShare);



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
                       
                          return (
                            <>
                              {(typeof opVal[key] === "string" || typeof opVal[key] === "number") &&
                                LinkAccount.includes(key) && (
                                  <tr key={k+key+opVal[key]}>
                                    <td>{_t(`trans_table.${key}`)}</td>
                                    <td>
                                      <UserAvatar username={opVal[key]} size="small"/>
                                    </td>
                                  </tr>
                                )}
                            </>
                          );
                        })}
                        {Object.keys(opVal).map((key, i: number) => {
                         
                          return (
                            <>
                              {(typeof opVal[key] === "string" || typeof opVal[key] === "number") &&
                                StringFieldArray.includes(key) && (
                                  <tr key={i+'-+'+key}>
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
                            <td >{_t(`trans_table.required_auths`)}</td>
                            <td>
                              {<Link to={`/@${opRequiredAuths[0]}`}>{opRequiredAuths[0]}</Link>}
                            </td>
                          </tr>
                        )}
                        {opRequiredPostingAuths && opRequiredPostingAuths.length !== 0 && (
                          <tr>
                            <td>
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
                          <>
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
                                            <span className="block-span" key={item+i}>{item}</span>
                                        );
                                      })}
                                    </td>
                                  </tr>
                                </table>
                              )}
                                  {jsonSplit.cards && (
                                <table style={{ width: "100%" }}>
                                  <tr>
                                    <td>{_t(`trans_table.cards`)}</td>
                                    <td>
                                      {" "}
                                      {jsonSplit.cards.map((item: string, i: number) => {
                                        return (
                                            <span className="block-span"  key={item+1}>{item}</span>
                                        );
                                      })}
                                    </td>
                                  </tr>
                                </table>
                              )}
                              {jsonSplit  &&
                                Object.keys(jsonSplit).map((key, j: number) => {
                                  return (
                                    <>
                                      {typeof jsonSplit[key] !== "object" ? (
                                        <table key={j+key+jsonSplit[key]} style={{ width: "100%" }}>
                                          <tbody>
                                            <tr>
                                              <td style={isInteger(+key)?{width:'40px',minWidth:'40px'}:{}}>
                                                {_t(`trans_table.${key}`)}
                                              </td>
                                              <td>
                                                {typeof jsonSplit[key] === "boolean" ?
                                                 <span className={`${jsonSplit[key]}`}>
                                                  {jsonSplit[key].toString()}
                                                 </span>
                                                  : jsonSplit[key]!==null?
                                                  jsonSplit[key]:<>{`null`}</>
                                                  
                                                }{" "}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      ) : jsonSplit[key]===null?
                                      <>
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td>{_t(`trans_table.${key}`)}</td>
                                            <td>Null</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      </>
                                      : (
                                        <>
                                        {!jsonSplit.items && !jsonSplit.cards  && <div className="d-flex">
                                     
                                        <table>
                                          <tbody>
                                            <tr><td style={isInteger(+key)?{width:'40px',minWidth:'40px'}:{}}>{_t(`trans_table.${key}`)}</td>
                                            <td>
                                            <table>
                                          <tbody>
                                              {Object.keys(jsonSplit[key]).map((innerKey:any,i)=>{
                                               
                                                return(
                                                  <tr key={i+innerKey+jsonSplit[key]}>
                                                    <td style={isInteger(+innerKey)?{width:'40px',minWidth:'40px'}:{}}>{isInteger(+innerKey)?<>{innerKey}</>:<>{_t(`trans_table.${innerKey}`)}</>}</td>
                                                    <td>
                                                      {typeof(jsonSplit[key][innerKey])!=="object"? jsonSplit[key][innerKey].toString()
                                                      :
                                                      <>
                                                      <table>
                                                        <tbody>
                                                          {Object.keys(jsonSplit[key][innerKey]).map((item,j:number)=>{
                                                            return(
                                                              <tr key={item+j+jsonSplit[key][innerKey][item]}> 
                                                                <td style={isInteger(+item)?{width:'40px',minWidth:'40px'}:{}}>{_t(`trans_table.${item}`)}</td>
                                                                <td>
                                                                  {typeof(jsonSplit[key][innerKey][item])!=="object"? jsonSplit[key][innerKey][item].toString()
                                                                  :<>
                                                                  <table>
                                                                    <tbody>
                                                                    {Object.keys(jsonSplit[key][innerKey][item]).map((innerItem,k:number)=>{
                                                                      return(
                                                                        <tr key={k+innerItem+item+j}>
                                                                          <td>{_t(`trans_table.${innerItem}`)}</td>
                                                                          <td>
                                                                              {typeof(jsonSplit[key][innerKey][item][innerItem])!=="object"? 
                                                                                jsonSplit[key][innerKey][item][innerItem].toString()
                                                                                :
                                                                                <>
                                                                                  <table>
                                                                                    <tbody>
                                                                                      {Object.keys(jsonSplit[key][innerKey][item][innerItem]).map((subInnerItem,z:number)=>{
                                                                                        return(
                                                                                          <tr key={subInnerItem+innerItem+item+z}>
                                                                                            <td>{_t(`trans_table.${subInnerItem}`)}</td>
                                                                                            <td>{jsonSplit[key][innerKey][item][innerItem][subInnerItem]}</td>
                                                                                          </tr>
                                                                                        )
                                                                                      })}
                                                                                    </tbody>
                                                                                  </table>
                                                                                </>
                                                                              }
                                                                          </td>
                                                                        </tr>
                                                                      )
                                                                    })}
                                                                    </tbody>
                                                                  </table>
                                                                  </>
                                                                  }
                                                                </td>
                                                              </tr>
                                                            )
                                                          })}
                                                        </tbody>
                                                        </table></>
                                                      }
                                                    </td>
                                                  </tr>
                                                )
                                              })}
                                              </tbody>
                                               </table>
                                         
                                              </td>
                                              </tr>
                                          </tbody>
                                        </table>
                                        </div>}
                                        </>                      
                                      )}
                                    </>
                                  );
                                })}
                            </td>
                          </tr>
                          </>
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
                                          return (
                                            <>
                                              <td key={1+pro+`${i++}`}>
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
                                              return (
                                                <>
                                                  {typeof opProps[pro] !== "object" ? (
                                                    <tr key={k+pro}>
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
