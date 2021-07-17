import React, { Suspense } from "react";
import styles from "../сommunity/Community.module.scss";
import { Col, Container, Row, Image, Table } from "react-bootstrap";
import openCenter from "../../assets/img/openCenter.jpg";
import miraxCenter from "../../assets/img/miraxCenter.jpg";
import miraxRooms from "../../assets/img/miraxRooms.jpg";
import miraxAva from "../../assets/img/Availability.jpg";
import miraxMot from "../../assets/img/Motivation.jpg";
import miraxReliability from "../../assets/img/Reliability.jpg";
import miraxMap from "../../assets/img/miraxMap.jpg";
import deskLine from "../../assets/img/deskLine.jpg";
import png1 from "../../assets/png/recomendate/1.png";
import png2 from "../../assets/png/recomendate/2.png";
import png3 from "../../assets/png/recomendate/3.png";
import png4 from "../../assets/png/recomendate/4.png";
import png5 from "../../assets/png/recomendate/5.png";
import png6 from "../../assets/png/recomendate/6.png";

import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import { Loader } from "../../component/uiKit/loader";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import cn from "classnames";
const benData = [
  {
    text: "Площадь от 35-40 кв.м (от 20 человек)",
    icon: png1,
  },
  {
    text: "Комфортные условия аренды",
    icon: png2,
  },
  {
    text: "Быстрый и непрерывный WiFi",
    icon: png3,
  },
  {
    text:
      "Место с большим количеством людей (залы на базе отелей, гостиниц, бизнес-центров)",
    icon: png4,
  },
  {
    text: "Удобное месторасположение ",
    icon: png5,
  },
  {
    text:
      "Исправное оборудование: демонстрационный экран (доска с мелом, ПК/ноутбук)",
    icon: png6,
  },
];

const benData2 = [
  {
    title: "Доступность",
    text: "Откройте офис в любом регионе России и зарабатывайте с партнерами",
    icon: miraxAva,
  },
  {
    title: "Мотивация",
    text:
      "Раскройте потенциал вашей команды и получайте вознаграждение за активность участников нижестоящей структуры",
    icon: miraxMot,
  },
  {
    title: "Надежность",
    text:
      "Забудьте о риске лишения бонусов из-за невыполнения сложных квалификаций благодаря простой офисной программе",
    icon: miraxReliability,
  },
];

interface CenterOpeningProps {}

