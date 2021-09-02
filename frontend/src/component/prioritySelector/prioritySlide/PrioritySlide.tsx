import React from "react";
import styles from "./PrioritySlide.module.scss";
import { Button, Col, Image, Row, Tab } from "react-bootstrap";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { IPriorityData, rootState } from "../../../types/types";
import { getRuFormatNumbers } from "../../../utils/utils";
import useIsAuth from "../../../hooks/useIsAuth";
import { useSelectorTyped } from "../../../hooks/useTypedRedux";
import { userMentorStatus } from "../../../config";
import { DashboardRoute } from "../../../routes/dashboard";
import { useTranslation } from "react-i18next";

interface conditions {
  discount?: string;
  term?: string;
  minCost?: string;
  maxCost?: string;
  minStatus?: string;
}
interface PrioritySlideProps extends IPriorityData {
  tab?: boolean;
  onClick?: any;
  button?: boolean;
}

const PrioritySlide: React.FC<PrioritySlideProps> = ({
  name = "Home",
  type = "Квартира",
  description = "Собственная квартира на этапе строительства – без кредитов, рассрочек и без экономии на повседневных вещах!",
  conditions = {
    discount: [],
    term: [],
    minCost: "20000",
    maxCost: "200000",
    minStatus: "M2",
  },
  img,
  tab = true,
  onClick,
  button = true,
}) => {
  const { t } = useTranslation();
  const { isAuth } = useIsAuth();
  const { userDashboard } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );

  const statusMentor = userMentorStatus.m1 == userDashboard.status;
  return (
    <div className={styles.slide}>
      {tab ? (
        <Tab.Content>
          <Tab.Pane eventKey={name}>
            <Row>
              <Col lg={5}>
                <Image src={img} className={styles.img} />
              </Col>
              <Col lg={7} className={styles.description}>
                <h2>Priority {name}</h2>
                <div className={styles.typeText}>{type}</div>
                <div>{description}</div>
                <div className={styles.separator} />

                <Row>
                  <Col lg={6} className={styles.key}>
                    {t("PrioritySlides.discount")}
                  </Col>
                  <Col lg={6} className={styles.value}>
                    {conditions.discount.map((item, i) => {
                      return (
                        <span key={item}>
                          {" "}
                          <span className={styles.color_red}>{item}%</span>{" "}
                          {conditions.discount.length - 1 !== i && "/"}
                        </span>
                      );
                    })}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className={styles.key}>
                    {t("PrioritySlides.term")}
                  </Col>
                  <Col lg={6} className={styles.value}>
                    {conditions.term.map((item, i) => {
                      return (
                        <span key={item}>
                          {" "}
                          {item} {t("PrioritySlides.days")}{" "}
                          {conditions.term.length - 1 !== i && "/"}
                        </span>
                      );
                    })}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className={styles.key}>
                    {t("PrioritySlides.min_coast")}
                  </Col>
                  <Col lg={6} className={styles.value}>
                    $ {getRuFormatNumbers(conditions.minCost)}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className={styles.key}>
                    {t("PrioritySlides.max_coast")}
                  </Col>
                  <Col lg={6} className={styles.value}>
                    $ {getRuFormatNumbers(conditions.maxCost)}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className={styles.key}>
                    {t("PrioritySlides.status")}
                  </Col>
                  <Col lg={6} className={styles.value}>
                    {conditions.minStatus}
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} className={styles.button_group}>
                    <LinkContainer to={`${RoutePath.priority}/${name}`}>
                      <Button className={styles.whiteButton}>
                        {t("PrioritySlides.button_text")}
                      </Button>
                    </LinkContainer>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      ) : (
        <Row>
          <Col lg={5}>
            <Image src={img} className={styles.img} />
          </Col>
          <Col lg={7} className={styles.description}>
            <h2>Priority {name}</h2>
            <div className={styles.typeText}>{type}</div>
            <div>{description}</div>
            <div className={styles.separator} />
            <Row>
              <Col lg={6} className={styles.key}>
                {t("PrioritySlides.discount")}
              </Col>
              <Col lg={6} className={styles.value}>
                {conditions.discount.map((item, i) => {
                  return (
                    <span key={item}>
                      {" "}
                      <span className={styles.color_red}>{item}%</span>{" "}
                      {conditions.discount.length - 1 !== i && "/"}
                    </span>
                  );
                })}
              </Col>
            </Row>
            <Row>
              <Col lg={6} className={styles.key}>
                {t("PrioritySlides.term")}
              </Col>
              <Col lg={6} className={styles.value}>
                {conditions.term.map((item, i) => {
                  return (
                    <span key={item}>
                      {" "}
                      {item} {t("PrioritySlides.days")}{" "}
                      {conditions.term.length - 1 !== i && "/"}
                    </span>
                  );
                })}
              </Col>
            </Row>
            <Row>
              <Col lg={6} className={styles.key}>
                {t("PrioritySlides.min_coast")}
              </Col>
              <Col lg={6} className={styles.value}>
                $ {getRuFormatNumbers(conditions.minCost)}
              </Col>
            </Row>
            <Row>
              <Col lg={6} className={styles.key}>
                {t("PrioritySlides.max_coast")}
              </Col>
              <Col lg={6} className={styles.value}>
                $ {getRuFormatNumbers(conditions.maxCost)}
              </Col>
            </Row>
            <Row>
              <Col lg={6} className={styles.key}>
                {t("PrioritySlides.status")}
              </Col>
              <Col lg={6} className={styles.value}>
                {conditions.minStatus}
              </Col>
            </Row>
            <Row>
              <Col lg={12} className={styles.button_group}>
                {button && (
                  <LinkContainer
                    to={
                      isAuth
                        ? statusMentor
                          ? DashboardRoute.priority
                          : RoutePath.buyPriority
                        : RoutePath.login
                    }
                  >
                    <Button onClick={onClick} className={cn(styles.button)}>
                      {t("PrioritySlides.button_text2")}
                    </Button>
                  </LinkContainer>
                )}
                {tab && (
                  <LinkContainer to={`${RoutePath.priority}/${name}`}>
                    <Button className={styles.whiteButton}>
                      {" "}
                      {t("PrioritySlides.button_text")}
                    </Button>
                  </LinkContainer>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};

PrioritySlide.defaultProps = {};

export default PrioritySlide;
