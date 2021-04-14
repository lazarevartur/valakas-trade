import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import styles from "./footer.module.scss";
import { LogoSvg } from "../uiKit/Logo";
import { SocialButtons } from "../socialButtons";
import { Link } from "react-router-dom";

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
          <div className={` mb-3 ${styles.copy}`}>© 2021 Mirax</div>
        </Col>
        <Col lg={2}>
          <h6 className={styles.title}>О компании</h6>
          <Nav className="flex-column">
            <Nav.Link className={styles.nav_Link} href="/home">
              О нас
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Контакты
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Как здесь заработать?
            </Nav.Link>
          </Nav>
        </Col>
        <Col lg={2}>
          <h6 className={styles.title}>Партнерские программы</h6>
          <Nav className="flex-column">
            <Nav.Link className={styles.nav_Link} href="/home">
              Token Profit Team
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Coin Profit Team
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home">
              Synergy Profit Team
            </Nav.Link>
          </Nav>
        </Col>
        <Col lg={3}>
          <h6 className={styles.title}>Партнерство с Mirax</h6>
          <Nav className="flex-column">
            <Nav.Link className={styles.nav_Link} href="/home">
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
          <h6 className={styles.title}>Контент</h6>
          <Nav className="flex-column">
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
    </footer>
  );
};

export default Footer;
