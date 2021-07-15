import React from "react";
import styles from "./OptionalProgram.module.scss";
import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../../routes/routesConfig";
import Chart from "../../../uiKit/chart/Chart";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../../hooks/useTypedRedux";
import { rootState } from "../../../../types/types";
import {
  getOptionalProgram,
  getPurchasedOptions,
} from "../../../../store/action/optionalAction";
import { Loader } from "../../../uiKit/loader";
import { Plug } from "../../../uiKit/plug";
import { ProgramType } from "../../../../const/popup";

interface OptionalProgramProps {}

const OptionalProgram: React.FC<OptionalProgramProps> = () => {
  const { optionalProgram, optionalPrograms, isLoading } = useSelectorTyped(
    (state: rootState) => state.optional
  );
  const { userDashboard } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );

  const isPaid = userDashboard.wallets?.start_account || 0;
  const quantity = userDashboard.programs?.optional?.quantity || 0;
  const cost = userDashboard.programs?.optional?.cost || 0;
  const activeRound = optionalProgram.round_number || 1;
  const deposit = (quantity * cost).toFixed(2) || 0;
  const profitability = (optionalProgram.profitability * 100).toFixed() || 0;
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    dispatch(getOptionalProgram());
    dispatch(getPurchasedOptions());
  }, []);

  if (isLoading) {
    return (
      <div className={styles.fakeBg}>
        <Loader />
      </div>
    );
  }

  if (!isPaid) {
    return <Plug />;
  }

  return (
    <Container>
      <DashboardTitleBlock title={"Доходность"} />
      <div className={styles.information}>
        <Row>
          <Col lg={5}>Программа:</Col>
          <Col lg={4}>
            <span>Optional</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Вы с нами:</Col>
          <Col lg={4}>
            <span>0</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Текущая базоваая ставка доходности:</Col>
          <Col lg={4}>
            <span className={styles.accent}>{profitability}%</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Текущий раунд:</Col>
          <Col lg={4}>
            <span className={styles.accent}>{activeRound}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Завершение последнего раунда</Col>
          <Col lg={4}>
            <span>17.08.2022</span>
          </Col>
        </Row>
        <LinkContainer
          to={`${RoutePath.buyPrograms}&program=${ProgramType.optional}`}
        >
          <Button>Купить опционы</Button>
        </LinkContainer>
      </div>
      <div className={styles.accounts}>
        <DashboardTitleBlock title={"Мой счет текущего раунда"} />
        <CardDeck>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Сумма депозита
              </Card.Title>
              <Card.Text>{deposit} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Количество опционов
              </Card.Title>
              <Card.Text>{quantity}</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Цена опциона
              </Card.Title>
              <Card.Text>{cost} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Текущая базоваая ставка доходности
              </Card.Title>
              <Card.Text>{profitability}% </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      {optionalPrograms.map(
        ({ cost, profitability, round_number, quantity }) => {
          const profit = (profitability * 100).toFixed();
          const depositProgram = (cost * quantity).toFixed(3);
          return (
            <div className={styles.accounts} key={round_number}>
              <DashboardTitleBlock
                title={`Счет ${round_number}-го раунда`}
                className={styles.margin_none}
              />
              <CardDeck>
                <Card className={styles.account}>
                  <Card.Body>
                    <Card.Title className={styles.card_title}>
                      Сумма депозита
                    </Card.Title>
                    <Card.Text>{depositProgram} $</Card.Text>
                  </Card.Body>
                </Card>
                <Card className={styles.account}>
                  <Card.Body>
                    <Card.Title className={styles.card_title}>
                      Количество опционов
                    </Card.Title>
                    <Card.Text>{quantity}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className={styles.account}>
                  <Card.Body>
                    <Card.Title className={styles.card_title}>
                      Цена опциона
                    </Card.Title>
                    <Card.Text>{cost} $</Card.Text>
                  </Card.Body>
                </Card>
                <Card className={styles.account}>
                  <Card.Body>
                    <Card.Title className={styles.card_title}>
                      Текущая базоваая ставка доходности
                    </Card.Title>
                    <Card.Text>{profit}% </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          );
        }
      )}

      {/*<div>*/}
      {/*  <DashboardTitleBlock*/}
      {/*    title={"Статистика доходности по программе MRX-invest"}*/}
      {/*  />*/}
      {/*  <Row className={styles.statistics}>*/}
      {/*    <Col lg={5}>*/}
      {/*      <Chart />*/}
      {/*    </Col>*/}
      {/*    <Col lg={5}>*/}
      {/*      <ListGroup className={styles.list_group}>*/}
      {/*        <ListGroup.Item className={styles.first}>*/}
      {/*          First characteristic <span>1666$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*        <ListGroup.Item className={styles.second}>*/}
      {/*          Second characteristic <span>666$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*        <ListGroup.Item className={styles.third}>*/}
      {/*          Third characteristic <span>166$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*        <ListGroup.Item className={styles.fourth}>*/}
      {/*          Fourth characteristic <span>66$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*      </ListGroup>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*</div>*/}
    </Container>
  );
};

OptionalProgram.defaultProps = {};

export default OptionalProgram;
