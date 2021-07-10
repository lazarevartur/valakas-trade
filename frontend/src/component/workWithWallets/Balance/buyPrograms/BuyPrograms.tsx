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
  resetWallet,
} from "../../../../store/action/walletsAction";
import { Button, Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Loader } from "../../../uiKit/loader";
import { Modal } from "react-bootstrap";
import { DashboardRoute } from "../../../../routes/dashboard";

interface BuyProgramsProps {}

const BuyPrograms: React.FC<BuyProgramsProps> = () => {
  const { mrxPrograms, isLoading } = useWalletData();
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatchTyped();
  const history = useHistory();
  const { success } = useSelectorTyped((state: rootState) => state.wallets);
  const [typeWallet, setTypeWallet] = React.useState("");
  enum typeWalletEnum {
    mrx = "mrx",
    options = "options",
  }
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

  const onSubmit = (data) => {
    const program = mrxPrograms.find((program) => {
      return program._id === data.id;
    });
    const req = { amount: program.price, program_id: program._id };

    dispatch(buyMrxProgram(req));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                Пополнение баланса
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
                  <Form.Label>Программа</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => setTypeWallet(e.target.value)}
                    ref={register}
                    name={"typeWallet"}
                    defaultValue={typeWalletEnum[program]}
                  >
                    <option value={""}>Выбирите программу</option>
                    <option value={typeWalletEnum.mrx}>MRX</option>
                    <option value={typeWalletEnum.options}>OPTIONS</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            {typeWallet === typeWalletEnum.mrx && (
              <Row>
                <Col lg={{ offset: 2, span: 8 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Инвестиционные пакеты</Form.Label>
                    <Form.Control as="select" ref={register} name={"id"}>
                      {mrxPrograms.map(({ name, _id }) => {
                        return (
                          <option key={name} value={_id}>
                            $ {name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            )}
            {typeWallet === typeWalletEnum.options && (
              <Row>
                <Col lg={{ offset: 2, span: 8 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Инвестиционные пакеты</Form.Label>
                    <Form.Control as="select" ref={register} name={"id"}>
                      {mrxPrograms.map(({ name, _id }) => {
                        return (
                          <option key={name} value={_id}>
                            $ {name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            )}
          </>
        )}
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button type="submit">Пополнить</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

BuyPrograms.defaultProps = {};

export default BuyPrograms;
