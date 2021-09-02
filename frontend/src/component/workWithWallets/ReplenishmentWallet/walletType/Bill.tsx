import React from "react";
import { ruWalletsName } from "../../../../const/normalName";
import { Form, ListGroup } from "react-bootstrap";
import { urlBills, urlBillsWithOutHttps } from "../../../../const/url";
import styles from "./bill.module.scss";
import cn from "classnames";

interface BillProps {
  amount?: number;
  reff?: any;
  name?: string;
  loading?: boolean;
  requisites?: string;
  errors?: any;
}

const Bill: React.FC<BillProps> = ({
  amount,
  reff,
  name,
  loading,
  requisites,
  errors,
}) => {
  const course = 74;
  const isQiwi = name === "qiwi";
  const isBit = name === "bitcoin";
  const isUsdt = name === "ethereum";
  const isEther = name === "usdtether";
  const isCripto = isBit || isEther || isUsdt;
  const amountWithQiwi = isQiwi ? amount * course : amount;
  const validators = {
    required: "Заполните поле",
  };
  const error = errors[name] && errors[name].message;
  return (
    <div>
      <h2 className={"text-center"}>{ruWalletsName[name]}</h2>
      <ListGroup bsPrefix={"repelType"}>
        <ListGroup.Item>
          {isCripto ? (
            <>1. Заходим в свой криптокошелек</>
          ) : (
            <>
              1. Заходим в свой кошелёк на сайте{" "}
              <a href={urlBills[name]} target={"_blank"}>
                {urlBillsWithOutHttps[name]}
              </a>
            </>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          2. Выбираем раздел <strong>"Перевести"</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          3. В поле "Номер счета, email или телефон" вписываем кошелек:{" "}
          <strong className={cn(requisites?.length > 15 && styles.textSmall)}>
            {requisites}
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          4. Вводим сумму пополнения в поле "Сумма" -{" "}
          <strong>
            {amountWithQiwi} {isQiwi ? "₽" : "$"}
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          5. Жмем кнопку <strong>"Перевести"</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          6. Копируем номер транзакции, вставляем в поле{" "}
          <strong>Введите номер транзакции</strong> (например: 23114674)
        </ListGroup.Item>
        <ListGroup.Item>
          7. Жмем кнопку <strong>"Пополнить"</strong>
        </ListGroup.Item>
      </ListGroup>
      <p>
        Сумма пополнения:{" "}
        <strong>
          {" "}
          {amountWithQiwi} {isQiwi ? "₽" : "$"}
        </strong>
      </p>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          {error ? (
            <span style={{ color: "red" }}>Введите номер транзакции</span>
          ) : (
            "Введите номер транзакции"
          )}
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          ref={reff({
            ...validators,
            minLength: { value: 5, message: "От 5 до 30 символов" },
          })}
          name={name}
        />
      </Form.Group>
    </div>
  );
};

Bill.defaultProps = {};

export default Bill;
