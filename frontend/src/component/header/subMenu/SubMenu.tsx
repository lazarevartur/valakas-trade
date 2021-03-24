import React from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import "./subMenu.scss";

const SubMenu = () => {
  return (
    <Container className={"mt-3 sub-menu"}>
      <Row>
        <Col md={3}>
          <DropdownButton
            menuAlign="right"
            title="О компании"
            id="dropdown-menu-align-right"
            variant="light"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col md={3}>
          <DropdownButton
            menuAlign="right"
            title="О компании"
            id="dropdown-menu-align-right"
            variant="light"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col md={3}>
          <DropdownButton
            menuAlign="right"
            title="О компании"
            id="dropdown-menu-align-right"
            variant="light"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col md={3}>
          <DropdownButton
            menuAlign="right"
            title="О компании"
            id="dropdown-menu-align-right"
            variant="light"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
};

SubMenu.defaultProps = {};

export default SubMenu;
