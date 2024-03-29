import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from "../common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import { HomeTransactionType } from "../../components/home/TransactionsComponent";
import Theme from "../../components/theme";
import TransactionsTables from "./transactionsTables";
import SpinnerEffect from "../../components/loader/spinner";
import BackToTopButton from "../../components/Buttons/BackToTop";
import { getHeadBlock, getTransactions } from "../../api/urls";
import { setHeadBlockData } from "../../store/HeadBlock";
import { cardViewSVG, tableViewSVG } from "../../img/svg";
import ToggleButton from "react-toggle-button";
import TransactionsCards from "./transactionCards";
import headBlock from "../../components/headBlock/headBlock";
import { TransactionOperation } from "../../components/operations";
import { object } from "prop-types";
import transaction from "../transaction";
import { _t } from "../../i18n";

interface TransactionList extends Array<HomeTransactionType> {}
const AllTransactions = (props: any) => {
  const { match } = props;
  const [loading, setLoading] = useState(true);
  const [cardView, setCardView] = useState(true);
  const [transactions, setTransactions] = useState<TransactionList>([]);
  const dispatch = useDispatch();
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "#535e65" : "#ffffffde";
  const HeadBlock = useSelector((state: any) => state.headBlock.head_block_number);
  // const HeadBlock = 69369062

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (HeadBlock === "") {
          const resp = await getHeadBlock();
          dispatch(setHeadBlockData(resp));
          const response = await getTransactions(resp.head_block_number,false);
          // const response = await getTransactions(71691727);
          // 71554087
          setTransactions(response.ops);
        } else {
          const response = await getTransactions(HeadBlock,false);
          // const response = await getTransactions(71691727);
          setTransactions(response.ops);
        }
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
      {!loading && transactions &&   <Container className="data-table-hive py-5">
        <div className="d-flex float-right">
            <p>{!cardView?_t("common.table_format"):_t("common.list_format")}&nbsp; </p>
              <div>
              <ToggleButton
                inactiveLabel={""}
                activeLabel={""}
                value={cardView}
                text="n"
                onToggle={() => {
                  setCardView(!cardView);
                }}
              />
            </div>
          </div>
          <h1>{_t("heading_label.latest_transaction")}</h1>
        <>
          {cardView?
          <TransactionsCards data={transactions} />
          :
          <TransactionsTables data={transactions}/>
          }
        </>
      
        </Container>}
      <BackToTopButton />
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(AllTransactions));
