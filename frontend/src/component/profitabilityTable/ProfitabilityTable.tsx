import React from "react";
import styles from "./profitabilityTable.module.scss";
import { Card, Row, Table, Col } from "react-bootstrap";
import cn from "classnames";
import { percentageOfAmount } from "../../utils/utils";
import { useTranslation } from "react-i18next";

interface ITable {
  className?: string;
  children?: React.ReactNode;
  totalEarned?: number;
  data?: any;
}

const ProfitabilityTable: React.FC<ITable> = ({
  className = "",
  totalEarned = 0,
  data = {},
}): React.ReactElement => {
  const { t } = useTranslation();
  const procent = percentageOfAmount(totalEarned);
  return (
    <Card className={cn(styles.ProfitabilityTable, { [className]: className })}>
      {totalEarned ? (
        <Row>
          <Col lg={5} className={styles.total_earned}>
            <span>{t("ProfitabilityTable.total_earned")} </span>
            <span className={styles.count}>{totalEarned.toFixed(1) || 0}$</span>
          </Col>
        </Row>
      ) : null}

      <Card.Body className={styles.card_body}>
        <Table hover striped className={styles.table_striped} responsive="sm">
          <thead>
            <tr className={styles.t_head}>
              <th>{t("ProfitabilityTable.thead.th1")}</th>
              <th>{t("ProfitabilityTable.thead.th2")}</th>
              <th>{t("ProfitabilityTable.thead.th3")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("ProfitabilityTable.tbody.investment_package")}</td>
              <td>{data.investment_package.toFixed(1) || 0}$</td>
              <td>{procent(data.investment_package).toFixed(1)}%</td>
            </tr>
            <tr>
              <td>{t("ProfitabilityTable.tbody.dividends")}</td>
              <td>{data.dividends?.toFixed(1) || 0}$</td>
              <td>{procent(data.dividends).toFixed(1)}%</td>
            </tr>
            <tr>
              <td>{t("ProfitabilityTable.tbody.linear_premium")}</td>
              <td>{data.linear_premium.toFixed(1) || 0}$</td>
              <td>{procent(data.linear_premium).toFixed(1)}%</td>
            </tr>
            <tr>
              <td>{t("ProfitabilityTable.tbody.mentor_prime")}</td>
              <td>{data.mentor_prime.toFixed(1) || 0}$</td>
              <td>{procent(data.mentor_prime).toFixed(1)}%</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ProfitabilityTable;
