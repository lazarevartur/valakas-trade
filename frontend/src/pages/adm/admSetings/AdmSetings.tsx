import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CustomInput } from "../../../component/uiKit/customInput";
import {
  createQiwi,
  deleteBillById,
  editBill,
  getSettings,
  saveMrxPercent,
} from "../../../store/action/usersAction";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { rootState, walletTypes } from "../../../types/types";
import _ from "lodash";

interface AdmSetingsProps {}

const AdmSetings: React.FC<AdmSetingsProps> = () => {
  const { isLoading, settings } = useSelectorTyped(
    (state: rootState) => state.users
  );
  const {
    totalInvestments = 0,
    totalUsers = 0,
    autoDailyInterest = false,
    bills = {},
  } = settings;
  const dispatch = useDispatchTyped();

  React.useEffect(() => {
    dispatch(getSettings());
  }, []);
  const { register, handleSubmit, errors, watch, reset, control } = useForm();
  const [walletType, setWalletType] = React.useState("");
  const [qiwiIndex, setQiwiIndex] = React.useState(0);
  const [mrxChek, setMrxChek] = React.useState(false);
  const [edit, setEdit] = React.useState(true);

  React.useEffect(() => {
    if (settings.dailyInterest) {
      reset(settings);
      setMrxChek(settings.autoDailyInterest);
    }
  }, [settings]);
  const onSubmitMrx = ({ emailSearch, ...data }) => {
    dispatch(saveMrxPercent(data));
  };
  const onSubmitCreateQiwi = ({ qiwi_requisites }) => {
    dispatch(createQiwi({ requisites: qiwi_requisites }));
    reset({ qiwi_requisites: "" });
  };
  const onSubmitWallets = ({ dailyInterest, autoDailyInterest, ...data }) => {
    const { bills } = data;
    if (walletType === walletTypes.qiwi) {
      const currentQiwi = bills[walletType][qiwiIndex];
      dispatch(editBill(currentQiwi));
    } else {
      const currentBill = bills[walletType];
      dispatch(editBill(currentBill));
    }
    return void 0;
  };
  const watchQiwi = watch("qiwi_requisites");
  const wallets = !_.isEmpty(bills) ? Object.entries(bills).reverse() : [];
  return (
    <Container className={"p-2"}>
      <h2 className={"text-center"}>Информация о сайте</h2>
      <div className={"py-5"}>
        <Row>
          <Col>Общие колово. пользователей</Col>
          <Col>{totalUsers}</Col>
        </Row>
        <Row>
          <Col>Общие общая сумма инвестиций</Col>
          <Col>{totalInvestments} $</Col>
        </Row>
        {!_.isEmpty(settings) && (
          <Form className={"py-5"} onSubmit={handleSubmit(onSubmitMrx)}>
            <Row>
              <Col>
                <CustomInput
                  reff={register()}
                  type="text"
                  placeholder={"MRX-Процент"}
                  value={`${watch("dailyInterest")}`}
                  name={"dailyInterest"}
                  readOnly={mrxChek}
                />
              </Col>
              <Col>
                <Form.Check
                  ref={register()}
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Авто.процент`}
                  name={"autoDailyInterest"}
                  onChange={(e) => {
                    setMrxChek(e.target.checked);
                  }}
                />
              </Col>
            </Row>
            <Button variant="primary" type="submit" className={"mt-3"}>
              Сохранить
            </Button>
          </Form>
        )}
      </div>
      <div className={"wallets"}>
        <Row>
          <Col>
            <h3 className={"text-center"}>Добавить кошелек Qiwi</h3>
            <Form onSubmit={handleSubmit(onSubmitCreateQiwi)}>
              <Row>
                <Col>
                  <CustomInput
                    reff={register()}
                    type="text"
                    placeholder={"номер Qiwi кошелька"}
                    // @ts-ignore
                    value={watchQiwi}
                    // @ts-ignore
                    name={`qiwi_requisites`}
                    className={"my-5"}
                  />
                </Col>
                <Col
                  className={"d-flex justify-content-center flex-column "}
                  lg={3}
                >
                  <Button type={"submit"}>Создать</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check
              ref={register()}
              type={"switch"}
              id={`checkEdit`}
              label={`Разрешить редактирование`}
              name={"edit"}
              onChange={(e) => {
                setEdit((state) => {
                  return !state;
                });
              }}
            />
          </Col>
        </Row>
        {wallets.map(([walletName, walletData]) => {
          if (walletName !== "qiwi") {
            // @ts-ignore
            return (
              <Form onSubmit={handleSubmit(onSubmitWallets)} key={walletName}>
                <Row key={walletName}>
                  <Col>
                    <CustomInput
                      reff={register()}
                      type="text"
                      placeholder={walletName}
                      // @ts-ignore
                      value={watch(`bills[${walletName}].requisites`)}
                      // @ts-ignore
                      name={`bills[${walletName}].requisites`}
                      className={"my-5"}
                      readOnly={edit}
                    />
                    <input
                      ref={register()}
                      type={"hidden"}
                      name={`bills[${walletName}]._id`}
                      // @ts-ignore
                      value={walletData._id}
                    />
                  </Col>

                  <Col
                    className={"d-flex justify-content-center flex-column "}
                    lg={3}
                  >
                    <Button
                      type="submit"
                      onClick={() => {
                        setWalletType(walletName);
                      }}
                    >
                      Обновить
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }
          // @ts-ignore
          return walletData.map((qiwi, i) => {
            const name = `${walletName} ${qiwi.requisites} денег на счету`;
            return (
              <Form onSubmit={handleSubmit(onSubmitWallets)} key={qiwi._id}>
                <Row key={qiwi.requisites}>
                  <Col>
                    <CustomInput
                      reff={register()}
                      type="text"
                      placeholder={name}
                      // @ts-ignore
                      value={"" + walletData[i].current_amount}
                      // @ts-ignore
                      name={`bills[${walletName}][${i}].current_amount`}
                      className={"my-5"}
                    />
                    <input
                      ref={register()}
                      type={"hidden"}
                      name={`bills[${walletName}][${i}]._id`}
                      value={walletData[i]._id}
                    />
                  </Col>
                  <Col
                    className={"d-flex justify-content-center flex-column "}
                    lg={3}
                  >
                    <Button
                      type="submit"
                      onClick={() => {
                        setWalletType(walletName);
                        setQiwiIndex(i);
                      }}
                    >
                      Обновить
                    </Button>
                  </Col>
                  <Col
                    className={"d-flex justify-content-center flex-column "}
                    lg={3}
                  >
                    <Button
                      onClick={() => {
                        dispatch(deleteBillById(qiwi._id));
                      }}
                    >
                      Удалить
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          });
        })}
      </div>
    </Container>
  );
};

AdmSetings.defaultProps = {};

export default AdmSetings;
