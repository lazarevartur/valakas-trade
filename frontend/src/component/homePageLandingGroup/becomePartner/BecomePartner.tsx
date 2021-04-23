import React from "react";
import styles from "./BecomePartner.module.scss";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import HomeBg from "../../../svg/HomeBg";
import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

interface BecomePartnerProps extends defaultComponentProps {}

const BecomePartner: React.FC<BecomePartnerProps> = ({ className = "" }) => {
  return (
    <div className={cn(styles.bg, { [className]: className })}>
      <Container>
        <Row>
          <Col lg={7}>
            <Container>
              <div className={cn(styles.title)}>
                Присоединяйтесь к мировому инвестиционному сообществу
                независимых предпринимателей
              </div>
              <Button className={cn(styles.button)}>СТАТЬ ПАРТНЕРОМ</Button>
            </Container>
          </Col>
          <Col lg={5}>
            <Image
              height={300}
              src={
                "https://s3-alpha-sig.figma.com/img/fe67/007f/0823074800cca0ecaf37945a84042597?Expires=1620000000&Signature=Su~s8d0UAbyN954w9EaqwY8JUpaEs5leH3rdwtNCffLCordKOk1~hYYVn6lCbsWRZgcoVFoQgjDDmbnglq0M4S24qMmSXMBaguHlmrlBXAxx8FJZb16I6awx7NwMj5Ngt6xL8cMEL0j7aBUqipu4sCGR3tQ8hCKZfMkh~By7mcx2P1DmZpMY6gOKm3NGi704lMmkVhKd2OHkZ1bChUzbCfo0SsGc4bnAVX3EAb8HRjt~kNfF-gULirmIWcKxNjVyeZxkXgHFQ~8BmxqNweOO5PUeCWK21vRVNS7~IgmAhjTXFr9bwpMIIARiLCRQfmawt0PZzxEGyhh2z~jpnwyXRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BecomePartner;
