import React from "react";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import styles from "./subMenu.module.scss";
import { RoutePath } from "../../../routes/routesConfig";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation, Trans } from "react-i18next";

const SubMenu = () => {
  const { t } = useTranslation();
  return (
    <Container className={styles.sub_menu}>
      <Row>
        <Col md={{ span: 11, offset: 1 }}>
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
                <NavDropdown.Item eventKey="4.1">MRX-invest</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={RoutePath.optional}>
                <NavDropdown.Item eventKey="4.2">Optional</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={RoutePath.priority}>
                <NavDropdown.Item eventKey="4.3">Priority</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown
              title={t("menuHeader.Partnership_with_Mirax")}
              id="nav-dropdown"
            >
              <LinkContainer to={RoutePath.community}>
                <NavDropdown.Item eventKey="1">
                  {t("menuHeader.Community")}
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to={RoutePath.centerOpening}>
                <NavDropdown.Item eventKey="3">
                  <Trans>{t("menuHeader.openCenter")}</Trans>
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title={t("menuHeader.Content")} id="nav-dropdown">
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
        </Col>
      </Row>
    </Container>
  );
};

SubMenu.defaultProps = {};

export default SubMenu;
