import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import { pageMapDispatchToProps, pageMapStateToProps } from "../../pages/common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import Theme from "../../components/theme";
import WitnessesTables from "./WitnessesTable";
import { _t } from "../../i18n";
import SpinnerEffect from "../../components/loader/spinner";
import { getWitnesses } from "../../api/urls";

export interface witnessesType {
  id: number;
  owner: string;
  created: string;
  url: string;
  votes: string;
  virtual_last_update: string;
  virtual_position: string;
  virtual_scheduled_time: string;
  total_missed: number;
  last_aslot: number;
  last_confirmed_block_num: number;
  pow_worker: number;
  signing_key: string;
  props: {
    account_creation_fee: string;
    maximum_block_size: number;
    hbd_interest_rate: number;
    account_subsidy_budget: number;
    account_subsidy_decay: number;
  };
  hbd_exchange_rate: {
    base: string;
    quote: string;
  };
  last_hbd_exchange_update: string;
  last_work: string;
  running_version: string;
  hardfork_version_vote: string;
  hardfork_time_vote: string;
  available_witness_account_subsidies: number;
}
const WitnessesPage = (props: any) => {
  const [allWitnesses, setAllWitness] = useState<witnessesType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getWitnesses(100);
        setAllWitness(response);
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
      <Container className="data-table-hive witnesses-container py-5">
        <div className="witness-header">
          <h1>{_t("witnesses.page_title")}</h1>
          <p>{_t("witnesses.page_intro")}</p>
        </div>
        {loading && <SpinnerEffect />}
        {!loading && allWitnesses && <WitnessesTables data={allWitnesses} />}
      </Container>
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(WitnessesPage));
