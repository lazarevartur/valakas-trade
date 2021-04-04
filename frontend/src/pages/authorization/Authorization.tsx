import React from 'react'
import { Button, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap'
import styles from './authorization.module.scss'
import { Login } from '../../component/authorizationGroup/login'
import { Registration } from '../../component/authorizationGroup/registration'
import { ForgotPassword } from '../../component/authorizationGroup/forgotPassword'

const Authorization = () => {
  return (
    <Container className={styles.auth_block}>
      <Row>
        <Col>
          <Tabs id="controlled-tab-login">
            <Tab eventKey="login" title="Войти" className={'mt-4'}>
              <h2 className={'text-center mb-4'}>
                <strong>Вход в личный кабинет.</strong>
              </h2>
              <Login />
            </Tab>
            <Tab
              eventKey="registration"
              title="Зарегистрироваться"
              className={'mt-4'}
            >
              <h5 className={'text-center'}>
                Внимание! Вы регистрируетесь без пригласителя.
              </h5>
              <p className={'text-center'}>
                Если вы хотите быть в структуре вашего партнёра, перейдите по
                его реферальной ссылке для продолжения регистрации.
              </p>
              <Registration />
            </Tab>
            <Tab eventKey="fpassword" title="Забыли пароль?" className={'mt-4'}>
              <ForgotPassword />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

Authorization.defaultProps = {}

export default Authorization
