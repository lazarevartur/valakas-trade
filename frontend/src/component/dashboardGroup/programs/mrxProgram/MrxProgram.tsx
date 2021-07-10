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
import { getMrxProgramById } from "../../../../store/action/programsAction";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../../hooks/useTypedRedux";
import { rootState } from "../../../../types/types";
import { Loader } from "../../../uiKit/loader";
import { numberDays } from "../../../../utils/utils";
import { Plug } from "../../../uiKit/plug";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../../../../store/action/dashboardAction";

interface MrxProgramProps {}

const MrxProgram: React.FC<MrxProgramProps> = () => {
  const { mrxProgram, isLoading } = useSelectorTyped(
    (state: rootState) => state.mrx
  );

  const { userDashboard } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );
  const location = useLocation();
  const dispatch = useDispatchTyped();
  const isPaid = userDashboard.wallets?.start_account || 0;
  React.useEffect(() => {
    if (Object.keys(userDashboard).length) {
      dispatch(getMrxProgramById(userDashboard.programs?.activeMrx._id));
    }
  }, [userDashboard]);

  React.useEffect(() => {
    if (location.state) {
      dispatch(getMrxProgramById(userDashboard.programs?.activeMrx._id));
      dispatch(getCurrentUser());
    }
  }, [location]);

  const activeDays = numberDays(userDashboard.programs?.activeMrx.start_time);
  const deposit = userDashboard.programs?.activeMrx.deposit || 0;
  const investmentPackage =
    userDashboard.programs?.activeMrx.investment_package || 0;
  const dividends = userDashboard.programs?.activeMrx.dividends || 0;
  const account_active = userDashboard.programs?.activeMrx.ending_time
    ? new Date(userDashboard.programs?.activeMrx.ending_time).toLocaleString(
        "ru",
        {
          timeZone: "UTC",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }
      )
    : 0;
  const lineCount = mrxProgram.line_count || 3;

  const linearPremium = userDashboard.programs?.activeMrx.linear_premium || 0;

  const chartData = [
    {
      name: "Начисления по инвестиционному пакету",
      value: investmentPackage,
    },
    { name: "Дивиденты", value: dividends },
    { name: "Выплаты по реферальной программе", value: linearPremium },
  ];

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
            <span>MRX-invest</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Вы с нами:</Col>
          <Col lg={4}>
            <span>{activeDays}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Текущая базоваая ставка доходности:</Col>
          <Col lg={4}>
            <span className={styles.accent}>2%</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Количество линий:</Col>
          <Col lg={4}>
            <span className={styles.accent}>{lineCount}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>Счет активен до:</Col>
          <Col lg={4}>
            <span>{account_active}</span>
          </Col>
        </Row>
        <LinkContainer to={`${RoutePath.buyPrograms}&program=mrx`}>
          <Button>
            {deposit > 0 ? "Улучшить программу" : "Купить программу"}
          </Button>
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
              <Card.Text>{deposit} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Начисления по инвестиционному пакету
              </Card.Title>
              <Card.Text>{investmentPackage} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>Дивиденды</Card.Title>
              <Card.Text>{dividends} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                Выплаты по реферальной программе
              </Card.Title>
              <Card.Text>{linearPremium} $</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div>
        <DashboardTitleBlock
          title={"Статистика доходности по программе MRX-invest"}
        />
        <Row className={styles.statistics}>
          <Col lg={5}>
            <Chart dataProps={chartData} />
          </Col>
          <Col lg={5}>
            <ListGroup className={styles.list_group}>
              <ListGroup.Item className={styles.first}>
                Начисления по инвестиционному пакету{" "}
                <span>{investmentPackage}$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.second}>
                Дивиденты <span>{dividends}$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.third}>
                Выплаты по реферальной программе <span>{linearPremium}$</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MrxProgram;
