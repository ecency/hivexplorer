
import React from 'react';
import { connect } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import {renderPostBody} from "@ecency/render-helper";

import { _t } from '../../i18n';

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