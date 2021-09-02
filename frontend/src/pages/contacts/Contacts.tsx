import React from "react";
import styles from "./contacts.module.scss";
import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import map from "../../assets/png/googleMap.png";
import iconEmail from "../../assets/png/icon/email.png";
import iconTelegram from "../../assets/png/icon/telegram.png";
import { CustomInput } from "../../component/uiKit/customInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RoutePath } from "../../routes/routesConfig";
import { SendMailApi } from "../../services/SendMailApi";
import { useTranslation } from "react-i18next";

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, watch, reset } = useForm();
  const validators = {
    required: "Заполните поле",
  };
  const timeOutTime = 60000;
  const [isDisable, setIsDisable] = React.useState(false);

  React.useEffect(() => {
    reset();
  }, [isDisable]);

  const handlerForm = (data) => {
    SendMailApi.sendEmailFromContact(data).then((res) => {
      return;
    });
    console.log(data);
    setIsDisable(true);
    setTimeout(() => {
      setIsDisable(false);
    }, timeOutTime);
  };

  return (
    <div className={styles.contacts}>
      <Container className={styles.social_block}>
        <Row>
          <Col lg={6}>
            <div className={styles.email_block}>
              <p>{t("Contacts.email_block")}</p>
              <div className={styles.email}>
                <Image src={iconEmail} />
                <a href="mailto:mirax.official@mail.ru">
                  mirax.official@mail.ru
                </a>
              </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.social_list}>
              <p>{t("Contacts.social_list")}</p>
              <Row>
                <Col lg={4} className={styles.socialBloc}>
                  <Image src={iconTelegram} />{" "}
                  <a href="https://t.me/mirax_tech_channel" target={"_blank"}>
                    @miraxtrade
                  </a>
                </Col>
              </Row>
            </div>
            <div className={styles.m_assistance}>
              <p>{t("Contacts.m_assistance")}</p>
              <CardDeck className={styles.card_block}>
                <Card>
                  <Link
                    to="/download/Svidetel'stvo_o_postanovke_na_uchet.pdf"
                    target="_blank"
                    download
                    className={styles.link}
                  >
                    <Card.Body className={styles.card}>
                      <Card.Title className={styles.card_type}>PDF</Card.Title>
                      <Card.Text>{t("Contacts.card_name1")}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
                <Card>
                  <Link
                    to="/download/MIRAX.pdf"
                    target="_blank"
                    download
                    className={styles.link}
                  >
                    <Card.Body className={styles.card}>
                      <Card.Title className={styles.card_type}>PDF</Card.Title>
                      <Card.Text>{t("Contacts.card_name2")}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </CardDeck>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <Image src={map} className={styles.img} />
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.bgf9}>
        <Container className={styles.contact_form_block}>
          <Row>
            <Col lg={{ offset: 2, span: 8 }}>
              <h2 className={styles.title}>
                {t("Contacts.contact_form_block")}{" "}
                <span className={styles.accent}>Mirax</span>?{" "}
              </h2>
              <small>{t("Contacts.small")}</small>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit(handlerForm)}>
            <Row>
              <Col lg={6} className={styles.email}>
                <CustomInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={watch("email")}
                  reff={register({
                    ...validators,
                  })}
                />
                <small>
                  {
                    // @ts-ignore
                    errors.email && errors.email.message
                  }
                </small>
              </Col>
              <Col lg={6}>
                <CustomInput
                  type="text"
                  placeholder={t("Contacts.input.name")}
                  name="name"
                  value={watch("name")}
                  reff={register({
                    ...validators,
                    minLength: { value: 2, message: "От 2 до 30 символов" },
                    maxLength: { value: 30, message: "От 2 до 30 символов" },
                  })}
                />
                <small>
                  {
                    // @ts-ignore
                    errors.name && errors.name.message
                  }
                </small>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className={"pt-5"}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <strong>
                    {
                      // @ts-ignore
                      errors.message && errors.message.message
                    }
                  </strong>
                  <Form.Control
                    placeholder={t("Contacts.input.question")}
                    as="textarea"
                    rows={6}
                    // @ts-ignore
                    ref={register({
                      ...validators,
                      minLength: {
                        value: 10,
                        message: "От 10 до 200 символов",
                      },
                      maxLength: {
                        value: 200,
                        message: "От 10 до 200 символов",
                      },
                    })}
                    name={"message"}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                {
                  // @ts-ignore
                  errors.chekbox && <strong>{errors.chekbox.message}</strong>
                }
                <Form.Group controlId="formCheckbox">
                  <Form.Check
                    className={styles.chekBox}
                    type="checkbox"
                    label={
                      <span>
                        {t("Contacts.input.chekBox1")}{" "}
                        <Link to={RoutePath.termsUse}>
                          {t("Contacts.input.chekBox2")}
                        </Link>{" "}
                        {t("Contacts.input.chekBox3")}{" "}
                        <Link to={RoutePath.privacyPolicy}>
                          {t("Contacts.input.chekBox4")}
                        </Link>
                      </span>
                    }
                    name={"chekbox"}
                    ref={register({
                      required: "Прочтите условия использования! ",
                    })}
                  />
                </Form.Group>
              </Col>
              <Col lg={{ offset: 4 }}>
                <Button
                  className={styles.button}
                  type={"submit"}
                  disabled={isDisable}
                >
                  {isDisable ? (
                    <small>{t("Contacts.isDisable")}</small>
                  ) : (
                    t("Contacts.button")
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

Contacts.defaultProps = {};

export default Contacts;
