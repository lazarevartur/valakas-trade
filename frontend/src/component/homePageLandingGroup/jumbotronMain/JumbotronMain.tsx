import React from "react";
import styles from "./jumbotronMain.module.scss";
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";

interface JumbotronMainProps {
  className?: string;
}

const JumbotronMain: React.FC<JumbotronMainProps> = ({ className }) => {
  return (
    <Jumbotron className={`${className} ${styles.jumbotron}`}>
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <h1>
                <strong>Quis veniam sed placeat porro</strong>
              </h1>
              <p className={styles.content}>
                Exercitationem rerum nesciunt dicta voluptatem eligendi
                laudantium temporibus voluptatibus pariatur. Numquam veritatis
                dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque
                doloremque ullam quae eaque qui iste ut. Atque officia laborum
                recusandae.
              </p>
              <Button size={"lg"}>Вход/Регистрация</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbotron>
  );
};

JumbotronMain.defaultProps = {};

export default JumbotronMain;
