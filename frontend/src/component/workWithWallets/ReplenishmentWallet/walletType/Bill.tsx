import React from "react";
import { ruWalletsName } from "../../../../const/normalName";
import { Form, ListGroup } from "react-bootstrap";
import { urlBills, urlBillsWithOutHttps } from "../../../../const/url";
import styles from "./bill.module.scss";
import cn from "classnames";
import { useTranslation, Trans } from "react-i18next";

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
  const { t } = useTranslation();
  const course = 74;
  const isQiwi = name === "qiwi";
  const isBit = name === "bitcoin";
  const isUsdt = name === "ethereum";
  const isEther = name === "usdtether";
  const isCripto = isBit || isEther || isUsdt;
  const amountWithQiwi = isQiwi ? amount * course : amount;
  const validators = {
    required: t("Bill.required"),
  };
  const error = errors[name] && errors[name].message;
  return (
    <div>
      <h2 className={"text-center"}>{ruWalletsName[name]}</h2>
      <ListGroup bsPrefix={"repelType"}>
        <ListGroup.Item>
          {isCripto ? (
            <>1. {t("Bill.isCripto")}</>
          ) : (
            <>
              1. {t("Bill.wallet")}{" "}
              <a href={urlBills[name]} target={"_blank"}>
                {urlBillsWithOutHttps[name]}
              </a>
            </>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          <Trans>2. {t("Bill.choose")}</Trans>
        </ListGroup.Item>
        <ListGroup.Item>
          3. {t("Bill.account_number")}{" "}
          <strong className={cn(requisites?.length > 15 && styles.textSmall)}>
            {requisites}
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          4. {t("Bill.sum")} -{" "}
          <strong>
            {amountWithQiwi} {isQiwi ? "₽" : "$"}
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          5. <Trans>{t("Bill.trans")}</Trans>
        </ListGroup.Item>
        <ListGroup.Item>
          <Trans>{t("Bill.copy")}</Trans>
        </ListGroup.Item>
        <ListGroup.Item>
          <Trans>{t("Bill.push")}</Trans>
        </ListGroup.Item>
      </ListGroup>
      <p>
        {t("Bill.Top_up_amount")}{" "}
        <strong>
          {" "}
          {amountWithQiwi} {isQiwi ? "₽" : "$"}
        </strong>
      </p>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          {error ? (
            <span style={{ color: "red" }}>{t("Bill.transaction")}</span>
          ) : (
            t("Bill.transaction")
          )}
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          ref={reff({
            ...validators,
            minLength: { value: 5, message: t("Bill.min") },
          })}
          name={name}
        />
      </Form.Group>
    </div>
  );
};

Bill.defaultProps = {};

export default Bill;
