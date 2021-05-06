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
              "https://s3-alpha-sig.figma.com/img/b5c8/5774/8d3be940407bee939eedbcb5d8a6dd44?Expires=1621209600&Signature=b8yEa1R7kxOb3DuKXEydqkXq8iIwqFNcmQOqhUAXNRWqbsyoERWJFaaVGAX9kQBCO64IodIFKpk5jjpYS~I-mzqfwBjOtfsfjKWvdockbI4FArF9Yhsy~VP~dLa6gRReUbddgc6E4E126dVdsy0iv7rrpUszm5SgKQBz0sk3LgMKQM2T-abqpOh2WTkBOnxr8XAKk1y5nZVP5ny~l9JYxldheH8u1Pu8CI3QBUNkaNAGNraGc2lRyCeBLouKb3lQ6YEAdXo-nK7bg-z0o5vmsOnzNjOXzDb75lxeJNhZ8GXPHhH1k0fDToF2XjMogaEXWxlvh5zSJg7~Hf0iIC1bpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
          />
        </Col>
      </Row>
    </div>
  );
};

BinarProfitTeamMain.defaultProps = {};

export default BinarProfitTeamMain;
