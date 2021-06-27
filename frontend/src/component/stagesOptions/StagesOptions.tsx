import React from "react";
import styles from "./stagesOptions.module.scss";
import { Row, Col, Nav, Tab, Tabs, Image } from "react-bootstrap";
import cn from "classnames";
import { BackpackIcon } from "@modulz/radix-icons";
import optionImg1 from "../../assets/svg/Frame.svg";
import optionImg2 from "../../assets/svg/Backpack.svg";
import optionImg3 from "../../assets/svg/system-uicons_graph-bar.svg";
import optionImg4 from "../../assets/svg/system-uicons_target.svg";
import optionImg5 from "../../assets/svg/Calendar.svg";
import optionImg6 from "../../assets/svg/Clock.svg";

const data = [
  {
    roundName: "1 раунд",
    price: 0.06,
    highlighted: 10197966,
    profitability: 31,
    purposeСollection: 546635,
    startRound: "12.07.2021 00:00:00",
    endRound: "10.08.2021 23:59:59",
    remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
  },
  {
    roundName: "2 раунд",
    price: 0.16,
    highlighted: 10197966,
    profitability: 31,
    purposeСollection: 546635,
    startRound: "12.07.2021 00:00:00",
    endRound: "10.08.2021 23:59:59",
    remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
  },
  {
    roundName: "3 раунд",
    price: 0.106,
    highlighted: 10197966,
    profitability: 31,
    purposeСollection: 546635,
    startRound: "12.07.2021 00:00:00",
    endRound: "10.08.2021 23:59:59",
    remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
  },
  {
    roundName: "4 раунд",
    price: 10.06,
    highlighted: 10197966,
    profitability: 31,
    purposeСollection: 546635,
    startRound: "12.07.2021 00:00:00",
    endRound: "10.08.2021 23:59:59",
    remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
  },
  {
    roundName: "5 раунд",
    price: 20.06,
    highlighted: 10197966,
    profitability: 31,
    purposeСollection: 546635,
    startRound: "12.07.2021 00:00:00",
    endRound: "10.08.2021 23:59:59",
    remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
  },
];

interface StagesOptionsProps {}

const StagesOptions: React.FC<StagesOptionsProps> = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <h2 className={cn(styles.title)}>Этапы опционов</h2>
        </Col>
      </Row>
      <Tabs defaultActiveKey={data[0].roundName} id="uncontrolled-tab-example">
        {data.map((item) => {
          return (
            <Tab eventKey={item.roundName} title={item.roundName}>
              <div className={"pt-5 pb-5"}>
                <Row className={"pb-5"}>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg1} alt="" />
                      <div className={styles.textBlock}>
                        <span>Цена опциона</span>
                        <strong>{item.price} $</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg2} />
                      <div className={styles.textBlock}>
                        <span>ВЫДЕЛЕНО ОПЦИОНОВ</span>
                        <strong>{item.highlighted}</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg3} />
                      <div className={styles.textBlock}>
                        <span>ДОХОДНОСТЬ НА ВЛОЖЕННЫЙ КАПИТАЛ</span>
                        <strong>{item.profitability} %</strong>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg4} />
                      <div className={styles.textBlock}>
                        <span>ЦЕЛЬ СБОРА / СОБРАНО</span>
                        <strong>{item.purposeСollection} $</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg5} />
                      <div className={styles.textBlock}>
                        <span>НАЧАЛО РАУНДА / ЗАВЕРШЕНИЕ РАУНДА</span>
                        <strong>{`${item.startRound} / ${item.endRound}`}</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg6} />
                      <div className={styles.textBlock}>
                        <span>ОСТАЛОСЬ ДО ЗАВЕРШЕНИЯ РАУНДА</span>
                        <strong className={styles.accent}>
                          {item.remainingToEnd}
                        </strong>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

StagesOptions.defaultProps = {};

export default StagesOptions;
