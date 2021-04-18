import React from "react";
import styles from "./partnershipPrograms.module.scss";
import cn from "classnames";
import { defaultComponentProps } from "../../../types/types";
import HomeBg from "../../../svg/HomeBg";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import { BackpackIcon, ExternalLinkIcon } from "@modulz/radix-icons";
import Backpack from "../../../svg/Backpack";
import Rocket from "../../../svg/Rocket";
import Clock from "../../../svg/Clock";

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
              <strong>Инвестиционно-партнерские программы</strong>
            </h1>
            <Row>
              <Col lg={{ offset: 3, span: 6 }}>
                <p className={styles.text}>
                  Exercitationem rerum nesciunt dicta voluptatem eligendi
                  laudantium temporibus voluptatibus pariatur. Numquam veritatis
                  dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque
                  doloremque ullam quae eaque qui iste ut. Atque officia laborum
                  recusandae.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#tokenProfitTeam"
            >
              <Row>
                <Col sm={4}>
                  <ListGroup className={styles.list_group}>
                    <ListGroup.Item
                      className={styles.list_group_item}
                      action
                      href="#tokenProfitTeam"
                    >
                      Token Profit Team
                    </ListGroup.Item>
                    <ListGroup.Item action href="#coinProfitTeam">
                      Coin Profit Team
                    </ListGroup.Item>
                    <ListGroup.Item action href="#synergyProfitTeam">
                      Synergy Profit Team
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#tokenProfitTeam">
                      <Row>
                        <Col className={styles.description}>
                          <h4>
                            Программа <strong>Token Profit Team</strong>{" "}
                            <a href="#" className={styles.link}>
                              <ExternalLinkIcon
                                height={24}
                                width={24}
                                className={styles.link_icon}
                              />
                              catalysts.finance
                            </a>
                          </h4>
                          <p>
                            Продвижение компании <strong>Catalyst</strong>, в
                            котором используется
                            <br /> бинарный маркетинг-план
                          </p>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>Объём инвестиционных пакетов</h5>
                                <p>
                                  от 100 до 300 000 (15 инвестиционных пакетов)
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
                                <p>200-300 календарных дней</p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#coinProfitTeam">
                      <Row>
                        <Col className={styles.description}>
                          <h4>
                            Программа <strong>Coin Profit Team</strong>{" "}
                            <a href="#" className={styles.link}>
                              <ExternalLinkIcon
                                height={24}
                                width={24}
                                className={styles.link_icon}
                              />
                              catalysts.finance
                            </a>
                          </h4>
                          <p>
                            Продвижение компании <strong>Catalyst</strong>, в
                            котором используется
                            <br /> бинарный маркетинг-план
                          </p>
                          <div className={styles.description_tab}>
                            <Row>
                              <Col lg={1} className={styles.icon}>
                                <Clock />
                              </Col>
                              <Col lg={11}>
                                <h5>Срок работы</h5>
                                <p>200-300 календарных дней</p>
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
                                <p>
                                  от 100 до 300 000 (15 инвестиционных пакетов)
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
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#synergyProfitTeam">
                      <Row>
                        <Col className={styles.description}>
                          <h4>
                            Программа <strong>Synergy Profit Team</strong>{" "}
                            <a href="#" className={styles.link}>
                              <ExternalLinkIcon
                                height={24}
                                width={24}
                                className={styles.link_icon}
                              />
                              catalysts.finance
                            </a>
                          </h4>
                          <p>
                            Продвижение компании <strong>Catalyst</strong>, в
                            котором используется
                            <br /> бинарный маркетинг-план
                          </p>
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
                                <Backpack />
                              </Col>
                              <Col lg={11}>
                                <h5>Объём инвестиционных пакетов</h5>
                                <p>
                                  от 100 до 300 000 (15 инвестиционных пакетов)
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
                                <p>200-300 календарных дней</p>
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

PartnershipPrograms.defaultProps = {};

export default PartnershipPrograms;
