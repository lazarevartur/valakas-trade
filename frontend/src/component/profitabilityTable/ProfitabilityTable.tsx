import React from "react";
import styles from "./profitabilityTable.module.scss";
import { Card, Row, Table, Col } from "react-bootstrap";
import cn from "classnames";

interface ITable {
  className?: string;
  children?: React.ReactNode;
  totalEarned?: boolean;
  data?: any;
}

const ProfitabilityTable: React.FC<ITable> = ({
  className = "",
  totalEarned,
  data = {},
}): React.ReactElement => {
  return (
    <Card className={cn(styles.ProfitabilityTable, { [className]: className })}>
      {totalEarned ? (
        <Row>
          <Col lg={5} className={styles.total_earned}>
            <span>
              Всего заработанно:{" "}
              <span className={styles.count}>{totalEarned}$</span>
            </span>
          </Col>
        </Row>
      ) : null}

      <Card.Body className={styles.card_body}>
        <Table hover striped className={styles.table_striped}>
          <thead>
            <tr className={styles.t_head}>
              <th>Название</th>
              <th>Полученная сумма</th>
              <th>% соотношения от общей суммы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Начисления по инвестиционному пакету</td>
              <td>{data.linear_premium} $</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Линейная премия</td>
              <td>{data.linear_premium} $</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Менторская премия</td>
              <td>0</td>
              <td>0%</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ProfitabilityTable;
