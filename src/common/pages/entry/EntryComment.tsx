
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { match, Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import Theme from '../../components/theme';
import './EntryPage.scss'
import { _t } from '../../i18n';
import { getContent } from '../../api/urls';
import { Accordion, Card, Container } from 'react-bootstrap';
import EntryBody from './EntryBody';
import BackToTopButton from '../../components/Buttons/BackToTop';
import { EntryType } from './EntryTypes';
import moment from 'moment';
import parseDate from '../../helper/parse-date';
import EntryVotes from './EntryVotes';
import EntryProperties from './EntryProperties';
import { infoIcon, showLessIcon, showMoreIcon } from '../../img/svg';
import SpinnerEffect from '../../components/loader/spinner';
import ToggleButton from 'react-toggle-button'


const EntryCommentPage = (props: any) => {

    const { match } = props
    const userName = match.params.user_id
    const permLink = match.params.permlink
    const permlink_url = getContent(userName, permLink)
    const [entry, setEntry] = useState<any>()
    const currTheme = useSelector((state: any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const [openBody, setOpenBody] = useState(true)
    const [openProperties, setOpenProperties] = useState(false)
    const [openVotes, setOpenVotes] = useState(false)
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(false);

    useEffect(() => {
        console.log(permlink_url)
        const fetchData = async () =>{
            setLoading(true);
            try {
              const {data: response} = await axios.get(permlink_url);
              setEntry(response);
            } catch (error:any) {
              console.error(error.message);
            }
            setLoading(false);
          }
          fetchData();
    }, [])
    return (
        
        <>
            <Theme global={props.global}/>
            <Container className='entry-content-container'>
            {loading && <SpinnerEffect />}
            {!loading && entry &&  
              
                <>
                 <h2>{entry.title? entry.title:entry.permlink}</h2>
                <div className='entry-header'>
                    <div className='mr-2'>
                        <img className='avatar-img' src={`https://images.ecency.com/u/${entry.author}/avatar`} alt=""/> 
                    </div>
                    <div>
                        <h4><Link to={`/@${entry.author}`}>{entry.author}</Link></h4>
                        <p>{entry.created}</p>
                    </div>
                    <div className='toggle-button-container'>
                        <p>View Raw Format</p>
                            <div>
                            <ToggleButton
                            inactiveLabel={"Off"}
                            activeLabel={"On"}
                            value={state}
                            text="n"
                            onToggle={() => {
                                setState(!state);
                            }}
                        />
                            </div>
                    </div>
                </div>
                <div className='entry-parent'>
                  <Card>
                    <Card.Header>
                        <p className='m-0'>Viewing a response to: <Link to={`/@${entry.parent_author}/${entry.parent_permlink}`}>{`@${entry.parent_author}/${entry.parent_permlink}`}</Link></p>
                    </Card.Header>
                  </Card>
                </div>
                <Accordion className={currTheme==="day"?"accordion-day":"accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                    <Accordion.Item eventKey="0" onClick={()=>setOpenBody(!openBody)}>
                        <Accordion.Header>
                            <span>{_t('entry.body')}</span>
                            <span>{openBody?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                        {entry.body && 
                            <>
                            {state? <p>{entry.body}</p>:<EntryBody body={entry.body} />}
                            
                            </>}
                            
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" onClick={()=>setOpenProperties(!openProperties)}>
                        <Accordion.Header>
                            <span>{_t('entry.properties')}</span>
                            <span>{openProperties?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {entry && <EntryProperties entries={entry}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" onClick={()=>setOpenVotes(!openVotes)}>
                        <Accordion.Header >
                           <span>
                                <span className='mr-2'>{_t('entry.votes')}</span>  {entry.active_votes && <span>{` (${entry.active_votes.length}) `}</span>}
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
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(EntryCommentPage));