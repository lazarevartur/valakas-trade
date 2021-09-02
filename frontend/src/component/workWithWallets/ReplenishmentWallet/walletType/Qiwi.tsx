import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getRuFormatNumbers } from "../../../../utils/utils";

interface QiwiProps {
  amount?: number;
  reff?: any;
  name?: string;
  loading?: boolean;
}
const course = 74;
const Qiwi: React.FC<QiwiProps> = ({ amount, reff, name }) => {
  return (
    <div>
      <p>{`Пополните свой Qiwi кошелек через банковский терминал оплаты и после совершите перевод 
      без комисии. Введите сумму в рублях в поле ниже и нажмите оплатить, 
      после совершения оплаты нажмите на кнопку "Отправить заявку"`}</p>
      <p>
        Сумма пополнения в рублях:{" "}
        <strong>{getRuFormatNumbers(+amount * course)} ₽</strong>
      </p>
      <Row>
        <Col lg={12} className={"pt-4 pb-4 d-flex justify-content-center"}>
          <iframe
            width="300"
            height="300"
            src="https://widget.qiwi.com/widgets/middle-widget-300x300?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP3eDRbp3Hx2cE2Q7y66ZKAVHn2KHeU5w4MVBHM2NihEm3GPXPn21XGtXEHoUkMhL9BpdinmGi8w7WBwteK9fwQa2jgBhPpyTvYTk3eJP12"
            allowTransparency
            scrolling="no"
            frameBorder="0"
          />
        </Col>
      </Row>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Введити после оплаты номер квитанции</Form.Label>
        <Form.Control as="textarea" rows={3} ref={reff} name={name} />
      </Form.Group>
    </div>
  );
};

Qiwi.defaultProps = {};

export default Qiwi;
