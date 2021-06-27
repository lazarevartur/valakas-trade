import React from "react";
import styles from "./prioritySelector.module.scss";
import { Button, Col, Image, Nav, Row, Tab } from "react-bootstrap";
import cn from "classnames";
import icon1 from "../../assets/svg/Home.svg";
import icon2 from "../../assets/svg/car.svg";
import icon3 from "../../assets/svg/motorcycle.svg";
import icon4 from "../../assets/svg/iphone.svg";
import icon5 from "../../assets/svg/airplane.svg";
import icon6 from "../../assets/svg/rings.svg";
import icon7 from "../../assets/svg/dollar.svg";
import homeImg from "../../assets/img/home.jpg";
import carImg from "../../assets/img/car.jpg";

interface data {
  icon: string;
  title: string;
  type: string;
  description: string;
  conditions: [];
}

const normalizeCondition = {
  discount: "Скидка",
  term: "Срок",
  minCost: "Мин. стоимость",
  maxCost: "Макс. стоимость",
  minStatus: "Мин. статус участника",
};

const menuData = [
  {
    icon: icon1,
    title: "Home",
    type: "Квартира",
    img: homeImg,
    description:
      "Собственная квартира на этапе строительства – без кредитов, рассрочек и без экономии на повседневных вещах!",
    conditions: {
      discount: "-25% / -25%",
      term: "120 дней / 180 дней",
      minCost: "20000",
      maxCost: "200000",
      minStatus: "M2",
    },
  },
  {
    icon: icon2,
    title: "Auto",
    type: "Автомобиль",
    img: carImg,
    description: "Приобретите автомобиль вашей мечты всего за часть стоимости",
    conditions: {
      discount: "до -25%",
      term: "30 дней",
      minCost: "10000",
      maxCost: "100000",
      minStatus: "M2",
    },
  },
  { icon: icon3, title: "Moto" },
  { icon: icon4, title: "Device" },
  { icon: icon5, title: "Travel" },
  { icon: icon6, title: "Wedding" },
  {
    icon: icon7,
    title: (
      <span>
        Early <br /> Repayment
      </span>
    ),
  },
];

interface PrioritySelectorProps {}

const PrioritySelector: React.FC<PrioritySelectorProps> = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={menuData[0].title}>
      <Row>
        <Col sm={12}>
          <Nav variant="pills" bsPrefix={"PrioritySelector"}>
            {menuData.map((item) => {
              return (
                <Nav.Item>
                  <Nav.Link eventKey={item.title}>
                    <div className={styles.desk}>
                      <div className={cn(styles.icon, "icon")}>
                        <Image src={item.icon} />
                      </div>
                      <div className={"d-flex flex-column text"}>
                        Priority <strong>{item.title}</strong>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
      </Row>
      <Row className={styles.slide}>
        <Col sm={12}>
          <Tab.Content>
            {menuData.map((item) => {
              const condition = item.conditions
                ? Object.entries(item.conditions)
                : null;
              console.log(condition);
              return (
                <Tab.Pane eventKey={item.title}>
                  <Row>
                    <Col lg={5}>
                      <Image src={item.img} className={styles.img} />
                    </Col>
                    <Col lg={7} className={styles.description}>
                      <h2>Priority {item.title}</h2>
                      <div className={styles.typeText}>{item.type}</div>
                      <div>{item.description}</div>
                      <div className={styles.separator} />

                      {condition &&
                        condition.map(([key, value]) => {
                          return (
                            <Row>
                              <Col lg={6} className={styles.key}>
                                {normalizeCondition[key]}
                              </Col>
                              <Col lg={6} className={styles.value}>
                                {value}
                              </Col>
                            </Row>
                          );
                        })}
                      <Row>
                        <Col lg={12} className={styles.button_group}>
                          <Button className={cn(styles.button)}>
                            Участвовать
                          </Button>
                          <Button className={styles.whiteButton}>Детали</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

PrioritySelector.defaultProps = {};

export default PrioritySelector;
