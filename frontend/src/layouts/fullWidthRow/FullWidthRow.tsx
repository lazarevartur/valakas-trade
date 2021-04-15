import React from "react";
import styles from "./fullWidthRow.module.scss";
import { Col, Row } from "react-bootstrap";
import { defaultContainerProps } from "../../types/types";

interface FullWidthRowProps extends defaultContainerProps {}

const FullWidthRow: React.FC<FullWidthRowProps> = ({ className, children }) => {
  return (
    <Row className={`${styles.main_container} ${className}`}>
      <Col>{children}</Col>
    </Row>
  );
};

FullWidthRow.defaultProps = {};

export default FullWidthRow;
