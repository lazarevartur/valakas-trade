import React from "react";
import styles from "./PriorityDescription.module.scss";
import {
  Col,
  Container,
  Row,
  Form,
  Card,
  CardDeck,
  Table,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { PrioritySlide } from "../../component/prioritySelector/prioritySlide";
import { CustomInput } from "../../component/uiKit/customInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface PriorityDescriptionProps {
  match: any;
}

const PriorityDescription: React.FC<PriorityDescriptionProps> = ({ match }) => {
  const id = match.params.id;
  const { register, handleSubmit, errors, watch } = useForm();
  const history = useHistory();
  return (
    <div className={styles.PriorityDescription}>
      <Container className={styles.container}>
        <a className={styles.goBack} onClick={() => history.goBack()}>
          {id}
        </a>
        <div className={styles.PrioritySlide}>
          <PrioritySlide tab={false} />
        </div>
        <div className={styles.calculator}>
          <Row>
            <Col lg={12}>
              <h2 className={styles.title}>Калькулятор</h2>
              <p className={"text-center"}>
                Exercitationem rerum nesciunt dicta voluptatem eligendi
                laudantium temporibus voluptatibus pariatur. Numquam veritatis
                dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque
                doloremque ullam quae eaque qui iste ut. Exercitationem rerum
                nesciunt dicta voluptatem eligendi laudantium temporibus
                voluptatibus pariatur. Numquam veritatis dolorem et. Tenetur
                omnis qui omnis minus. Omnis sit eaque doloremque ullam quae
                eaque qui iste ut.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group controlId="formGridState">
                <Form.Label>Выберите программу</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Priority Home</option>
                  <option>Priority Auto</option>
                  <option>Priority Device</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="formGridState">
                <Form.Label>Укажите взнос и срок</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>30% взнос - 149 дней ожидания</option>
                  <option>40% взнос - 170 дней ожидания</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <CustomInput
                type="text"
                placeholder="Укажите сумму"
                name="summa"
                value={watch("summa")}
                reff={register}
              />
            </Col>
            <Col lg={6}>
              <Form.Group controlId="formHorizontalCheck">
                <Form.Check label="Согласен с маркетинговым содействием (+20% при отказе)" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className={styles.separator} />
          </Row>
          <div className={styles.priority_parameters}>
            <Row>
              <Col lg={6}>
                <Row className={styles.parameter}>
                  <Col lg={7}>Срок ожидания</Col>
                  <Col lg={5}>149</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Взнос по программе</Col>
                  <Col lg={5}>$3 000 / 30%</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Активация программы</Col>
                  <Col lg={5}>$100 / 1%</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Сумма взносов по программе</Col>
                  <Col lg={5}>$3 600 / 36%</Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row className={styles.parameter}>
                  <Col lg={7}>Дата завершения</Col>
                  <Col lg={5}>19.11.2021</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Страхование Largo Insurance</Col>
                  <Col lg={5}>$500 / 5%</Col>
                </Row>
                <Row className={styles.parameter}>
                  <Col lg={7}>Маркетинговое содействие</Col>
                  <Col lg={5}>$0 / 0%</Col>
                </Row>
              </Col>
            </Row>
            <Row className={styles.calculated}>
              <Col lg={9}>Ваша выгода составит:</Col>
              <Col lg={3}>$6 400 / 76%</Col>
            </Row>
          </div>
          <div className={styles.m_assistance}>
            <Row>
              <Col lg={12}>
                <h2 className={styles.title}>Маркетинговое содействие</h2>
              </Col>
            </Row>
            <CardDeck className={styles.card_block}>
              <Card>
                <Link
                  to="/download/test.pdf"
                  target="_blank"
                  download
                  className={styles.link}
                >
                  <Card.Body className={styles.card}>
                    <Card.Title className={styles.card_type}>PDF</Card.Title>
                    <Card.Text>
                      Priority Home <div>108 kb</div>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card>
                <Card.Body className={styles.card}>
                  <Card.Title className={styles.card_type}>PDF</Card.Title>
                  <Card.Text>
                    Priority Home <div>1643 kb</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body className={styles.card}>
                  <Card.Title className={styles.card_type}>PDF</Card.Title>
                  <Card.Text>
                    Priority Home <div>1643 kb</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body className={styles.card}>
                  <Card.Title className={styles.card_type}>PDF</Card.Title>
                  <Card.Text>
                    Priority Home <div>1643 kb</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <div className={styles.dependency_table}>
            <Row>
              <Col lg={12}>
                <h2 className={styles.title}>
                  Таблица зависимости стоимости страховки от вида программы
                </h2>
              </Col>
            </Row>
            <DependencyTable />
            <DependencyTable title={"AUTO"} />
            <DependencyTable title={"DEVICE"} />
            <DependencyTable title={"Wedding"} />
            <DependencyTable title={"Early Repayment"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface DependencyTableProps {
  title?: string;
}

const DependencyTable: React.FC<DependencyTableProps> = ({
  title = "Home",
}) => {
  return (
    <div className={styles.table}>
      <h3 className={styles.title}>Priority {title}</h3>
      <Table striped className={styles.table_striped}>
        <thead>
          <tr>
            <th>Первоначальный взнос, % / длительность программы, дней</th>
            <th>
              Стоимость страховой программы «Largo Insurance» в % от итоговой
              стоимости товара или услуги
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>60/60</td>
            <td>2</td>
          </tr>
          <tr>
            <td>45/99</td>
            <td>3.3</td>
          </tr>
          <tr>
            <td>30/149</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

PriorityDescription.defaultProps = {};

export default PriorityDescription;
