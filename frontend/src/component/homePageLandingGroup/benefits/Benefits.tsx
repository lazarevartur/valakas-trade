import React from "react";
import styles from "./benefits.module.scss";
import { Col, Row } from "react-bootstrap";
import Mountains from "../../../svg/Mountains";

const Benefits = () => {
  return (
    <div>
      <h2 className={styles.main_title}>Почему стоит инвестировать сейчас</h2>
      <Row className={styles.mt_big}>
        <Col lg={4}>
          <div className={styles.icon}>
            <Mountains />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Доходность 100% годовых</h3>
            <p className={styles.text}>
              Выбор из представленных тарифных пакетов с высокой окупаемостью до
              100% годовых. Гарантированный доход уже через день.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.icon}>
            <Mountains />
          </div>

          <div className={styles.content}>
            <h3 className={styles.title}>Прибыльная бизнес-модель</h3>
            <p className={styles.text}>
              Возможность построить собственную структуру благодаря
              интегрированным реферальным системам, получая дополнительный
              доход, бонусы и премии за активность.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.icon}>
            <Mountains />
          </div>
          <div>
            <h3 className={styles.title}>Отсутствие рисков</h3>
            <p className={styles.text}>
              Никаких нелегальных проектов, торговли на биржах, сделок на
              повышение или понижение, несущих риск.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Benefits.defaultProps = {};

export default Benefits;
