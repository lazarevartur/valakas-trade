import React from "react";
import styles from "./buyPrograms.module.scss";
import useWalletData from "../../../../hooks/useWalletData";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../../hooks/useTypedRedux";
import { useHistory } from "react-router";
import { rootState } from "../../../../types/types";
import { useForm } from "react-hook-form";
import useGetParameter from "../../../../hooks/useGetParameter";
import { GET_PARAMS, ProgramType } from "../../../../const/popup";
import {
  buyMrxProgram,
  buyOptionalProgram,
  resetWallet,
} from "../../../../store/action/walletsAction";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Loader } from "../../../uiKit/loader";
import { DashboardRoute } from "../../../../routes/dashboard";
import { CustomInput } from "../../../uiKit/customInput";
import { getRuDate, getRuFormatNumbers } from "../../../../utils/utils";
import { useTranslation } from "react-i18next";

interface BuyProgramsProps {}

const BuyPrograms: React.FC<BuyProgramsProps> = () => {
  const { t } = useTranslation();
  const { mrxPrograms, isLoading, optionalProgram } = useWalletData();
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatchTyped();
  const history = useHistory();
  const { success } = useSelectorTyped((state: rootState) => state.wallets);
  const [typeWallet, setTypeWallet] = React.useState("");
  const amount = watch("amount");

  const program = useGetParameter(GET_PARAMS.program);

  React.useEffect(() => {
    if (ProgramType[program]) {
      setTypeWallet(program);
    }
    return () => {
      dispatch(resetWallet());
    };
  }, []);

  React.useEffect(() => {
    if (success) {
      history.push(DashboardRoute.mrx_invest, { success });
    }
  }, [success]);
  const {
    start_round,
    end_round,
    cost,
    quantity,
    round_number,
    profitability,
    purpose,
    collected,
    _id: optionalId,
  } = optionalProgram;
  const profit = (profitability * 100).toFixed();
  const price = (+amount * cost).toFixed(3);
  const onSubmit = (data) => {
    switch (typeWallet) {
      case ProgramType.mrx:
        const program = mrxPrograms.find((program) => {
          return program._id === data.id;
        });
        const mrxReq = { amount: program.price, program_id: program._id };
        dispatch(buyMrxProgram(mrxReq));
        break;
      case ProgramType.optional:
        const optionalReq = { ...data, program_id: optionalId };
        dispatch(buyOptionalProgram(optionalReq));
        break;
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                {typeWallet === "optional" && t("BuyPrograms.buy_options")}
                {typeWallet === "mrx" && t("BuyPrograms.buy_package")}
                {typeWallet === "" && t("BuyPrograms.balance")}
              </Modal.Title>
            </Modal.Header>
          </Col>
        </Row>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Row>
              <Col lg={{ offset: 2, span: 8 }}>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>{t("BuyPrograms.program")}</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => setTypeWallet(e.target.value)}
                    ref={register}
                    name={"typeWallet"}
                    defaultValue={ProgramType[program]}
                  >
                    <option value={""}>{t("BuyPrograms.select")}</option>
                    <option value={ProgramType.mrx}>MRX</option>
                    <option value={ProgramType.optional}>OPTIONS</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            {typeWallet === ProgramType.mrx && (
              <Row>
                <Col lg={{ offset: 2, span: 8 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>{t("BuyPrograms.investment")}</Form.Label>
                    {mrxPrograms.length ? (
                      <Form.Control as="select" ref={register} name={"id"}>
                        {mrxPrograms.map(({ name, _id, price }) => {
                          return (
                            <option key={name} value={_id}>
                              {name} | {t("BuyPrograms.price")} {price}$
                            </option>
                          );
                        })}
                      </Form.Control>
                    ) : (
                      <p>{t("BuyPrograms.maximum")}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            )}
            {typeWallet === ProgramType.optional && (
              <Row>
                <Col lg={{ offset: 2, span: 8 }}>
                  <Form.Group
                    controlId="optionsWallet"
                    className={styles.options}
                  >
                    <Form.Label>{t("BuyPrograms.options")}</Form.Label>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.round_number")}</Col>
                      <Col sm={5}>{round_number}</Col>
                    </Row>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.start_round")}</Col>
                      <Col sm={5}>{getRuDate(start_round)}</Col>
                    </Row>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.end_round")}</Col>
                      <Col sm={5}>{getRuDate(end_round)}</Col>
                    </Row>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.cost")}</Col>
                      <Col sm={5}>{cost}$</Col>
                    </Row>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.profit")}</Col>
                      <Col sm={5}>{profit}%</Col>
                    </Row>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.quantity")}</Col>
                      <Col sm={5}>{getRuFormatNumbers(quantity)}</Col>
                    </Row>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.purpose")}</Col>
                      <Col sm={5}>{getRuFormatNumbers(purpose)}$</Col>
                    </Row>
                    <Row className={styles.parameter}>
                      <Col sm={7}>{t("BuyPrograms.collected")}</Col>
                      <Col sm={5}>{getRuFormatNumbers(collected)}$</Col>
                    </Row>
                    <Row className={styles.input}>
                      <Col sm={12}>
                        <CustomInput
                          reff={register({
                            min: {
                              value: 1000,
                              message: t("BuyPrograms.minOptions"),
                            },
                          })}
                          type="number"
                          placeholder={t("BuyPrograms.amount")}
                          value={watch("amount")}
                          name={"amount"}
                        />
                        <small>
                          {
                            // @ts-ignore
                            errors.amount && errors.amount.message
                          }
                        </small>
                      </Col>
                    </Row>
                    {amount && (
                      <Row className={styles.parameter}>
                        <Col sm={7}>{t("BuyPrograms.price_optional")}</Col>
                        <Col sm={5}>{price}$</Col>
                      </Row>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            )}
          </>
        )}
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            {typeWallet && (
              <Button type="submit">{t("BuyPrograms.buy")}</Button>
            )}
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

BuyPrograms.defaultProps = {};

export default BuyPrograms;
