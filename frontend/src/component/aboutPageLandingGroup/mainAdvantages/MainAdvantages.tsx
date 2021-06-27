import React from "react";
import styles from "./mainAdvantages.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Row, Col, Container } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";

interface MainAdvantagesProps extends defaultComponentProps {}

const MainAdvantages: React.FC<MainAdvantagesProps> = () => {
  return (
    <div className={styles.MainAdvantages}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col>
            <h2 className={styles.title}>Быстрый старт – лучший результат</h2>
            <p className={styles.sub_title}>
              Начните работу прямо сейчас, чтобы ваши средства начали работать
              на вас
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>01</span>
              <p>
                <strong>Зарегистрируйтесь бесплатно.</strong> Регистрация
                занимает не более трех минут. Вы сможете управлять и
                контролировать свои средства прямо в личном аккаунте.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 6, span: 6 }}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>02</span>
              <p>
                <strong>Выберите программу.</strong> Пополните ваш баланс и
                выберите программу с наиболее подходящими условиями.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>03</span>
              <p>
                <strong>Зарабатывайте.</strong> Начните зарабатывать с первого
                дня! Вы можете выводить средства по завершению периода программы
                или участвовать в новой программе, чтобы зарабатывать больше!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

MainAdvantages.defaultProps = {};

export default MainAdvantages;
