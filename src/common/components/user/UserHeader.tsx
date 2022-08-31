
import { Tab, Tabs } from '@material-ui/core';
import React,{useEffect} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserHeader.scss'


const UserHeader = (props:any) => {
    console.log(props.id)
    console.log('profile props',props.profile)
   
    return (
       <Card className='cover-profile-tabs-container'>
            <div className='cover-profile-container' style={{backgroundImage:`url(${props.profile.cover_image})`}}>
                <Row className="userInfoProfileRow m-0">
                    <div className='profile-image-container'>
                        <img onError={(e:any)=>{e.target.src=`https://images.ecency.com/u/${props.name}/avatar`}} className='profile-image-user' src={`${props.profile.profile_image}`} alt="" />
                    </div>
                    <div className='profile-user-info'>
                        <div className='grey-div'>
                            <div>
                                <h4 className='text-light text-capitalize'>{props.profile.name? props.profile.name:props.name}</h4>
                                <h6 className='text-light text-capitalize'>ID: {props.id}</h6>
                                {props.profile.about && <h6 className='text-light text-capitalize'>About: {props.profile.about}</h6>}
                            </div>
                        </div>
                    </div>
         
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={10}> 
                    </Col>
                </Row>
            </div>
       </Card>
    )

};
export default UserHeader;