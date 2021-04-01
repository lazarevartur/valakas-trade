import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import styles from './registration.module.scss'
import { register as registerAction } from '../../../store/action/authAction'
import {
  useDispatchTyped,
  useSelectorTyped,
} from '../../../hooks/useTypedRedux'
import { IUserRegistration, rootState } from '../../../types/types'
import { RoutePath } from '../../../routes/routesConfig'
import { useHistory } from 'react-router'

const Registration: React.FC = () => {
  const history = useHistory()
  const { isLoading, userData } = useSelectorTyped(
    (state: rootState) => state.authentication
  )
  const dispatch = useDispatchTyped()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: IUserRegistration) => {
    dispatch(registerAction(data))
  }
  useEffect(() => {
    if (userData.hasOwnProperty('token')) {
      history.push(RoutePath.dashboard)
    }
  }, [userData, history])

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          ref={register}
        />
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
  )
}

export default Registration
