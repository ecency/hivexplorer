
import React, { useEffect, useState } from 'react';
 import axios from 'axios';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import Theme from '../../components/theme';
import { Container } from 'react-bootstrap';
import ProposalCard from './ProposalCard';
import './proposalsPage.scss'
import { getContent,getSingleProposal } from '../../api/urls';
import { _t } from '../../i18n';
import { proposalsType } from './ProposalsPage';
import { EntryType } from '../entry/EntryTypes';
import { renderPostBody, setProxyBase, catchPostImage } from "@ecency/render-helper";
import SpinnerEffect from '../../components/loader/spinner';


const SingleProposalPage = (props: any) => {
    const { match } = props
    const proposalId = match.params.id
    const [singleProposal, setSingleProposal] = useState<proposalsType>()
    const [loading, setLoading] = useState(true);
    let find_proposal = getSingleProposal(proposalId)
    const [entry, setEntry] = useState<EntryType>()
    useEffect(() => {

        console.log(find_proposal)
        axios.get(find_proposal).then(res => {
            setSingleProposal(res.data.proposals)

        })
    }, [])
    useEffect(() => {
        if (singleProposal) {
            const fetchData = async () =>{
                setLoading(true);
                try {
                  const response= await getContent(singleProposal[0].creator, singleProposal[0].permlink);
                  setEntry(response);
                } catch (error:any) {
                  console.error(error.message);
                }
                setLoading(false);
              }
              fetchData();
        }
    }, [singleProposal])
    return (
        <>
            <Theme global={props.global} />
            <Container className='proposal-container'>
                <div className='proposal-header text-center'>
                    <h1>Proposal</h1>
                    <p><Link to={`/proposals`}>{_t('proposals.see_all')}</Link></p>
                </div>
                <div>
                    {singleProposal && <ProposalCard proposalData={singleProposal[0]} />}
                </div>
                {loading && <SpinnerEffect />}
                {!loading && entry && <div className="the-entry">
                    <div className="entry-body markdown-view user-selectable" dangerouslySetInnerHTML={{ __html: renderPostBody(entry.body, false) }} />
                </div>}
            </Container>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(SingleProposalPage));