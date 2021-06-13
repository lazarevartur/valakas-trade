import React, { useState } from "react";
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

const programsProfit = [1, 2, 3];

const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({
  className = "",
}) => {
  const [sum, setSum] = useState(1000);
  const [currentProgram, setCurrentProgram] = useState(programsProfit[0]);
  const computedSum = (): number => {
    //100/100*1
    const res = (sum / 100) * currentProgram;
    return +res.toFixed(2);
  };
  const handlerOnKey: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const lengthInput = e.target.value.split("").length;
    if (e.target.value.match(/^\d+$/) && lengthInput <= 7) {
      setSum(+e.target.value);
    } else if (lengthInput === 0) {
      setSum(0);
    }
  };
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
            <Form.Control
              as="select"
              className={cn(styles.form_control)}
              onChange={(e) => {
                setCurrentProgram(+e.target.value);
              }}
            >
              {programsProfit.map((p) => (
                <option key={p} value={p}>
                  FOURTH ({p}% в день)
                </option>
              ))}
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
                value={sum}
                onChange={handlerOnKey}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className={styles.output}>
          <Col lg={{ offset: 2, span: 4 }} className={cn(styles.collum)}>
            <h6>НАЧИСЛЕНИЕ</h6>
            <p>{computedSum()}$</p>
            <small>Вдень</small>
          </Col>
          <Col lg={4} className={styles.collum}>
            <h6>ОБЩАЯ ПРИБЫЛЬ</h6>
            <p>{(computedSum() * 250).toFixed(2)}$</p>
            <small>За весь срок</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ProfitCalculator.defaultProps = {};

export default ProfitCalculator;
