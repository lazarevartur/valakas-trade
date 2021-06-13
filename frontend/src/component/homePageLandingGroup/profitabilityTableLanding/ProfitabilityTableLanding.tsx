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
                <th>Сроки</th>
                <th>Доход</th>
                <th>Окупаемость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profit Team </td>
                <td>8 month</td>
                <td>179%</td>
                <td>@123456</td>
              </tr>
              <tr>
                <td>Profit Team </td>
                <td>8 month</td>
                <td>179%</td>
                <td>@123456</td>
              </tr>
              <tr>
                <td>Profit Team </td>
                <td>8 month</td>
                <td>179%</td>
                <td>@123456</td>
              </tr>
              <tr>
                <td>Profit Team </td>
                <td>8 month</td>
                <td>179%</td>
                <td>@123456</td>
              </tr>
              <tr>
                <td>Profit Team </td>
                <td>8 month</td>
                <td>179%</td>
                <td>@123456</td>
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
