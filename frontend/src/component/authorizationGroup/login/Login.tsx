import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatchTyped } from "../../../hooks/useTypedRedux";
import "./loginPage.scss";
import { RoutePath } from "../../../routes/routesConfig";
import { Loader } from "../../loader";
import { login } from "../../../store/action/authAction";
//TODO ОБРАБОТКА ОШИБОК
export interface userLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatchTyped();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: userLogin) => {
    dispatch(login(data));
  };
  return (
    <div className={"login"}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите email"
            ref={register}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            ref={register}
            name="password"
          />
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
