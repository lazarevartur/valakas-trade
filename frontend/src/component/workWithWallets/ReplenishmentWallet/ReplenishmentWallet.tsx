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
  Tabs,
  Tab,
  Nav,
  Image,
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
  balanceReplenishment,
  resetWallet,
} from "../../../store/action/walletsAction";
import { rootState } from "../../../types/types";
import { useHistory } from "react-router";
import { DashboardRoute } from "../../../routes/dashboard";
import { CustomInput } from "../../uiKit/customInput";
import iconWalletBitcoin from "../../../assets/iconWallets/800px-Bitcoin_logo.svg.png";
import iconWalletPayeer from "../../../assets/iconWallets/800x400_498c39b77920903439940e87cf8aa83f___jpg____4_8cae8b31.png";
import iconWalletEthereum from "../../../assets/iconWallets/ethirum.png";
import iconWalletQiwi from "../../../assets/iconWallets/Qiwi.png";
import iconWalletVisa_mast_mir from "../../../assets/iconWallets/logoVisa_Mast_Mir.png";
import iconWalletUsdtether from "../../../assets/iconWallets/usd-tether.png";
import { getChunks } from "../../../utils/utils";
import { InfoBlock } from "../InfoBlock";
import SweetAlert from "react-bootstrap-sweetalert";

const wallets = [
  {
    name: "visa_mast_mir",
    img: iconWalletVisa_mast_mir,
    info: {
      paymentName: "Тинькоф",
      paymentLink: "https://www.tinkoff.ru/cardtocard/",
      description: `Для оплаты банковской карты мы используем платежную систему "Payeer", вы так же можете совершить перевод без комисии со своего кошелька Payeer, если таков имееться`,
      requisites: "4896 4414 5536 8889",
    },
  },
  {
    name: "Qiwi",
    img: iconWalletQiwi,
    info: {
      description: `Пополни свой Qiwi кошелек через банковский терминал оплаты и после совершите перевод без комисии`,
      requisites: `123wdascsdgwqer3212312ewd`,
    },
  },
  {
    name: "payeer",
    img: iconWalletPayeer,
    info: {
      description: `Для совершения платежа совершите перевод на payeer кошелек:`,
      requisites: `1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee`,
    },
  },
  {
    name: "bitcoin",
    img: iconWalletBitcoin,
    info: {
      description: `Совершите платеж со своего криптокошелька используя реквезиты ниже, после выполнения операции напишите нам "Я оплатил". После подтверждения ваш баланс будет пополнен.`,
      requisites: `1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee`,
    },
  },

  {
    name: "ethereum",
    img: iconWalletEthereum,
    info: {
      description: `Совершите платеж со своего криптокошелька используя реквезиты ниже, после выполнения операции напишите нам "Я оплатил". После подтверждения ваш баланс будет пополнен`,
      requisites: `12321wsfsdvdr234213wfsgrtyru656987poikj`,
    },
  },
  {
    name: "usdtether",
    img: iconWalletUsdtether,
    info: {
      description: `Совершите платеж со своего криптокошелька используя реквезиты ниже, после выполнения операции напишите нам "Я оплатил". После подтверждения ваш баланс будет пополнен`,
      requisites: `1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee`,
    },
  },
];
const walletsChunk = getChunks(wallets);

interface ReplenishmentWalletProps {}

const ReplenishmentWallet: React.FC<ReplenishmentWalletProps> = () => {
  const dispatch = useDispatchTyped();
  const history = useHistory();
  const { success } = useSelectorTyped((state: rootState) => state.wallets);
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onChange",
  });
  const [activeWallet, setActiveWallet] = React.useState("");
  const [SweetAlertState, setSweetAlertState] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    return () => {
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

  const onSubmit = (data) => {
    const message = data[activeWallet];
    const req = {
      amount: data.amount,
      activeWallet,
      message,
    };
    dispatch(balanceReplenishment(req));
  };

  const swalClose = () => {
    setSweetAlertState(false);
    setRedirect(true);
  };
  const swalOpen = () => {
    setSweetAlertState(true);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        {SweetAlertState && (
          <SweetAlert
            success
            title="Успешная оплата!"
            onConfirm={swalClose}
            onCancel={swalClose}
          >
            Заявка на пополнение счета отправленна!
          </SweetAlert>
        )}
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                Пополнение баланса
              </Modal.Title>
            </Modal.Header>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="exampleForm.SelectCustom">
              <CustomInput
                reff={register()}
                type="text"
                placeholder={"Сумма пополнения"}
                value={watch("amount")}
                name={"amount"}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className={styles.wallets}>
          <Col lg={{ offset: 2, span: 8 }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills" bsPrefix={"Wallets"}>
                    {walletsChunk.map((wallet, i) => {
                      return (
                        <div key={i} className={"walletsDesk"}>
                          {wallet.map(({ name, img }) => {
                            return (
                              <Nav.Item key={name}>
                                <Nav.Link
                                  eventKey={name}
                                  onClick={() => setActiveWallet(name)}
                                >
                                  <Image src={img} />
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Tab.Content>
                    {wallets.map(({ name, info }) => {
                      return (
                        <Tab.Pane key={name} eventKey={name}>
                          <InfoBlock
                            info={info}
                            amount={watch("amount")}
                            reff={register}
                            name={name}
                          />
                        </Tab.Pane>
                      );
                    })}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button type="submit">Отправить заявку</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default ReplenishmentWallet;
