import React from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import styles from "./subMenu.module.scss";

const SubMenu = () => {
  return (
    <Container className={styles.sub_menu}>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/home">О нас</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Как сдесь заработать?</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Партнерские програмы" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                Token Profit Team
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                Coin Profit Team
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Synergy Profit Team
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Партнерство с Mirax" id="nav-dropdown">
              <NavDropdown.Item eventKey="1">Сообщество Mirax</NavDropdown.Item>
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
