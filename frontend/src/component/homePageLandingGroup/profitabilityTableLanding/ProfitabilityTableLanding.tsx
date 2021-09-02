import React from "react";
import styles from "./ProfitabilityTableLanding.module.scss";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { Col, Row, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
interface ProfitabilityTableLandingProps extends defaultComponentProps {}

const ProfitabilityTableLanding: React.FC<ProfitabilityTableLandingProps> = ({
  className = "",
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(styles.profitabilityTableLanding, {
        [className]: className,
      })}
    >
      <Row>
        <Col>
          <h5 className={styles.title}>{t("HomePage.PTL.title")}</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={{ offset: 1, span: 10 }}>
          <Table className={styles.table} striped hover responsive="sm">
            <thead className={styles.thead}>
              <tr>
                <th>{t("HomePage.PTL.trTh1")}</th>
                <th>{t("HomePage.PTL.trTh2")}</th>
                <th>{t("HomePage.PTL.trTh3")}</th>
                <th>{t("HomePage.PTL.trTh4")}</th>
                <th>{t("HomePage.PTL.trTh5")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MRX-invest </td>
                <td>100$</td>
                <td>200 {t("HomePage.PTL.days")}</td>
                <td>260%</td>
                <td>~ 75 {t("HomePage.PTL.days")}</td>
              </tr>
              <tr>
                <td>MRX-invest </td>
                <td>5000$</td>
                <td>240 {t("HomePage.PTL.days")}</td>
                <td>312%</td>
                <td>~ 76 {t("HomePage.PTL.days")}</td>
              </tr>
              <tr>
                <td>Optional </td>
                <td>3000$</td>
                <td>220 {t("HomePage.PTL.days")}</td>
                <td>90%</td>
                <td>~ 220 {t("HomePage.PTL.days")}</td>
              </tr>
              <tr>
                <td>Optional </td>
                <td>1000$</td>
                <td>90 {t("HomePage.PTL.days")}</td>
                <td>95%</td>
                <td>~ 97 {t("HomePage.PTL.days")}</td>
              </tr>
              <tr>
                <td>Priority </td>
                <td>4000$</td>
                <td>70 {t("HomePage.PTL.days")}</td>
                <td>130%</td>
                <td>~ 60 {t("HomePage.PTL.days")}</td>
              </tr>
              <tr>
                <td>Priority </td>
                <td>15000$</td>
                <td>90 {t("HomePage.PTL.days")}</td>
                <td>150%</td>
                <td>~ 60 {t("HomePage.PTL.days")}</td>
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
