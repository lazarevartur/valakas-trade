import React from "react";
import styles from "./profitabilityTable.module.scss";
import { Card, Row, Table, Col } from "react-bootstrap";

interface ITable {
  className?: string;
  children?: React.ReactNode;
}

const ProfitabilityTable: React.FC<ITable> = ({
  className,
}): React.ReactElement => {
  return (
    <Card className={styles.ProfitabilityTable}>
      <Row>
        <Col lg={5} className={styles.total_earned}>
          <span>
            Всего заработанно: <span className={styles.count}>10000$</span>
          </span>
        </Col>
      </Row>
      <Card.Body className={styles.card_body}>
        <Table hover striped className={className}>
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
              <td>0</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Линейная премия</td>
              <td>0</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Менторская премия</td>
              <td>0</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Бинарная премия</td>
              <td>0</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Имиджевая премия</td>
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
