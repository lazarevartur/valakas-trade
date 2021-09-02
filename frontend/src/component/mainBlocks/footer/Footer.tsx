import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import styles from "./footer.module.scss";
import { LogoSvg } from "../../uiKit/Logo";
import { SocialButtons } from "../../socialButtons";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={"container"}>
      <Row className={styles.footer}>
        <Col lg={3}>
          <Link to={"/"}>
            <LogoSvg className={"mb-3"} />
          </Link>
          <p>{t("footer.title")}</p>
          <SocialButtons className={"mb-3"} />
        </Col>
        <Col lg={2}>
          <h6 className={styles.title}>{t("footer.about_company")}</h6>
          <Nav className="flex-column" activeKey>
            <LinkContainer to={RoutePath.about}>
              <Nav.Link className={styles.nav_Link}>
                {t("footer.about_us")}
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={RoutePath.contacts}>
              <Nav.Link className={styles.nav_Link} href="/home">
                {t("footer.Contacts")}
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={RoutePath.howToMakeMoneyHere}>
              <Nav.Link className={styles.nav_Link}>
                {t("footer.How_make_money")}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={RoutePath.faq}>
              <Nav.Link className={styles.nav_Link}>FAQ</Nav.Link>
            </LinkContainer>
          </Nav>
        </Col>
        <Col lg={2}>
          <h6 className={styles.title}> {t("footer.PARTNERSHIP_PROGRAMS")}</h6>
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
          <h6 className={styles.title}>{t("footer.PARTNERSHIP_MIRAX")}</h6>
          <Nav className="flex-column" activeKey>
            <LinkContainer to={RoutePath.community}>
              <Nav.Link className={styles.nav_Link} href="/">
                {t("footer.Mirax_Community")}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={RoutePath.centerOpening}>
              <Nav.Link className={styles.nav_Link} href="/home">
                {t("footer.open_center")}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Col>
        <Col lg={2}>
          <Nav className="flex-column" activeKey>
            <h6 className={styles.title}> {t("footer.CONTENT")}</h6>
            <LinkContainer to={RoutePath.news}>
              <Nav.Link className={styles.nav_Link}>
                {" "}
                {t("footer.News")}
              </Nav.Link>
            </LinkContainer>

            <Nav.Link className={styles.nav_Link} href="/home" disabled>
              {t("footer.Videos")}
            </Nav.Link>
            <Nav.Link className={styles.nav_Link} href="/home" disabled>
              {t("footer.Events")}
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <div className={` mb-3 ${styles.copy}`}>{t("footer.reserved")}</div>
        </Col>
        <Col lg={5} className={styles.privacyPolicy}>
          <LinkContainer to={RoutePath.termsUse}>
            <a className={` mb-3 ${styles.privacy}`}>{t("footer.Terms")}</a>
          </LinkContainer>
          <LinkContainer to={RoutePath.privacyPolicy}>
            <a className={` mb-3 ${styles.privacy}`}>{t("footer.Privacy")}</a>
          </LinkContainer>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
