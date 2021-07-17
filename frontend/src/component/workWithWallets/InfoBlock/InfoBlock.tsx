import React, { useState } from "react";
import styles from "./InfoBlock.module.scss";
import iconWalletBitcoin from "../../../assets/iconWallets/800px-Bitcoin_logo.svg.png";
import { Form } from "react-bootstrap";

interface InfoBlockProps {
  info?: any;
  amount: string;
  reff?: any;
  name: string;
}
const InfoBlock: React.FC<InfoBlockProps> = ({ info, amount, reff, name }) => {
  const description = info?.description || "";
  const paymentLink = info?.paymentLink || "";
  const paymentName = info?.paymentName || "";
  const requisites = info?.requisites || "";

  return (
    <div>
      {amount && (
        <>
          <p>{description}</p>
          {paymentLink && (
            <a href={paymentLink} target="_blank">
              {paymentName}
            </a>
          )}
          <p>
            Реквезиты:{" "}
            <strong>
              <iframe
                width="728"
                height="200"
                src="https://widget.qiwi.com/widgets/big-widget-728x200?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPpTYa4fKdU5uJHx2uh8SB2CmKvWqyExtLjtqazDomu3D2e3R62SifzqMptpKmJCm1AYSd6H9RB4wrvZnQvhMpKeadJmteiMvonE8HQJBqR"
                allowTransparency
                scrolling="no"
                frameBorder="0"
              />
            </strong>
          </p>
          <p>
            Сумма пополнения: <strong>{amount}</strong>
          </p>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Введити после опаты номер квитанции</Form.Label>
            <Form.Control as="textarea" rows={3} ref={reff} name={name} />
          </Form.Group>
        </>
      )}
    </div>
  );
};

InfoBlock.defaultProps = {};

export default InfoBlock;
// name: "bitcoin",
//     img: iconWalletBitcoin,
//     info: {
//     description: `Для совершения платежа совершите вход в свой онлайн банкинг, выбирите
//         перевод с карты на карту. если вы не пользуетесь онлайн банкингом, то можете совершить платеж сдесь`,
// },
