import React from 'react';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {Navbar, Nav,Container,NavDropdown,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './appHeader.scss';
import {brightnessSvg, gbFlag, frFlag, hiveLogo} from '../../img/svg';
import { toggleTheme } from "../../store/global/index";
import SVG from 'react-inlinesvg'


const languages=[
  {
    code:'fr',
    name:'Français',
    country_code:"fr",
    flagImg: frFlag
  },
  {
    code:'en',
    name:'English',
    country_code:"gb",
    flagImg: gbFlag
  },
]

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

                <NavDropdown  id="nav-dropdown-dark-example" 
                title={
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"  className="bi bi-globe" fill={themeContrastColor} viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                  </svg>}
                >
                    {languages.map(({code,name,country_code,flagImg})=>(
                       <NavDropdown.Item key={country_code} onClick={()=>i18next.changeLanguage(code)} disabled={code === currentLangCode}>
                        <div className='langFlag' >
                          {flagImg} {name}
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
