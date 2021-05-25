import React from "react";
import styles from "./team.module.scss";
import { Col, Container, Row, Table } from "react-bootstrap";
import { DashboardTitleBlock } from "../../../layouts/dashboardTitleBlock";
import { ReferralLink } from "../../uiKit/referralLink";

interface TeamProps {}

const Team: React.FC<TeamProps> = () => {
  return (
    <Container className={styles.team}>
      <DashboardTitleBlock title={"Информация"} />
      <div className={styles.information}>
        <Row className={styles.row}>
          <Col lg={7}>Ваш статус ментора:</Col>
          <Col lg={5}>
            <span className={styles.accent}>Новичек</span>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col lg={7}>Суммарная прибыль по партнерской программе:</Col>
          <Col lg={5}>
            <span className={styles.accent}>1 775 327 $</span>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col lg={7}>
            <ReferralLink />{" "}
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
              <th className={styles.width} />
              <th>Требуемое кол-во приглашенных</th>
              <th>Оборот личной команды</th>
              <th>Требуемые статусы партнеров </th>
              <th>Кол-во линий </th>
              <th>% по линиям </th>
              <th>Премия </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-я линия</td>
              <td>46</td>
              <td>1 5434 $</td>
              <td>2-й </td>
              <td>3 </td>
              <td>45% </td>
              <td>154341$</td>
            </tr>
            <tr>
              <td>2-я линия</td>
              <td>46</td>
              <td>1 5434 $</td>
              <td>2-й </td>
              <td>3 </td>
              <td>45% </td>
              <td>154341$</td>
            </tr>
            <tr>
              <td>3-я линия</td>
              <td>46</td>
              <td>1 5434 $</td>
              <td>2-й </td>
              <td>3 </td>
              <td>45% </td>
              <td>154341$</td>
            </tr>
            <tr>
              <td>4-я линия</td>
              <td>46</td>
              <td>1 5434 $</td>
              <td>2-й </td>
              <td>3 </td>
              <td>45% </td>
              <td>154341$</td>
            </tr>
            <tr>
              <td>5-я линия</td>
              <td>46</td>
              <td>1 5434 $</td>
              <td>2-й </td>
              <td>3 </td>
              <td>45% </td>
              <td>154341$</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

Team.defaultProps = {};

export default Team;
