import React from "react";
import styles from "./binarCard.module.scss";
import { defaultComponentProps } from "../../types/types";
import { Button, Card, Col, Row } from "react-bootstrap";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

interface BinarCardProps extends defaultComponentProps {
  name?: string;
  validity?: number;
  line_count?: number;
  price?: number;
  _id?: string;
  linkTo?: string;
}
/*
 * “linear_premium”: 4, “premium”: 0.2, “line_count”: 4, “price”: 10000, “_id”: “60da42c6e3c2022c8c4d6d25”, “name”: “10000”, “validity”: 260,*/
const BinarCard: React.FC<BinarCardProps> = ({
  name = "Пакет",
  validity = 210,
  line_count = 3,
  price = 1000,
  _id = "1",
  linkTo = "/lol",
}) => {
  const { t } = useTranslation();
  return (
    <Card className={styles.BinarCard}>
      <Card.Header className={cn(styles.card_header)}>${name}</Card.Header>
      <Card.Body>
        <Card.Title className={cn(styles.card_title)}>
          {t("MrxInvest.BinarCard.card_title")}
        </Card.Title>
        <Row>
          <Col lg={7} className={cn(styles.left_col)}>
            {t("MrxInvest.BinarCard.deskBlock1.text1")}
          </Col>
          <Col lg={5} className={cn(styles.right_col)}>
            {validity} {t("MrxInvest.BinarCard.deskBlock1.text2")}
          </Col>
        </Row>
        <Row>
          <Col lg={8} className={cn(styles.left_col)}>
            {t("MrxInvest.BinarCard.deskBlock2.text1")}
          </Col>
          <Col lg={4} className={cn(styles.right_col)}>
            0.2%
          </Col>
        </Row>
        <Row>
          <Col lg={8} className={cn(styles.left_col)}>
            {t("MrxInvest.BinarCard.deskBlock3.text1")}
          </Col>
          <Col lg={4} className={cn(styles.right_col)}>
            {line_count}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className={styles.card_footer}>
        <Row>
          <Col lg={6} className={cn(styles.left_col)}>
            {t("MrxInvest.BinarCard.footer.text1")}
          </Col>
          <Col lg={6} className={cn(styles.right_col, styles.accent)}>
            ${price}
          </Col>
        </Row>
        <div className={styles.dFlex}>
          <LinkContainer to={linkTo}>
            <Button className={styles.button}>
              {t("MrxInvest.BinarCard.footer.text2")}
            </Button>
          </LinkContainer>
        </div>
      </Card.Footer>
    </Card>
  );
};

BinarCard.defaultProps = {};

export default BinarCard;
