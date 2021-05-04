import React from "react";
import cn from "classnames";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import styles from "./InvestmentPackages.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { BinarCard } from "../../binarCard";

interface InvestmentPackagesProps extends defaultComponentProps {}

const InvestmentPackages: React.FC<InvestmentPackagesProps> = () => {
  return (
    <div className={cn(styles.InvestmentPackages)}>
      <Container>
        <Row>
          <Col lg={12}>
            <h5 className={styles.title}>Инвестиционные пакеты</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <p className={styles.text}>
              Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium
              temporibus voluptatibus pariatur. Numquam veritatis dolorem et.
              Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam
              quae eaque qui iste ut. Atque officia laborum recusandae.
            </p>
          </Col>
        </Row>
        <Row className={cn(styles.description)}>
          <Col lg={2}>
            <p className={cn(styles.accent)}>
              до <span>2%</span>
            </p>
            <p>плавающая ставка</p>
          </Col>
          <Col lg={4}>
            <p className={cn(styles.accent)}>
              <span>200-300</span>
            </p>
            <p>календарных дней</p>
          </Col>
          <Col lg={3}>
            {" "}
            <p className={cn(styles.accent)}>
              <span>23:00</span>
            </p>
            <p>время выставления доходности</p>
          </Col>
          <Col lg={3}>
            {" "}
            <p className={cn(styles.accent)}>
              <span>1=1$</span>
            </p>
            <p>текущий курс</p>
          </Col>
        </Row>
        <Row className={cn(styles.cardGroup)}>
          <Col lg={12}>
            <CardDeck>
              <BinarCard />
              <BinarCard />
              <BinarCard />
            </CardDeck>
            <br />
            <CardDeck>
              <BinarCard />
              <BinarCard />
              <BinarCard />
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

InvestmentPackages.defaultProps = {};

export default InvestmentPackages;
