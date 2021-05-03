import React from "react";
import styles from "./ProfitCalculator.module.scss";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

interface ProfitCalculatorProps extends defaultComponentProps {}

const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({
  className = "",
}) => {
  return (
    <div className={cn(styles.profitCalculator, { [className]: className })}>
      <Container>
        <Row>
          <Col>
            <h5 className={styles.title}>Калькулятор прибыли</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 4 }} className={cn(styles.collum_select)}>
            <small>Инвест план</small>
            <Form.Control as="select" className={cn(styles.form_control)}>
              <option>FOURTH (1% в день)</option>
              <option>FOURTH (2% в день)</option>
              <option>FOURTH (3% в день)</option>
            </Form.Control>
          </Col>
          <Col lg={4} className={cn(styles.collum_select)}>
            <small>Сумма</small>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Сумма"
                aria-label="Сумма"
                aria-describedby="basic-addon1"
                className={cn(styles.form_control)}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className={styles.output}>
          <Col lg={{ offset: 2, span: 4 }} className={cn(styles.collum)}>
            <h6>НАЧИСЛЕНИЕ</h6>
            <p>50.00$</p>
            <small>Вдень</small>
          </Col>
          <Col lg={4} className={styles.collum}>
            <h6>ОБЩАЯ ПРИБЫЛЬ</h6>
            <p>45000.00$</p>
            <small>За весь срок</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ProfitCalculator.defaultProps = {};

export default ProfitCalculator;
