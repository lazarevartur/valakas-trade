import React from "react";
import styles from "./Optional.module.scss";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import optionalImg from "../../assets/img/MrxInvestImg.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import svg1 from "../../assets/svg/stopwatch.svg";
import svg2 from "../../assets/svg/ratio.svg";
import svg3 from "../../assets/svg/mrx2.svg";
import svg4 from "../../assets/svg/mrx3.svg";
import cn from "classnames";
import { TwoCols } from "../../layouts/TwoCols";
import howMakeImg1 from "../../assets/img/HowToMakeMoneyHere1.jpg";
import StagesOptions from "../../component/stagesOptions/StagesOptions";

interface OptionalProps {}

const dataBenefist = [
  {
    title: "",
    text: "Дивиденды до 50% на вложенный капитал ежемесячно",
    icon: svg3,
  },
  {
    title: "",
    text:
      "Возможность обмена опционов на доли компании после запуска программы в июле 2022",
    icon: svg2,
  },
  {
    title: "",
    text: "Партнерская программа с выплатами в сеть до 50%",
    icon: svg4,
  },
  {
    title: "",
    text: "Сроки реализации программы – менее 1 года ",
    icon: svg1,
  },
];

const Optional: React.FC<OptionalProps> = () => {
  return (
    <>
      <JumbotronCustom
        img={optionalImg}
        title={"Optional"}
        text={
          "В программе Optional используется модель акционерного краудфандинга. Партнеры становятся совладельцами компании и участвуют в распределении прибыли путем приобретения опционов"
        }
      />
      <Container>
        <Row>
          <Col lg={12}>
            <Benefits
              title={"Преимущества с Optional"}
              data={dataBenefist}
              fourElement
            />
          </Col>
        </Row>
      </Container>
      <div className={cn(styles.description, styles.bgf9)}>
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <h3 className={cn(styles.title)}>Что вы получаете</h3>
                <p>
                  Используя опыт в сборке и поставке цифрового оборудования в
                  Китае, компания Mirax запустит антивирусную программу
                  "Placebo". Этот инструмент позволит увеличить защиту
                  пользовательских средств, хранящихся в гаджетах. Данный проект
                  масштабируется по краудфандинговой модели. Этап разработки
                  "Placebo" включает 10 раундов сроком 300 дней, на каждом из
                  которых вы можете приобрести опционы по фиксированной цене.
                  <br />
                  Партнеры, которые приобрели опционы, становятся совладельцами
                  дивиденды от продаж антивирусной программы или возможность
                  обмена опционов на доли компании после запуска "Placebo".
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <h3 className={cn(styles.title)}>Как происходит рост?</h3>
                <p>
                  После реализации антивирусной программы в торговые точки по
                  всему миру и расширения функционала "Placebo" становится
                  официальным партнером ведущих производителей техники и
                  внедряется в электронные устройства на этапе производства. За
                  счет географического масштабирования и увеличения продаж
                  программы, увеличивается ценность и прибыль компании и,
                  соответственно, прибыль партнеров
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={cn(styles.stages_options)}>
        <StagesOptions />
      </Container>

      <TwoCols
        className={cn(styles.Satisfied, styles.bgf9, "p-5")}
        LeftCol={() => {
          return (
            <div>
              <h5 className={cn(styles.title)}>
                Дивиденды на вложенный капитал
              </h5>
              <p className={styles.text}>
                Вы можете получать ежемесячные дивиденды от вклада сразу после
                запуска программы{" "}
                <span className={styles.accent}>"Placebo"</span>
              </p>
              <p>
                Вложения в <strong>1 раунде</strong> приносят держателю опционов
                доходность <strong>50%</strong>, в{" "}
                <strong>10 раунде – 15%</strong>
              </p>
              <p className={"font-italic font-weight-light"}>
                Например, вы приобретаете в 1 раунде 20000 опционов за $1200
                ($0,06 x 20000). Ваш пассивный доход составит $600 в месяц (50%
                от вклада). Если вы вложите ту же сумму в последнем раунде, ваш
                ежемесячный доход составит $180. Таким образом, чем раньше вы
                приобретаете опционы, тем выше процент вашей доходности
              </p>
              <p>
                <strong>Дата запуска программы: </strong>
                <span className={cn(styles.accentBig, styles.accent)}>
                  15 июля 2022 года
                </span>
              </p>
            </div>
          );
        }}
        RightCol={() => {
          return (
            <>
              <Image className={styles.img} src={howMakeImg1} />
            </>
          );
        }}
      />
    </>
  );
};

Optional.defaultProps = {};

export default Optional;
