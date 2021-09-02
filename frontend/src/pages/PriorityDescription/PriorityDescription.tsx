import React from "react";
import styles from "./PriorityDescription.module.scss";
import {
  Card,
  CardDeck,
  Col,
  Container,
  Form,
  Row,
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
import { RoutePath } from "../../routes/routesConfig";
import { getDayinMm, getRuDate, percentageOfAmount } from "../../utils/utils";
import { Balance } from "../../component/workWithWallets/Balance";
import {
  PRIORITY_DATA_RESET,
  PRIORITY_DATA_SET,
} from "../../store/slice/prioritySlice";
import { useTranslation } from "react-i18next";

interface PriorityDescriptionProps extends IPriorityData {
  match: any;
}

const homeInsurance = [
  { contribution: "75%/120", insuranceCost: 2 },
  { contribution: "70%/150", insuranceCost: 3.5 },
  { contribution: "60%/180", insuranceCost: 5 },
];

const avtoInsurance = [
  { contribution: "70%/60", insuranceCost: 1.5 },
  { contribution: "60%/90", insuranceCost: 2.7 },
  { contribution: "50%/120", insuranceCost: 3.8 },
];
const motoInsurance = [
  { contribution: "70%/50", insuranceCost: 2 },
  { contribution: "60%/80", insuranceCost: 3 },
  { contribution: "50%/100", insuranceCost: 4 },
];
const deviceInsurance = [
  { contribution: "60%/35", insuranceCost: 1.5 },
  { contribution: "50%/55", insuranceCost: 2 },
  { contribution: "40%/75", insuranceCost: 2.7 },
];
const travelInsurance = [{ contribution: "55%/30", insuranceCost: 2 }];
const weddingInsurance = [
  { contribution: "60%/60", insuranceCost: 2.2 },
  { contribution: "55%/80", insuranceCost: 2.8 },
  { contribution: "50%/100", insuranceCost: 3.6 },
];
const repaymentInsurance = [{ contribution: "60%/90", insuranceCost: 2.5 }];

const PriorityDescription: React.FC<PriorityDescriptionProps> = ({ match }) => {
  const { t } = useTranslation();
  const id = match.params.id;
  const history = useHistory();
  const location = useLocation();
  const {
    priorityProgram: priorityProgramOriginal,
    priorityPrograms,
    isLoading,
    error,
  } = useSelectorTyped((state: rootState) => state.priority);
  let priorityProgram: any = {};
  if (priorityProgramOriginal?.name) {
    priorityProgram = { ...priorityProgramOriginal };
    priorityProgram.description = t(
      `PriorityPrograms.${priorityProgramOriginal.name.toLowerCase()}.description`
    );
    priorityProgram.type = t(
      `PriorityPrograms.${priorityProgramOriginal.name.toLowerCase()}.type`
    );
  }

  const dispatch = useDispatchTyped();
  const [typeProgram, setTypeProgram] = React.useState(id);
  const [activeIdxConditions, setActiveIdxConditions] = React.useState(0);
  const [marketingAssistance, setMarketingAssistance] = React.useState(true);
  const { register, handleSubmit, errors, watch, reset } = useForm({
    defaultValues: { summa: `0` },
  });
  React.useEffect(() => {
    dispatch(getPriorityProgram(id));
    dispatch(PRIORITY_DATA_RESET());

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
  const discoSum = inputSum * disco;
  const activateProgProc =
    priorityProgram.conditions?.activateProgram / 100 || 0;
  const activateProgramSum = inputSum * activateProgProc;
  const insuranceLargoSum =
    (inputSum * insurance[activeIdxConditions]) / 100 || 0;
  const marketingAssistanceDisplay = inputSum * marketingProc || 0;
  const contribution = inputSum - discoSum;
  const contributionProc = 100 - discount[activeIdxConditions] || 0;
  const dateCompletionMm = Date.now() + getDayinMm(waitingPeriod);
  const dateCompletion = getRuDate(dateCompletionMm);
  const calculateSum = () => {
    if (!newDiscount.length) {
      return 0;
    }
    return (
      contribution +
      marketingAssistanceDisplay +
      activateProgramSum +
      insuranceLargoSum
    );
  };
  const procBenefit = percentageOfAmount(inputSum);
  const calculateProcent = () => {
    return procBenefit(calculateSum());
  };

  const benefit = inputSum - calculateSum() || 0;

  const sendData = () => {
    const req = {
      amount: calculateSum(),
      conditions: newDiscount[activeIdxConditions],
      marketingAssistance: !marketingAssistance,
      dateCompletion: dateCompletionMm,
      originalAmount: +inputSum,
      programType: typeProgram,
    };

    if (req.originalAmount >= priorityProgram.conditions.minCost) {
      dispatch(PRIORITY_DATA_SET(req));
    }
  };
  return (
    <div className={styles.PriorityDescription}>
      <Balance />
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
              <h2 className={styles.title}>
                {t("PriorityDescription.calculator.title")}
              </h2>
              <p className={"text-center"}>
                {t("PriorityDescription.calculator.desk")}
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group controlId="formGridState">
                <Form.Label>
                  {t("PriorityDescription.calculator.choseProgram")}
                </Form.Label>
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
                <Form.Label>
                  {t("PriorityDescription.calculator.specify")}
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    setActiveIdxConditions(+e.target.value);
                  }}
                >
                  {newDiscount.map(({ discount, term, insurance }, i) => {
                    const contribution = 100 - discount;
                    return (
                      <option key={i} value={i}>
                        {contribution}%{" "}
                        {t("PriorityDescription.calculator.contribution")} -{" "}
                        {term}{" "}
                        {t("PriorityDescription.calculator.days_waiting")}
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
                type="number"
                placeholder={t("PriorityDescription.calculator.amount")}
                name="summa"
                value={watch("summa")}
                reff={register}
              />
            </Col>
            <Col lg={6}>
              <Form.Group controlId="formHorizontalCheck">
                <Form.Check
                  className={styles.form_chek}
                  label={t(
                    "PriorityDescription.calculator.marketing_assistance"
                  )}
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
                  <Col lg={7} xs={7}>
                    {t("PriorityDescription.calculator.deadline")}
                  </Col>
                  <Col lg={5} xs={5}>
                    {waitingPeriod} {t("PriorityDescription.calculator.days")}
                  </Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7} xs={7}>
                    {t("PriorityDescription.calculator.program_fee")}
                  </Col>
                  <Col lg={5} xs={5}>
                    ${contribution.toFixed()} / {contributionProc}%
                  </Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7} xs={7}>
                    {t("PriorityDescription.calculator.activation_program")}
                  </Col>
                  <Col lg={5} xs={5}>
                    ${activateProgramSum.toFixed()} / 1%
                  </Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7} xs={7}>
                    {t("PriorityDescription.calculator.contributions_program")}
                  </Col>
                  <Col lg={5} xs={5}>
                    ${calculateSum().toFixed()} /{" "}
                    {inputSum ? calculateProcent().toFixed(1) : 0}%
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row className={styles.parameter}>
                  <Col lg={7} xs={7}>
                    {t("PriorityDescription.calculator.date_completion")}
                  </Col>
                  <Col lg={5} xs={5}>
                    {dateCompletion}
                  </Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7} xs={7}>
                    {t("PriorityDescription.calculator.insurance")}
                  </Col>
                  <Col lg={5} xs={5}>
                    ${insuranceLargoSum.toFixed(1)} /{" "}
                    {insurance[activeIdxConditions]} %
                  </Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7} xs={7}>
                    {t("PriorityDescription.calculator.ma")}
                  </Col>
                  <Col lg={5} xs={5}>
                    ${marketingAssistanceDisplay.toFixed()} /{" "}
                    {marketingProc * 100}%
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={styles.calculated}>
              <Col lg={9}>
                {t("PriorityDescription.calculator.your_benefit")}
              </Col>
              <Col lg={3}>
                ${benefit.toFixed()} / {procBenefit(benefit).toFixed(1)}%
              </Col>
            </Row>
          </div>
          <div className={styles.m_assistance}>
            <Row>
              <Col lg={12}>
                <h2 className={styles.title}>
                  {t("PriorityDescription.calculator.ma")}
                </h2>
              </Col>
            </Row>
            <CardDeck className={styles.card_block}>
              <Card>
                <Link
                  to="/download/01_priority_auto.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Auto <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card>
                <Link
                  to="/download/02_priority_moto.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Moto <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card>
                <Link
                  to="/download/03_priority_home.pdf"
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
                <Link
                  to="/download/04_priority_wedding.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Wedding <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </CardDeck>
            <CardDeck className={styles.card_block}>
              <Card>
                <Link
                  to="/download/05_priority_device.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Device <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card>
                <Link
                  to="/download/06_priority_travel.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Travel <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card>
                <Link
                  to="/download/07_priority_early_repayment.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Repayment <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card></Card>
            </CardDeck>
          </div>
          <div className={styles.dependency_table}>
            <Row>
              <Col lg={12}>
                <h2 className={styles.title}>
                  {t("PriorityDescription.table.title")}
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
  const { t } = useTranslation();
  return (
    <div className={styles.table}>
      <h3 className={styles.title}>Priority {title}</h3>
      <Table striped className={styles.table_striped}>
        <thead>
          <tr>
            <th> {t("PriorityDescription.table.th1")}</th>
            <th>{t("PriorityDescription.table.th2")}</th>
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
