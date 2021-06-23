import React from "react";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import styles from "./subMenu.module.scss";
import { RoutePath } from "../../../routes/routesConfig";
import { LinkContainer } from "react-router-bootstrap";

const SubMenu = () => {
  return (
    <Container className={styles.sub_menu}>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Nav activeKey>
            <Nav.Item>
              <LinkContainer to={RoutePath.about}>
                <Nav.Link>О нас</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={RoutePath.howToMakeMoneyHere}>
                <Nav.Link eventKey="link-2">Как сдесь заработать?</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <NavDropdown title="Партнерские програмы" id="nav-dropdown">
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
            <NavDropdown title="Партнерство с Mirax" id="nav-dropdown">
              <LinkContainer to={RoutePath.community}>
                <NavDropdown.Item eventKey="1">
                  Сообщество Mirax
                </NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item eventKey="2">Вакансии</NavDropdown.Item>
              <NavDropdown.Item eventKey="3">
                Открытие индивидуального <br /> консультационного центра
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Контент" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.11">Новости</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Видеоролики</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Мероприятия</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

SubMenu.defaultProps = {};

export default SubMenu;
