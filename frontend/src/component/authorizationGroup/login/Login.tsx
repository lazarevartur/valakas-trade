import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./loginPage.scss";
import { RoutePath } from "../../../routes/routesConfig";

const Login = () => {
  const history = useHistory();
  const handlerForm = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`${RoutePath.dashboard}`);
  };
  return (
    <div className={"login"}>
      <Form onSubmit={handlerForm}>
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
        <Form.Group controlId="formBasicCheckbox1">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

Login.defaultProps = {};

export default Login;
