import React from "react";
import styles from "./News.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import HomeBg from "../../../svg/HomeBg";
import cn from "classnames";

interface NewsProps extends defaultComponentProps {}

const News: React.FC<NewsProps> = ({ className = "" }) => {
  return (
    <div className={cn(styles.bg, { [className]: className })}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col>
            <h5 className={styles.title}>Новости</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img
                  variant="top"
                  height={260}
                  src="https://s3-alpha-sig.figma.com/img/e928/6161/3df0c84d344137a4b7e905e79f1fff61?Expires=1619395200&Signature=QExjXDUhg7mBFtPLTjEwNqX0IIZyyw9Q0zITYgIow3UE6x~A6gb3nymLXAUp5-3PSuFG77fzzBxrYlUpzaPTXGBEhcPeVpkwsTJ84N-7iYtGBI792mrIoWSg9WX2FiQIEskHG~~9vISeUxvScCPDG6PEmTcIQ1DX39Cf3OhZhCXfoe7jRPKnKIWArxGeFyh0BPBhxxeSC6soflRT-OtXh7IY6KWlAXj1KJrDCnxqW6wkLu63ILPsPnmXezR0S6NmQOZm0SnQLWw4regS4zI-yY0X-MnJwEgQZ~BBbbnmTaP84NGbOnZTDD9nwk8pmxYbE2XsbB-wCiDU64aP9CCzAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <Card.Body>
                  <Card.Title>Ten books to read in June</Card.Title>
                  <Card.Text>11.04.2021</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  height={260}
                  src="https://s3-alpha-sig.figma.com/img/0160/4ccf/2ffa22fa4aac7f6896c30786066b3fc3?Expires=1619395200&Signature=KTB13KL61h3wrudTGEX0~21d~-dmmOsgnh7u2VpdYYJyotUfDQzKN~Rj94Uvfa1BldvDFzbY52MXbfw69u0MtbgCkvhgZj9hXj7Ve6Bj1f7YGc9wpgh3~gaiUrWwO-Y-VXdwkq0F-LrIdbxwOTkTowQd32c7v1j7U-Z6Z5IADpgrBlqEJ6AA37jn8xuEAUHmS38bjPSaW0t1meNvf3zhKuYDZV9gWJqrOjpsK5Kzw8qAdtIe3kcye00AB41cGeerF~zhIuJ0ObsGuH7xixulngJYtV9GfmN8BqvH3wJVx~F8Pg2dZxGJl-giS7vLCP8zBqFT1ZXMDIWqhtTizt6MhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <Card.Body>
                  <Card.Title>Ten books to read in June</Card.Title>
                  <Card.Text>11.04.2021</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  height={260}
                  src="https://s3-alpha-sig.figma.com/img/be74/94f0/8517a4947d7e5f9ccc3a3732d1147fa0?Expires=1619395200&Signature=Bo7674CArs6NYec3WmQIfavZZkbxrV4ZoGPhvMQLkFNeDQU448LdFHALgdZdsQMmqrTzQWsMAp57zHkawGArjkWojd-rexx5x32hWAOEwN7Ui5JeRdfQ2X6A4hzEfxoExOCTcCxT1SOjMVVhMScmQo5niXMkTW4FWBkO-Ji8vD5kAPUhqt3RwVA8v0~oOLj1xnmNDZQfhViiZfPtm3bHEI7fs1lN11v5xA5j~a1ZzLH8sgZb9n7wAWQF2I3Ppx2dvYddDdxxusa7cMuugfVNaLO897ZtLSDY9RvwBVhB6rDlhyfC6YjYWvOVwyTekaVWEalc4J8mYHjlpSO4IZNn6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <Card.Body>
                  <Card.Title>Ten books to read in June</Card.Title>
                  <Card.Text>11.04.2021</Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 10, span: 2 }}>
            <a href="#" className={styles.all_news}>
              Все новости
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

News.defaultProps = {};

export default News;
