import React from "react";
import styles from "./AboutUsComponent.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Col, Image, Row } from "react-bootstrap";
interface AboutUsComponentProps extends defaultComponentProps {}

const AboutUsComponent: React.FC<AboutUsComponentProps> = ({
  className = "",
}) => {
  return (
    <Row className={styles.bg}>
      <Col lg={6} className={styles.content}>
        <p>Компания с опытом и своими наработками это отличное решение.</p>
        <p>
          <span className={styles.accent}>Mirax</span> выводит своих партнеров
          на подходящий уровень.
        </p>
        <p>
          Рынок заполнен компаниями, каждая из них развивается в одном
          направлении, это может быть криптомайнинг, торговля криптовалютой,
          выдача кредитов и тд. Наша компания объединяет все эти направления.
        </p>

        <span className={styles.accent2}>
          Кто сказал Как приумножить свой капитал? нельзя быть лучшими во всех
          сферах?
        </span>
      </Col>
      <Col lg={6}>
        <Image
          className={styles.bg_img}
          src={
            "https://s3-alpha-sig.figma.com/img/ed03/56cc/1f21eea4f24543e574c71ad07991b283?Expires=1620000000&Signature=BshjhUtNECzQYSJQvrKpIComxRJjCWz-TQJC3njU5Kd99wZZQ73kQcSXlv5vx0QOrc5ySe~jEBlhTHF5SB50kGUMRgk5W8YtH9Zi8t3DeXquZMvoveI1SWXkEAo-ba3zIoU-iCaOMSRXQfCR4hgQcEMizkTpOY2Ml6c-4mBToBm-HJXZ~SEOkxfc~J~sQkWT5wMOS2nYKUmf~h9J47pYKAYjkAaVdBtUnXbDooQ2eGFEV98tXWp6JIsuHd0QbubFscY6bHE7bHcOGHlJC6cVkSulnXuZdSY85WK2-JLi8ENUekft8L8QQuCia6XPlpBdxzUsYUUofNQvUsk86PpTDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
        />
      </Col>
    </Row>
  );
};

AboutUsComponent.defaultProps = {};

export default AboutUsComponent;
