import React, { useState } from "react";
import styles from "./ProfitCalculator.module.scss";
import { defaultComponentProps, rootState } from "../../../types/types";
import cn from "classnames";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { Route, useLocation } from "react-router-dom";
import { RoutePath } from "../../../routes/routesConfig";
import { getMrxPrograms } from "../../../store/action/programsAction";
import { useTranslation } from "react-i18next";

interface ProfitCalculatorProps extends defaultComponentProps {}

const programObj = {
  Mrx: 1.5,
  Optional: 40,
};

const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({
  className = "",
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatchTyped();
  const location = useLocation();
  const { mrxPrograms, isLoading } = useSelectorTyped(
    (state: rootState) => state.mrx
  );
  React.useEffect(() => {
    if (location.pathname === RoutePath.binarProfitTeam) {
      dispatch(getMrxPrograms());
    }
  }, [location]);

  const objToArr = Object.entries(programObj);
  const [sum, setSum] = useState(1000);
  const [currentProgram, setCurrentProgram] = useState(objToArr[0][0]);

  const [currentMrx, setCurrentMrx] = useState(100);

  const mrx = objToArr[0][0];
  const option = objToArr[1][0];

  const displaySum = () => {
    if (mrx === currentProgram) {
      return sum * (programObj[currentProgram] / 100);
    }
    if (option === currentProgram) {
      return sum * 1.4;
    }
  };

  const dispalayMrxSumDay = () => {
    return mrxPrograms[currentMrx]?.price * 0.015 || 0;
  };
  const dispalayMrxSumTotal = () => {
    return dispalayMrxSumDay() * mrxPrograms[currentMrx]?.validity || 0;
  };

  const mrxInvestPage = location.pathname === RoutePath.binarProfitTeam;

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
            <h5 className={styles.title}>{t("HomePage.PC.title")}</h5>
          </Col>
        </Row>
        {location.pathname === RoutePath.binarProfitTeam ? (
          <>
            <Row lg={6}>
              <Col
                lg={{ offset: 2, span: 4 }}
                className={cn(styles.collum_select)}
              >
                <small>{t("HomePage.PC.ui.Invest_plan")}</small>
                <Form.Control
                  as="select"
                  className={cn(styles.form_control)}
                  onChange={(e) => {
                    setCurrentMrx(+e.target.value);
                  }}
                >
                  <option>{t("HomePage.PC.ui.select_program")}</option>
                  {mrxPrograms.map(({ name, price, ...res }, i) => {
                    return (
                      <option key={i} value={i}>
                        {name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col
                lg={{ offset: 2, span: 4 }}
                className={cn(styles.collum_select)}
              >
                <small>{t("HomePage.PC.ui.Invest_plan")}</small>
                <Form.Control
                  as="select"
                  className={cn(styles.form_control)}
                  onChange={(e) => {
                    setCurrentProgram(e.target.value);
                  }}
                >
                  {objToArr.map(([name, profit]) => (
                    <option key={profit} value={name}>
                      {name} {profit}%
                      {name === mrx
                        ? t("HomePage.PC.ui.In_day")
                        : t("HomePage.PC.ui.at_the_end")}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col lg={4} className={cn(styles.collum_select)}>
                <small>{t("HomePage.PC.ui.Sum")}</small>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder={t("HomePage.PC.ui.Sum")}
                    aria-label={t("HomePage.PC.ui.Sum")}
                    aria-describedby="basic-addon1"
                    className={cn(styles.form_control)}
                    value={sum}
                    onChange={handlerOnKey}
                  />
                </InputGroup>
              </Col>
            </Row>
          </>
        )}

        {location.pathname === RoutePath.binarProfitTeam ? (
          <>
            <Row className={styles.output}>
              <Col lg={{ offset: 2, span: 4 }} className={cn(styles.collum)}>
                <h6>{t("HomePage.PC.ui.accrual")}</h6>
                <p>{dispalayMrxSumDay()}$</p>
                <small>{t("HomePage.PC.ui.In_day")}</small>
              </Col>
              <Col lg={4} className={styles.collum}>
                <h6>{t("HomePage.PC.ui.total_profit")}</h6>
                <p>{dispalayMrxSumTotal()}$</p>
                <small>{t("HomePage.PC.ui.total_period")}</small>
              </Col>
            </Row>
            <Row>
              <Col lg={{ offset: 2, span: 8 }}>
                <small className={"p5"}>
                  * {t("HomePage.PC.ui.1des")}
                  <br />
                </small>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row className={styles.output}>
              <Col lg={{ offset: 2, span: 4 }} className={cn(styles.collum)}>
                <h6>{t("HomePage.PC.ui.accrual")}</h6>
                <p>{currentProgram === mrx && `${displaySum().toFixed(2)}$`}</p>
                <small>{t("HomePage.PC.ui.In_day")}</small>
              </Col>
              <Col lg={4} className={styles.collum}>
                <h6>{t("HomePage.PC.ui.total_profit")}</h6>
                <p>
                  {currentProgram === mrx
                    ? (displaySum() * 250).toFixed(2)
                    : displaySum().toFixed(2)}
                  $
                </p>
                <small>{t("HomePage.PC.ui.total_period")}</small>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <small className={"p5"}>
                  * {t("HomePage.PC.ui.1des")}
                  <br />
                  ** {t("HomePage.PC.ui.2des")}
                  <br />
                  *** {t("HomePage.PC.ui.3des")}
                </small>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

ProfitCalculator.defaultProps = {};

export default ProfitCalculator;
