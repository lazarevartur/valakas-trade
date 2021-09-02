import React from "react";
import styles from "./admPayment.module.scss";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import {
  getAllCompleted,
  getAllPending,
  rejectPayment,
  rejectPaymentWithdrawal,
  successPayment,
  successPaymentWithdrawal,
} from "../../../store/action/usersAction";
import { Col, Container, Nav, Row, Tab, Table } from "react-bootstrap";
import {
  ruActionWallets,
  ruPaymentStatus,
  ruWalletsName,
} from "../../../const/normalName";
import { getRuDate } from "../../../utils/utils";
import { rootState } from "../../../types/types";
import { Loader } from "../../../component/uiKit/loader";

interface AdmPaymentProps {}

const AdmPayment: React.FC<AdmPaymentProps> = () => {
  const dispatch = useDispatchTyped();
  const { payments, isLoading, paymentsCompleted } = useSelectorTyped(
    (state: rootState) => state.users
  );
  React.useEffect(() => {
    dispatch(getAllPending());
    dispatch(getAllCompleted());
  }, []);

  if (isLoading) {
    return (
      <div className={styles.fakeBg}>
        <Loader />
      </div>
    );
  }
  return (
    <Container className={styles.minHeight}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="active">
        <Row>
          <Col sm={12}>
            <Nav variant="tabs" className={styles.tabs}>
              <Nav.Item>
                <Nav.Link eventKey="active">Активные заявки</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="done">Завершенные заявки</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <div className={styles.content}>
          <Row>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="active">
                  <Table
                    striped
                    hover
                    size="sm"
                    className={styles.table}
                    responsive
                  >
                    <thead className={styles.thead}>
                      <tr>
                        <th>Email</th>
                        <th>Сумма</th>
                        <th>Тип</th>
                        <th>Вид заявки</th>
                        <th>Реквезиты</th>
                        <th>Счет пополнения</th>
                        <th>Дата</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map(
                        ({
                          amount,
                          _id,
                          action_type_wallet,
                          from_where_payment,
                          message,
                          createdAt,
                          email,
                          requisites,
                          bill,
                        }) => {
                          return (
                            <tr key={_id}>
                              <td>{email}</td>
                              <td>{amount} $</td>
                              <td>{ruWalletsName[from_where_payment]}</td>
                              <td>{ruActionWallets[action_type_wallet]}</td>
                              <td>{requisites ? requisites : message}</td>
                              <td>{bill}</td>
                              <td>{getRuDate(createdAt)}</td>
                              <td>
                                <span
                                  className={styles.success}
                                  onClick={() => {
                                    if (action_type_wallet === "withdrawal") {
                                      dispatch(successPaymentWithdrawal(_id));
                                    } else {
                                      dispatch(successPayment(_id));
                                    }
                                  }}
                                >
                                  Y{" "}
                                </span>
                                <span
                                  className={styles.reject}
                                  onClick={() => {
                                    if (action_type_wallet === "withdrawal") {
                                      dispatch(rejectPaymentWithdrawal(_id));
                                    } else {
                                      dispatch(rejectPayment(_id));
                                    }
                                  }}
                                >
                                  {" "}
                                  X
                                </span>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="done">
                  <Table
                    striped
                    hover
                    size="sm"
                    className={styles.table}
                    responsive
                  >
                    <thead>
                      <tr className={styles.thead}>
                        <th>Email</th>
                        <th>Сумма ввода/вывода</th>
                        <th>Статус</th>
                        <th>Тип</th>
                        <th>Реквезиты</th>
                        <th>Дата подтверждения</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentsCompleted.map(
                        ({
                          amount,
                          status,
                          _id,
                          action_type_wallet,
                          confirmation_date,
                          from_where_payment,
                          user_id,
                          createdAt,
                          email,
                          message,
                        }) => {
                          return (
                            <tr key={_id}>
                              <td> {email}</td>
                              <td>{amount} $</td>
                              <td>{ruPaymentStatus[status]}</td>
                              <td>{ruActionWallets[action_type_wallet]}</td>
                              <td>{message}</td>
                              <td>{getRuDate(confirmation_date)}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </div>
      </Tab.Container>
    </Container>
  );
};

AdmPayment.defaultProps = {};

export default AdmPayment;
