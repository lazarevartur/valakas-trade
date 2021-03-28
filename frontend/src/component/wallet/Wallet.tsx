import React, { useRef } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import styles from "./wallet.module.scss";
import useHover from "../../hooks/useHover";

const Wallet = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <>
      <Card className={styles.wallet} ref={hoverRef}>
        <Card.Body>
          <Card.Title className={styles.card_title}>Стартовый счёт</Card.Title>
          <Card.Text className={styles.card_text}>$ 0</Card.Text>
          <Button
            className={!isHover ? styles.card_button : styles.card_button_hover}
          >
            Пополнить баланс
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

Wallet.defaultProps = {};

export default Wallet;
