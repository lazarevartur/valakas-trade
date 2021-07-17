import React from "react";
import { Col, Nav, Row, Tab, Table } from "react-bootstrap";
import styles from "./historyPage.module.scss";

interface HistoryProps {}

const HistoryPage: React.FC<HistoryProps> = ({}) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="active">
      <Row>
        <Col sm={12}>
          <Nav variant="tabs">
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
                <Table striped hover size="sm" className={styles.table}>
                  <thead className={styles.thead}>
                    <tr>
                      <th>Номер заявки</th>
                      <th>Сумма вывода</th>
                      <th>Тип вывода</th>
                      <th>Куда выводилось</th>
                      <th>Дата </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> #143</td>
                      <td>345 $</td>
                      <td>Bitcoin</td>
                      <td>@1Boatу53SL...53LуE4TtpyT</td>
                      <td>01.06.20</td>
                    </tr>
                    <tr>
                      <td> #1231231232</td>
                      <td>345 $</td>
                      <td>Bitcoin</td>
                      <td>@1Boatу53SL...53LуE4TtpyT</td>
                      <td>01.06.20</td>
                    </tr>
                    <tr>
                      <td> #222</td>
                      <td>345 $</td>
                      <td>Bitcoin</td>
                      <td>@1Boatу53SL...53LуE4TtpyT</td>
                      <td>01.06.20</td>
                    </tr>
                    <tr>
                      <td> #131231245</td>
                      <td>345 $</td>
                      <td>Bitcoin</td>
                      <td>@1Boatу53SL...53LуE4TtpyT</td>
                      <td>01.06.20</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="done">
                <Table striped hover size="sm" className={styles.table}>
                  <thead>
                    <tr className={styles.thead}>
                      <th>Номер заявки</th>
                      <th>Сумма вывода</th>
                      <th>Тип вывода</th>
                      <th>Куда выводилось</th>
                      <th>Дата </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> #143</td>
                      <td>345 $</td>
                      <td>Bitcoin</td>
                      <td>@1Boatу53SL...53LуE4TtpyT</td>
                      <td>01.06.20</td>
                    </tr>
                    <tr>
                      <td> #1231231232</td>
                      <td>345 $</td>
                      <td>Bitcoin</td>
                      <td>@1Boatу53SL...53LуE4TtpyT</td>
                      <td>01.06.20</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </div>
    </Tab.Container>
  );
};

HistoryPage.defaultProps = {};

export default HistoryPage;
