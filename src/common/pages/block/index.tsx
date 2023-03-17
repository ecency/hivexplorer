import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Container, Card, Button, Accordion, ListGroup } from "react-bootstrap";
import { pageMapDispatchToProps, pageMapStateToProps } from "../common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import StringField from "../../components/fields/blockFields/StringField";
import Theme from "../../components/theme";
import { _t } from "../../i18n";
import ObjectField from "../../components/fields/blockFields/ObjectField";
import BackToTopButton from "../../components/Buttons/BackToTop";
import SpinnerEffect from "../../components/loader/spinner";
import { getSingleBlock, getTransactions } from "../../api/urls";
import { Link } from "react-router-dom";
import JsonField from "../../components/fields/blockFields/JsonField";
import { TransactionOperation } from "../../components/operations";

interface op_type {
  type: string;
value:string[]
}

export interface LatestBlock {
  block_id: string;
  previous: string;
  timestamp: string;
  witness: string;
  transaction_merkle_root: string;
  witness_signature: string;
  signing_key: string;
  transactions: string[];
  extensions: string[];
  transaction_ids: string[];
}
 interface HomeTransactionType {
  map(
    arg0: (suggestion: any, index: number) => JSX.Element
  ):
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  trx_id: string;
  block: number;
  trx_in_block: number;
  op_in_trx: number;
  virtual_op: number;
  timestamp: string;
  op: op_type;
}
interface TransactionList extends Array<HomeTransactionType> {}
const SingleBlock = (props: any) => {
  const { match } = props;
  const [result, setResult] = useState<LatestBlock>();
  const [virtualResult, setVirtualResult] = useState<TransactionList>([]);
  const [loading, setLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getSingleBlock(match.params.id);
        const virtual_trx = await getTransactions(match.params.id,true)
        // const response = await getSingleBlock(72503430);
        // const response = await getSingleBlock(72582622);
        const id = window.location.hash.substring(1); // remove the #
        const element = document.getElementById(id);
        if (element) {
          element.style.backgroundColor = "#cdcdad";
          element.style.padding = "10px 10px 5px";
        }
          setResult(response.block);
          setVirtualResult(virtual_trx.ops)
        } catch (error: any) {
          console.error(error.message);
        }
      setLoading(false);
    };
   
    fetchData();
    
  }, []);
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
          targetElement.style.padding = "10px 10px 5px";
        }

    targetRef.current = targetElement;
  }
}, [currentHash]);
useEffect(() => {
  if (targetRef.current) {
    targetRef.current.style.backgroundColor = '#cdcdad';
    targetRef.current.style.padding = "10px 10px 5px";
  }
}, [targetRef]);

  return (
    <>
      <Theme global={props.global} />
      {loading && <SpinnerEffect />}
      {!loading && 
        result && <div className="head-block-detail py-3">
          <Container>
            {result && <h1>{result.transaction_ids.length}</h1>}
            <Accordion defaultActiveKey={['0','1']} alwaysOpen={true}>
              <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>{_t("common.block")}</b>: {match.params.id}
              </Accordion.Header>
              <Accordion.Body className="pt-0">
                {Object.keys(result).map((key, index) => {
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
         
              </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"> 
                  <Accordion.Header>
                  {_t('common.transactions')} {result.transaction_ids.length}
                  </Accordion.Header>
                  <Accordion.Body>
                    {result.transactions.map((transaction:any,index:number)=>{
                      return(
                       <div key={index+result.transaction_ids[index]} id={result.transaction_ids[index]}>
                         <TransactionOperation trans_no={result.transaction_ids[index]} trans_data={transaction.operations} time={result.timestamp} />
                       </div>
                      )
                    })}    
                  </Accordion.Body>
              </Accordion.Item>
              {virtualResult.length>0 && <Accordion.Item eventKey="2"> 
                  <Accordion.Header>
                    {_t('common.virtual_trx')} {virtualResult.length}
                  </Accordion.Header>
                  <Accordion.Body>
                    {virtualResult.map((transaction:HomeTransactionType,index:number)=>{
                      return(
                       <div key={index+'vt'+transaction.trx_id} id={transaction.trx_id}>
                         <TransactionOperation trans_no={transaction.trx_id} trans_data={[transaction.op]} time={transaction.timestamp} trx_status={transaction.virtual_op} />
                       </div>
                      )
                    })}    
                  </Accordion.Body>
              </Accordion.Item>}
            </Accordion>
     
          </Container>
        </div>
      }
      <BackToTopButton />
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(SingleBlock));
