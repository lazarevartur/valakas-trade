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

interface ReplenishmentWalletProps {}

const ReplenishmentWallet: React.FC<ReplenishmentWalletProps> = () => {
  return (
    <Form>
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
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Программа</Form.Label>
              <Form.Control as="select">
                <option>MRX</option>
                <option>OPTIONS</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
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
            <CardDeck className={styles.CardDeck}>
              <Card className={styles.wallet}>
                <Card.Img
                  className={styles.wallet_img}
                  variant="bottom"
                  src="https://ru.bitcoinwiki.org/upload/ru/images/thumb/d/d8/%D0%90%D0%B4%D0%B2_%D0%9A%D1%8D%D1%88.png/400px-%D0%90%D0%B4%D0%B2_%D0%9A%D1%8D%D1%88.png"
                />
              </Card>
              <Card className={styles.wallet}>
                <Card.Img
                  className={styles.wallet_img}
                  variant="bottom"
                  src="https://ru.bitcoinwiki.org/upload/ru/images/thumb/d/d8/%D0%90%D0%B4%D0%B2_%D0%9A%D1%8D%D1%88.png/400px-%D0%90%D0%B4%D0%B2_%D0%9A%D1%8D%D1%88.png"
                />
              </Card>
              <Card className={styles.wallet}>
                <Card.Img
                  className={styles.wallet_img}
                  variant="bottom"
                  src="https://ru.bitcoinwiki.org/upload/ru/images/thumb/d/d8/%D0%90%D0%B4%D0%B2_%D0%9A%D1%8D%D1%88.png/400px-%D0%90%D0%B4%D0%B2_%D0%9A%D1%8D%D1%88.png"
                />
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button>Пополнить</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default ReplenishmentWallet;
