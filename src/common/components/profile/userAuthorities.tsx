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
        y = y + Math.floor(Math.random() * 10) + 1;
        return (
          <>
            {field[key].length !== 0 && (
              <Row id={`${y})}`} key={y} className="m-0 py-2 row-border-dotted">
                <>
                  <Col md={3} xs={3}>
                    {key}
                  </Col>
                  <Col md={9} xs={9}>
                    {typeof field[key] !== "object"
                      ? field[key]
                      : field[key].map((inner: any, j: number) => {
                          j = j + Math.floor(Math.random() * 30) + 10;
                          return (
                            <Row key={j}>
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
            i = i + Math.floor(Math.random() * 60) + 40;
            const field = props[authority];
            return (
              <>
                {authority === "memo_key" ? (
                  <tr key={i} className="row-border">
                    <td className="pt-3 pl-4 pr-2 pb-3">{_t(`user-info.${authority}`)}</td>
                    <td className="pt-3 px-4 pb-3">{props[authority]}</td>
                  </tr>
                ) : authority !== "changeUser" ? (
                  <tr key={i + Math.floor(Math.random() * 90) + 71} className="row-border">
                    <td className="pt-2 pl-4 pr-2 pb-2">{_t(`user-info.${authority}`)}</td>
                    <td className="pt-2 px-2 pb-2">
                      {Object.keys(field).map((key, l: number) => {
                        l = l + Math.floor(Math.random() * 90) + 71;
                        return (
                          <>
                            {field[key].length !== 0 && (
                              <Row id={`${i})}`} key={i} className="m-0 py-2 row-border-dotted">
                                <>
                                  <Col md={3} xs={3}>
                                    {key}
                                  </Col>
                                  <Col md={9} xs={9}>
                                    {typeof field[key] !== "object"
                                      ? field[key]
                                      : field[key].map((inner: any, k: number) => {
                                          k = k + Math.floor(Math.random() * 250) + 210;
                                          return (
                                            <Row key={k}>
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
                          </>
                        );
                      })}
                    </td>
                  </tr>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserAuthorities;
