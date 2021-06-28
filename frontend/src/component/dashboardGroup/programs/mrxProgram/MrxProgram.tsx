import React from "react";
import styles from "./MrxProgram.module.scss";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";
import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import Chart from "../../../uiKit/chart/Chart";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../../routes/routesConfig";

interface MrxProgramProps {}

const MrxProgram: React.FC<MrxProgramProps> = () => {
  return (
    <Container>
      <DashboardTitleBlock title={"Доходность"} />
      <div className={styles.information}>
        <Row>
          <Col lg={5}>Программа:</Col>
          <Col lg={4}>
            <span>MRX-invest</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Вы с нами:</Col>
          <Col lg={4}>
            <span>0</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Ваш бинарный статус:</Col>
          <Col lg={4}>
            <span className={styles.disable}>Неактивный</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Текущая базоваая ставка доходности:</Col>
          <Col lg={4}>
            <span className={styles.accent}>0</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Средняя базовая ставка доходности:</Col>
          <Col lg={4}>
            <span className={styles.accent}>0</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Счет активен до:</Col>
          <Col lg={4}>
            <span>17.08.2021</span>
          </Col>
        </Row>
        <LinkContainer to={RoutePath.replenishmentWallet}>
          <Button>Пополнить</Button>
        </LinkContainer>
      </div>
      <div className={styles.accounts}>
        <DashboardTitleBlock title={"Мои счета"} />
        <CardDeck>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Сумма депозита
              </Card.Title>
              <Card.Text>0 $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>Дивиденды</Card.Title>
              <Card.Text>0 $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Выплаты по реферальной программе
              </Card.Title>
              <Card.Text>0 $</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div>
        <DashboardTitleBlock
          title={"Статистика доходности по программе Token Profit"}
        />
        <Row className={styles.statistics}>
          <Col lg={5}>
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
    </Container>
  );
};

export default MrxProgram;
