import React from "react";
import styles from "./partnershipPrograms.module.scss";
import cn from "classnames";
import { defaultComponentProps } from "../../../types/types";
import HomeBg from "../../../assets/svg/HomeBg";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import { ExternalLinkIcon } from "@modulz/radix-icons";
import Backpack from "../../../assets/svg/Backpack";
import Rocket from "../../../assets/svg/Rocket";
import Clock from "../../../assets/svg/Clock";
import { RoutePath } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

interface PartnershipProgramsProps extends defaultComponentProps {}

const PartnershipPrograms: React.FC<PartnershipProgramsProps> = ({
  className = "",
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(styles.bg, styles.PartnershipPrograms, {
        [className]: className,
      })}
    >
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className={styles.title}>
              <strong>{t("HomePage.wantMore.title")}</strong>
            </h1>
            <Row>
              <Col lg={{ offset: 3, span: 6 }}>
                <p className={styles.text}>{t("HomePage.wantMore.text")}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#MRX_invest"
            >
              <Row>
                <Col sm={4}>
                  <ListGroup className={styles.list_group}>
                    <ListGroup.Item
                      className={styles.list_group_item}
                      action
                      href="#MRX_invest"
                    >
                      MRX-invest
                    </ListGroup.Item>
                    <ListGroup.Item action href="#Optional">
                      Optional
                    </ListGroup.Item>
                    <ListGroup.Item action href="#Priority">
                      Priority
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#MRX_invest">
                      <Row>
                        <Col className={styles.description}>
                          <h4>
                            {t("HomePage.wantMore.MRX-invest.title")}{" "}
                            <strong>MRX-invest</strong>{" "}
                            <br className={"d-lg-none"} />
                            <a href="#" className={styles.link}>
                              <ExternalLinkIcon
                                height={24}
                                width={24}
                                className={styles.link_icon}
                              />
                              <Link to={RoutePath.binarProfitTeam}>
                                MRX-invest
                              </Link>
                            </a>
                          </h4>
                          <p>
                            <Trans
                              i18nKey={
                                "HomePage.wantMore.MRX-invest.description"
                              }
                            >
                              {t("HomePage.wantMore.MRX-invest.description")}
                            </Trans>
                          </p>
                          <div className={styles.description_tab}>
                            <Row className={styles.row}>
                              <Col lg={1} className={styles.icon}>
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>
                                  {t(
                                    "HomePage.wantMore.MRX-invest.1block.title"
                                  )}
                                </h5>
                                <p>
                                  {t(
                                    "HomePage.wantMore.MRX-invest.1block.text"
                                  )}
                                </p>
                              </Col>
                            </Row>
                          </div>{" "}
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Rocket />
                              </Col>
                              <Col lg={8}>
                                <h5>
                                  {t(
                                    "HomePage.wantMore.MRX-invest.2block.title"
                                  )}
                                </h5>
                                <p>
                                  {t(
                                    "HomePage.wantMore.MRX-invest.2block.text"
                                  )}
                                </p>
                              </Col>
                            </Row>
                          </div>{" "}
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Clock />
                              </Col>
                              <Col lg={11}>
                                <h5>
                                  {t(
                                    "HomePage.wantMore.MRX-invest.3block.title"
                                  )}
                                </h5>
                                <p>
                                  {t(
                                    "HomePage.wantMore.MRX-invest.3block.text"
                                  )}
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#Optional">
                      <Row>
                        <Col className={styles.description}>
                          <h4>
                            {t("HomePage.wantMore.optional.title")}{" "}
                            <strong>Optional</strong>{" "}
                            <br className={"d-lg-none"} />
                            <a href="#" className={styles.link}>
                              <ExternalLinkIcon
                                height={24}
                                width={24}
                                className={styles.link_icon}
                              />
                              <Link to={RoutePath.optional}>Optional</Link>
                            </a>
                          </h4>
                          <p>
                            <Trans>
                              {t("HomePage.wantMore.optional.description")}
                            </Trans>
                          </p>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Clock />
                              </Col>
                              <Col lg={11}>
                                <h5>
                                  {t("HomePage.wantMore.optional.1block.title")}
                                </h5>
                                <p>
                                  {t("HomePage.wantMore.optional.1block.text")}
                                </p>
                              </Col>
                            </Row>
                          </div>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>
                                  {t("HomePage.wantMore.optional.2block.title")}
                                </h5>
                                <p>
                                  {t("HomePage.wantMore.optional.2block.text")}
                                </p>
                              </Col>
                            </Row>
                          </div>{" "}
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Rocket />
                              </Col>
                              <Col lg={8}>
                                <h5>
                                  {t("HomePage.wantMore.optional.3block.title")}
                                </h5>
                                <p>
                                  <Trans>
                                    {t(
                                      "HomePage.wantMore.optional.3block.text"
                                    )}
                                  </Trans>
                                </p>
                              </Col>
                            </Row>
                          </div>{" "}
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#Priority">
                      <Row>
                        <Col className={styles.description}>
                          <h4>
                            {t("HomePage.wantMore.priority.title")}{" "}
                            <strong>Priority</strong>{" "}
                            <br className={"d-lg-none"} />
                            <a href="#" className={styles.link}>
                              <ExternalLinkIcon
                                height={24}
                                width={24}
                                className={styles.link_icon}
                              />
                              <Link to={RoutePath.priority}>Priority</Link>
                            </a>
                          </h4>
                          <p>{t("HomePage.wantMore.priority.description")}</p>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Rocket />
                              </Col>
                              <Col lg={8}>
                                <h5>
                                  {t("HomePage.wantMore.priority.1block.title")}
                                </h5>
                                <p>
                                  {t("HomePage.wantMore.priority.1block.text")}
                                </p>
                              </Col>
                            </Row>
                          </div>{" "}
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>
                                  {t("HomePage.wantMore.priority.2block.title")}
                                </h5>
                                <p>
                                  {t("HomePage.wantMore.priority.2block.text")}
                                </p>
                              </Col>
                            </Row>
                          </div>{" "}
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Clock />
                              </Col>
                              <Col lg={11}>
                                <h5>
                                  {t("HomePage.wantMore.priority.3block.title")}
                                </h5>
                                <p>
                                  {t("HomePage.wantMore.priority.3block.text")}
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnershipPrograms;
