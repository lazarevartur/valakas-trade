import React from "react";
import styles from "./BinarProfitTeamMain.module.scss";
import { Button, Col, Image, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import cn from "classnames";
import { RoutePath } from "../../../routes/routesConfig";

interface BinarProfitTeamMainProps {}

const BinarProfitTeamMain: React.FC<BinarProfitTeamMainProps> = () => {
  return (
    <div>
      <Row className={cn(styles.BinarProfitTeamMain)}>
        <Col>
          <div className={styles.flex_container}>
            <h5 className={styles.title}>Binar Profit Team</h5>
            <p>
              Программа Binar Profit Team — разработанная платформой Mirax
              маркетинговая стратегия продвижения компании Catalyst. В данной
              программе используется модель реферальных систем, основой которой
              является бинарный маркетинг-план.
            </p>
            <LinkContainer to={RoutePath.registration}>
              <Button>Стать партнером</Button>
            </LinkContainer>
          </div>
        </Col>
        <Col className={styles.img_container}>
          <Image
            className={styles.img}
            src={
              "https://s3-alpha-sig.figma.com/img/b5c8/5774/8d3be940407bee939eedbcb5d8a6dd44?Expires=1623024000&Signature=Ot-8P17SDiv0vCAurM6Z5VCZaVa9IHM37pRPXntANOIzx9b~d2bpiXYrZQD2ztaeR5ADrcAFGKe9NN3SkON1xrJnisIiCTex8GgmWPH2ya7l-LcN65MFUJ7HItFtallHlSn1FKSx5Ps-0vEv0AXaPVuyrQ106Hihq8v8IM4FUn1cL2pvkzjMafV3SC-yJkVf6viBhOltYykdiQOPsirSeF69rRNbZ4kRugrskn3Ro2UW7RlVrCPtIe5kIgErAsdopWSiXCbeCBECRZBrIkrplLFK1Vvg218C8rzNany3iSvusiC0nsKPklnguc9ynqFw~7e9VzDINGacCk5gTFvq1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
          />
        </Col>
      </Row>
    </div>
  );
};

BinarProfitTeamMain.defaultProps = {};

export default BinarProfitTeamMain;
