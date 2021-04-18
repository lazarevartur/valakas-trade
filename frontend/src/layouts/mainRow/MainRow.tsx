import React from "react";
import styles from "./mainRow.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { defaultContainerProps } from "../../types/types";
import cn from "classnames";

interface MainRowProps extends defaultContainerProps {}

const MainRow: React.FC<MainRowProps> = ({ children, className = "" }) => {
  return (
    <Container
      className={cn(styles.main_container, { [className]: className })}
    >
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

MainRow.defaultProps = {};

export default MainRow;
