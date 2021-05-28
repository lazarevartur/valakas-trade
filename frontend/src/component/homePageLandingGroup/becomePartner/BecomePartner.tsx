import React from "react";
import styles from "./BecomePartner.module.scss";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";

interface BecomePartnerProps extends defaultComponentProps {}

const BecomePartner: React.FC<BecomePartnerProps> = ({ className = "" }) => {
  return (
    <div className={cn(styles.bg, { [className]: className })}>
      <Container>
        <Row>
          <Col lg={7}>
            <Container>
              <div className={cn(styles.title)}>
                Станьте партнером Mirax и сделайте ваш бизнес высокодоходным с
                первого дня
              </div>
              <LinkContainer to={RoutePath.registration}>
                <Button className={cn(styles.button)}>СТАТЬ ПАРТНЕРОМ</Button>
              </LinkContainer>
            </Container>
          </Col>
          <Col lg={5}>
            <Image
              height={300}
              src={
                "https://s3-alpha-sig.figma.com/img/fe67/007f/0823074800cca0ecaf37945a84042597?Expires=1623024000&Signature=YBca3xaItoo3KbqnrdA7-GyvlYN1shzJKzQCLAXFYMA2ze0RcrRkfW461econPPwp1t29dLwlde3qbTuyhUfs3nOxYMb-NGNQ~lgutHr56~dm-G86-TkCXyymGzNedDlxN138moFsw72Zo8OKuzqrUoFIlTa7W1H2BLe~qbOG-XNLv4KTayHXbawjhPpAIyaiUxt8GyXHdM-mnY8wDio~Azq2q6-JZ6mANP5oAyUarD82D3zCYdyogo5Ce2~vL50gEQGnQ70-pSeqTx4ZXi9Imy-wATGoyu9zlfU01wuRCXONCzS1-CKG-ShVXWiXIu7vE~6l5vvUKhLfvtJAgIUPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BecomePartner;
