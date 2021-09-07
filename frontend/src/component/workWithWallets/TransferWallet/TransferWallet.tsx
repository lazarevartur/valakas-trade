import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import styles from "../ReplenishmentWallet/ReplenishmentWallet.module.scss";
import { useForm } from "react-hook-form";
import { CustomInput } from "../../uiKit/customInput";
import useGetParameter from "../../../hooks/useGetParameter";
import Page404 from "../../../pages/page404/page404";
import {
  ITransfers_wallets,
  rootState,
  transfers_wallets,
} from "../../../types/types";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import {
  balanceRepTransfer,
  resetWallet,
} from "../../../store/action/walletsAction";
import { DashboardRoute } from "../../../routes/dashboard";
import SweetAlert from "react-bootstrap-sweetalert";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

interface TransferWalletProps {}

const TransferWallet: React.FC<TransferWalletProps> = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, watch } = useForm();
  const { success } = useSelectorTyped((state: rootState) => state.wallets);
  const history = useHistory();
  const [pageNotFound, setPageNotFound] = React.useState(false);
  const [SweetAlertState, setSweetAlertState] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const query = useGetParameter("transfers");
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    if (!transfers_wallets[query]) {
      setPageNotFound(true);
    }
    return () => {
      setPageNotFound(false);
      dispatch(resetWallet());
    };
  }, []);
  React.useEffect(() => {
    let timeOut;
    if (success) {
      swalOpen();
      if (redirect) {
        setSweetAlertState(false);
        history.push(DashboardRoute.desktop, { success });
      }
      timeOut = setTimeout(() => {
        history.push(DashboardRoute.desktop, { success });
      }, 10000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [success, redirect]);

  const swalClose = () => {
    setSweetAlertState(false);
    setRedirect(true);
  };
  const swalOpen = () => {
    setSweetAlertState(true);
  };

  const onSubmit = ({ amount }) => {
    if (amount) {
      const req: ITransfers_wallets = {
        amount,
        walletType: transfers_wallets[query],
      };
      dispatch(balanceRepTransfer(req));
    }
  };
  if (pageNotFound) {
    return <Page404 />;
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {SweetAlertState && (
        <SweetAlert
          success
          title={t("TransferWallet.success_title")}
          onConfirm={swalClose}
          onCancel={swalClose}
        >
          {t("TransferWallet.success_text")}
        </SweetAlert>
      )}
      <Container>
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                {t("TransferWallet.modal_title")}
              </Modal.Title>
            </Modal.Header>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="withdrawal">
              <CustomInput
                type="number"
                placeholder={t("TransferWallet.placeholder_amount")}
                name="amount"
                value={watch("amount")}
                reff={register}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>{t("TransferWallet.account")}</Form.Label>
              <Form.Control as="select">
                <option>{t("TransferWallet.start")}</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button type={"submit"}>{t("TransferWallet.button_block")}</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <p>{t("TransferWallet.text")}</p>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

TransferWallet.defaultProps = {};

export default TransferWallet;
