
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { match,Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import Theme from '../../components/theme';
import {renderPostBody, setProxyBase, catchPostImage} from "@ecency/render-helper";
import './EntryPage.scss'
import { _t } from '../../i18n';
import { getPermLink } from '../../api/urls';
import { Accordion, Container } from 'react-bootstrap';
import EntryBody from './EntryBody';
import BackToTopButton from '../../components/Buttons/BackToTop';
import { EntryType } from './EntryTypes';
import moment from 'moment';
import parseDate from '../../helper/parse-date';
import EntryVotes from './EntryVotes';
import EntryProperties from './EntryProperties';
import { infoIcon, showLessIcon, showMoreIcon } from '../../img/svg';



const EntryPage = (props:any) => {
    
    const {match} = props
    const userName=match.params.user_id
    const permLink=match.params.permlink
    const permlink_url=getPermLink(userName,permLink)
    const [entry,setEntry]=useState<EntryType>()
    const currTheme = useSelector((state:any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const [openBody,setOpenBody]=useState(true)
    const [openProperties,setOpenProperties]=useState(false)
    const [openVotes,setOpenVotes]=useState(false)

    useEffect(()=>{
        console.log(permlink_url)
        axios.get(permlink_url).then(res=>{
            setEntry(res.data)
        })
    },[])
    // {const renderedBody = ;}
    
    return (
        
        <>
            <Theme global={props.global}/>
            <Container className='entry-content-container'>
            {entry &&  
              
                <>
                <div className='entry-header'>
                    <div className='mr-2'>
                        <img className='avatar-img' src={`https://images.ecency.com/u/${entry.author}/avatar`} alt=""/> 
                    </div>
                    <div>
                        <h4><Link to={`/@${entry.author}`}>{entry.author}</Link></h4>
                        <p>{entry.created}</p>
                    </div>
                </div>
                <Accordion className={currTheme==="day"?"accordion-day":"accordion_night"} defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0" onClick={()=>setOpenBody(!openBody)}>
                        <Accordion.Header>
                            <span>Body</span>
                            <span>{openBody?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {entry.body && <EntryBody body={entry.body} />}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" onClick={()=>setOpenProperties(!openProperties)}>
                        <Accordion.Header>
                            <span>Properties</span>
                            <span>{openProperties?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {entry && <EntryProperties entry={entry}/> }
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" onClick={()=>setOpenVotes(!openVotes)}>
                        <Accordion.Header >
                           <span>
                                <span className='mr-2'>Votes</span>  {entry.active_votes && <span>{` (${entry.active_votes.length}) `}</span>}
                            </span>
                           <span>{openVotes?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                           {entry.active_votes &&  <EntryVotes votes={entry.active_votes} />}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </>
            }
           </Container>
           <BackToTopButton />
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(EntryPage));