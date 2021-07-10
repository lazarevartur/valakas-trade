import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./wallet.module.scss";
import useHover from "../../hooks/useHover";
import { defaultComponentProps } from "../../types/types";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";

interface WalletProps extends defaultComponentProps {
  title?: string;
  count?: number;
  name?: string;
  to?: string;
  location?: any;
}

const Wallet: React.FC<WalletProps> = ({
  className = "",
  title = "Wallet",
  name = "Пополнить баланс",
  to = "",
  count = 100,
  location = "",
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <>
      <Card
        className={cn(styles.wallet, { [className]: className })}
        ref={hoverRef}
      >
        <Card.Body className={styles.card_body}>
          <Card.Title className={styles.card_title}>{title}</Card.Title>
          <Card.Text className={styles.card_text}>$ {count}</Card.Text>
          <LinkContainer to={`${to}`}>
            <Button
              className={
                !isHover ? styles.card_button : styles.card_button_hover
              }
            >
              {name}
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Wallet;
