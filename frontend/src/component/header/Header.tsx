import React from "react";
import styles from "./header.module.scss";
import { useLocation, Link } from "react-router-dom";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { LogoSvg } from "../uiKit/Logo";
import { SocialButtons } from "../socialButtons";
import { SubMenu } from "./subMenu";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";
import cn from "classnames";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatchTyped();
  const isHome = location.pathname === RoutePath.home;
  const {
    userData: { token: isAuth },
  } = useSelectorTyped((state) => state.authentication);

  return (
    <header className={"container"}>
      <Navbar
        className={cn(styles.header_main_menu, {
          [styles.center_logo]: !isHome,
        })}
      >
        {isHome && (
          <Navbar.Brand href="#home">
            <SocialButtons />
          </Navbar.Brand>
        )}

        <Navbar.Brand>
          <Link to={"/"}>
            <LogoSvg />
          </Link>
        </Navbar.Brand>
        {isHome && (
          <LinkContainer to={RoutePath.auth}>
            <Button>Вход/Регистрация</Button>
          </LinkContainer>
        )}
      </Navbar>
      {isHome && <SubMenu />}
    </header>
  );
};

export default Header;