const CenterOpening: React.FC<CenterOpeningProps> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <JumbotronCustom
        img={openCenter}
        contentPosRight
        title={
          "Открытие индивидуального представительства и расширение деловых возможностей"
        }
        text={
          "Вы можете делиться своими знаниями и опытом с партнерами и обучать их, тем самым увеличивая свой капитал. Откройте для этого индивидуальное представительство Mirax и постройте команду успешных инвесторов"
        }
      />
      <div>
        <div className={styles.bgGrey}>
          <Container className={styles.main_padding}>
            <Row>
              <Col lg={12}>
                {" "}
                <h2 className={styles.title}>
                  Масштабирование бизнеса за счет{" "}
                  <span className={styles.accent}>
                    открытия представительства Mirax
                  </span>{" "}
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                Масштабирование делает бизнес более успешным, поскольку
                капитализация всей сети выше, чем отдельных ее элементов. В
                связи с увеличением количества инвесторов компания Mirax
                расширяет сеть своих филиалов совместно с партнерами.{" "}
                <strong>Наша задача</strong> – помочь вам в открытии
                индивидуального консультационного представительства для
                подготовки успешных инвесторов и создания команд в своем регионе
              </Col>
              <Col lg={6}>
                Для создания эффективной команды необходимо привлекать к
                взаимодействию людей, способных выходить за рамки своего
                потенциала. Ключевую роль в этом играет руководитель
                индивидуального представительства Mirax, обеспечивающий
                организацию деятельности команды и реализующий бизнес-модель.
                Командная работа позволяет раскрыть потенциал каждого и начать
                зарабатывать больше.{" "}
              </Col>
            </Row>
            <Row className={"pt-5"}>
              <Col lg={12}>
                <Image src={miraxCenter} />
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col lg={{ offset: 1, span: 10 }}>
              <Benefits
                title={"Рекомендации по выбору помещения "}
                data={benData}
              />
            </Col>
          </Row>
        </Container>
        <div className={styles.bgGrey}>
          <Container className={"p-5"}>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={12}>
                    <h2 className={styles.title_fullwidth}>
                      Кто наш идеальный кандидат
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <p>
                      Для создания эффективной команды необходимо привлекать к
                      взаимодействию людей, способных выходить за рамки своего
                      потенциала. Ключевую роль в этом играет руководитель
                      индивидуального представительства Mirax. Наш идеальный
                      кандидат:
                    </p>
                    <ul className={styles.list}>
                      <li>Выстраивает грамотную систему мотивации партнеров</li>
                      <li>Регулярно взаимодействует с партнерами</li>
                      <li>Постоянно обучается</li>
                      <li>
                        Разрабатывает индивидуальные предложения для партнеров и
                        инвесторов
                      </li>
                      <li>
                        Проводит мероприятия, направленные на повышение
                        лояльности инвесторов
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Image src={miraxRooms} />
              </Col>
            </Row>
          </Container>
        </div>
        <Container className={cn(styles.ruleOpen, styles.main_padding)}>
          <Row>
            <Col lg={6}>
              <Image src={deskLine} />
            </Col>
            <Col lg={6}>
              <h2 className={styles.title}>
                <span className={styles.accent}>Условия открытия</span>{" "}
                индивидуального представительства{" "}
              </h2>
              <p>
                Партнер Mirax, выполнивший данные условия, может открыть
                индивидуальное представительство и получать дополнительное
                вознаграждение по офисной программе
              </p>
              <ul className={styles.list}>
                <li>
                  Вам необходимо достичь уровня М4 в любой из партнерских
                  программ Mirax
                </li>
                <li>
                  Регион, в котором вы открываете представительство, должен
                  совпадать с вашим регионом проживания
                </li>
                <li>
                  В первой линии вам необходимо иметь как минимум двух партнеров
                  с уровнем М3, также проживающих в вашем регионе
                </li>
              </ul>
            </Col>
            <Row>
              <Col lg={{ offset: 1, span: 10 }}>
                <div className={styles.quote}>
                  "Наша цель – создать условия для поддержки вашего роста"
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
        <div className={styles.bgGrey}>
          <Container className={styles.main_padding}>
            <Row>
              <Col lg={12}>
                <h2 className={styles.title}>
                  Вознаграждения по офисной программе
                </h2>
                <small className={styles.text_center}>
                  Получайте дополнительное вознаграждения от суммы пополнения
                  приглашенного партнера
                </small>
              </Col>
            </Row>
            <Row className={styles.main_padding}>
              <Col lg={{ offset: 1, span: 10 }}>
                <Table striped hover size="sm" className={styles.table}>
                  <thead>
                    <tr className={styles.thead}>
                      <th>Глубина</th>
                      <th>Вознаграждение</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 5 линия</td>
                      <td>0,6%</td>
                    </tr>
                    <tr>
                      <td> 6 линия</td>
                      <td>0,8%</td>
                    </tr>
                    <tr>
                      <td> 7 линия</td>
                      <td>1%</td>
                    </tr>
                    <tr>
                      <td> 8 линия</td>
                      <td>1.2%</td>
                    </tr>
                    <tr>
                      <td> 9 линия</td>
                      <td>1.4%</td>
                    </tr>
                    <tr>
                      <td> 10 линия</td>
                      <td>1.6%</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Benefits
            title={"Индивидуальное представительство – ваша лучшая инвестиция"}
            data={benData2}
          />
        </Container>
        <Row className={styles.main_padding}>
          <Col lg={{ offset: 2, span: 10 }}>
            {" "}
            <Image src={miraxMap} width={1000} />
          </Col>
        </Row>
      </div>
    </Suspense>
  );
};

CenterOpening.defaultProps = {};

export default CenterOpening;
