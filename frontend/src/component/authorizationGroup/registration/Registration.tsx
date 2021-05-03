import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./registration.module.scss";
import { Loader } from "../../loader";

export interface RegistrationProp {
  isLoading?: boolean;
  handleForm: any;
  onSubmit: any;
  register: any;
  refLink?: string;
}

const Registration: React.FC<RegistrationProp> = ({
  isLoading = false,
  handleForm,
  onSubmit,
  register,
  refLink,
}) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Form className={styles.form} onSubmit={handleForm(onSubmit)}>
          {!refLink && (
            <>
              <h5 className={"text-center"}>
                Внимание! Вы регистрируетесь без пригласителя.
              </h5>
              <p className={"text-center"}>
                Если вы хотите быть в структуре вашего партнёра, перейдите по
                его реферальной ссылке для продолжения регистрации.
              </p>
            </>
          )}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              ref={register}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register}
            />
          </Form.Group>
          {refLink && (
            <Form.Group controlId="formBasicName">
              <Form.Label>ID / email пригласителя:</Form.Label>
              <Form.Control
                type="text"
                name="ref"
                value={refLink}
                ref={register}
                readOnly
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          )}

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              ref={register}
            />

            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCountry">
            <Form.Label>Ваша страна:</Form.Label>
            <Form.Control as="select" ref={register} name="country">
              <option>Украина</option>
              <option>Россия</option>
              <option>Беларусь</option>
            </Form.Control>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              ref={register}
            />
          </Form.Group>
          <Form.Group controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Я соглашаюсь с условиями общего регламента защиты персональных данных и пользовательского соглашения"
              id="formCheckbox"
            />
          </Form.Group>
          <Form.Group controlId="formCheckbox1">
            <Form.Check
              type="checkbox"
              label="Я соглашаюсь с условиями общего регламента защиты персональных данных и пользовательского соглашения"
              id="formCheckbox1"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      )}
    </>
  );
};

export default Registration;
