import React from "react";
import styles from "./dashboardTitleBlock.module.scss";
import { Col, Row } from "react-bootstrap";

interface DashboardTitleBlockProps {
  title: string;
}

const DashboardTitleBlock: React.FC<DashboardTitleBlockProps> = ({ title }) => {
  return (
    <Row className={styles.row}>
      <Col lg={12} className={styles.col}>
        <span className={styles.title}>{title}</span>
      </Col>
    </Row>
  );
};

DashboardTitleBlock.defaultProps = {};

export default DashboardTitleBlock;
