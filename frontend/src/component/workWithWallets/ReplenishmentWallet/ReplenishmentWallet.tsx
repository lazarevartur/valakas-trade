import React from "react";
import styles from "./ReplenishmentWallet.module.scss";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  CardDeck,
  Card,
} from "react-bootstrap";
import useWalletData from "../../../hooks/useWalletData";
import { Loader } from "../../uiKit/loader";
import useGetParameter from "../../../hooks/useGetParameter";
import { GET_PARAMS, ProgramType } from "../../../const/popup";
import { useForm } from "react-hook-form";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import {
  byMrxProgramById,
  resetWallet,
} from "../../../store/action/walletsAction";
import { rootState } from "../../../types/types";
import { useHistory } from "react-router";
import { DashboardRoute } from "../../../routes/dashboard";

interface ReplenishmentWalletProps {}

const ReplenishmentWallet: React.FC<ReplenishmentWalletProps> = () => {
  const { mrxPrograms, isLoading } = useWalletData();
  const dispatch = useDispatchTyped();
  const history = useHistory();
  const { success } = useSelectorTyped((state: rootState) => state.wallets);
  const { register, handleSubmit, errors, watch } = useForm();
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
    dispatch(byMrxProgramById(data));
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
          </>
        )}
        <Row className={styles.wallets}>
          <Col lg={{ offset: 2, span: 8 }}>
            <CardDeck className={styles.CardDeck}>
              <Card className={styles.wallet}>
                <Card.Img
                  className={styles.wallet_img}
                  variant="bottom"
                  src="https://cdn.freelogovectors.net/wp-content/uploads/2019/02/payeer-logo.png"
                />
              </Card>
              <Card className={styles.wallet}>
                <Card.Img
                  className={styles.wallet_img}
                  variant="bottom"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Perfect_Money.png"
                />
              </Card>
              <Card className={styles.wallet}>
                <Card.Img
                  className={styles.wallet_img}
                  variant="bottom"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bitcoin_logo.svg/800px-Bitcoin_logo.svg.png"
                />
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button type="submit">Пополнить</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default ReplenishmentWallet;
