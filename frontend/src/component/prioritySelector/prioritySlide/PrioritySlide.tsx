import React from "react";
import styles from "./PrioritySlide.module.scss";
import { Button, Col, Image, Row, Tab } from "react-bootstrap";
import cn from "classnames";
import homeImg from "../../../assets/img/home.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";

interface conditions {
  discount?: string;
  term?: string;
  minCost?: string;
  maxCost?: string;
  minStatus?: string;
}
interface PrioritySlideProps {
  title?: string | JSX.Element;
  type?: string;
  description?: string;
  img?: string;
  conditions?: conditions;
  tab?: boolean;
}

const PrioritySlide: React.FC<PrioritySlideProps> = ({
  title = "Home",
  type = "Квартира",
  description = "Собственная квартира на этапе строительства – без кредитов, рассрочек и без экономии на повседневных вещах!",
  conditions = {
    discount: "-25% / -25%",
    term: "120 дней / 180 дней",
    minCost: "20000",
    maxCost: "200000",
    minStatus: "M2",
  },
  img = homeImg,
  tab = true,
}) => {
  const normalizeCondition = {
    discount: "Скидка",
    term: "Срок",
    minCost: "Мин. стоимость",
    maxCost: "Макс. стоимость",
    minStatus: "Мин. статус участника",
  };
  const condition = conditions ? Object.entries(conditions) : null;

  return (
    <div className={styles.slide}>
      <Row>
        <Col sm={12}>
          {tab ? (
            <Tab.Content>
              <Tab.Pane eventKey={title}>
                <Row>
                  <Col lg={5}>
                    <Image src={img} className={styles.img} />
                  </Col>
                  <Col lg={7} className={styles.description}>
                    <h2>Priority {title}</h2>
                    <div className={styles.typeText}>{type}</div>
                    <div>{description}</div>
                    <div className={styles.separator} />

                    {condition &&
                      condition.map(([key, value]) => {
                        return (
                          <Row key={key}>
                            <Col lg={6} className={styles.key}>
                              {normalizeCondition[key]}
                            </Col>
                            <Col lg={6} className={styles.value}>
                              {value}
                            </Col>
                          </Row>
                        );
                      })}
                    <Row>
                      <Col lg={12} className={styles.button_group}>
                        <Button className={cn(styles.button)}>
                          Участвовать
                        </Button>
                        <LinkContainer to={`${RoutePath.priority}/${title}`}>
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
                <h2>Priority {title}</h2>
                <div className={styles.typeText}>{type}</div>
                <div>{description}</div>
                <div className={styles.separator} />

                {condition &&
                  condition.map(([key, value]) => {
                    return (
                      <Row key={key}>
                        <Col lg={6} className={styles.key}>
                          {normalizeCondition[key]}
                        </Col>
                        <Col lg={6} className={styles.value}>
                          {value}
                        </Col>
                      </Row>
                    );
                  })}
                <Row>
                  <Col lg={12} className={styles.button_group}>
                    <Button className={cn(styles.button)}>Участвовать</Button>
                    {tab && (
                      <LinkContainer to={`${RoutePath.priority}/${title}`}>
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
