import React from "react";
import styles from "./News.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";
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
                  src={
                    "https://s3-alpha-sig.figma.com/img/e928/6161/3df0c84d344137a4b7e905e79f1fff61?Expires=1621209600&Signature=fWxpiDOEj4e9J320xEQVVmaYUDSRFkCt0uoHo-57O-sxCYtNXZLweGqugCfEQ3TQYGr1xNkz8NhuWH3rKQ1EfOsB1JSYHIM5dtjT0xBUsMJC2kSgzzxqIU1lJzFDattnOzNkUBTRJbbJZHLLwnseGAcJygNKX3EKBoBBsDa0BZBf6KmwrikAm-qadG5LaJ3Oz6tuSwP8lqVhHqYu5gufNZ5oaX95eY5MqW1kGX1uAdstuWVGGNnQcIXUtjrfblg8gknnN6TRdo7focoeMErRy3187nvU24y4WdHU378SdlpqVypFkdP9W2zCDnT7KWqNokkPoY7xnF8JW6QUHwnDkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
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
                  src={
                    "https://s3-alpha-sig.figma.com/img/0160/4ccf/2ffa22fa4aac7f6896c30786066b3fc3?Expires=1621209600&Signature=dYVD6ZeB8b~qqhKXInrEgTYqUyCh6imxIdMPkyKv9T~xAKm5CKFNGpDMSDGdiZOah5xQY1miyR2huh27jss-2dOAnToGNQTDf23pw2HsuRCMsQDk9bPtbSAdPgam09Cl8lDvGKosf-9Ho99Ref1gaXtt4hOsNW8y9ApUBurmfuKjtSGVRizQ~6LAipYMMZ4Oci~o3CkLLx9RH81Xd0Jt6H-GWJm2uzAadpY6~8CKwMdv1igPWXegpvDwrpX4y8Cdqo-ON8CtpVKSlzdy6vSeBp8LcziibHmmRLD~APdBCr5p1INQZPgI66CFn4luDYAnYo7eAiDuhBk~0dLoNsd51Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
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
                  src={
                    "https://s3-alpha-sig.figma.com/img/be74/94f0/8517a4947d7e5f9ccc3a3732d1147fa0?Expires=1621209600&Signature=I9kHqWk5sS6ffD~0mewrsU4dOjJ0BabAqb4z3N6JxN50s14nRHAsqjuUicDHTGwHO2vqw7QpCyowA5~v7TC1UDj895AWi4GVzhrtpKP8~23MpDQrgjm6Ht~bVXKHOSIzx7gEJSTw~JCJ1rHg9GPpZ~2-v7R5fJR6omsbSzo9KbJOqrA9-x9ZV6b3wlg-nHJ7R189Jqi0fFo0mfw3QcYsbjF2CelFhlRZgAyfm6bT5piBbS9CK4Z08QKbeUFXCta2J5JuZ2kBRzzygJfZn53QeOFpDFOXRsPGgi-9q0QFBC2Wj0C3Js8itn2DMCu~oPqNTFbXD3LsrJ-F7KJXO7~qHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
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
