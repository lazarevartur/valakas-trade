import React from "react";
import styles from "./prioritySelector.module.scss";
import { Col, Image, Nav, Row, Tab } from "react-bootstrap";
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
import { PrioritySlide } from "./prioritySlide";

interface data {
  icon: string;
  title: string;
  type: string;
  description: string;
  conditions: [];
}

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
  {
    icon: icon3,
    title: "Auto2",
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
  {
    icon: icon4,
    title: "Auto3",
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
  {
    icon: icon5,
    title: "Travel",
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
  {
    icon: icon6,
    title: "Wedding",
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
  {
    icon: icon7,
    title: (
      <span>
        Early <br /> Repayment
      </span>
    ),
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
      <div className={styles.PrioritySlide}>
        {menuData.map(({ icon, ...item }) => {
          return <PrioritySlide {...item} />;
        })}
      </div>
    </Tab.Container>
  );
};

PrioritySelector.defaultProps = {};

export default PrioritySelector;
