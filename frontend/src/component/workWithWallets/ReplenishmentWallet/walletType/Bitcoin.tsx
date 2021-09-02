import React from "react";
import { Form } from "react-bootstrap";

interface BitcoinProps {
  amount?: number;
  reff?: any;
  name?: string;
  loading?: boolean;
}

const Bitcoin: React.FC<BitcoinProps> = ({ amount, reff, name }) => {
  return (
    <div>
      <p>{`Совершите платеж со своего криптокошелька используя реквизиты  ниже, 
      после выполнения операции нажмите на кнопку 
      "Отправить заявку". После подтверждения ваш баланс будет пополнен.`}</p>
      <p>
        Реквизиты:<strong> bc1qy2k8jdrrjg8e0z4t5f88gxceutrdkp7qkkuqnh </strong>
      </p>
      <p>
        Сумма пополнения: <strong>{amount} $</strong>
      </p>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Введити после оплаты номер квитанции</Form.Label>
        <Form.Control as="textarea" rows={3} ref={reff} name={name} />
      </Form.Group>
    </div>
  );
};

Bitcoin.defaultProps = {};

export default Bitcoin;
