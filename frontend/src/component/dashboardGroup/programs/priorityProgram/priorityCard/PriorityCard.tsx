import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import styles from "./priorityCard.module.scss";
import { getRuDate, getRuFormatNumbers } from "../../../../../utils/utils";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../../../routes/routesConfig";
interface conditions {
  discount: number;
  insurance: number;
  term: number;
}

interface PriorityCardProps {
  amount: number;
  conditions: conditions;
  dateCompletion: number;
  originalAmount: number;
  marketingAssistance: boolean;
  programType: string;
  img: string;
}

const PriorityCard: React.FC<PriorityCardProps> = ({
  amount = 1,
  conditions = {},
  dateCompletion = 1,
  originalAmount = 1,
  marketingAssistance = true,
  programType = "home",
}) => {
  return (
    <div className={styles.slide}>
      <Row>
        <Col sm={12}>
          <Row>
            <Col lg={5}>
              <Image
                src={`/public/${programType}.jpg`}
                className={styles.img}
              />
            </Col>
            <Col lg={7} className={styles.description}>
              <h2>Priority {programType}</h2>
              <div className={styles.separator} />
              <Row>
                <Col lg={6} className={styles.key}>
                  Дата завершения
                </Col>
                <Col lg={6} className={styles.value}>
                  {getRuDate(dateCompletion)}
                </Col>
              </Row>
              <Row>
                <Col lg={6} className={styles.key}>
                  Маркетинговое содействие
                </Col>
                <Col lg={6} className={styles.value}>
                  {marketingAssistance ? "Подключенно" : "Отключенно"}
                </Col>
              </Row>
              <Row>
                <Col lg={6} className={styles.key}>
                  Итоговая ценна
                </Col>
                <Col lg={6} className={styles.value}>
                  $ {amount}
                </Col>
              </Row>
              <Row>
                <Col lg={6} className={styles.key}>
                  Цена без скидок
                </Col>
                <Col lg={6} className={styles.value}>
                  $ {originalAmount}
                </Col>
              </Row>
              <Row>
                <Col lg={6} className={styles.key}>
                  Скидка
                </Col>
                <Col lg={6} className={styles.value}>
                  {conditions.discount}%
                </Col>
              </Row>
              <Row>
                <Col lg={6} className={styles.key}>
                  Страховка
                </Col>
                <Col lg={6} className={styles.value}>
                  {conditions.insurance}%
                </Col>
              </Row>
              <Row>
                <Col lg={6} className={styles.key}>
                  Активация программы
                </Col>
                <Col lg={6} className={styles.value}>
                  1%
                </Col>
              </Row>
              <Row>
                <Col lg={6} className={styles.key}>
                  Срок ожидания
                </Col>
                <Col lg={6} className={styles.value}>
                  {conditions.term} дней
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

PriorityCard.defaultProps = {};

export default PriorityCard;
