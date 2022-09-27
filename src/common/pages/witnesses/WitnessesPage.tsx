
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import { ConfigItems } from '../../../../config';
import { HomeTransactionType } from '../../components/home/TransactionsComponent';
import Theme from '../../components/theme';
import WitnessesTables from './WitnessesTable';

export interface witnessesType {
    id: number
    owner: string
    created: string
    url: string
    votes: string
    virtual_last_update: string
    virtual_position: string
    virtual_scheduled_time:string
    total_missed: number
    last_aslot: number
    last_confirmed_block_num: number
    pow_worker: number
    signing_key:string
    props: {
        account_creation_fee: string
        maximum_block_size: number
        hbd_interest_rate: number
        account_subsidy_budget: number
        account_subsidy_decay: number
    }
    hbd_exchange_rate: {
        base: string
        quote: string
    }
    last_hbd_exchange_update: string
    last_work: string
    running_version: string
    hardfork_version_vote: string
    hardfork_time_vote: string
    available_witness_account_subsidies: number
}
const WitnessesPage = (props:any) => {

    const [allWitnesses,setAllWitness]=useState<witnessesType>()
    const witnesses_url=`${ConfigItems.baseUrl}/api/get_witnesses_by_vote?limit=100`
    console.log(witnesses_url)
    useEffect(()=>{
        axios.get(witnesses_url).then(res=>{
            setAllWitness(res.data)
        })
    },[])
    console.log('witnesses',allWitnesses)
    return (
        <>
             <Theme global={props.global}/>
             
             {allWitnesses &&  <WitnessesTables data={allWitnesses}/>}
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(WitnessesPage));