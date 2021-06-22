import React from "react";
import styles from "./header.module.scss";
import { useLocation, Link } from "react-router-dom";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import { Button, Nav, Navbar } from "react-bootstrap";
import { LogoSvg } from "../uiKit/Logo";
import { SocialButtons } from "../socialButtons";
import { SubMenu } from "./subMenu";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";
import cn from "classnames";
import { AuthorizationModal } from "../authorizationModalGroup/authorizationModal";
import { logout } from "../../store/action/authAction";
import { ExitIcon, PersonIcon } from "@modulz/radix-icons";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatchTyped();
  const {
    userData: { token: isAuth },
  } = useSelectorTyped((state) => state.authentication);

  return (
    <header className={"container"}>
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
                  <span>Личный кабинет</span>
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
            <Button>Вход/Регистрация</Button>
          </LinkContainer>
        )}
      </Navbar>
      <SubMenu />
    </header>
  );
};

export default Header;
