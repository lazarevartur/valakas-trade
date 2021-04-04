import React, { useRef, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

import style from "./profile.module.scss";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import useHover from "../../hooks/useHover";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const avatarRef = useRef(null);
  const isHover = useHover(avatarRef);
  return (
    <DashboardLayout>
      <Container>
        <Row>
          <Col>
            <h3>Личные данные</h3>
            <Card className={"p-3"}>
              <Card.Title className={style.title}>Данные профиля</Card.Title>
              <Card.Body>
                <Row>
                  <Col
                    lg={2}
                    className={!isHover ? style.avatar : style.avatar_hover}
                    ref={avatarRef}
                  >
                    <Image
                      src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
                      roundedCircle
                      height={100}
                    />
                  </Col>
                  <Col lg={10}>
                    <Form>
                      <Form.Group controlId="name">
                        <Form.Label>Ваше имя:</Form.Label>
                        <Form.Control type="text" placeholder="Ваше имя:" />
                      </Form.Group>
                      <Form.Group controlId="name">
                        <Form.Label>
                          Вашe отчество (если оно есть): :
                        </Form.Label>
                        <Form.Control type="text" placeholder="отчество:" />
                      </Form.Group>{" "}
                      <Form.Group controlId="name">
                        <Form.Label>Ваша фамилия:</Form.Label>
                        <Form.Control type="text" placeholder="Ваша фамилия:" />
                      </Form.Group>{" "}
                      <Form.Group controlId="name">
                        <Form.Label>Ваша страна:</Form.Label>
                        <Form.Control type="text" placeholder="Ваше имя:" />
                      </Form.Group>{" "}
                      <Form.Group controlId="name">
                        <Form.Label>Ваш регион:</Form.Label>
                        <Form.Control type="text" placeholder="Ваше имя:" />
                      </Form.Group>{" "}
                      <Form.Group controlId="name">
                        <Form.Label>
                          Дата рождения (в формате дд.мм.гггг):
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ваше имя:" />
                      </Form.Group>
                      <Form.Group controlId="name">
                        <Form.Label>Ваш пол:</Form.Label>
                        <Form.Control type="text" placeholder="Ваш пол:" />
                      </Form.Group>
                      <Form.Group controlId="name">
                        <Form.Label>Расскажите о себе:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Расскажите о себе:
"
                        />
                      </Form.Group>
                      <h4 className={"mb-3"}>
                        <strong>Контактные данные</strong>
                      </h4>
                      <Form.Group controlId="name">
                        <Form.Label>Ваш телефон:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ваш телефон:
"
                        />
                      </Form.Group>
                      <Form.Group controlId="name">
                        <Form.Label>Ваш Telegram:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ваш Telegram:

"
                        />
                      </Form.Group>
                      <Form.Group controlId="name">
                        <Form.Label>Ваш WhatsApp:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ваш WhatsApp:
"
                        />
                      </Form.Group>
                      <Form.Group controlId="name">
                        <Form.Label>
                          Свободное поле для контактных данных:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Свободное поле для контактных данных:

"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Сохранить
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

Profile.defaultProps = {};

export default Profile;
