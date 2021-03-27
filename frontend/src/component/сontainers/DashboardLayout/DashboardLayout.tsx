import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Nav,
  OverlayTrigger,
  Row,
  Tab,
  Tooltip,
  Card,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import "./dashboardLayout.scss";

interface Layout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Layout> = ({
  children,
}): React.ReactElement => {
  return (
    <Container className={"dashboard-layout"}>
      <Row className={"mt-3"}>
        <Col lg={3} className={"dashboard-sidebar"}>
          <Card>
            <Card.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <LinkContainer to={`${RoutePath.dashboard}`}>
                      <Nav.Link>Рабочий стол</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to={`${RoutePath.team}`}>
                      <Nav.Link>Моя команда</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to={`${RoutePath.profile}`}>
                      <Nav.Link>Личные данные</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                </Nav>
              </Tab.Container>
              <div className={"mt-3"}>
                <OverlayTrigger
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-${"top"}`}>
                      Описание Пункта. Коротое
                    </Tooltip>
                  }
                >
                  <strong>Статус менеджера</strong>
                </OverlayTrigger>

                <Alert variant={"secondary"}>Начальный</Alert>
              </div>
              <Button variant="outline-success" className={"mt-3"}>
                Зарегистрировать нового партнера
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={9}>{children}</Col>
      </Row>
    </Container>
  );
};

DashboardLayout.defaultProps = {};

export default DashboardLayout;
