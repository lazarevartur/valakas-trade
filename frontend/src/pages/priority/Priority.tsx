import React from "react";
import styles from "./Priority.module.scss";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import optionalImg from "../../assets/img/MrxInvestImg.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import svg1 from "../../assets/svg/Rocket.svg";
import svg2 from "../../assets/svg/bage.svg";
import svg3 from "../../assets/svg/shield.svg";
import svg4 from "../../assets/svg/flight.svg";
import png1 from "../../assets/png/priorityImg.png";
import cn from "classnames";
import { PrioritySelector } from "../../component/prioritySelector";

const dataBenefist = [
  {
    title: "",
    text:
      "Возможность реализовать свою мечту: приобрести квартиру, авто, гаджеты или организовать свадьбу или путешествие всего за 30-60% от стоимости",
    icon: svg4,
  },
  {
    title: "",
    text:
      "Выбор инвестиционных программ, привязанных к определенным товарам и услугам ",
    icon: svg2,
  },
  {
    title: "",
    text:
      "100% защита ваших инвестиций путем заключения договора целевого займа между вами и компанией Mirax%",
    icon: svg3,
  },
  {
    title: "",
    text:
      "Возможность участия в партнерской программе с линейным маркетингом до 10 уровней в глубину для участников Priority ",
    icon: svg1,
  },
];

interface PriorityProps {}

const Priority: React.FC<PriorityProps> = () => {
  return (
    <>
      <JumbotronCustom
        img={optionalImg}
        title={"Priority"}
        text={
          "По программе Priority каждый участник может приобретать любые товары и услуги со скидкой до 60% и зарабатывать дополнительно с помощью партнерской компенсационной программы"
        }
      />
      <Container>
        <Row>
          <Col lg={12}>
            {" "}
            <Benefits
              title={"Преимущества с Optional"}
              data={dataBenefist}
              fourElement
            />
          </Col>
        </Row>
      </Container>
      <div className={cn("p-5", styles.bgf9)}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className={styles.title}>Инвестиционные программы</h2>
            </Col>
          </Row>
          <Row className={cn(styles.description)}>
            <Col lg={4}>
              <p className={cn(styles.accent)}>
                <span>30-60%</span>
              </p>
              <p>скидка на товар или услугу</p>
            </Col>
            <Col lg={5}>
              <p className={cn(styles.accent)}>
                <span>60-300 дней</span>
              </p>
              <p>срок работы</p>
            </Col>
            <Col lg={3}>
              {" "}
              <p className={cn(styles.accent)}>
                <span>7</span>
              </p>
              <p>программ, позволяющих совершать выгодные покупки</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <PrioritySelector />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className={styles.quote}>
          "Наша цель – создать новую социально-экономическую модель заработка и
          помочь людям удовлетворять материальные потребности и стать успешными"
        </div>
      </Container>
      <Row className={styles.desc}>
        <Col lg={5}>
          <Image src={png1} />
        </Col>
        <Col lg={6}>
          <div>
            <h2 className={styles.title}>Превратите мечту в реальность </h2>
            <ol>
              <li>Выберите программу и нажмите “Участвовать</li>
              <li>Следуйте простым условиям</li>
              <li>По завершению программы получите бонусы на ваш депозит </li>
              <li>Станьте счастливым обладателем товара, о котором мечтали</li>
            </ol>
            <small>
              *Сумма приобретения должна быть больше или равна сумме бонусов
            </small>
          </div>
        </Col>
      </Row>
    </>
  );
};

Priority.defaultProps = {};

export default Priority;
