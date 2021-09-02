import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Loader } from "../../../uiKit/loader";
import { ruWalletsName } from "../../../../const/normalName";

interface PayeerProps {
  amount?: number;
  reff?: any;
  name?: string;
  loading?: boolean;
}

const Payeer: React.FC<PayeerProps> = ({ amount, reff, name, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h2 className={"text-center"}>{ruWalletsName[name]}</h2>
      <ListGroup bsPrefix={"repelType"}>
        <ListGroup.Item>
          1. Заходим в свой кошелёк на сайте{" "}
          <a href="https://payeer.com/" target={"_blank"}>
            payeer.com
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          2. Выбираем раздел <strong>"Перевести"</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          3. В поле "Номер счета, email или телефон" вписываем кошелек:{" "}
          <strong>P1049965141</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          4. Водим сумму пополнения в поле "Сумма" - <strong>{amount} $</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          5. Жмем кнопку <strong>"Перевести"</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          6. Копируем номер транзакции, вставляем в поле{" "}
          <strong>Введите номер транзакции</strong> (например: 2312312)
        </ListGroup.Item>
        <ListGroup.Item>
          7. Жмем кнопку <strong>"Пополнить"</strong>
        </ListGroup.Item>
      </ListGroup>
      <p>
        Сумма пополнения: <strong>{amount} $</strong>
      </p>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Введите номер транзакции</Form.Label>
        <Form.Control as="textarea" rows={3} ref={reff} name={name} />
      </Form.Group>
    </div>
  );
};

Payeer.defaultProps = {};

export default Payeer;
