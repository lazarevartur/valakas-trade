import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import styles from "../buyPrograms/buyPrograms.module.scss";
import { ProgramType } from "../../../../const/popup";
import { getRuDate, getRuFormatNumbers } from "../../../../utils/utils";
import { useForm } from "react-hook-form";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../../hooks/useTypedRedux";
import { rootState } from "../../../../types/types";
import {
  buyMrxProgram,
  buyOptionalProgram,
  buyPriorityProgram,
  resetWallet,
} from "../../../../store/action/walletsAction";
import { CustomInput } from "../../../uiKit/customInput";
import useGetParameter from "../../../../hooks/useGetParameter";
import { useHistory } from "react-router";
import { DashboardRoute } from "../../../../routes/dashboard";
import { useTranslation } from "react-i18next";

interface BuyPriorityProps {}

const BuyPriority: React.FC<BuyPriorityProps> = () => {
  const { t } = useTranslation();
  const { success } = useSelectorTyped((state: rootState) => state.wallets);
  const { priorityData } = useSelectorTyped(
    (state: rootState) => state.priority
  );
  const {
    amount = 0,
    dateCompletion = 0,
    marketingAssistance = 0,
    originalAmount = 0,
    programType = "",
    conditions,
  } = priorityData;
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatchTyped();
  const history = useHistory();
  const query = useGetParameter("type");
  const onSubmit = () => {
    dispatch(buyPriorityProgram(priorityData));
  };
  React.useEffect(() => {
    if (success) {
      history.push(DashboardRoute.priority);
    }
    return () => {
      dispatch(resetWallet());
    };
  }, [success]);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                {t("BuyPriority.modal_title")} {programType}
              </Modal.Title>
            </Modal.Header>
          </Col>
        </Row>

        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="optionsWallet" className={styles.options}>
              <Row className={styles.parameter}>
                <Col sm={7}>{t("BuyPriority.accrual")}</Col>
                <Col sm={5}>{getRuFormatNumbers(originalAmount)}$</Col>
              </Row>
              <Row className={styles.parameter}>
                <Col sm={7}>{t("BuyPriority.originalAmount")}</Col>
                <Col sm={5}>{getRuFormatNumbers(originalAmount - amount)}$</Col>
              </Row>
              <Row className={styles.parameter}>
                <Col sm={7}>{t("BuyPriority.discount")}</Col>
                <Col sm={5}>{conditions?.discount || 0}%</Col>
              </Row>
              <Row className={styles.parameter}>
                <Col sm={7}>{t("BuyPriority.term")}</Col>
                <Col sm={5}>
                  {conditions?.term || 0} {t("BuyPriority.days")}
                </Col>
              </Row>
              <Row className={styles.parameter}>
                <Col sm={7}>{t("BuyPriority.insurance")}</Col>
                <Col sm={5}>{conditions?.insurance || 0}%</Col>
              </Row>
              <Row className={styles.parameter}>
                <Col sm={7}>{t("BuyPriority.marketingAssistance")}</Col>
                <Col sm={5}>
                  {marketingAssistance
                    ? t("BuyPriority.marketingAssistanceChose.yse")
                    : t("BuyPriority.marketingAssistanceChose.no")}
                </Col>
              </Row>
              <Row className={styles.parameter}>
                <Col sm={7}>{t("BuyPriority.dateCompletion")}</Col>
                <Col sm={5}>{getRuDate(dateCompletion || Date.now())}</Col>
              </Row>
              <Row className={styles.parameter}>
                <Col sm={7}>
                  <strong>{t("BuyPriority.amount_pay")}</strong>
                </Col>
                <Col sm={5}>{getRuFormatNumbers(amount.toFixed(1))}$</Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            {amount > 0 && (
              <Button type="submit">{t("BuyPriority.checkout")}</Button>
            )}
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

BuyPriority.defaultProps = {};

export default BuyPriority;
