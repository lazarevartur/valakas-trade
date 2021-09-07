import React from "react";
import styles from "./ReplenishmentWallet.module.scss";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import {
  getBills,
  replenishmentRequest,
  resetWallet,
} from "../../../store/action/walletsAction";
import { rootState } from "../../../types/types";
import { useHistory } from "react-router";
import { DashboardRoute } from "../../../routes/dashboard";
import { CustomInput } from "../../uiKit/customInput";
import iconWalletBitcoin from "../../../assets/iconWallets/800px-Bitcoin_logo.svg.png";
import iconWalletPayeer from "../../../assets/iconWallets/800x400_498c39b77920903439940e87cf8aa83f___jpg____4_8cae8b31.png";
import iconWalletEthereum from "../../../assets/iconWallets/ethirum.png";
import iconWalletUsdtether from "../../../assets/iconWallets/usd-tether.png";
import iconWalletQiwi from "../../../assets/iconWallets/Qiwi.png";
import iconWalletPw from "../../../assets/iconWallets/pw.png";
import { getChunks } from "../../../utils/utils";
import SweetAlert from "react-bootstrap-sweetalert";
import Bitcoin from "./walletType/Bitcoin";
import Ethereum from "./walletType/Ethereum";
import Usdtether from "./walletType/Usdtether";
import Qiwi from "./walletType/Qiwi";
import Payeer from "./walletType/Payeer";
import { ReplenishmentRequest } from "../../../services/walletsApi";
import { walletType } from "../../../config";
import { Loader } from "../../uiKit/loader";
import Bill from "./walletType/Bill";
import { useTranslation } from "react-i18next";

const walletsComponent = {
  bitcoin: Bitcoin,
  ethereum: Ethereum,
  usdtether: Usdtether,
  qiwi: Qiwi,
  payeer: Payeer,
};

const walletsType = [
  {
    name: walletType.qiwi,
    img: iconWalletQiwi,
  },
  {
    name: walletType.payeer,
    img: iconWalletPayeer,
  },
  {
    name: walletType.perfect_money,
    img: iconWalletPw,
  },
  {
    name: walletType.bitcoin,
    img: iconWalletBitcoin,
  },

  {
    name: walletType.ethereum,
    img: iconWalletEthereum,
  },
  {
    name: walletType.usdtether,
    img: iconWalletUsdtether,
  },
];
const walletsChunk = getChunks(walletsType);

interface ReplenishmentWalletProps {}

const ReplenishmentWallet: React.FC<ReplenishmentWalletProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatchTyped();
  const history = useHistory();
  const {
    success,
    payeerUrl = "",
    isLoading,
    bills,
  } = useSelectorTyped((state: rootState) => state.wallets);
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onChange",
  });
  const [activeWallet, setActiveWallet] = React.useState("");
  const [SweetAlertState, setSweetAlertState] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);

  const isActiveComponent = watch("amount") && activeWallet;

  const requisites = bills[activeWallet]?.requisites || "";

  React.useEffect(() => {
    dispatch(getBills());
    return () => {
      dispatch(resetWallet());
    };
  }, []);

  React.useEffect(() => {
    if (payeerUrl) {
      window.open(payeerUrl);
    }
  }, [payeerUrl]);

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
    const req: ReplenishmentRequest = {
      amount: data.amount,
      from_where_payment: activeWallet,
      message,
      bill: requisites,
    };
    dispatch(replenishmentRequest(req));
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
            title={t("ReplenishmentWallet.success_title")}
            onConfirm={swalClose}
            onCancel={swalClose}
          >
            {t("ReplenishmentWallet.application")}
          </SweetAlert>
        )}
        <>
          {isLoading ? (
            <div className={styles.fakeBg}>
              <Loader />
            </div>
          ) : (
            <>
              <Row>
                <Col lg={12}>
                  <Modal.Header closeButton>
                    <Modal.Title className={styles.modal_title}>
                      {t("ReplenishmentWallet.modal_title")}
                    </Modal.Title>
                  </Modal.Header>
                </Col>
              </Row>
              <Row>
                <Col lg={{ offset: 2, span: 8 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <CustomInput
                      reff={register()}
                      type="number"
                      placeholder={t("ReplenishmentWallet.amount_placeholder")}
                      value={watch("amount")}
                      name={"amount"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className={styles.wallets}>
                <Col lg={{ offset: 2, span: 8 }}>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Row>
                      <Col sm={12}>
                        <Nav variant="pills" bsPrefix={"Wallets"}>
                          {walletsChunk.map((wallet, i) => {
                            return (
                              <div key={i} className={"walletsDesk"}>
                                {wallet.map(({ name, img }) => {
                                  return (
                                    <Nav.Item
                                      key={name}
                                      className={!name && styles.dspNone}
                                    >
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
                        {isActiveComponent && (
                          <Bill
                            amount={watch("amount")}
                            name={activeWallet}
                            reff={register}
                            loading={isLoading}
                            requisites={requisites}
                            errors={errors}
                          />
                        )}
                      </Col>
                    </Row>
                  </Tab.Container>
                </Col>
              </Row>
              <Row>
                {isActiveComponent && (
                  <Col
                    lg={{ offset: 2, span: 8 }}
                    className={styles.button_block}
                  >
                    <Button type="submit">{t("ReplenishmentWallet.up")}</Button>
                  </Col>
                )}
              </Row>
            </>
          )}
        </>
      </Container>
    </Form>
  );
};

export default ReplenishmentWallet;
