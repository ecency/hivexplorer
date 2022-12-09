import React from "react";
import { Table } from "react-bootstrap";
import { UserList } from "../home/HomePage";
import { _t } from "../../i18n";

export default function ApiFetchedLookupAccounts(props: any) {
  const blocksApiResult: UserList = props;
  return (
    <Table className="mb-4">
      <thead>
        <tr>
          <th>{_t("common.user_names")}</th>
        </tr>
      </thead>
      {/* <tbody>
                  { accountsApiResult.map((data) => {
                    return (<tr> 
                      <td>{data}</td> 
                    </tr>)
                  })}
              </tbody> */}
    </Table>
  );
}
