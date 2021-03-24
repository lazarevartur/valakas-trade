import React from "react";
import { Container, Row, Col, Tab, Tabs, Form, Button } from "react-bootstrap";
import "./registrationPage.scss";
import { LoginPage } from "../login";

const RegistrationPage = () => {
  return (
    <Container className={"registration-page"}>
      <Row>
        <Col>
          <Tabs id="controlled-tab-example">
            <Tab eventKey="login" title="Войти" className={"mt-4"}>
              <LoginPage />
            </Tab>
            <Tab
              eventKey="registration"
              title="Зарегистрироваться"
              className={"mt-4"}
            >
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="fpassword" title="Забыли пароль?" className={"mt-4"}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

RegistrationPage.defaultProps = {};

export default RegistrationPage;
