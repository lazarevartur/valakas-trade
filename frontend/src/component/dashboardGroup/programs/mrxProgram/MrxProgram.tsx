import React from "react";
import styles from "./MrxProgram.module.scss";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";
import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import Chart from "../../../uiKit/chart/Chart";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../../routes/routesConfig";
import { getMrxProgramById } from "../../../../store/action/programsAction";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../../hooks/useTypedRedux";
import { rootState } from "../../../../types/types";
import { Loader } from "../../../uiKit/loader";
import { numberDays, numberDays_en } from "../../../../utils/utils";
import { Plug } from "../../../uiKit/plug";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../../../../store/action/dashboardAction";
import { ProgramType } from "../../../../const/popup";
import { useTranslation, getI18n } from "react-i18next";

interface MrxProgramProps {}

const MrxProgram: React.FC<MrxProgramProps> = () => {
  const { t } = useTranslation();
  const activeLang = getI18n().language;
  const { mrxProgram, isLoading } = useSelectorTyped(
    (state: rootState) => state.mrx
  );

  const { userDashboard } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );
  const location = useLocation();
  const dispatch = useDispatchTyped();
  const isPaid = userDashboard.totalInvestment || 0;
  React.useEffect(() => {
    if (Object.keys(userDashboard).length) {
      dispatch(getCurrentUser());
      dispatch(getMrxProgramById(userDashboard.programs?.mrx.program));
    }
  }, []);

  React.useEffect(() => {
    if (location.state) {
      dispatch(getMrxProgramById(userDashboard.programs?.mrx.program));
      dispatch(getCurrentUser());
    }
  }, [location]);

  const activeDays =
    activeLang === "ru"
      ? numberDays(userDashboard.programs?.mrx.start_time)
      : numberDays_en(userDashboard.programs?.mrx.start_time);
  const deposit = userDashboard.programs?.mrx.price || 0;
  const investmentPackage =
    userDashboard.programs?.mrx.investment_package.toFixed(1) || 0;
  const dividends = userDashboard.dividends.toFixed(1) || 0;
  const mrxPercent = userDashboard.programs?.mrx.mrxPercent || 0;
  const account_active = userDashboard.programs?.mrx.ending_time
    ? new Date(userDashboard.programs?.mrx.ending_time).toLocaleString("ru", {
        timeZone: "UTC",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
    : 0;
  const lineCount = mrxProgram.line_count || 3;

  const linearPremium =
    userDashboard.programs?.mrx.linear_premium.toFixed(1) || 0;

  const chartData = [
    {
      name: t("MrxProgram.chartData.deposit"),
      value: deposit,
    },
    {
      name: t("MrxProgram.chartData.investmentPackage"),
      value: +investmentPackage,
    },
    { name: t("MrxProgram.chartData.dividends"), value: +dividends },
    { name: t("MrxProgram.chartData.linearPremium"), value: +linearPremium },
  ];

  if (isLoading) {
    return (
      <div className={styles.fakeBg}>
        <Loader />
      </div>
    );
  }
  if (!isPaid) {
    return <Plug text={t("ui.Plug.reppelWallet")} />;
  }

  return (
    <Container>
      <DashboardTitleBlock title={t("MrxProgram.titleBlock.information")} />
      <div className={styles.information}>
        <Row>
          <Col lg={5}>{t("MrxProgram.program")}</Col>
          <Col lg={4}>
            <span>MRX-invest</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>{t("MrxProgram.wit_us")}</Col>
          <Col lg={4}>
            <span>{activeDays}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>{t("MrxProgram.mrxPercent")}</Col>
          <Col lg={4}>
            <span className={styles.accent}>{mrxPercent}%</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>{t("MrxProgram.lineCount")}</Col>
          <Col lg={4}>
            <span className={styles.accent}>{lineCount}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>{t("MrxProgram.account_active")}</Col>
          <Col lg={4}>
            <span>{account_active}</span>
          </Col>
        </Row>
        <LinkContainer
          to={`${RoutePath.buyPrograms}&program=${ProgramType.mrx}`}
        >
          <Button>
            {deposit > 0
              ? t("MrxProgram.button_update")
              : t("MrxProgram.button_buy")}
          </Button>
        </LinkContainer>
      </div>
      <div className={styles.accounts}>
        <DashboardTitleBlock title={t("MrxProgram.titleBlock.accounts")} />
        <CardDeck>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                {t("MrxProgram.chartData.deposit")}
              </Card.Title>
              <Card.Text>{deposit} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                {t("MrxProgram.chartData.investmentPackage")}
              </Card.Title>
              <Card.Text>{investmentPackage} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                {t("MrxProgram.chartData.dividends")}
              </Card.Title>
              <Card.Text>{dividends} $</Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.account}>
            <Card.Body>
              <Card.Title className={styles.card_title}>
                {t("MrxProgram.chartData.linearPremium")}
              </Card.Title>
              <Card.Text>{linearPremium} $</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div>
        <DashboardTitleBlock title={t("MrxProgram.titleBlock.statistics")} />
        <Row className={styles.statistics}>
          <Col lg={5}>
            <Chart dataProps={chartData} />
          </Col>
          <Col lg={5}>
            <ListGroup className={styles.list_group}>
              <ListGroup.Item className={styles.first}>
                {t("MrxProgram.chartData.deposit")} <span>{deposit}$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.second}>
                {t("MrxProgram.chartData.investmentPackage")}
                <span>{investmentPackage}$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.third}>
                {t("MrxProgram.chartData.dividends")} <span>{dividends}$</span>
              </ListGroup.Item>
              <ListGroup.Item className={styles.fourth}>
                {t("MrxProgram.chartData.linearPremium")}{" "}
                <span>{linearPremium}$</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MrxProgram;
