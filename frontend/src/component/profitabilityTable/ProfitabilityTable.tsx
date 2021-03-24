import React from "react";
import { Alert, Card, Table } from "react-bootstrap";

interface ITable {
  className?: string;
  children?: React.ReactNode;
}

const ProfitabilityTable: React.FC<ITable> = ({
  className,
}): React.ReactElement => {
  return (
    <Card>
      <Card.Header className={"text-center"}>
        <strong className={"h4"}>Таблица вашей доходности:</strong>
      </Card.Header>
      <Card.Header>
        <Alert variant={"secondary"}>Всего заработанно: 10000$</Alert>
      </Card.Header>
      <Card.Body>
        <Table hover className={className}>
          <thead>
            <tr>
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
