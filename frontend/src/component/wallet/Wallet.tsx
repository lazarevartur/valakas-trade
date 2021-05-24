import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./wallet.module.scss";
import useHover from "../../hooks/useHover";
import { defaultComponentProps } from "../../types/types";
import cn from "classnames";

interface WalletProps extends defaultComponentProps {
  title: string;
  count: number;
  onClick?: () => void;
}

const Wallet: React.FC<WalletProps> = ({
  className = "",
  title = "Wallet",
  count = 100,
  onClick,
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
          <Button
            className={!isHover ? styles.card_button : styles.card_button_hover}
            onClick={onClick}
          >
            Пополнить баланс
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Wallet;
