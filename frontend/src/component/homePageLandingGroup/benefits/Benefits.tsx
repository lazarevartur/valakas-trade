import React from "react";
import styles from "./benefits.module.scss";
import cn from "classnames";
import { Col, Row } from "react-bootstrap";
import diamondsSvg from "../../../assets/svg/diamonds.svg";
import { getChunks } from "../../../utils/utils";

const dataMocha = [
  {
    title: "title1",
    text: "text",
    icon: diamondsSvg,
  },
  {
    title: "title2",
    text: "text",
    icon: diamondsSvg,
  },
  {
    title: "title3",
    text: "text",
    icon: diamondsSvg,
  },
  {
    title: "title4",
    text: "text",
    icon: diamondsSvg,
  },
  {
    title: "title5",
    text: "text",
    icon: diamondsSvg,
  },
  {
    title: "title6",
    text: "text",
    icon: diamondsSvg,
  },
];

interface BenefitsProps {
  data?: any[];
  title?: string;
  fourElement?: boolean;
}

const Benefits: React.FC<BenefitsProps> = ({
  data = dataMocha,
  title = "Почему стоит инвестировать сейчас",
  fourElement = false,
}) => {
  const countElement = fourElement ? 4 : 3;
  const chunks = getChunks(data, countElement);
  return (
    <div className={styles.Benefits}>
      <h2 className={styles.main_title}>{title}</h2>
      {chunks.map((chunk, u) => {
        console.log(chunk);
        return (
          <Row className={styles.mt_big} key={u}>
            {chunk.map(({ title, text, icon }, i) => {
              return (
                <Col
                  lg={fourElement ? 3 : 4}
                  key={title}
                  className={cn({
                    [styles.content]: (i + 1) % countElement !== 0,
                  })}
                >
                  <div className={styles.icon}>
                    <img src={icon} alt={icon} />
                  </div>
                  <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
};

export default Benefits;
