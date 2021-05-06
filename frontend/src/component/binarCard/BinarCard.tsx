import React from "react";
import styles from "./binarCard.module.scss";
import { defaultComponentProps } from "../../types/types";
import { Button, Card, Col, Row } from "react-bootstrap";
import cn from "classnames";

interface BinarCardProps extends defaultComponentProps {}

const BinarCard: React.FC<BinarCardProps> = () => {
  return (
    <Card className={styles.BinarCard}>
      <Card.Header className={cn(styles.card_header)}>$100</Card.Header>
      <Card.Body>
        <Card.Title className={cn(styles.card_title)}>
          Инвестиционный пакет
        </Card.Title>
        <Row>
          <Col lg={8} className={cn(styles.left_col)}>
            Бинарная премия с меньшей ноги
          </Col>
          <Col lg={4} className={cn(styles.right_col)}>
            10%
          </Col>
        </Row>
        <Row>
          <Col lg={7} className={cn(styles.left_col)}>
            Срок работы инвестиционного пакета
          </Col>
          <Col lg={5} className={cn(styles.right_col)}>
            200 дней
          </Col>
        </Row>
        <Row>
          <Col lg={8} className={cn(styles.left_col)}>
            Надбавка к суточной доходности
          </Col>
          <Col lg={4} className={cn(styles.right_col)}>
            0.2%
          </Col>
        </Row>
        <Row>
          <Col lg={8} className={cn(styles.left_col)}>
            Количество уровней по линейной премии
          </Col>
          <Col lg={4} className={cn(styles.right_col)}>
            3
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className={styles.card_footer}>
        <Row>
          <Col lg={6} className={cn(styles.left_col)}>
            Стоимость
          </Col>
          <Col lg={6} className={cn(styles.right_col, styles.accent)}>
            $100
          </Col>
        </Row>
        <div className={styles.dFlex}>
          <Button className={styles.button}>Купить</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

BinarCard.defaultProps = {};

export default BinarCard;
