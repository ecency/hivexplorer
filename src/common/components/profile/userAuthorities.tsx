import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { _t } from "../../i18n";
import { UserTransactionType } from "../../pages/profile/userTypes";

interface Column {
  label: string;
  align: string;
}

const columns: Column[] = [
  { label: `${_t("common.transaction")}`, align: "right" },
  { label: `${_t("common.block")}`, align: "right" },
  { label: `${_t("common.transaction_num")}`, align: "right" },
  { label: `${_t("common.type")}`, align: "right" },
  { label: `${_t("common.operation")}`, align: "right" }
];
interface Authority {
  weight_threshold: number;
  account_auths: string[];
  key_auths: string[];
}
export const AuthorityObject = (field: Authority, changeUser: any) => {
  return (
    <>
      {Object.keys(field).map((key, y: number) => {
       
        return (
          <>
            {field[key].length !== 0 && (
              <Row id={`${y})}`} key={y+field[key]+key} className="m-0 py-2 row-border-dotted">
                <>
                  <Col md={3} xs={3}>
                    {key}
                  </Col>
                  <Col md={9} xs={9}>
                    {typeof field[key] !== "object"
                      ? field[key]
                      : field[key].map((inner: any, j: number) => {
    
                          return (
                            <Row key={j+inner+inner[0]}>
                              <Col className="auth-col">
                                {key === "account_auths" ? (
                                  <Link onClick={() => changeUser(inner[0])} to={`/@${inner[0]}`}>
                                    {inner[0]}
                                  </Link>
                                ) : (
                                  <span>{inner[0]} </span>
                                )}
                                <span className="number-span">
                                  {`  `} {inner[1]}
                                </span>
                              </Col>
                            </Row>
                          );
                        })}
                  </Col>
                </>
              </Row>
            )}
          </>
        );
      })}
    </>
  );
};
interface UserTransactionTypeList extends Array<UserTransactionType> {}
const UserAuthorities = (props: any) => {
  const { changeUser } = props;
  return (
    <>
      <table className="authority-table">
        <tbody>
          {Object.keys(props).map((authority, i: number) => {
            const field = props[authority];
            return (
              <tr key={i+authority+props[authority]} className="row-border">  
                {authority === "memo_key" ? (
                <>
                  <td className="pt-3 pl-4 pr-2 pb-3">{_t(`user-info.${authority}`)}</td>
                  <td className="pt-3 px-4 pb-3">{props[authority]}</td>
                </>
                ) : authority !== "changeUser" ? (
                  <>
                    <td className="pt-2 pl-4 pr-2 pb-2">{_t(`user-info.${authority}`)}</td>
                    <td className="pt-2 px-2 pb-2">
                      {Object.keys(field).map((key, l: number) => {
                        return (
                          <div key={i+key+ field[key]+l}>
                            {field[key].length !== 0 && (
                              <Row id={`${i})}`} key={i+key+ field[key]+l} className="m-0 py-2 row-border-dotted">
                                <>
                                  <Col md={3} xs={3}>
                                    {key}
                                  </Col>
                                  <Col md={9} xs={9}>
                                    {typeof field[key] !== "object"
                                      ? field[key]
                                      : field[key].map((inner: any, k: number) => {
                                          return (
                                            <Row key={k+i+key+ field[key]+l}>
                                              <Col className="auth-col">
                                                {key === "account_auths" ? (
                                                  <Link
                                                    onClick={() => changeUser(inner[0])}
                                                    to={`/@${inner[0]}`}
                                                  >
                                                    {inner[0]}
                                                  </Link>
                                                ) : (
                                                  <span>{inner[0]} </span>
                                                )}
                                                <span className="number-span">
                                                  {`  `} {inner[1]}
                                                </span>
                                              </Col>
                                            </Row>
                                          );
                                        })}
                                  </Col>
                                </>
                              </Row>
                            )}
                          </div>
                        );
                      })}
                    </td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserAuthorities;
