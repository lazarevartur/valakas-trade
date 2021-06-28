import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import styles from "./footer.module.scss";
import { LogoSvg } from "../../uiKit/Logo";
import { SocialButtons } from "../../socialButtons";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";

const Footer = () => {
  return (
    <footer className={"container"}>
      <Row className={styles.footer}>
        <Col lg={3}>
          <Link to={"/"}>
            <LogoSvg className={"mb-3"} />
          </Link>
          <p>
            Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium
            temporibus voluptatibus pariatur.
          </p>
          <SocialButtons className={"mb-3"} />
        </Col>
        <Col lg={2}>
          <h6 className={styles.title}>О компании</h6>
          <Nav className="flex-column" activeKey>
            <LinkContainer to={RoutePath.about}>
              <Nav.Link className={styles.nav_Link}>О нас</Nav.Link>
            </LinkContainer>

            <Nav.Link className={styles.nav_Link} href="/home">
              Контакты
            </Nav.Link>
            <LinkContainer to={RoutePath.howToMakeMoneyHere}>
              <Nav.Link className={styles.nav_Link}>
                Как здесь заработать?
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Col>
        <Col lg={2}>
          <h6 className={styles.title}>Партнерские программы</h6>
          <Nav className="flex-column" activeKey>
            <LinkContainer to={RoutePath.binarProfitTeam}>
              <Nav.Link className={styles.nav_Link}>MRX-invest</Nav.Link>
            </LinkContainer>
            <LinkContainer to={RoutePath.optional}>
              <Nav.Link className={styles.nav_Link}>Optional</Nav.Link>
            </LinkContainer>
            <LinkContainer to={RoutePath.priority}>
              <Nav.Link className={styles.nav_Link}>Priority</Nav.Link>
            </LinkContainer>
          </Nav>
        </Col>
        <Col lg={3}>
          <h6 className={styles.title}>Партнерство с Mirax</h6>
          <Nav className="flex-column" activeKey>
            <Nav.Link className={styles.nav_Link} href="/">
              Сообщество Mirax
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Вакансии
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Открытие индивидуального консультационного центра
            </Nav.Link>
          </Nav>
        </Col>
        <Col lg={2}>
          <Nav className="flex-column">
            <h6 className={styles.title}>Контент</h6>
            <Nav.Link className={styles.nav_Link} href="/home">
              Новости
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Видеоролики
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Мероприятия
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <div className={` mb-3 ${styles.copy}`}>
            Все права защищены © 2021 Mirax
          </div>
        </Col>
        <Col lg={5} className={styles.privacyPolicy}>
          <LinkContainer to={RoutePath.termsUse}>
            <a className={` mb-3 ${styles.privacy}`}>
              Пользовательское соглашение
            </a>
          </LinkContainer>
          <LinkContainer to={RoutePath.privacyPolicy}>
            <a className={` mb-3 ${styles.privacy}`}>
              Политика конфиденциальности
            </a>
          </LinkContainer>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
