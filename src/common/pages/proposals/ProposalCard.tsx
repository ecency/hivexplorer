
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match,Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import Theme from '../../components/theme';
import { Card, Container } from 'react-bootstrap';
import {  Paper } from '@material-ui/core';
import { _t } from '../../i18n';
import { spawn } from 'child_process';
import moment from 'moment';
import { getAccount } from '../../api/urls';
import parseAsset from '../../helper/parse-asset';
import { ClippedLink } from '../../img/svg';

export interface proposalsType {
    id: Number
    proposal_id: number
    creator: string
    receiver:string
    start_date: string
    end_date: string
    daily_pay: {
        amount:string
        precision: number
        nai: string
    }
    subject: string
    permlink: string
    total_votes: number | string
    status: string
}
const ProposalCard = (props:any) => {

    const {proposalData}=props
    const {
        id,
        proposal_id,
        creator,
        receiver,
        subject,
        permlink,
        start_date,
        end_date,
        status,
        total_votes
    }:proposalsType=proposalData
    const currTheme = useSelector((state:any) => state.global.theme)
    const readDate=(date:string)=>{
        return  moment.utc(date).format("LL");
    }
    return (
        <>
        {proposalData &&  
        <Card className={currTheme==="day"?'proposal_card proposal_card_day':'proposal_card proposal_card_night'}> 
            <Card.Body>
                {creator && <p className='mb-2'>
                <img className='avatar-img' src={`https://images.ecency.com/u/${creator}/avatar`} alt="" />
                {` ${_t("common.by")} `}
                <Link to={`/@${creator}`}>{creator}</Link>
                    {receiver && receiver !== creator &&
                    <>
                     {` ${_t("common.for")} `}
                     <Link to={`/@${receiver}`}>{receiver}</Link>
                    </>
                }
                </p>}
                {/* Proposal Subject */}
               <h5 className='mb-3'>
               <Link to={`/proposals/${proposal_id}`}>
                    {subject && <span>{subject}</span>}
                    {` `}
                    {proposal_id && <span>{`#${proposal_id}`}</span>}
                </Link>
               </h5>
               <p>
                {status && 
                    <span className={status==="active"? "status-span status-active":status==="expired"? "status-span status-expired":"status-span status-inactive"}>
                        {status==="inactive"? `${_t('proposals.upcoming')}`:`${_t(`proposals.${status}`)}`}
                    </span>
                }
                <span className='pl-2'>
                    {start_date && <>{readDate(start_date)}{` - `}{readDate(end_date)}</>}
                </span>
               </p>
               <p>
                {permlink &&  <Link to={`/@${creator}/${permlink}`}>
                    <span>{ClippedLink()}</span>
                    {` `}
                    <span>{permlink}</span>
                </Link>}
               </p>
               <p>
                {total_votes && <span>Votes: {total_votes.toString().length<6? total_votes.toString() :`${total_votes.toString().slice(0,-6)}m`}</span>}
               </p>

            </Card.Body>
         </Card>}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(ProposalCard));