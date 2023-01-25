import React from "react";
import { connect, useSelector } from "react-redux";
import { renderPostBody } from "@ecency/render-helper";

import { pageMapDispatchToProps, pageMapStateToProps } from "../../../pages/common";
import { withPersistentScroll } from "../../with-persistent-scroll";
import { _t } from "../../../i18n";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TimestampField } from "../../fields/blockFields/DateTimeTable";
import { LinkAccount, NestedObjectUserOperations } from "../../../pages/fields/common_fields";
import UserAvatar from "../../user-avatar";
import parseAsset from "../../../helper/parse-asset";
import { AuthorityObject } from "../../profile/userAuthorities";
import { isInteger } from "lodash";
_t

interface EntryType {
  author: string;
  permlink: string;
  category: string;
  title: string;
  body: string;
}

const TransactionCard = (props: any) => {
  const { transaction,transactionFields,transactionOp } = props;
  const opVal=transactionOp
  const currTheme = useSelector((state: any) => state.global.theme);
  // {const renderedBody = ;}

  return (
    <>
        <Card className="trans-card" style={{width:'100%'}} >
                                <Card.Body>
                                    <Card.Title className="d-flex ">
                                    <>{transactionFields.trx_id==="0000000000000000000000000000000000000000"?
                                            <span>{_t('trans_table.virtual')}</span>:
                                            <Link to={`/tx/${transactionFields.trx_id}`}>{transactionFields.trx_id.substring(0,7)+'...'}</Link>
                                        }</>
                                    </Card.Title>
                                    <h5 className="mb-2 text-muted">{_t("common.type")}: {transactionFields.op.type}</h5>
                                    <h6><TimestampField timestamp={transactionFields.timestamp}/></h6>
                                   <Card.Text>
                                   <table  className={
                                            currTheme === "day" ? "trans-card-table trans-card-table-day" : "trans-card-table trans-card-table-dark"
                                        }>
                                        <tbody>
                                                {Object.keys(opVal).map((val:any,i:number)=>{
                                        return(
                                        <>
                                        
                                        { typeof(opVal[val]) === 'boolean'? 
                                        <tr  key={i+val+transactionFields.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td className={`${opVal[val]}`}>
                                            {opVal[val].toString()}
                                        </td>
                                    </tr>
                                        :typeof(opVal[val]) !== 'object' && opVal[val]!=="" ?
                                        <tr key={i+val+transactionFields.op.type}>
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
                                        <tr  key={i+val+transactionFields.op.type}>
                                            <td>{_t(`trans_table.${val}`)}</td>
                                            <td>
                                            <UserAvatar username={opVal[val][0]} size="small"/>
                                            </td>
                                        </tr>
                                        :
                                        typeof(opVal[val]) === "object" && NestedObjectUserOperations.includes(val)?
                                        <tr key={i+val+transactionFields.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td>
                                            <table style={{width:'100%'}}>
                                                <tbody>
                                                {Object.keys(opVal[val]).map((item:any,j:number)=>{
                                                    return( 
                                                    <tr key={j+item}>
                                                        <td>{_t(`trans_table.${item}`)}</td>
                                                        <td>{typeof opVal[val][item] !== "object" ? opVal[val][item] 
                                                        :<>
                                                        {Object.keys(opVal[val][item]).map((key, y: number) => {
                                                            y = y + Math.floor(Math.random() * 10) + 1;
                                                            return (
                                                              <>
                                                                {opVal[val][item][key].length !== 0 && (
                                                                  <table style={{width:'100%'}} key={y+item+key} id={`${y})}`} className="m-0 py-2 row-border-dotted">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style={isInteger(+key)?{width:'40px',minWidth:'40px'}:{}}>
                                                                            {key}
                                                                            </td>
                                                                            <td >
                                                                            {typeof opVal[val][item][key] !== "object" 
                                                                          ? opVal[val][item]
                                                                          : opVal[val][item].map((inner: any, j: number) => {
                                                                              j = j + Math.floor(Math.random() * 30) + 10;
                                                                              return (
                                                                                <span className="trans-card-span">
                                                                                {/* // <table key={j} style={{width:'100%'}}>
                                                                                //     <tbody>
                                                                                //         <tr>
                                                                                //             <td> */}
                                                                                            {item === "account_auths" ? (
                                                                                      <Link to={`/@${inner[0]}`}>
                                                                                        {inner[0]}
                                                                                      </Link>
                                                                                    ) : (
                                                                                      <span>{inner[0]}</span>
                                                                                    )}
                                                                                    <span className="number-span">
                                                                                      {`  `} {inner[1]}
                                                                                    </span>
                                                                                {/* //             </td>
                                                                                //         </tr>
                                                                                //     </tbody>
                                                                                // </table> */}
                                                                                </span>
                                                                            )})}
                                                                                
                                                                      </td>
                                                                        </tr>
                                                                    </tbody>
                                                            </table>
                                                                )}
                                                              </>
                                                            );
                                                          })}
                                                        </>
                                                        }</td>
                                                      </tr>)
                                                })}
                                                </tbody>
                                            </table>
                                            </td>
                                            </tr>
                                        :
                                        val==="extensions"?
                                        <tr key={i+val+transactionFields.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td>
                                            <table style={{width:'100%'}}>
                                                <tbody>
                                                {opVal[val].map((item:any,j:number)=>{
                                                  return(
                                                    <>
                                                    {typeof(item)==="object"? 
                                                    <>{Object.keys(item).map((exVal)=>{
                                                        return(
                                                           <>
                                                            {typeof(item[exVal])!=="object"?
                                                                <tr>
                                                                    <td>{exVal}</td>
                                                                    <td>{item[exVal]}</td>
                                                                </tr>
                                                                :
                                                                <>
                                                                {Object.keys(item[exVal]).map((key)=>{
                                                                    return(
                                                                       <>
                                                                       {typeof(item[exVal][key]==="object")?
                                                                         <tr>
                                                                            <td>{key}</td>
                                                                            <>{item[exVal][key].map((innerKey:any)=>{
                                                                                return(
                                                                                    <>
                                                                                   {typeof(innerKey)==="object"?
                                                                                   <><table style={{width:'100%'}}>
                                                                                    <tbody>
                                                                                        {Object.keys(innerKey).map((keyItem,i)=>{
                                                                                            return(
                                                                                                <tr key={innerKey+i+keyItem}>
                                                                                                    <td>{_t(`trans_table.${keyItem}`)}</td>
                                                                                                    <td>{innerKey[keyItem]}</td>
                                                                                                </tr>
                                                                                            )
                                                                                        })}
                                                                                    </tbody>
                                                                                    </table></>
                                                                                   :<></>}
                                                                                    </>
                                                                                )
                                                                            })}
                                                                            </>
                                                                        </tr>:
                                                                        <></>}
                                                                       </>
                                                                    )
                                                                })}
                                                              
                                                                </>
                                                            }
                                                           </>
                                                        )
                                                    })}
                                                    </>
                                                    :
                                                    <></>}
                                                    </>
                                                  )}
                                                )}
                                                </tbody>
                                            </table>
                                        </td>
                                        </tr>:
                                        val==="props" ? 
                                        <tr key={i+val+transactionFields.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td>
                                            <table style={{width:'100%'}}>
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
                                        val==="exchange_rate"?
                                        <>
                                        <tr key={i+val+transactionFields.op.type}>
                                        <td>{_t(`trans_table.${val}`)}</td>
                                        <td>
                                            <table style={{width:'100%'}}>
                                                <tbody>
                                                {Object.keys(opVal[val]).map((item:any,j:number)=>{
                                                    console.log(opVal[val],item)
                                                return(
                                                    <tr key={j+item}>
                                                    <td>{_t(`trans_table.${item}`)}</td>
                                                    <td>{parseAsset(opVal[val][item]).amount+' '+parseAsset(opVal[val][item]).symbol}</td>
                                                    </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                        </td>
                                        </tr>
                                        </>
                                        :
                                        <tr key={i+val+transactionFields.op.type}>
                                           <td>{_t(`trans_table.${val}`)}</td>
                                            <td>{parseAsset(opVal[val]).amount+' '+parseAsset(opVal[val]).symbol}</td>
                                        </tr>:<></>}
                                        
                                        </>
                                        )
                                        })}
                                        </tbody>
                                    </table>
                                   </Card.Text>
                                </Card.Body>
                                </Card>
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(TransactionCard));