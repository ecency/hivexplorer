
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import Theme from '../../components/theme';
import { Container } from 'react-bootstrap';
import { Paper } from '@material-ui/core';
import ProposalCard from './ProposalCard';
import './proposalsPage.scss'
import { getSingleProposal } from '../../api/urls';
import { _t } from '../../i18n';
import { proposalsType } from './ProposalsPage';


const SingleProposalPage = (props:any) => {
    const {match} = props
   
    const [singleProposal,setSingleProposal]=useState<proposalsType>()
    useEffect(()=>{
        const proposalId=match.params.id
        let find_proposal=getSingleProposal(proposalId)
       axios.get(find_proposal).then(res=>{
        setSingleProposal(res.data.proposals)
       })
    },[singleProposal])
    return (
        <>
             <Theme global={props.global}/>
             <Container className='proposal-container'>
             <div className='proposal-header text-center'>
                <h1>Proposal</h1>
                <p><Link to={`/proposals`}>{_t('proposals.see_all')}</Link></p>
             </div>
             <div>
               {singleProposal && <ProposalCard  proposalData={singleProposal[0]} />}
             </div>
             </Container>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(SingleProposalPage));