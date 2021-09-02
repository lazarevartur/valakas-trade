import React from "react";
import { Form } from "react-bootstrap";

interface UsdtetherProps {
  amount?: number;
  reff?: any;
  name?: string;
  loading?: boolean;
}

const Usdtether: React.FC<UsdtetherProps> = ({ amount, reff, name }) => {
  return (
    <div>
      <p>{`Совершите платеж со своего криптокошелька используя реквизиты  ниже, 
      после выполнения операции нажмите на кнопку 
      "Отправить заявку". После подтверждения ваш баланс будет пополнен.`}</p>
      <p>
        Реквизиты:<strong> 0x2fb040dBb63a116Cb85c8A31E6D72A869658388a </strong>
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

Usdtether.defaultProps = {};

export default Usdtether;
