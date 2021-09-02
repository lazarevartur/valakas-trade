import React, { useCallback, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useLocation, Link } from "react-router-dom";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { LogoSvg } from "../uiKit/Logo";
import mobileLogo from "../../assets/svg/icon/mobileIconMirax.svg";
import { SocialButtons } from "../socialButtons";
import { SubMenu } from "./subMenu";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";
import cn from "classnames";
import { AuthorizationModal } from "../authorizationModalGroup/authorizationModal";
import { logout } from "../../store/action/authAction";
import { ExitIcon, PersonIcon } from "@modulz/radix-icons";
import { calculateDeviceInfo } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import { FullWidthRow } from "../../layouts/fullWidthRow";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatchTyped();
  const {
    userData: { token: isAuth },
  } = useSelectorTyped((state) => state.authentication);
  const [deviceInfo, setDeviceInfo] = useState(
    calculateDeviceInfo(window.innerWidth)
  );
  const onResize = useCallback(() => {
    const newDeviceInfo = calculateDeviceInfo(window.innerWidth);

    if (deviceInfo.device !== newDeviceInfo.device) {
      setDeviceInfo(newDeviceInfo);
    }
  }, [deviceInfo]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [deviceInfo, onResize]);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {deviceInfo.isMobile || deviceInfo.isTablet ? (
        <header className={cn(styles.visible_mobile)}>
          <AuthorizationModal />
          <Navbar collapseOnSelect expand="lg">
            <div className={cn("container", styles.main_menu)}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <LinkContainer to={RoutePath.home}>
                <Navbar.Brand>
                  <Image src={mobileLogo} />
                </Navbar.Brand>
              </LinkContainer>

              {isAuth ? (
                <Nav activeKey navbar={true}>
                  <Nav.Item>
                    <LinkContainer to={RoutePath.dashboard}>
                      <Nav.Link className={styles.nav_item}>
                        <PersonIcon width={24} height={24} />
                        <span>{t("ui.personalArea")}</span>
                      </Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                </Nav>
              ) : (
                <LinkContainer to={`${location.pathname}${RoutePath.login}`}>
                  <Button className={styles.button}>
                    {t("ui.sign-in_sign_up")}
                  </Button>
                </LinkContainer>
              )}
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav activeKey>
                <Nav.Item>
                  <LinkContainer to={RoutePath.about}>
                    <Nav.Link>{t("menuHeader.about")}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to={RoutePath.howToMakeMoneyHere}>
                    <Nav.Link eventKey="link-2">
                      {t("menuHeader.How_money_here")}
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <NavDropdown
                  title={t("menuHeader.Partnership_programs")}
                  id="nav-dropdown"
                >
                  <LinkContainer to={RoutePath.binarProfitTeam}>
                    <NavDropdown.Item eventKey="4.1">
                      MRX-invest
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={RoutePath.optional}>
                    <NavDropdown.Item eventKey="4.2">Optional</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={RoutePath.priority}>
                    <NavDropdown.Item eventKey="4.3">Priority</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="Партнерство с Mirax" id="nav-dropdown">
                  <LinkContainer to={RoutePath.community}>
                    <NavDropdown.Item eventKey="1">
                      {t("menuHeader.Community")}
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to={RoutePath.centerOpening}>
                    <NavDropdown.Item eventKey="3">
                      {t("menuHeader.openCenter")}
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="Контент" id="nav-dropdown">
                  <LinkContainer to={RoutePath.news}>
                    <NavDropdown.Item eventKey="4.11">
                      {t("menuHeader.news")}
                    </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item eventKey="4.2" disabled>
                    {t("menuHeader.Videos")}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3" disabled>
                    {t("menuHeader.activity")}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      ) : (
        <header className={cn("container")}>
          <AuthorizationModal />
          <Navbar className={cn(styles.header_main_menu)}>
            <Navbar.Brand href="#home">
              <SocialButtons />
            </Navbar.Brand>
            <Navbar.Brand className={styles.logo}>
              <Link to={"/"}>
                <LogoSvg />
              </Link>
            </Navbar.Brand>
            {isAuth ? (
              <Nav activeKey navbar={true}>
                <Nav.Item>
                  <LinkContainer to={RoutePath.dashboard}>
                    <Nav.Link className={styles.nav_item}>
                      <PersonIcon width={24} height={24} />
                      <span>{t("ui.personalArea")}</span>
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => dispatch(logout())}
                    className={styles.nav_item}
                  >
                    <ExitIcon width={24} height={24} />
                    <span>Выход</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            ) : (
              <LinkContainer to={`${location.pathname}${RoutePath.login}`}>
                <Button>{t("ui.sign-in_sign_up")}</Button>
              </LinkContainer>
            )}
          </Navbar>
          <SubMenu />
          <div style={{ position: "fixed", zIndex: 10000 }}>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
