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
  const investmentPackage =
    userDashboard.programs?.mrx.investment_package.toFixed(1) || 0;
  const linearPremium =
    userDashboard.programs?.mrx.linear_premium.toFixed(1) || 0;
  const dividends = userDashboard.dividends.toFixed(1) || 0;
  const chartData = [
    {
      name: "Начисления по инвестиционному пакету",
      value: +investmentPackage,
    },
    { name: "Дивиденды", value: +dividends },
    { name: "Линейная премия", value: +linearPremium },
    { name: "Менторская премия", value: userDashboard.mentor_prime },
  ];
  const tableData = {
    linear_premium: userDashboard.linear_premium,
    investment_package: userDashboard.investment_package,
    dividends: userDashboard.dividends,
    mentor_prime: userDashboard.mentor_prime,
  };

  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
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
                  Общий показатель доходности по инвестициям за{" "}
                  <span>всё время</span>
                </p>
              </Col>
              <Col lg={6}>
                <span>$ {tableData.investment_package.toFixed(1) || 0}</span>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={6}>
                <p>
                  Общий показатель доходности по инвестициям за{" "}
                  <span>последню неделю</span>
                </p>
              </Col>
              <Col lg={6}>
                <span>
                  $ {userDashboard.income_investment_for_week?.toFixed(1) || 0}
                </span>
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
                  $ {userDashboard.referralIncomeOfPartners?.toFixed(1) || 0}
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
                <span>
                  ${" "}
                  {userDashboard.income_referral_program_for_week?.toFixed(1) ||
                    0}
                </span>
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
                    <span>{investmentPackage}$</span>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.second}>
                    Дивиденды <span>{dividends}$</span>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.third}>
                    Линейная премия <span>{linearPremium || 0}$</span>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.fourth}>
                    Менторская премия{" "}
                    <span>{tableData.mentor_prime || 0}$</span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock title={"Таблица вашей доходности"} />
          <ProfitabilityTable
            totalEarned={userDashboard.totalEarned}
            data={tableData}
          />
        </>
      )}
    </Container>
  );
};

export default Profit;
