import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";

import { pageMapDispatchToProps, pageMapStateToProps } from "../common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import StringField from "../../components/fields/blockFields/StringField";
import Theme from "../../components/theme";
import { _t } from "../../i18n";
import ObjectField from "../../components/fields/blockFields/ObjectField";
import BackToTopButton from "../../components/Buttons/BackToTop";
import SpinnerEffect from "../../components/loader/spinner";
import { getSingleBlock } from "../../api/urls";

export interface LatestBlock {
  block_id: string;
  previous: string;
  timestamp: string;
  witness: string;
  transaction_merkle_root: string;
  witness_signature: string;
  signing_key: string;
  transaction: Object;
  extensions: Object;
  transaction_ids: Object;
}

const SingleBlock = (props: any) => {
  const { match } = props;
  const [result, setResult] = useState<LatestBlock>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getSingleBlock(match.params.id);
        setResult(response.block);
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
            <Card>
              <Card.Header>
                {_t("common.block")}: {match.params.id}
              </Card.Header>
              <Card.Body className="pt-0">
                {result &&
                  Object.keys(result).map((key, index) => {
                    return typeof result[key] === "string" || typeof result[key] === "number" ? (
                      <StringField
                        key={index}
                        value={result[key]}
                        item={key}
                        number={index}
                        label_for="block"
                      />
                    ) : (
                      <ObjectField
                        transactionOperations={result["transactions"]}
                        key={index}
                        value={result[key]}
                        item={key}
                        number={index}
                        label_for="block"
                      />
                    );
                  })}
              </Card.Body>
            </Card>
          </Container>
        </div>
      )}
      <BackToTopButton />
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(SingleBlock));
