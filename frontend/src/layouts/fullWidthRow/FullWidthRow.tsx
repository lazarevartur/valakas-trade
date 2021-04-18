import React from "react";
import styles from "./fullWidthRow.module.scss";
import { Col, Row } from "react-bootstrap";
import { defaultContainerProps } from "../../types/types";
import cn from "classnames";

interface FullWidthRowProps extends defaultContainerProps {}

const FullWidthRow: React.FC<FullWidthRowProps> = ({
  className = "",
  children,
}) => {
  return (
    <Row className={cn(styles.main_container, { [className]: className })}>
      <Col>{children}</Col>
    </Row>
  );
};

FullWidthRow.defaultProps = {};

export default FullWidthRow;
