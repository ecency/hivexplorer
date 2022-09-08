
import { Tab, Tabs } from '@material-ui/core';
import React,{useEffect} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { facebookIcon, instagramIcon, twitterIcon,gitHubIcon, websiteIcon, youtubeIcon } from '../../img/svg';
import './UserHeader.scss'


const UserHeader = (props:any) => {
    const {name,metaData,id}=props
    const metaProfile=metaData.profile
    const currTheme = useSelector((state:any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? '#535e65' : 'white';
   
    return (
       <Card className='cover-profile-tabs-container'>
            <div className='cover-profile-container' style={{backgroundImage:`url(${metaProfile.cover_image})`}}>
                <Row className="userInfoProfileRow m-0">
                    <div className='profile-image-container'>
                        <img onError={(e:any)=>{e.target.src=`https://images.ecency.com/u/${name}/avatar`}} className='profile-image-user' src={`${metaProfile.profile_image}`} alt="" />
                    </div>
                    <div className='profile-user-info'>
                        <div className='grey-div'>
                            <div>
                                <h4 className='text-light text-capitalize'>{metaProfile.name? metaProfile.name:name}</h4>
                                <h6 className='text-light text-capitalize'>ID: {id}</h6>
                                {metaProfile.about && <h6 className='text-light text-capitalize'>About: {metaProfile.about}</h6>}
                            </div>
                        </div>
                    </div>
         
                </Row>
                <Row className='user-profile-feature-row'>
                    <div className='user-links-container'>
                        <ul className='user-link-list-ul'>
                            {metaProfile.facebook && 
                            <li className='user-link-list'>
                                <a href={`https://www.facebook.com/${metaProfile.facebook}`} target={'_blank'}>
                                    <span className={currTheme === 'day' ? 'icon-bg-white' : 'icon-bg-dark'}>{facebookIcon(themeContrastColor)}</span><span className='link-text'>FaceBook</span>
                                </a>
                            </li>}
                            {metaProfile.twitter && 
                            <li className='user-link-list'>
                                <a href={`https://www.twitter.com/${metaProfile.twitter}`} target={'_blank'}>
                                    <span className={currTheme === 'day' ? 'icon-bg-white' : 'icon-bg-dark'}>{twitterIcon(themeContrastColor)}</span><span className='link-text'>Twitter</span>
                                </a>
                            </li>}
                            {metaProfile.instagram && 
                            <li className='user-link-list'>
                                <a href={`https://www.instagram.com/${metaProfile.instagram}`} target={'_blank'}>
                                    <span className={currTheme === 'day' ? 'icon-bg-white' : 'icon-bg-dark'}>{instagramIcon(themeContrastColor)}</span><span className='link-text'>Instagram</span>
                                </a>
                            </li>}
                            {metaProfile.youtube && 
                            <li className='user-link-list'>
                                <a href={`https://www.facebook.com/${metaProfile.youtube}`} target={'_blank'}>
                                    <span className={currTheme === 'day' ? 'icon-bg-white' : 'icon-bg-dark'}>{youtubeIcon(themeContrastColor)}</span><span className='link-text'>Youtube</span>
                                </a>
                            </li>}
                            {metaProfile.github && 
                            <li className='user-link-list'>
                                <a href={`https://github.com/${metaProfile.github}`} target={'_blank'}>
                                <span className={currTheme === 'day' ? 'icon-bg-white' : 'icon-bg-dark'}>{gitHubIcon(themeContrastColor)}</span><span className='link-text'>Github</span>
                                </a>
                            </li>}
                            {metaProfile.website && 
                            <li className='user-link-list'>
                                <a href={`${metaProfile.website}`} target={'_blank'}>
                                <span className={currTheme === 'day' ? 'icon-bg-white' : 'icon-bg-dark'}>{websiteIcon(themeContrastColor)}</span><span className='link-text'>Website</span>
                                </a>
                            </li>}
                        </ul>
                    </div>
                    <div>
                        Progress Bars
                    </div>
                </Row>
            </div>
       </Card>
    )

};
export default UserHeader;

function githubIcon(themeContrastColor: string): React.ReactNode {
    throw new Error('Function not implemented.');
}
