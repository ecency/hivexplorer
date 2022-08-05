import React from 'react';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {Navbar, Nav,Container,NavDropdown,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './appHeader.scss';
import {brightnessSvg, gbFlag, frFlag, hiveLogo, globeImg} from '../../img/svg';
import { languages } from '../../languages';

const AppHeader = (props:any) => {
    const {t}=useTranslation()
    const currentLangCode=cookies.get('i18next') || 'en'
    const currTheme = useSelector((state:any) => state.global.theme)
   
    return (
      <>
      <Navbar className='appNav' expand="lg">
         <Container>
            <LinkContainer to="/">
            <Navbar.Brand>
              <span id="logo">
                <div className='logo-icon navText'>{hiveLogo} Hivexplorer</div>
              </span>
              </Navbar.Brand>
            </LinkContainer>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto navItems">
             
                <LinkContainer to="/about">
                  <Nav.Link className='navText'>{t("nav.about")}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/service">
                  <Nav.Link className='navText'>{t("nav.service")}</Nav.Link>
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
            <Button className="day-night-btn" onClick={props.themeToggler}>
                {brightnessSvg}
            </Button>
         </Container>
      </Navbar>
      </>
    )
}
export default AppHeader
