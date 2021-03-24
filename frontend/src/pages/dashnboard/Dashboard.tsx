import React from "react";
import { Row, Col, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../component/сontainers/DashboardLayout";
import { ProfitabilityTable } from "../../component/profitabilityTable";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Row>
        <Col lg={4}>
          <Card className={"text-center"}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
              className={"img"}
            />
            <Card.Body>
              <Card.Title>Ваш профиль:</Card.Title>
              <Card.Text>Ваш ID: UA199664431</Card.Text>
              <Card.Text>admikruss@gmail.com</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Alert variant={"danger"}>Не верифицирован</Alert>
              <Link to={"/verification"}>Пройти верификацию</Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <Card.Header>Рабочий стол</Card.Header>
            <Card.Body>
              <Row className={"mb-3"}>
                <Col lg={6}>Общая сумма инвестицей</Col>
                <Col lg={6}>
                  <strong>1000$</strong>
                </Col>
              </Row>
              <Row className={"mb-3"}>
                <Col lg={6}>Операционных кошельков</Col>
                <Col lg={6}>
                  {" "}
                  <strong>Уточнить инфу</strong>
                </Col>
              </Row>
              <Row className={"mb-3"}>
                <Col lg={6}>По каждей программе</Col>
                <Col lg={6}>
                  <strong>Уточнить инфу</strong>
                </Col>
              </Row>
              <Row className={"mb-3"}>
                <Col lg={6}>Реферальные с дохода партнёров:</Col>
                <Col lg={6}>
                  <strong>0 уровней</strong>
                </Col>
              </Row>
              <Row className={"mb-3"}>
                <Col lg={6}>Ваша реферальная ссылка:</Col>
              </Row>
              <Row className={"mb-3"}>
                <Col lg={12}>
                  <strong>
                    <Card>
                      <Card.Body>
                        https://antares.trade/personal/?signup=UA199664431
                      </Card.Body>
                    </Card>
                  </strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className={"mt-3"}>
        <Col>
          <ProfitabilityTable />
        </Col>
      </Row>
    </DashboardLayout>
  );
};

Dashboard.defaultProps = {};

export default Dashboard;
