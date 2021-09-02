import React from "react";
import styles from "./team.module.scss";
import { Col, Container, Row, Table } from "react-bootstrap";
import { DashboardTitleBlock } from "../../../layouts/dashboardTitleBlock";
import { ReferralLink } from "../../uiKit/referralLink";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { getTeam } from "../../../store/action/dashboardAction";
import { rootState } from "../../../types/types";
import { Loader } from "../../uiKit/loader";

interface TeamProps {}

const defaultData = [
  ["first", 0, 0],
  ["second", 0, 0],
  ["third", 0, 0],
  ["fourth", 0, 0],
];

const Team: React.FC<TeamProps> = () => {
  const dispatch = useDispatchTyped();
  const { isLoading, userTeam } = useSelectorTyped(
    (state: rootState) => state.team
  );
  const { userDashboard } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );

  const {
    total_number_partners,
    quantity_for_each_line,
    deposit_account,
    meta,
    income_partner_for_week = [],
    team_turnover,
  } = userTeam;
  React.useEffect(() => {
    dispatch(getTeam());
  }, []);
  let linesList: any[] = meta ? Object.entries(meta.partners) : [];
  linesList = income_partner_for_week.length
    ? mergeArr(linesList, income_partner_for_week)
    : defaultData;
  const turnover = team_turnover?.toFixed() || 0;
  function mergeArr(arr1, arr2) {
    if (!arr1.length || !arr2.length) {
      return [];
    }
    return arr1.map(([lineName, value], i) => {
      const [lineNameArr2, line2Value] = arr2[i];
      if (lineName === lineNameArr2) {
        return [lineName, value, line2Value];
      }
    });
  }

  return (
    <Container className={styles.team}>
      {isLoading ? (
        <div className={styles.fakeBg}>
          <Loader />
        </div>
      ) : (
        <>
          {" "}
          <DashboardTitleBlock title={"Информация"} />
          <div className={styles.information}>
            <Row className={styles.row}>
              <Col lg={7}>Ваш статус ментора:</Col>
              <Col lg={5}>
                <span className={styles.accent}>{userTeam.status}</span>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={7}>Суммарная прибыль по партнерской программе:</Col>
              <Col lg={5}>
                <span className={styles.accent}>
                  {userTeam.referralIncomeOfPartners?.toFixed()} $
                </span>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={7}>Оборот личной команды:</Col>
              <Col lg={5}>
                <span className={styles.accent}>{turnover} $</span>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={7}>
                <ReferralLink
                  link={userTeam.id}
                  isBuyProgram={userDashboard.isBuyProgram}
                />{" "}
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock
            title={"Таблица доходности по реферальной программе"}
          />
          <div className={styles.profit_table}>
            <Table striped className={styles.table_striped} responsive="sm">
              <thead>
                <tr>
                  <th />
                  <th>За неделю</th>
                  <th>За всё время</th>
                </tr>
              </thead>
              <tbody>
                {linesList
                  ? linesList.map(([nameLine, value, valueForWeek], i) => {
                      if (i > 4) return null;
                      return (
                        <tr key={nameLine}>
                          <td className={styles.lines}>{i + 1}-я линия</td>
                          <td>{valueForWeek.toFixed(2)} $</td>
                          <td>{value.toFixed(2)} $</td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </div>
          <DashboardTitleBlock title={"Ваши партнеры"} />
          <div className={styles.our_partners}>
            <Row>
              <Col lg={6}>
                <Table
                  striped
                  size="sm"
                  className={styles.table_striped_sm}
                  responsive="sm"
                >
                  <tbody>
                    <tr>
                      <td>Общеее колличество</td>
                      <td>{total_number_partners || 0}</td>
                    </tr>
                    {quantity_for_each_line
                      ? quantity_for_each_line.map((count, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}-я линия</td>
                              <td>{count}</td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock title={"Статусы ментора"} />
          <div className={styles.status_mentora}>
            <Table
              striped
              className={styles.table_striped_status}
              responsive="sm"
            >
              <thead>
                <tr>
                  <th className={styles.width}>Уровень ментора</th>
                  <th>Требуемое кол-во приглашенных</th>
                  <th>Оборот личной команды</th>
                  <th>Требуемые статусы партнеров </th>
                  <th>Кол-во линий </th>
                  <th>Премия </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>М1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>-</td>
                  <td>3 </td>
                  <td>0$</td>
                </tr>
                <tr>
                  <td>М2</td>
                  <td>6</td>
                  <td>7000$</td>
                  <td>M1</td>
                  <td>3 </td>
                  <td>95$</td>
                </tr>
                <tr>
                  <td>М3</td>
                  <td>20</td>
                  <td>23000$</td>
                  <td>M2</td>
                  <td>3 </td>
                  <td>300$</td>
                </tr>
                <tr>
                  <td>М4</td>
                  <td>35</td>
                  <td>48000$</td>
                  <td>M3</td>
                  <td>4</td>
                  <td>550$</td>
                </tr>
                <tr>
                  <td>М5</td>
                  <td>50</td>
                  <td>70000$</td>
                  <td>M4</td>
                  <td>4</td>
                  <td>1200$</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <DashboardTitleBlock
            title={"Линейная премия / Дивиденды партнеров"}
          />
          <div className={styles.status_mentora}>
            <Table
              striped
              className={styles.table_striped_status}
              responsive="sm"
            >
              <thead>
                <tr>
                  <th className={styles.width}>Уровень линии</th>
                  <th>Линейная премия ⃰ для “Options” и “MRX-invest”</th>
                  <th>
                    Начисления от дивиденов партнеров для “Options” и
                    “MRX-invest”
                  </th>
                  <th>Линейная премия для “Priority” </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1-я линия</td>
                  <td>4%</td>
                  <td>5%</td>
                  <td>1,5%</td>
                </tr>
                <tr>
                  <td>2-я линия</td>
                  <td>3%</td>
                  <td>4%</td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td>3-я линия</td>
                  <td>2%</td>
                  <td>3%</td>
                  <td>0,5%</td>
                </tr>
                <tr>
                  <td>4-я линия</td>
                  <td>1%</td>
                  <td>2%</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      )}
    </Container>
  );
};

Team.defaultProps = {};

export default Team;
