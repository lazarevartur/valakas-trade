import React from "react";
import styles from "./PriorityDescription.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { PrioritySlide } from "../../component/prioritySelector/prioritySlide";

interface PriorityDescriptionProps {
  match: any;
}

const PriorityDescription: React.FC<PriorityDescriptionProps> = ({ match }) => {
  const id = match.params.id;
  const history = useHistory();
  return (
    <div className={styles.PriorityDescription}>
      <Container className={styles.container}>
        <a className={styles.goBack} onClick={() => history.goBack()}>
          {id}
        </a>
        <div className={styles.PrioritySlide}>
          <PrioritySlide tab={false} />
        </div>
        <Row>
          <Col lg={12} className={styles.calculator}>
            <h2 className={styles.title}>Калькулятор</h2>
            <p>
              Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium
              temporibus voluptatibus pariatur. Numquam veritatis dolorem et.
              Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam
              quae eaque qui iste ut. Exercitationem rerum nesciunt dicta
              voluptatem eligendi laudantium temporibus voluptatibus pariatur.
              Numquam veritatis dolorem et. Tenetur omnis qui omnis minus. Omnis
              sit eaque doloremque ullam quae eaque qui iste ut.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PriorityDescription.defaultProps = {};

export default PriorityDescription;
