import React from 'react';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {Navbar, Nav,Container,NavDropdown,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './appHeader.scss';
import {brightnessSvg, gbFlag, frFlag, hiveLogo, globeImg} from '../../img/svg';
import { languages } from '../../languages';
import { toggleTheme } from "../../store/global/index";

const AppHeader = (props:any) => {
    const {t}=useTranslation()
    const currentLangCode=cookies.get('i18next') || 'en'
    const currTheme = useSelector((state:any) => state.global.theme)
    const dispatch = useDispatch()
    const appNav = currTheme === 'day' ? 'appNav appNav-day' : 'appNav appNav-night';
    const appNavText = currTheme === 'day' ? 'logo-icon appNav-text-day' : 'logo-icon appNav-text-night';
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';

    return (
      <>
      <Navbar className={appNav} expand="lg">
         <Container>
            <LinkContainer to="/">
            <Navbar.Brand>
              <span id="logo">
                <div className={appNavText}>{hiveLogo} Hivexplorer</div>
              </span>
              </Navbar.Brand>
            </LinkContainer>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
             
                <LinkContainer  activeStyle={{ color: themeContrastColor }} to="/about">
                  <Nav.Link active={false} className={appNavText}>{t("nav.about")}</Nav.Link>
                </LinkContainer>
                <LinkContainer  activeStyle={{ color: themeContrastColor }}  to="/service">
                  <Nav.Link className={appNavText}>{t("nav.service")}</Nav.Link>
                </LinkContainer>

                <NavDropdown id="nav-dropdown-dark-example" title={globeImg}>
                    {languages.map(({code,name,country_code,flagImg})=>(
                       <NavDropdown.Item key={country_code} onClick={()=>i18next.changeLanguage(code)} disabled={code === currentLangCode}>
                        <div className='langFlag' >
                          <span style={{opacity:code===currentLangCode? 0.5:1}}> {flagImg}</span> {name}
                        </div>
                       </NavDropdown.Item>
                    ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className="switch-menu">
              <Button className="day-night-btn switch-theme btn-sm" onClick={() => dispatch(toggleTheme())}>
                {brightnessSvg}
              </Button>
            </div>
         </Container>
      </Navbar>
      </>
    )
}
export default AppHeader
