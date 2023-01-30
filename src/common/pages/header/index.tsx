import React, { useState } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { brightnessSvg, hiveLogo, globeImg } from "../../img/svg";
import { languages } from "../../languages";
import { toggleTheme } from "../../store/global/index";
import { _t } from "../../i18n";
import * as ls from "../../util/local-storage";

import { frFlag } from "../../img/flags";

const RESOURCES_MENU = [
  {
    name:_t("nav.resources-about"),
    link:`/about`
  },
  {
    name:_t("nav.resources-api"),
    link:`/api-docs`
  }
];
const BLOCKCHAIN_MENU = [
  {
    name: `${_t("nav.blockchain-vt")}`,
    link: `/transactions`
  },
  { name: `${_t("nav.blockchain-vb")}`, link: `/blocks` },
  { name: _t("nav.blockchain-gov") },
  { name: _t("nav.blockchain-witnesses"), link: `/witnesses` },
  {
    name: _t("nav.blockchain-proposals"),
    link: `/proposals`
  }
];
const TOKENS_MENU = [_t("nav.tokens-hive"), _t("nav.tokens-he"), _t("nav.tokens-speak")];

const AppHeader = (props: any) => {
  // const languageFromLS = ls && ls.get("current-language");
  //       const [lang,setLang] = useState(languageFromLS !== null ? languageFromLS.slice(0, 2).toUpperCase() : "EN")

  const currentLangCode = ls && ls.get("current-language");
  const [lang,setLang] = useState(currentLangCode !== null ? currentLangCode.slice(0, 2).toUpperCase() : "EN")
  const currTheme = useSelector((state: any) => state.global.theme);
  const dispatch = useDispatch();
  const appNav = currTheme === "day" ? "appNav appNav-day" : "appNav appNav-night";
  const appNavText =
    currTheme === "day" ? "logo-icon appNav-text-day" : "logo-icon appNav-text-night";
  const themeContrastColor = currTheme === "day" ? "black" : "white";
  const switchThemeBtn = currTheme === "day" ? "switch-theme-btn-day" : "switch-theme-btn-night";
  const menuVariant = currTheme === "day" ? "light" : "dark";

  return (
    <>
      <Navbar className={appNav} expand="lg" variant={currTheme === "day" ? "light" : "dark"}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span id="logo">
                <div className={appNavText}>
                  <span style={{ height: "24px", overflow: "hidden" }}>{hiveLogo}</span> Hivexplorer
                </div>
              </span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown
                className={currTheme === "day" ? "nav-text-white" : "nav-text-dark"}
                id="nav-dropdown-blockchain"
                title={_t("nav.blockchain")}
              >
                {BLOCKCHAIN_MENU.map((x, ind) => {
                  return (
                    <div key={`${x.name}${ind}`}>
                      {x.name.includes("Governance") && (
                        <NavDropdown.Divider key={`${x.name}${ind}top`} />
                      )}
                      <NavDropdown.Item
                        key={`${x.name}${ind}main`}
                        disabled={x.name.includes("Governance")}
                      >
                        <span>{x.link ? <Link to={x.link}>{x.name}</Link> : x.name}</span>
                      </NavDropdown.Item>
                      {x.name.includes("Governance") && (
                        <NavDropdown.Divider key={`${x.name}${ind}bottom`} />
                      )}
                    </div>
                  );
                })}
              </NavDropdown>
              {/* <NavDropdown className={currTheme==='day'? 'nav-text-white':'nav-text-dark'} id="nav-dropdown-tokens" title={_t("nav.tokens")}>
                    {TOKENS_MENU.map((x,ind)=>(
                       <NavDropdown.Item key={`${x}${ind}`}>
                          <span>{x}</span>
                       </NavDropdown.Item>
                    ))}
                </NavDropdown> */}
              <NavDropdown
                className={currTheme === "day" ? "nav-text-white" : "nav-text-dark"}
                id="nav-dropdown-resources"
                title={_t("nav.resources")}
              >
                {RESOURCES_MENU.map((x, ind) => (
                  <NavDropdown.Item key={`${x.name}${ind}main`}>
                    <span>{x.link ? <Link to={x.link}>{x.name}</Link> : x.name}</span>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <span style={{position:'relative'}}>
              {currentLangCode && <span className="span-language">{currentLangCode.slice(0, 2).toUpperCase()}</span>}
              <NavDropdown
                menuVariant={menuVariant}
                id="nav-dropdown-dark-example"
                title={globeImg(themeContrastColor)}
              >
                {languages.map(({ code, name, country_code, flagImg }) => (
                  <NavDropdown.Item
                    key={country_code}
                    onClick={() => {
                      i18n.changeLanguage(code).then(() => {
                      setLang(code);
                  });
                  ls.set("current-language", code)}}
                    disabled={code === currentLangCode}
                  >
                    <div className="langFlag">
                      <span style={{ opacity: code === currentLangCode ? 0.5 : 1 }}>
                        {" "}
                        {flagImg}
                      </span>{" "}
                      {name}
                    </div>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              </span>
             
            </Nav>
          </Navbar.Collapse>
          <Button
            className={`${switchThemeBtn} dark-light-btn`}
            onClick={() => dispatch(toggleTheme())}
          >
            {brightnessSvg(themeContrastColor)}
          </Button>
        </Container>
      </Navbar>
    </>
  );
};
export default AppHeader;
