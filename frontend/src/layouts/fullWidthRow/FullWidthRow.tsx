import React from "react";
import styles from "./fullWidthRow.module.scss";
import { Col, ColProps, Row } from "react-bootstrap";
import { defaultContainerProps } from "../../types/types";
import cn from "classnames";

type ColSpec =
  | number
  | {
      span?: number;
      offset?: number;
      order?: number;
    };

interface FullWidthRowProps extends defaultContainerProps {
  lg?: ColSpec;
}

const FullWidthRow: React.FC<FullWidthRowProps> = ({
  className = "",
  children,
  lg,
}) => {
  return (
    <Row className={cn(styles.main_container, { [className]: className })}>
      <Col lg={lg}>{children}</Col>
    </Row>
  );
};

FullWidthRow.defaultProps = {};

export default FullWidthRow;
