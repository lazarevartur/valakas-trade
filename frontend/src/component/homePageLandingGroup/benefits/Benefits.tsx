import React from "react";
import styles from "./benefits.module.scss";
import { Col, Row } from "react-bootstrap";
import Mountains from "../../../svg/Mountains";

const Benefits = () => {
  return (
    <div>
      <h2 className={styles.main_title}>Quis veniam sed</h2>
      <Row className={styles.mt_big}>
        <Col lg={4}>
          <div className={styles.icon}>
            <Mountains />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Concept</h3>
            <p className={styles.text}>
              Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium
              temporibus voluptatibus pariatur. Numquam veritatis dolorem et.
              Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam
              quae eaque qui iste ut.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.icon}>
            <Mountains />
          </div>

          <div className={styles.content}>
            <h3 className={styles.title}>Research</h3>
            <p className={styles.text}>
              Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium
              temporibus voluptatibus pariatur. Numquam veritatis dolorem et.
              Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam
              quae eaque qui iste ut.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.icon}>
            <Mountains />
          </div>
          <div>
            <h3 className={styles.title}>Marketing</h3>
            <p className={styles.text}>
              Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium
              temporibus voluptatibus pariatur. Numquam veritatis dolorem et.
              Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam
              quae eaque qui iste ut.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Benefits.defaultProps = {};

export default Benefits;
