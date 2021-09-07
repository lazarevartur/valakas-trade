import React from "react";
import styles from "./priorityProgram.module.scss";
import { Plug } from "../../../uiKit/plug";
import { Button, Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../../routes/routesConfig";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";
import { getCurrentUser } from "../../../../store/action/dashboardAction";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../../hooks/useTypedRedux";
import { rootState } from "../../../../types/types";

import { PriorityCard } from "./priorityCard";
import { userMentorStatus } from "../../../../config";
import { DashboardRoute } from "../../../../routes/dashboard";
import { useTranslation } from "react-i18next";

interface PriorityProgramProps {}

const PriorityProgram: React.FC<PriorityProgramProps> = () => {
  const { t } = useTranslation();
  const { userDashboard, isLoading } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );
  const priority = userDashboard.programs.priority;
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    if (!priority.length) dispatch(getCurrentUser());
  }, []);

  const countAllPrograms = priority.length;
  const totalInvest = priority.reduce((total, item) => {
    total += item.amount;
    return total;
  }, 0);
  const totalOriginalAmount = priority.reduce((total, item) => {
    total += item.originalAmount;
    return total;
  }, 0);
  const totalProfit = totalOriginalAmount - totalInvest;

  if (userMentorStatus.m1 == userDashboard.status) {
    return (
      <p>
        <Plug
          text={t("ui.Plug.status_mentor")}
          link={DashboardRoute.team}
          buttonText={t("ui.Plug.buttonText")}
        />
      </p>
    );
  }

  // return <Plug
  //     text={"Для работы нужен статус ментора М2"}
  //     link={DashboardRoute.team}
  //     buttonText={"Посмотреть статус"}
  // />

  return (
    <Container>
      <DashboardTitleBlock
        title={t("PriorityProgram.TitleBlock.Profitability")}
      />
      <div className={styles.information}>
        <Row>
          <Col lg={5}>{t("PriorityProgram.Program")}</Col>
          <Col lg={4}>
            <span>Priority</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>{t("PriorityProgram.countAllPrograms")}</Col>
          <Col lg={4}>
            <span>{countAllPrograms}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>{t("PriorityProgram.totalInvest")}</Col>
          <Col lg={4}>
            <span>$ {totalInvest.toFixed(1)}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>{t("PriorityProgram.totalProfit")}</Col>
          <Col lg={4}>
            <span>$ {totalProfit.toFixed(1)}</span>
          </Col>
        </Row>
        <LinkContainer to={`${RoutePath.priority}`}>
          <Button>{t("PriorityProgram.Button")}</Button>
        </LinkContainer>
      </div>
      {priority.map((item, i) => {
        return (
          <div className={styles.accounts} key={i}>
            <DashboardTitleBlock
              title={`${t("PriorityProgram.TitleBlock.PriorityCard")} ${i + 1}`}
            />
            <PriorityCard {...item} index={i} />
          </div>
        );
      })}

      {/*<div>*/}
      {/*  <DashboardTitleBlock*/}
      {/*    title={"Статистика доходности по программе MRX-invest"}*/}
      {/*  />*/}
      {/*  <Row className={styles.statistics}>*/}
      {/*    <Col lg={5}>*/}
      {/*      <Chart />*/}
      {/*    </Col>*/}
      {/*    <Col lg={5}>*/}
      {/*      <ListGroup className={styles.list_group}>*/}
      {/*        <ListGroup.Item className={styles.first}>*/}
      {/*          First characteristic <span>1666$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*        <ListGroup.Item className={styles.second}>*/}
      {/*          Second characteristic <span>666$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*        <ListGroup.Item className={styles.third}>*/}
      {/*          Third characteristic <span>166$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*        <ListGroup.Item className={styles.fourth}>*/}
      {/*          Fourth characteristic <span>66$</span>*/}
      {/*        </ListGroup.Item>*/}
      {/*      </ListGroup>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*</div>*/}
    </Container>
  );
};

export default PriorityProgram;
