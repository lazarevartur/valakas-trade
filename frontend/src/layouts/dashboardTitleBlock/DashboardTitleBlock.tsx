import React from "react";
import styles from "./dashboardTitleBlock.module.scss";
import { Col, Row } from "react-bootstrap";
import cn from "classnames";

interface DashboardTitleBlockProps {
  title: string;
  withOutBottomLine?: boolean;
  info?: any;
  className?: string;
}

const DashboardTitleBlock: React.FC<DashboardTitleBlockProps> = ({
  title,
  withOutBottomLine,
  info,
  className = "",
}) => {
  return (
    <Row
      className={cn(styles.row, {
        [styles.border_none]: withOutBottomLine,
        [className]: className,
      })}
    >
      <Col lg={7} className={styles.col}>
        <span className={styles.title}>{title}</span>
      </Col>
      <Col lg={3}>{info}</Col>
    </Row>
  );
};

DashboardTitleBlock.defaultProps = {};

export default DashboardTitleBlock;
