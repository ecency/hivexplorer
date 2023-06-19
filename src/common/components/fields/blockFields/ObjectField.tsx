import React, { useEffect, useRef, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { _t } from "../../../i18n";
import JsonField from "./JsonField";
import JsonMetadata from "../../entryContent/JsonMetadata";
import { Date_time_table } from "../../../api/dateTime";
import { LinkAccount } from "../../../pages/fields/common_fields";
import { UserAvatar } from "../../user-avatar";
import { infoIcon, showLessIcon, showMoreIcon, trxIcon } from "../../../img/svg";
import "./ObjectField.scss";
import { SMTAssetCalc } from "../../../api/hive";
import parseAsset from "../../../helper/parse-asset";
import { isInteger } from "lodash";

function renderTable(data: any) {
  return (
    <table className="time-date-table">
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className={isInteger(+key)? "integer-td":""}>{key}</td>
            <td>{renderData(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function renderData(data: any) {
  if (typeof data === "object" && data !== null) {
    if (Array.isArray(data)) {
      return (
        <table className="time-date-table">
          <tbody>
            
            {data.map((item: any, i: number) => (
            <tr key={i}>
              <td className="integer-td">
                {i}
              </td>
              <td  >
                {renderData(item)}
              </td>
            </tr>
          ))}
            
          </tbody>
        
        </table>
      );
    } else {
      return renderTable(data);
    }
  } else {
    return <span>{data.toString()}</span>;
  }
}
const SMTAssetArray=[
  "init_hbd_supply",
  "virtual_supply",
  'current_supply',
  'current_hbd_supply',
  'total_vesting_fund_hive',
  'total_vesting_shares',
  'total_reward_fund_hive',
  'pending_rewarded_vesting_shares',
  'pending_rewarded_vesting_hive',
  'dhf_interval_ledger'
]
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
  const [currentHash, setCurrentHash] = useState('');
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "white";
  const rowBorder =
    currTheme === "day" ? "row-border border-color-day" : "row-border border-color-night";
  const themeBtn = currTheme === "day" ? "showmore-btn btn-light" : "showmore-btn btn-dark";
  let transactionValue: transactionTypeList = [];
  // useEffect(() => {
  //   setCurrentHash(window.location.hash.substring(1)) // remove the #
  //   const element = document.getElementById(currentHash);
  //   if (element) {
  //     element.style.backgroundColor = "yellow";
  //   }
  // }, [currentHash]);
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  const targetRef: React.MutableRefObject<HTMLElement | null>=useRef(null)
useEffect(() => {
  if (currentHash) {
    const targetElement = document.getElementById(currentHash.substring(1));
    if (targetElement) {
          targetElement.style.backgroundColor = "#cdcdad";
        }
    targetRef.current = targetElement;
  }
}, [currentHash]);
useEffect(() => {
  if (targetRef.current) {
    targetRef.current.style.backgroundColor = '#cdcdad';
  }
}, [targetRef]);

  const expand_view = (value: any, item: string) => {
    return (
      <Row className={`${rowBorder} mt-1`}>
        <Col md={6} xs={12}>
          <ListGroup>
            {value.slice(0, Math.ceil(value.length / 2)).map((val: string, i: number) => {
              return (
                <ListGroup.Item key={i} id={val} className='trx-id'>
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
                  <ListGroup.Item key={i} id={val}>
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
          <Col lg={2} md={3} xs={12} className="attr-col">
            <span className="pl-2">
              {item === "voting_manabar" || item === "downvote_manabar" ? (
                <span>{_t(`${label_for}.${item}`)}</span>
              ) : (
                _t(`${label_for}.${item}`)
              )}
              :
            </span>
          </Col>
          <Col lg={10} md={9} xs={12}>
            {item === "voting_manabar" || item === "downvote_manabar" ? (
              <table className="time-date-table">
                <tbody>
                  <tr>
                    <td>{_t('common.current_mana')}</td>
                    <td>{value.current_mana}</td>
                  </tr>
                  <tr>
                    <td>{_t('common.time')}</td>
                    <td>{value.last_update_time}</td>
                  </tr>
                </tbody>
              </table>
            ) : item === "transactions" ? (
              <>{transactionValue.push(...value)}</>
           
            )   : item === "transaction_ids" ? (
              <>{value.length}</>
            )
            : item === "witness_votes" ? (
              <>
              
              </>
            ) : item === "operations" ? (
              <><div>{renderData(value)}</div></>
            ) : SMTAssetArray.includes(item) ? (
              <>{parseAsset(value).amount+' '+parseAsset(value).symbol}</>
            ) : item === "json_metadata" && label_for === "entry" ? (
              <>
                <JsonMetadata data={value} />
              </>
            ) : item === "signatures" ? (
              <>{renderData(value)}</>
            ) : (
              <>{value.length===0? '[ ]':value.length}</>
            )}
          </Col>
        </Row>
      )}
      {item === "witness_votes" && expandBtn ? expand_view(value, item) : <></>}
      {/* {item === "transaction_ids" && !expandBtn ? expand_view(value, item) : <></>} */}
      {/* {item==='operations' && expandBtn ?expand_operation(value,item):<></>} */}
    </>
  );
};
export default ObjectField;
