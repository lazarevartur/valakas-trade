import React from "react";
import styles from "./TwoCols.module.scss";
import { defaultContainerProps } from "../../types/types";
import cn from "classnames";
import { Col, Container, Row } from "react-bootstrap";

interface TwoColsProps extends defaultContainerProps {
  LeftCol?: React.FC;
  RightCol?: React.FC;
  FullWidthRow?: React.FC;
  bigMargin?: boolean;
}

const TwoCols: React.FC<TwoColsProps> = ({
  className,
  LeftCol,
  RightCol,
  bigMargin,
  FullWidthRow,
}) => {
  return (
    <div className={cn(className)}>
      <Container>
        {LeftCol && RightCol ? (
          <Row>
            <Col lg={6}>
              <LeftCol />
            </Col>
            <Col lg={6} className={cn({ [styles.bigMargin]: bigMargin })}>
              <RightCol />
            </Col>
          </Row>
        ) : null}
        {FullWidthRow ? (
          <Row>
            <Col lg={12}>
              <FullWidthRow />
            </Col>
          </Row>
        ) : null}
      </Container>
    </div>
  );
};

TwoCols.defaultProps = {};

export default TwoCols;
