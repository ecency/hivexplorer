
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import Theme from '../../components/theme';
import {renderPostBody, setProxyBase, catchPostImage} from "@ecency/render-helper";

import { _t } from '../../i18n';
import { getPermLink } from '../../api/urls';
import { Container } from 'react-bootstrap';

interface EntryType {
    author:string,
    permlink:string,
    category:string,
    title:string,
    body:string
}

const EntryBody = (props:any) => {
    const {body}=props
    
    // {const renderedBody = ;}

    return (
        <>
            <div className="the-entry">
                <div className="entry-body markdown-view user-selectable" dangerouslySetInnerHTML={{__html: renderPostBody(body, false)}}/>
            </div>
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(EntryBody));