import React from "react";
import styles from "./PriorityDescription.module.scss";
import {
  Col,
  Container,
  Row,
  Form,
  Card,
  CardDeck,
  Table,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { PrioritySlide } from "../../component/prioritySelector/prioritySlide";
import { CustomInput } from "../../component/uiKit/customInput";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { IPriorityData, rootState } from "../../types/types";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import {
  getPriorityProgram,
  getPriorityPrograms,
} from "../../store/action/priorityAction";
import Page404 from "../page404/page404";
import _ from "lodash";
import { Loader } from "../../component/uiKit/loader";
import { RoutePath } from "../../routes/routesConfig";
import { getDayinMm, getRuDate, percentageOfAmount } from "../../utils/utils";
import useIsAuth from "../../hooks/useIsAuth";

interface PriorityDescriptionProps extends IPriorityData {
  match: any;
}

const homeInsurance = [
  { contribution: "40%/120", insuranceCost: 2 },
  { contribution: "30%/150", insuranceCost: 3.5 },
  { contribution: "25%/180", insuranceCost: 5 },
];

const avtoInsurance = [
  { contribution: "50%/60", insuranceCost: 1.5 },
  { contribution: "40%/90", insuranceCost: 2.7 },
  { contribution: "30%/120", insuranceCost: 3.8 },
];
const motoInsurance = [
  { contribution: "50%/50", insuranceCost: 2 },
  { contribution: "40%/80", insuranceCost: 3 },
  { contribution: "30%/100", insuranceCost: 4 },
];
const deviceInsurance = [
  { contribution: "60%/35", insuranceCost: 1.5 },
  { contribution: "50%/55", insuranceCost: 2 },
  { contribution: "40%/75", insuranceCost: 2.7 },
];
const travelInsurance = [{ contribution: "45%/30", insuranceCost: 2 }];
const weddingInsurance = [
  { contribution: "40%/100", insuranceCost: 3.6 },
  { contribution: "45%/80", insuranceCost: 2.8 },
  { contribution: "50%/60", insuranceCost: 2.2 },
];
const repaymentInsurance = [{ contribution: "40%/90", insuranceCost: 2.5 }];

const PriorityDescription: React.FC<PriorityDescriptionProps> = ({ match }) => {
  const id = match.params.id;
  const history = useHistory();
  const location = useLocation();
  const {
    priorityProgram,
    priorityPrograms,
    isLoading,
    error,
  } = useSelectorTyped((state: rootState) => state.priority);

  const dispatch = useDispatchTyped();
  const [typeProgram, setTypeProgram] = React.useState(id);
  const [activeIdxConditions, setActiveIdxConditions] = React.useState(0);
  const [marketingAssistance, setMarketingAssistance] = React.useState(true);
  const newSum = priorityProgram.conditions?.minCost || 0;
  const { register, handleSubmit, errors, watch, reset } = useForm({
    defaultValues: { summa: `${newSum}` },
  });
  React.useEffect(() => {
    dispatch(getPriorityProgram(id));
    if (!priorityPrograms.length) {
      dispatch(getPriorityPrograms());
    }
  }, []);
  React.useEffect(() => {
    if (typeProgram !== location.pathname) {
      dispatch(getPriorityProgram(id));
    }
  }, [location.pathname]);
  React.useEffect(() => {
    if (typeProgram !== id) {
      history.push(`${RoutePath.priority}/${typeProgram}`);
    }
  }, [typeProgram]);

  const $startOffer = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if ($startOffer.current) {
      $startOffer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  if (!_.isEmpty(error)) {
    return <Page404 />;
  }
  const discount = priorityProgram.conditions?.discount || [];
  const term = priorityProgram.conditions?.term || [];
  const insurance = priorityProgram.conditions?.insurance || [];
  let newDiscount = [];
  discount.forEach((item, index) => {
    const obj = {
      discount: item,
      term: term[index],
      insurance: insurance[index],
    };
    newDiscount.push(obj);
  });
  const waitingPeriod =
    priorityProgram.conditions?.term[activeIdxConditions] || 0;
  const inputSum = +watch("summa");
  const marketingProc = marketingAssistance ? 0.2 : 0;
  const disco = newDiscount[activeIdxConditions]?.discount / 100 || 0;
  const activateProgProc =
    priorityProgram.conditions?.activateProgram / 100 || 0;
  const activateProgramSum = inputSum * activateProgProc;
  const insuranceLargoSum =
    (inputSum * insurance[activeIdxConditions]) / 100 || 0;
  const marketingAssistanceDisplay = inputSum * marketingProc || 0;
  const contribution = inputSum * disco;
  const dateCompletionMm = Date.now() + getDayinMm(waitingPeriod);
  const dateCompletion = getRuDate(dateCompletionMm);
  const calculateSum = () => {
    if (!newDiscount.length) {
      return 0;
    }

    return (
      inputSum * disco +
      marketingAssistanceDisplay +
      activateProgramSum +
      insuranceLargoSum
    );
  };
  const calculateProcent = (marketingProc + disco + activateProgProc) * 100;
  const benefit = inputSum - calculateSum() || 0;
  const procBenefit = percentageOfAmount(inputSum);

  const sendData = () => {
    const req = {
      amount: calculateSum(),
      conditions: newDiscount[activeIdxConditions],
      marketingAssistance: !marketingAssistance,
      dateCompletion: dateCompletionMm,
      originalAmount: +inputSum,
      programType: typeProgram,
    };
    console.log(req);
  };
  return (
    <div className={styles.PriorityDescription}>
      <Container className={styles.container} ref={$startOffer}>
        <Link to={RoutePath.priority}>
          {" "}
          <a className={styles.goBack}>{id}</a>
        </Link>
        <div className={styles.PrioritySlide}>
          <PrioritySlide tab={false} {...priorityProgram} onClick={sendData} />
        </div>
        <div className={styles.calculator}>
          <Row>
            <Col lg={12}>
              <h2 className={styles.title}>Калькулятор</h2>
              <p className={"text-center"}>
                Предварительный расчет по взносу и сроку действия депозита.
                Обратите внимание на условия маркетингово содействия
                маркетингового
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group controlId="formGridState">
                <Form.Label>Выберите программу</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={typeProgram}
                  onChange={(e) => {
                    setTypeProgram(e.target.value);
                  }}
                >
                  {priorityPrograms.map((item, i) => {
                    return <option key={i}>{item.name}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="formGridState">
                <Form.Label>Укажите взнос и срок</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    setActiveIdxConditions(+e.target.value);
                  }}
                >
                  {newDiscount.map(({ discount, term, insurance }, i) => {
                    return (
                      <option key={i} value={i}>
                        {discount}% взнос - {term} дней ожидания
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <CustomInput
                type="text"
                placeholder="Укажите сумму"
                name="summa"
                value={watch("summa")}
                reff={register}
              />
            </Col>
            <Col lg={6}>
              <Form.Group controlId="formHorizontalCheck">
                <Form.Check
                  label="Согласен с маркетинговым содействием (+20% при отказе)"
                  onClick={() => {
                    setMarketingAssistance(!marketingAssistance);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className={styles.separator} />
          </Row>
          <div className={styles.priority_parameters}>
            <Row>
              <Col lg={6}>
                <Row className={styles.parameter}>
                  <Col lg={7}>Срок ожидания</Col>
                  <Col lg={5}>{waitingPeriod} дней</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Взнос по программе</Col>
                  <Col lg={5}>
                    ${contribution.toFixed()} / {discount[activeIdxConditions]}%
                  </Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Активация программы</Col>
                  <Col lg={5}>${activateProgramSum.toFixed()} / 1%</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Сумма взносов по программе</Col>
                  <Col lg={5}>
                    ${calculateSum().toFixed()} /{" "}
                    {inputSum ? calculateProcent.toFixed() : 0}%
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row className={styles.parameter}>
                  <Col lg={7}>Дата завершения</Col>
                  <Col lg={5}>{dateCompletion}</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Страхование Largo Insurance</Col>
                  <Col lg={5}>
                    ${insuranceLargoSum} / {insurance[activeIdxConditions]} %
                  </Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Маркетинговое содействие</Col>
                  <Col lg={5}>
                    ${marketingAssistanceDisplay.toFixed()} /{" "}
                    {marketingProc * 100}%
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={styles.calculated}>
              <Col lg={9}>Ваша выгода составит:</Col>
              <Col lg={3}>
                ${benefit.toFixed()} / {procBenefit(benefit).toFixed()}%
              </Col>
            </Row>
          </div>
          <div className={styles.m_assistance}>
            <Row>
              <Col lg={12}>
                <h2 className={styles.title}>Маркетинговое содействие</h2>
              </Col>
            </Row>
            <CardDeck className={styles.card_block}>
              <Card>
                <Link
                  to="/download/test.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Home <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card>
                <Card.Body className={styles.card}>
                  <Card.Title className={styles.card_type}>PDF</Card.Title>
                  <Card.Text>
                    Priority Home <div>1643 kb</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body className={styles.card}>
                  <Card.Title className={styles.card_type}>PDF</Card.Title>
                  <Card.Text>
                    Priority Home <div>1643 kb</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body className={styles.card}>
                  <Card.Title className={styles.card_type}>PDF</Card.Title>
                  <Card.Text>
                    Priority Home <div>1643 kb</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <div className={styles.dependency_table}>
            <Row>
              <Col lg={12}>
                <h2 className={styles.title}>
                  Таблица зависимости стоимости страховки от вида программы
                </h2>
              </Col>
            </Row>
            <DependencyTable data={homeInsurance} />
            <DependencyTable title={"AUTO"} data={avtoInsurance} />
            <DependencyTable title={"DEVICE"} data={deviceInsurance} />
            <DependencyTable title={"Wedding"} data={weddingInsurance} />
            <DependencyTable
              title={"Early Repayment"}
              data={repaymentInsurance}
            />
            <DependencyTable title={"MOTO"} data={motoInsurance} />
            <DependencyTable title={"TRAVEL"} data={travelInsurance} />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface DependencyTableProps {
  title?: string;
  data?: any;
}

const DependencyTable: React.FC<DependencyTableProps> = ({
  title = "Home",
  data = [],
}) => {
  return (
    <div className={styles.table}>
      <h3 className={styles.title}>Priority {title}</h3>
      <Table striped className={styles.table_striped}>
        <thead>
          <tr>
            <th>Первоначальный взнос, % / длительность программы, дней</th>
            <th>
              Стоимость страховой программы «Largo Insurance» в % от итоговой
              стоимости товара или услуги
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.contribution}</td>
                <td>{item.insuranceCost}%</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

PriorityDescription.defaultProps = {};

export default PriorityDescription;

/*
АВТО
50%/60 1,5%
40%/90 2,7%
30%/120 3,8%
----------
Мото
50%/50 2%
40%/80 3%
30%/100 4%
------------
Device
60%/35 1.5%
50%/55 2%
40%/75 2.7%
-----------
Travel
45%/30 2%
-----
swadba
40%/100 3.6%
45%/80 2.8%
50%/60 2.2
------
krediti
40%/90 2.5%
*/
