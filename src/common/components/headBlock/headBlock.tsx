import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from "../../pages/common";
import React, { useEffect, useState } from "react";
import { SMTAsset } from '@hiveio/dhive';
import axios from "axios";
import Meta from "../meta";
import Theme from "../theme";
import { getMetaProps } from "../../util/get-meta-props";
import { connect } from "react-redux";
import { withPersistentScroll } from "../with-persistent-scroll";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./headBlock.scss";
import { Link } from "react-router-dom";
import { ConfigItems } from "../../../../config";
import { _t } from "../../i18n";
import { SMTAssetCalc } from "../../api/hive";
import parseAsset from "../../helper/parse-asset";
//  interface SMTAsset {
//   amount: string | number;
//   precision: number;
//   nai: string;
// }
export interface Block {
  head_block_number: number;
  head_block_id: string;
  time: string;
  num_pow_witnesses: number;
  init_hbd_supply: string | SMTAsset;
  current_hbd_supply: string | SMTAsset;
  total_vesting_fund_hive: string | SMTAsset;
  total_vesting_shares: string | SMTAsset;
  total_reward_fund_hive: string | SMTAsset;
  current_witness: string;
}

const HeadBlock = (props: Block) => {
  const result = props;
  const {
    total_reward_fund_hive,
    total_vesting_fund_hive,
    total_vesting_shares,
    init_hbd_supply
  }=result

  return (
    <div className="head-block">
      {props && (
        <Card>
          <Card.Header>
            <span className="head-block-attr-span">{_t("common.block")}: </span>
            <Link to={`/head/b/${result.head_block_number}`}>{result.head_block_number}</Link>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} xs={12}>
                <div>
                  <div className="pt-2">
                    <span className="head-block-attr-span">{_t("common.time")}: </span>
                    {result.time}
                  </div>
                  <div className="pt-2">
                    <span className="head-block-attr-span">{_t("block.current_witness")}: </span>
                    {result.current_witness}
                  </div>
                </div>
              </Col>
              <Col md={4} xs={12} className="head-block-middle">
                <div>
                  <div className="pt-2">
                    <span className="head-block-attr-span">{_t("block.reward_fund")}: </span>
                      {parseAsset(total_reward_fund_hive).amount+' '+parseAsset(total_reward_fund_hive).symbol}
                  </div>
                  <div className="pt-2">
                    <span className="head-block-attr-span">{_t("block.vesting_fund")}: </span>
           
                  {parseAsset(total_vesting_fund_hive).amount+' '+parseAsset(total_vesting_fund_hive).symbol}
                  </div>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="pt-2">
                    <span className="head-block-attr-span">{_t("block.vesting_shares")}: </span>
                    {parseAsset(total_vesting_shares).amount+' '+parseAsset(total_vesting_shares).symbol}
                  </div>
                  <div className="pt-2">
                    <span className="head-block-attr-span">{_t("block.supply")}: </span>
                 
                  {parseAsset(init_hbd_supply).amount+' '+parseAsset(init_hbd_supply).symbol}
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(HeadBlock));
