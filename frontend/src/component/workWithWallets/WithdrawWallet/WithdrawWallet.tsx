import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import styles from "../ReplenishmentWallet/ReplenishmentWallet.module.scss";
import { CustomInput } from "../../uiKit/customInput";
import { useForm } from "react-hook-form";
import { walletType } from "../../../config";
import { useDispatchTyped } from "../../../hooks/useTypedRedux";
import {
  balanceWithdrawRequest,
  resetWallet,
} from "../../../store/action/walletsAction";
import { useSweetAlert } from "../../../hooks/useSweetAlert";
import SweetAlert from "react-bootstrap-sweetalert";
import { useTranslation } from "react-i18next";

interface WithdrawWalletProps {}

const WithdrawWallet: React.FC<WithdrawWalletProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatchTyped();
  const { register, handleSubmit, errors, watch } = useForm();
  const [typeWithdraw, setTypeWithdraw] = React.useState(walletType.bitcoin);
  const { SweetAlertState, swalClose } = useSweetAlert();

  React.useEffect(() => {
    return () => {
      dispatch(resetWallet());
    };
  }, []);
  const onSubmit = (data) => {
    const req = {
      ...data,
      from_where_payment: typeWithdraw,
    };
    dispatch(balanceWithdrawRequest(req));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {SweetAlertState && (
        <SweetAlert
          success
          title={t("WithdrawWallet.success_title")}
          onConfirm={swalClose}
          onCancel={swalClose}
        >
          {t("WithdrawWallet.success_text")}
        </SweetAlert>
      )}
      <Container>
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                {t("WithdrawWallet.modal_title")}
              </Modal.Title>
            </Modal.Header>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>{t("WithdrawWallet.Output_type")}</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  setTypeWithdraw(e.target.value);
                }}
                defaultValue={walletType.bitcoin}
              >
                <option value={walletType.bitcoin}>Bitcoin</option>
                <option value={walletType.ethereum}>Ethereum</option>
                <option value={walletType.usdtether}>USDT</option>
                <option value={walletType.payeer}>Payeer</option>
                <option value={walletType.qiwi}>Qiwi</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className={styles.wallets}>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="withdrawal">
              <CustomInput
                type="number"
                placeholder={t("WithdrawWallet.amount")}
                name="amount"
                value={watch("amount")}
                reff={register({
                  min: { value: 10, message: t("WithdrawWallet.min_amount") },
                })}
              />
              <small>
                {
                  // @ts-ignore
                  errors.amount && errors.amount.message
                }
              </small>
            </Form.Group>
            <Form.Group controlId="withdrawal">
              <CustomInput
                type="text"
                placeholder={t("WithdrawWallet.wallet")}
                name="requisites"
                value={watch("requisites")}
                reff={register}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button type={"submit"}>{t("WithdrawWallet.button")}</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <p>{t("WithdrawWallet.text")}</p>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

WithdrawWallet.defaultProps = {};

export default WithdrawWallet;
