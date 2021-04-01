import React from 'react'
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Image,
  Dropdown,
  Row,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './header.scss'
import logo from './logo.png'
import { SocialButtons } from '../socialButtons'
import { SubMenu } from './subMenu'
import { RoutePath } from '../../routes/routesConfig'
import { useLocation } from 'react-router-dom'
import { Avatar } from '../avatar'
import { logout } from './../../store/action/authAction'
import { useDispatch } from 'react-redux'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <div className={'logo'}>
            <LinkContainer to={`${RoutePath.home}`}>
              <Navbar.Brand href="#home">
                <Col xs={6} md={4}>
                  <Image src={`${logo}`} className={'logo-img'} />
                </Col>
              </Navbar.Brand>
            </LinkContainer>
            <span>ТВОЙ ПРАВИЛЬНЫЙ ВЫБОР</span>
          </div>
          {location.pathname !== RoutePath.home ? (
            <>
              <Row>
                <Col lg={6}>
                  <Avatar />
                </Col>
                <Col lg={4}>
                  <Dropdown className={'dropdown__header'}>
                    <Dropdown.Toggle variant="primary" id="dropdown-menu" />
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => dispatch(logout())}>
                        Выход
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <SocialButtons className={'position'} />
              <div className={'divider'} />
              <Navbar.Toggle aria-controls="responsive-navbar-nav">
                Меню
              </Navbar.Toggle>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className={'flex-grow-0'}
              >
                <Nav className="ml-auto" activeKey>
                  <LinkContainer to={`${RoutePath.personal}`}>
                    <Nav.Link>
                      <Button variant="primary">Войти</Button>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={`${RoutePath.auth}`}>
                    <Nav.Link>
                      <Button variant="primary">Регистрация</Button>
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
      {location.pathname === RoutePath.home && <SubMenu />}
    </header>
  )
}

export default Header
