import React from "react";
import { Col, Container, Nav, Row, Tab, Table } from "react-bootstrap";
import styles from "./historyPage.module.scss";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { rootState } from "../../../types/types";
import {
  getHistoryCompletedUser,
  getHistoryPendingUser,
} from "../../../store/action/histroyAction";
import { Loader } from "../../uiKit/loader";
import {
  ruActionWallets,
  ruPaymentStatus,
  ruWalletsName,
} from "../../../const/normalName";
import { getRuDate } from "../../../utils/utils";

interface HistoryProps {}

const HistoryPage: React.FC<HistoryProps> = () => {
  const { historyPending, historyCompleted, error, isLoading } =
    useSelectorTyped((state: rootState) => state.history);
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    dispatch(getHistoryPendingUser());
    dispatch(getHistoryCompletedUser());
  }, []);
  //successPayment()
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
                    responsive="sm"
                  >
                    <thead className={styles.thead}>
                      <tr>
                        <th>Номер заявки</th>
                        <th>Сумма ввода/вывода</th>
                        <th>Тип ввода/вывода</th>
                        <th>Вид заявки</th>
                        <th>Дата </th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyPending.map(
                        ({
                          _id,
                          amount,
                          from_where_payment,
                          action_type_wallet,
                          createdAt,
                        }) => {
                          return (
                            <tr key={_id}>
                              <td>{_id}</td>
                              <td>{amount} $</td>
                              <td>{ruWalletsName[from_where_payment]}</td>
                              <td>{ruActionWallets[action_type_wallet]}</td>
                              <td>{getRuDate(createdAt)}</td>
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
                    responsive="sm"
                  >
                    <thead>
                      <tr className={styles.thead}>
                        <th>Номер заявки</th>
                        <th>Сумма ввода/вывода</th>
                        <th>Статус</th>
                        <th>Реквезиты</th>
                        <th>Дата подтверждения </th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyCompleted.map(
                        ({
                          _id,
                          amount,
                          status,
                          confirmation_date,
                          from_where_payment,
                          createdAt,
                          requisites,
                        }) => {
                          return (
                            <tr key={_id}>
                              <td> {_id}</td>
                              <td>{amount} $</td>
                              <td>{ruPaymentStatus[status]}</td>
                              <td>{requisites}</td>
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

HistoryPage.defaultProps = {};

export default HistoryPage;
