
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import Theme from '../../components/theme';
import {renderPostBody, setProxyBase, catchPostImage} from "@ecency/render-helper";

import { _t } from '../../i18n';
import { getPermLink } from '../../api/urls';
import { Container } from 'react-bootstrap';
import { activeVotes } from './EntryTypes';
import {
    Box,
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
   } from '@material-ui/core'
import StringField from '../../components/fields/blockFields/StringField';

const EntryProperties = (props:any) => {
    const {entry}=props
    console.log('entry',entry)
    // {const renderedBody = ;}
    const EntryType=[
        "author",
        "permlink",
        "category",
        "created",
        "json_metadata",
        "last_update",
        "depth",
        "children",
        "last_payout",
        "cashout_time",
        "total_payout_value",
        "curator_payout_value",
        "pending_payout_value",
        "promoted",
        "body_length",
        "author_reputation",
        "root_title",
        "beneficiaries",
        "max_accepted_payout",
        "percent_hbd",
        "post_id",
        "net_rshares",
        "author_curate_reward"
      ]
    return (
        <>
        {entry && Object.keys(entry).map((key,index)=>{
           return(
            <>
            {typeof(entry[key])!=="object" && EntryType.includes(key) &&
                 <StringField key={index} value={entry[key]}  item={key} number={index} label_for='entry'/>
             }
            </>
           )
        })}

        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(EntryProperties));