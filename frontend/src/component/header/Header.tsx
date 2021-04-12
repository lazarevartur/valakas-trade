import React from "react";
import styles from "./header.module.scss";
import { useLocation } from "react-router-dom";
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
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatchTyped();
  const {
    userData: { token: isAuth },
  } = useSelectorTyped((state) => state.authentication);

  return (
    <header>
      <Container>
        <Navbar className={styles.header_main_menu}>
          <Navbar.Brand href="#home">
            <SocialButtons />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <LogoSvg />
          </Navbar.Brand>
          <Button>Вход/Регистрация</Button>
        </Navbar>
        <SubMenu />
      </Container>
    </header>
  );
};

export default Header;
