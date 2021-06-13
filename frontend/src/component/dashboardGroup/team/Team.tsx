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

const Team: React.FC<TeamProps> = () => {
  const dispatch = useDispatchTyped();
  const { isLoading, userTeam } = useSelectorTyped(
    (state: rootState) => state.team
  );
  console.log(userTeam);
  React.useEffect(() => {
    dispatch(getTeam());
  }, []);
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
              <Col lg={7}>
                <ReferralLink link={userTeam.id} />{" "}
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock
            title={"Таблица доходности по реферальной программе"}
          />
          <div className={styles.profit_table}>
            <Table striped className={styles.table_striped}>
              <thead>
                <tr>
                  <th />
                  <th>За неделю</th>
                  <th>За всё время</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.lines}>1-я линия</td>
                  <td>345 $</td>
                  <td>41 5434 $</td>
                </tr>
                <tr>
                  <td className={styles.lines}>2-я линия</td>
                  <td>121 $</td>
                  <td>1 5434 $</td>
                </tr>
                <tr>
                  <td className={styles.lines}>3-я линия</td>
                  <td>331 $</td>
                  <td>1 54341 $</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <DashboardTitleBlock title={"Ваши партнеры"} />
          <div className={styles.our_partners}>
            <Row>
              <Col lg={6}>
                <Table striped size="sm" className={styles.table_striped_sm}>
                  <tbody>
                    <tr>
                      <td>Общеее колличество</td>
                      <td>1627</td>
                    </tr>
                    <tr>
                      <td>1-я линия</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>2-я линия</td>
                      <td>162</td>
                    </tr>
                    <tr>
                      <td>3-я линия</td>
                      <td>1627</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock title={"Статусы ментора"} />
          <div className={styles.status_mentora}>
            <Table striped className={styles.table_striped_status}>
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
        </>
      )}
    </Container>
  );
};

Team.defaultProps = {};

export default Team;
