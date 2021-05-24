import React from "react";
import styles from "./desktop.module.scss";
import { Col, Container, Image, Row, CardDeck } from "react-bootstrap";
import cn from "classnames";
import { DashboardTitleBlock } from "../../../layouts/dashboardTitleBlock";
import { Wallet } from "../../wallet";
import { ProfitabilityTable } from "../../profitabilityTable";

const src =
  "https://s3-alpha-sig.figma.com/img/aaf6/d86c/eb742c3d298838770f5e6737a24405ba?Expires=1622419200&Signature=cKVV-aTf889f38BR~X14cCwh24gT1MyOilVVXNs30FWp9fhsB0P3f0hZ1gXgyl8~3bB~UMFeKrvUQmaMy25F4w6iIK28NuSjU3199-OCOQ~jLDVRxwFT7bl3ZRDmk3II-LrEevm6QHkTdd7SgqX5pkTCibFKafuAgBNdW51oKXJ1GPNowflvPPTjzIJCNhZ8mAJTqzUPIzDmfYwy-KWtDcVYa9GUr9vtZV-z3euDX-le8iWITfs2iPL40d6W9BaWidVMSfZVuHFv3CCrwhX5ccnIjNRdh75SFSwxAp~LrR~DdOo8iV5SHwafcr7Ag29PxrepOyULiyIGf56jaxbu5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = () => {
  return (
    <Container className={cn(styles.Desktop)}>
      <DashboardTitleBlock title={"Ваш профиль"} />
      <Row className={styles.row_info_block}>
        <Col lg={3} className={styles.img_block}>
          <Image src={src} className={styles.img} />
        </Col>
        <Col lg={9}>
          <div className={styles.info_block}>
            <span className={styles.name}>Andrew Newton</span>
            <span className={styles.email}>Keenan50@gmail.com</span>
            <span className={styles.id}>ID: UA3789209134</span>
            <div className={styles.verify_block}>
              <span className={styles.no_verify}>Не верифицирован</span>
              <a href={"#"} className={styles.go_verify}>
                Пройти верификацию
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <DashboardTitleBlock title={"Рабочий стол"} />
      <div className={styles.desktop_info}>
        <Row>
          <Col lg={6} className={styles.text}>
            Общая сумма инвестиций
          </Col>
          <Col lg={6} className={styles.count}>
            $ 19773
          </Col>
        </Row>
        <Row>
          <Col lg={6} className={styles.text}>
            Операционных кошельков
          </Col>
          <Col lg={6} className={styles.count}>
            43
          </Col>
        </Row>
        <Row>
          <Col lg={6} className={styles.text}>
            По каждой программе
          </Col>
          <Col lg={6} className={styles.count}>
            4151435
          </Col>
        </Row>
        <Row>
          <Col lg={6} className={styles.text}>
            Реферальные с дохода партёров
          </Col>
          <Col lg={6} className={styles.count}>
            345
          </Col>
        </Row>
        <Row>
          <Col lg={7} className={styles.referral_link}>
            <span>Ваша реферальная ссылка:</span>
            <span className={styles.link}>
              https://antares.trade/personal/?signup=UA918470928{" "}
              <i className="far fa-copy" />
            </span>
          </Col>
        </Row>
      </div>
      <DashboardTitleBlock title={"Мои счета"} />
      <div className={styles.wallets}>
        <CardDeck>
          <Wallet title={"Стартовый счет"} count={19778} />
          <Wallet title={"Бонусный счет"} count={2748} />
          <Wallet title={"Операционный счет"} count={293} />
        </CardDeck>
      </div>
      <DashboardTitleBlock title={"Таблица вашей доходности"} />
      <div>
        <ProfitabilityTable />
      </div>
    </Container>
  );
};

Desktop.defaultProps = {};

export default Desktop;
