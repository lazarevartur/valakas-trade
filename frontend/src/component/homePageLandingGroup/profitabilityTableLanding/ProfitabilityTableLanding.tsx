import React from "react";
import styles from "./ProfitabilityTableLanding.module.scss";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { Col, Row, Table } from "react-bootstrap";
interface ProfitabilityTableLandingProps extends defaultComponentProps {}

const ProfitabilityTableLanding: React.FC<ProfitabilityTableLandingProps> = ({
  className = "",
}) => {
  return (
    <div
      className={cn(styles.profitabilityTableLanding, {
        [className]: className,
      })}
    >
      <Row>
        <Col>
          <h5 className={styles.title}>Таблица доходности</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={{ offset: 1, span: 10 }}>
          <Table className={styles.table} striped hover>
            <thead className={styles.thead}>
              <tr>
                <th>Программа</th>
                <th>Депозит</th>
                <th>Сроки</th>
                <th>Доход</th>
                <th>Окупаемость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MRX-invest </td>
                <td>100$</td>
                <td>200 дней</td>
                <td>260%</td>
                <td>~ 75 дней</td>
              </tr>
              <tr>
                <td>MRX-invest </td>
                <td>5000$</td>
                <td>240 дней</td>
                <td>312%</td>
                <td>~ 76 дней</td>
              </tr>
              <tr>
                <td>Optional </td>
                <td>3000$</td>
                <td>220 дней</td>
                <td>90%</td>
                <td>~ 220 дней</td>
              </tr>
              <tr>
                <td>Optional </td>
                <td>1000$</td>
                <td>90 дней</td>
                <td>95%</td>
                <td>~ 97 дней</td>
              </tr>
              <tr>
                <td>Priority </td>
                <td>4000$</td>
                <td>70 дней</td>
                <td>130%</td>
                <td>~ 60 дней</td>
              </tr>
              <tr>
                <td>Priority </td>
                <td>15000$</td>
                <td>90 дней</td>
                <td>150%</td>
                <td>~ 60 дней</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

ProfitabilityTableLanding.defaultProps = {};

export default ProfitabilityTableLanding;
