import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import numeral from "numeral";

import { pageMapDispatchToProps, pageMapStateToProps } from "../common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import Theme from "../../components/theme";
import ProposalCard from "../../components/proposals/proposalCard";
import { getAccount, getProposals } from "../../api/urls";
import parseAsset from "../../helper/parse-asset";
import { _t } from "../../i18n";
import BackToTopButton from "../../components/Buttons/BackToTop";
import SpinnerEffect from "../../components/loader/spinner";

enum Filter {
  ALL = "all",
  ACTIVE = "active",
  INACTIVE = "inactive",
  EXPIRED = "expired"
}
export interface proposalsType {
  id: Number;
  proposal_id: number;
  creator: string;
  receiver: string;
  start_date: string;
  end_date: string;
  daily_pay: {
    amount: string;
    precision: number;
    nai: string;
  };
  subject: string;
  permlink: string;
  total_votes: number;
  status: string;
}
interface proposalsTypeList extends Array<proposalsType> {}
const ProposalsPage = (props: any) => {
  const [allProposals, setAllProposals] = useState<proposalsTypeList>();
  const [filteredProposals, setFilteredProposals] = useState<proposalsTypeList>();
  const [proposalStatus, setProposalStatus] = useState("all");
  const [totalBudget, setTotalBudget] = useState<number>();
  const [dailyBudget, setDailyBudget] = useState<number>();
  const [dailyFunded, setDailyFunded] = useState<number>();
  const [loading, setLoading] = useState(true);
  const [isReturnProposalId, setReturnProposalId] = useState<number | null>(null);
  let proposals: proposalsTypeList;
  let expiredProposals;
  let activeProposals;
  let inactiveProposals;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getProposals("all");
        proposals = response.proposals;
        expiredProposals = proposals.filter((x: proposalsType) => x.status === "expired");
        // Sorting Expired Proposals
        expiredProposals = expiredProposals.sort(
          (a, b) =>
            parseFloat(b.total_votes.toLocaleString()) - parseFloat(a.total_votes.toLocaleString())
        );
        // filtering active Proposals
        activeProposals = proposals.filter((x: proposalsType) => x.status === "active");
        // sorting active proposals
        activeProposals = activeProposals.sort(
          (a, b) =>
            parseFloat(b.total_votes.toLocaleString()) - parseFloat(a.total_votes.toLocaleString())
        );
        // InActive Proposals
        inactiveProposals = proposals.filter((x: proposalsType) => x.status === "inactive");
        // Sorting In Active
        inactiveProposals = inactiveProposals.sort(
          (a, b) =>
            parseFloat(b.total_votes.toLocaleString()) - parseFloat(a.total_votes.toLocaleString())
        );
        // All Proposals
        proposals = [...activeProposals, ...inactiveProposals, ...expiredProposals];
        const entireProposals = proposals;
        setAllProposals(entireProposals);
        setFilteredProposals(entireProposals);

        if (proposalStatus === "all") {
          setFilteredProposals(entireProposals);
        }
        if (proposalStatus === "active") {
          setFilteredProposals([...activeProposals]);
        }
        if (proposalStatus === "inactive") {
          setFilteredProposals([...inactiveProposals]);
        }
        if (proposalStatus === "expired") {
          setFilteredProposals([...expiredProposals]);
        }
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [proposalStatus]);

  let eligible: any;
  useEffect(() => {
    
    eligible = allProposals?.filter((x: proposalsType) => x.status !== "expired");
    inactiveProposals = allProposals?.filter((x: proposalsType) => x.status === "expired");
    getAccount("hive.fund").then((resp) => {
      const totalBudgetCount = parseAsset(resp[0].hbd_balance).amount;
      setTotalBudget(totalBudgetCount);
      setDailyBudget(totalBudgetCount / 100);
      let _thresholdProposalId: any = null;
      if (dailyBudget) {
        const dailyFundedCalc = eligible.reduce((a: any, b: any) => {
          const _sum_amount: number = a + Number(b.daily_pay.amount) / 1000;
          if (_sum_amount >= dailyBudget && !_thresholdProposalId) {
            _thresholdProposalId = b.id;
          }
          _sum_amount >= dailyBudget && setReturnProposalId(Number(b.id));
          return _sum_amount <= dailyBudget ? _sum_amount : a;
        }, 0);
        setDailyFunded(dailyFundedCalc);
      }
    });
  }, [allProposals]);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let filteredWitnessesData = new Array();
  if (filteredProposals) {
    filteredWitnessesData = filteredProposals.filter((el: any) => {
      if (el) {
        if (inputText === "") {
          return el;
        }
        //return the item which contains the user input
        else {
          return JSON.stringify(el).toLowerCase().includes(inputText);
        }
      }
    });
  }

  return (
    <>
      <Theme global={props.global} />
      <Container className="proposal-container py-5">
        <div className="proposal-header text-center">
          <h1>{_t("proposals.page_title")}</h1>
          <p>{_t("proposals.page_intro")}</p>
          <div className="funding-numbers">
            <div className="funding-number">
              <div className="value">
                {numeral(dailyFunded).format("0.00,")} {"HBD"}
              </div>
              <div className="label">{_t("daily-funded")}</div>
            </div>
            <div className="funding-number">
              <div className="value">
                {numeral(dailyBudget).format("0.00,")} {"HBD"}
              </div>
              <div className="label">{_t("daily-budget")}</div>
            </div>
            <div className="funding-number">
              <div className="value">
                {numeral(totalBudget).format("0.00,")} {"HBD"}
              </div>
              <div className="label">{_t("total-budget")}</div>
            </div>
          </div>
          <div>
            <TextField
              id="search-proposals"
              className="search-field-proposals"
              onChange={inputHandler}
              fullWidth={false}
              placeholder={`${_t("heading_label.search_proposals")}`}
            />
          </div>

          <div className="filter-menu">
            {Object.values(Filter).map((x, i) => {
              return (
                <button
                  key={i}
                  className="btn"
                  onClick={() => setProposalStatus(x)}
                  disabled={proposalStatus === x ? true : false}
                >
                  {_t(`proposals.${x}`)}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          {loading && <SpinnerEffect />}
          {!loading &&
            filteredWitnessesData &&
            Object.keys(filteredWitnessesData).map((key, i) => {
              return <ProposalCard key={i} proposalData={filteredWitnessesData[key]} />;
            })}
        </div>
        <BackToTopButton />
      </Container>
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(ProposalsPage));
