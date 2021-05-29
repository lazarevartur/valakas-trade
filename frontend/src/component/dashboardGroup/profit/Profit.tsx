import React from "react";
import styles from "./profit.module.scss";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { DashboardTitleBlock } from "../../../layouts/dashboardTitleBlock";
import { ProfitabilityTable } from "../../profitabilityTable";
import { CustomInput } from "../../uiKit/customInput";
import Chart from "../../uiKit/chart/Chart";

interface ProfitProps {
  totalEarned?: boolean;
}

const Profit: React.FC<ProfitProps> = () => {
  return (
    <Container>
      <DashboardTitleBlock title={"Доходность"} />
      <div className={styles.profit}>
        <Row className={styles.row}>
          <Col lg={6}>
            <p>
              Общий показатель доходности по инвестийциям за{" "}
              <span>последню неделю</span>
            </p>
          </Col>
          <Col lg={6}>
            <span>$ 19773</span>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col lg={6}>
            <p>
              Общий показатель доходности по реферальной программе за{" "}
              <span>всё время</span>
            </p>
          </Col>
          <Col lg={6}>
            <span>$ 19773</span>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col lg={6}>
            <p>
              Общий показатель доходности по реферальной программе за{" "}
              <span>последню неделю</span>
            </p>
          </Col>
          <Col lg={6}>
            <span>$ 19773</span>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Button className={styles.button}>Пополнить</Button>
          </Col>
        </Row>
      </div>
      <DashboardTitleBlock title={"Статистика"} />
      <div className={styles.statistics}>
        <Row>
          <Col lg={6}>
            <Chart />
          </Col>
          <Col lg={5}>
            <ListGroup className={styles.list_group}>
              <ListGroup.Item className={styles.first}>
                First characteristic <span>1666$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.second}>
                Second characteristic <span>666$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.third}>
                Third characteristic <span>166$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.fourth}>
                Fourth characteristic <span>66$</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <DashboardTitleBlock title={"Таблица вашей доходности"} />
      <ProfitabilityTable />
    </Container>
  );
};

export default Profit;
