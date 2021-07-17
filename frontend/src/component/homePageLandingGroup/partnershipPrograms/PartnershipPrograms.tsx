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
import { RoutePath, routesConfig } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";

interface PartnershipProgramsProps extends defaultComponentProps {}

const PartnershipPrograms: React.FC<PartnershipProgramsProps> = ({
  className = "",
}) => {
  return (
    <div className={cn(styles.bg, { [className]: className })}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className={styles.title}>
              <strong>Для тех, кто хочет большего</strong>
            </h1>
            <Row>
              <Col lg={{ offset: 3, span: 6 }}>
                <p className={styles.text}>
                  Выберите любую программу на комфортных условиях.
                </p>
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
                            Программа <strong>MRX-invest</strong>{" "}
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
                            Продвижение компании в блок-чейн индустрии.
                            <br /> В <strong>MRX-invest</strong> используется
                            линейный маркетинговый план.
                          </p>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>Объём инвестиционных пакетов</h5>
                                <p>
                                  от 100 до 10 000 (9 инвестиционных пакетов)
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
                                <h5>Доходность</h5>
                                <p>
                                  Плавающая, до 2% в сутки, без выходных, и
                                  зависит от объёма инвестиционного пакета
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
                                <h5>Срок работы</h5>
                                <p>210-260 календарных дней</p>
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
                            Программа <strong>Option</strong>{" "}
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
                            Продвижение компании <strong>Placebo</strong>, в
                            котором используется
                            <br /> линейный маркетинговый план.
                          </p>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Clock />
                              </Col>
                              <Col lg={11}>
                                <h5>Срок работы</h5>
                                <p>60-300 календарных дней</p>
                              </Col>
                            </Row>
                          </div>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>Объём инвестиционных пакетов</h5>
                                <p>от 100$ (10 раундов)</p>
                              </Col>
                            </Row>
                          </div>{" "}
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Rocket />
                              </Col>
                              <Col lg={8}>
                                <h5>Доходность</h5>
                                <p>
                                  Разовая выплата при запуске продаж до 50% в
                                  зависимости от раунда в котором были
                                  приобритенны опционы.
                                  <br />
                                  Дивиденты до 50% в месяц. Все последуйщее
                                  время пока вы являетесь держателем опционов.
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
                            Программа <strong>Priority</strong>{" "}
                            <a href="#" className={styles.link}>
                              <ExternalLinkIcon
                                height={24}
                                width={24}
                                className={styles.link_icon}
                              />
                              <Link to={RoutePath.priority}>Priority</Link>
                            </a>
                          </h4>
                          <p>
                            Возможность приобрести продукты за 30-50% от их
                            стоимости
                          </p>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Rocket />
                              </Col>
                              <Col lg={8}>
                                <h5>Доходность</h5>
                                <p>100-300%</p>
                              </Col>
                            </Row>
                          </div>{" "}
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>Объём инвестиционных пакетов</h5>
                                <p>
                                  от 300$ до 200 000$ (7 инвестиционных пакетов)
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
                                <h5>Срок работы</h5>
                                <p>21-120 календарных дней</p>
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
