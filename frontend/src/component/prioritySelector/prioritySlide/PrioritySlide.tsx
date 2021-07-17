import React from "react";
import styles from "./PrioritySlide.module.scss";
import { Button, Col, Image, Row, Tab } from "react-bootstrap";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { IPriorityData } from "../../../types/types";
import { getFirstAndLast, getRuFormatNumbers } from "../../../utils/utils";

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
  return (
    <div className={styles.slide}>
      <Row>
        <Col sm={12}>
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
                        Скидка
                      </Col>
                      <Col lg={6} className={styles.value}>
                        {conditions.discount.map((item, i) => {
                          return (
                            <span key={item}>
                              {" "}
                              <span className={styles.color_red}>
                                {item}%
                              </span>{" "}
                              {conditions.discount.length - 1 !== i && "/"}
                            </span>
                          );
                        })}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} className={styles.key}>
                        Срок
                      </Col>
                      <Col lg={6} className={styles.value}>
                        {conditions.term.map((item, i) => {
                          return (
                            <span key={item}>
                              {" "}
                              {item} дней{" "}
                              {conditions.term.length - 1 !== i && "/"}
                            </span>
                          );
                        })}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} className={styles.key}>
                        Мин. стоимость
                      </Col>
                      <Col lg={6} className={styles.value}>
                        $ {getRuFormatNumbers(conditions.minCost)}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} className={styles.key}>
                        Макс. стоимость
                      </Col>
                      <Col lg={6} className={styles.value}>
                        $ {getRuFormatNumbers(conditions.maxCost)}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} className={styles.key}>
                        Мин. статус участника
                      </Col>
                      <Col lg={6} className={styles.value}>
                        {conditions.minStatus}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className={styles.button_group}>
                        <Button className={cn(styles.button)}>
                          Участвовать
                        </Button>
                        <LinkContainer to={`${RoutePath.priority}/${name}`}>
                          <Button className={styles.whiteButton}>Детали</Button>
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
                    Скидка
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
                    Срок
                  </Col>
                  <Col lg={6} className={styles.value}>
                    {conditions.term.map((item, i) => {
                      return (
                        <span key={item}>
                          {" "}
                          {item} дней {conditions.term.length - 1 !== i && "/"}
                        </span>
                      );
                    })}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className={styles.key}>
                    Мин. стоимость
                  </Col>
                  <Col lg={6} className={styles.value}>
                    $ {getRuFormatNumbers(conditions.minCost)}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className={styles.key}>
                    Макс. стоимость
                  </Col>
                  <Col lg={6} className={styles.value}>
                    $ {getRuFormatNumbers(conditions.maxCost)}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className={styles.key}>
                    Мин. статус участника
                  </Col>
                  <Col lg={6} className={styles.value}>
                    {conditions.minStatus}
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} className={styles.button_group}>
                    {button && (
                      <Button onClick={onClick} className={cn(styles.button)}>
                        Участвовать
                      </Button>
                    )}
                    {tab && (
                      <LinkContainer to={`${RoutePath.priority}/${name}`}>
                        <Button className={styles.whiteButton}>Детали</Button>
                      </LinkContainer>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

PrioritySlide.defaultProps = {};

export default PrioritySlide;
