import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import { pageMapDispatchToProps, pageMapStateToProps } from "../common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import Theme from "../../components/theme";
import { _t } from "../../i18n";
import StringField from "../../components/fields/blockFields/StringField";
import ObjectField from "../../components/fields/blockFields/ObjectField";
import SpinnerEffect from "../../components/loader/spinner";
import { getSingleTransaction } from "../../api/urls";
import { TransactionOperation } from "../../components/operations";

export interface SingleTransaction {
  block_num: number;
  ref_block_num: number;
  ref_block_prefix: number;
  expiration: string;
  transaction_id: string;
  extensions: object;
  signature: object;
  transaction_num: number;
  operations: object;
}

const SingleTransaction = (props: any) => {
  const { match } = props;
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<SingleTransaction>();
  const [transData,setTransData]=useState({})
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getSingleTransaction(match.params.id);
        setResult(response);
        setTransData({type:response.operations[0][0]+'_operation',value:response.operations[0][1]})
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Theme global={props.global} />
      {loading && <SpinnerEffect />}
      {!loading && (
        <div className="head-block-detail">
          <Container>
         
           {result && transData && <TransactionOperation trans_no={result.transaction_id} trans_data={[transData]} time={result.expiration} />}
            <Card>
              <Card.Header>
               <b> {_t("common.transaction")}</b>: {match.params.id}@{result?.block_num}
              </Card.Header>
              <Card.Body className="py-0">
                {result &&
                  Object.keys(result).map((key, index) => {
                    return typeof result[key] === "object" ? (
                      <ObjectField
                        key={index}
                        value={result[key]}
                        item={key}
                        number={index}
                        label_for="transaction"
                      />
                    ) : (
                      <StringField
                        key={index}
                        value={result[key]}
                        item={key}
                        number={index}
                        label_for="transaction"
                      />
                    );
                  })}
              </Card.Body>
            </Card>
          </Container>
        </div>
      )}
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(SingleTransaction));
