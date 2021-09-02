import React from "react";
import { Form } from "react-bootstrap";
import Usdtether from "./Usdtether";

interface CardProps {
  amount?: number;
  reff?: any;
  name?: string;
  loading?: boolean;
}

const Card: React.FC<CardProps> = ({ amount, reff, name }) => {
  return (
    <div>
      <p>{`Для оплаты банковской картой мы используем платежную систему "Payeer", 
      вы так же можете совершить перевод без комисии со своего кошелька Payeer, 
      если таков имееться.`}</p>
      <p>
        Сумма пополнения: <strong>{amount} $</strong>
      </p>
    </div>
  );
};

Card.defaultProps = {};

export default Card;
