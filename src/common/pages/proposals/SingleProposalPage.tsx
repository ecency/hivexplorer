
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
import { getPermLink, getSingleProposal } from '../../api/urls';
import { _t } from '../../i18n';
import { proposalsType } from './ProposalsPage';
import { EntryType } from '../entry/EntryTypes';
import {renderPostBody, setProxyBase, catchPostImage} from "@ecency/render-helper";


const SingleProposalPage = (props:any) => {
    const {match} = props
    const proposalId=match.params.id
    const [singleProposal,setSingleProposal]=useState<proposalsType>()
    let find_proposal=getSingleProposal(proposalId)
    const [entry,setEntry]=useState<EntryType>()
    useEffect(()=>{
      
      console.log(find_proposal) 
       axios.get(find_proposal).then(res=>{
        setSingleProposal(res.data.proposals)
   
       })
    },[singleProposal])
    useEffect(()=>{
       if(singleProposal){
        const permlink_url=getPermLink(singleProposal[0].creator,singleProposal[0].permlink)
        console.log(permlink_url)
        axios.get(permlink_url).then(resp=>{
            setEntry(resp.data)
        })
       }
    },[singleProposal,entry])
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
            {entry &&  <div className="the-entry">
                <div className="entry-body markdown-view user-selectable" dangerouslySetInnerHTML={{__html: renderPostBody(entry.body, false)}}/>
            </div>}
             </Container>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(SingleProposalPage));