import React from "react";
import styles from "./stagesOptions.module.scss";
import { Col, Image, Row, Tab, Tabs } from "react-bootstrap";
import cn from "classnames";
import optionImg1 from "../../assets/svg/Frame.svg";
import optionImg2 from "../../assets/svg/Backpack.svg";
import optionImg3 from "../../assets/svg/system-uicons_graph-bar.svg";
import optionImg4 from "../../assets/svg/system-uicons_target.svg";
import optionImg5 from "../../assets/svg/Calendar.svg";
import optionImg6 from "../../assets/svg/Clock.svg";
import { IOptionalData, optionalStatus } from "../../types/types";
import { getRuDate, getRuFormatNumbers, ruDays } from "../../utils/utils";
import { useTranslation } from "react-i18next";

// const data = [
//   {
//     roundName: "1 раунд",
//     price: 0.06,
//     highlighted: 10197966,
//     profitability: 31,
//     purposeСollection: 546635,
//     startRound: "12.07.2021 00:00:00",
//     endRound: "10.08.2021 23:59:59",
//     remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
//   },
//   {
//     roundName: "2 раунд",
//     price: 0.16,
//     highlighted: 10197966,
//     profitability: 31,
//     purposeСollection: 546635,
//     startRound: "12.07.2021 00:00:00",
//     endRound: "10.08.2021 23:59:59",
//     remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
//   },
//   {
//     roundName: "3 раунд",
//     price: 0.106,
//     highlighted: 10197966,
//     profitability: 31,
//     purposeСollection: 546635,
//     startRound: "12.07.2021 00:00:00",
//     endRound: "10.08.2021 23:59:59",
//     remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
//   },
//   {
//     roundName: "4 раунд",
//     price: 10.06,
//     highlighted: 10197966,
//     profitability: 31,
//     purposeСollection: 546635,
//     startRound: "12.07.2021 00:00:00",
//     endRound: "10.08.2021 23:59:59",
//     remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
//   },
//   {
//     roundName: "5 раунд",
//     price: 20.06,
//     highlighted: 10197966,
//     profitability: 31,
//     purposeСollection: 546635,
//     startRound: "12.07.2021 00:00:00",
//     endRound: "10.08.2021 23:59:59",
//     remainingToEnd: "48 дней 02 часов 23 минут 10 секунд",
//   },
// ];

interface StagesOptionsProps {
  rounds: IOptionalData[];
}

const StagesOptions: React.FC<StagesOptionsProps> = ({ rounds }) => {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col lg={12}>
          <h2 className={cn(styles.title)}>
            {t("Optional.StagesOptions.title")}
          </h2>
        </Col>
      </Row>
      <Tabs
        defaultActiveKey={rounds[0]?.round_number}
        id="uncontrolled-tab-example"
      >
        {rounds.map((item, i) => {
          const startRound = getRuDate(item.start_round);
          const endRound = getRuDate(item.end_round);
          const diff = item.end_round - Date.now();
          const days = new Date(diff).getDate();
          const toEnd = `${days} ${ruDays(days)}`;
          const profit = (item.profitability * 100).toFixed(1) || 0;
          return (
            <Tab
              key={i}
              eventKey={item.round_number}
              title={`${item.round_number}  ${t(
                "Optional.StagesOptions.round"
              )}`}
              className={styles.optional_stage}
            >
              <div className={"pt-5 pb-5"}>
                <Row className={"pb-5"}>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg1} alt="" />
                      <div className={styles.textBlock}>
                        <span>{t("Optional.StagesOptions.tab_title1")}</span>
                        <strong>{item.cost} $</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg2} />
                      <div className={styles.textBlock}>
                        <span>{t("Optional.StagesOptions.tab_title2")}</span>
                        <strong>{getRuFormatNumbers(item.quantity)}</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg3} />
                      <div className={styles.textBlock}>
                        <span>{t("Optional.StagesOptions.tab_title3")}</span>
                        <strong>{profit} %</strong>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg4} />
                      <div className={styles.textBlock}>
                        <span>{t("Optional.StagesOptions.tab_title4")}</span>
                        <strong>{getRuFormatNumbers(item.purpose)} $</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg5} />
                      <div className={styles.textBlock}>
                        <span>{t("Optional.StagesOptions.tab_title5")}</span>
                        <strong>{`${startRound} / ${endRound}`}</strong>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.description}>
                      <Image src={optionImg6} />
                      <div className={styles.textBlock}>
                        <span>{t("Optional.StagesOptions.tab_title6")}</span>
                        <strong className={styles.accent}>
                          {item.status === optionalStatus.active && toEnd}
                          {item.status === optionalStatus.passed &&
                            t("Optional.StagesOptions.end_round")}
                          {item.status === optionalStatus.future &&
                            t("Optional.StagesOptions.pending")}
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
