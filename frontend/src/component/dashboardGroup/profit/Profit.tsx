import React from "react";
import styles from "./profit.module.scss";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { DashboardTitleBlock } from "../../../layouts/dashboardTitleBlock";
import { ProfitabilityTable } from "../../profitabilityTable";
import { CustomInput } from "../../uiKit/customInput";
import Chart from "../../uiKit/chart/Chart";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { rootState } from "../../../types/types";
import { getCurrentUser } from "../../../store/action/dashboardAction";
import { Loader } from "../../uiKit/loader";

interface ProfitProps {
  totalEarned?: boolean;
}

const Profit: React.FC<ProfitProps> = () => {
  const { userDashboard, isLoading } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );
  const dispatch = useDispatchTyped();
  const chartData = [
    {
      name: "Начисления по инвестиционному пакету",
      value: userDashboard.wallets?.operating_account,
    },
    { name: "Дивиденты", value: +userDashboard.dividends?.toFixed(2) },
    { name: "Линейная премия", value: userDashboard.linear_premium },
    { name: "Менторская премия", value: 0 },
  ];
  const tableData = {
    linear_premium: userDashboard.linear_premium,
    totalEarned: userDashboard.wallets?.operating_account,
    dividends: userDashboard.dividends,
  };

  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  console.log(isLoading);
  return (
    <Container>
      {isLoading ? (
        <div className={styles.fakeBg}>
          <Loader />
        </div>
      ) : (
        <>
          {" "}
          <DashboardTitleBlock title={"Доходность"} />
          <div className={styles.profit}>
            <Row className={styles.row}>
              <Col lg={6}>
                <p>
                  Общий показатель доходности по инвестийциям за{" "}
                  <span>всё время</span>
                </p>
              </Col>
              <Col lg={6}>
                <span>$ {tableData.totalEarned || 0}</span>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={6}>
                <p>
                  Общий показатель доходности по инвестийциям за{" "}
                  <span>последню неделю</span>
                </p>
              </Col>
              <Col lg={6}>
                <span>$ 0</span>
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
                <span>
                  $ {userDashboard.referralIncomeOfPartners?.toFixed(2)}
                </span>
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
                <span>$ 0</span>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <LinkContainer to={RoutePath.replenishmentWallet}>
                  <Button className={styles.button}>Пополнить</Button>
                </LinkContainer>
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock title={"Статистика"} />
          <div className={styles.statistics}>
            <Row>
              <Col lg={6}>
                <Chart dataProps={chartData} />
              </Col>
              <Col lg={5}>
                <ListGroup className={styles.list_group}>
                  <ListGroup.Item className={styles.first}>
                    Начисления по инвестиционному пакету{" "}
                    <span>{tableData.totalEarned || 0}$</span>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.second}>
                    Дивиденты{" "}
                    <span>{tableData.dividends?.toFixed() || 0}$</span>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.third}>
                    Линейная премия{" "}
                    <span>{tableData.linear_premium || 0}$</span>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.fourth}>
                    Менторская премия <span>0$</span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock title={"Таблица вашей доходности"} />
          <ProfitabilityTable
            totalEarned={userDashboard.totalEarned?.toFixed()}
            data={tableData}
          />
        </>
      )}
    </Container>
  );
};

export default Profit;
