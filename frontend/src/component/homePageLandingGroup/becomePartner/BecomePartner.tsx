import React from "react";
import styles from "./BecomePartner.module.scss";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import images from "../../../assets/img/CommunityImg.jpg";

interface BecomePartnerProps extends defaultComponentProps {
  img?: string;
  title?: string;
  regButton?: boolean;
}

const BecomePartner: React.FC<BecomePartnerProps> = ({
  className = "",
  img = images,
  title = "Станьте партнером Mirax",
  regButton = true,
}) => {
  return (
    <div className={cn(styles.BecomePartner, { [className]: className })}>
      <Container>
        <Row className={"flex align-items-center"}>
          <Col lg={7}>
            <Container className={styles.container}>
              <div className={cn(styles.title)}>{title}</div>
              {regButton ? (
                <LinkContainer to={RoutePath.registration}>
                  <Button className={cn(styles.button)}>СТАТЬ ПАРТНЕРОМ</Button>
                </LinkContainer>
              ) : null}
            </Container>
          </Col>
          <Col lg={5}>
            <Image className={styles.img} src={img} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BecomePartner;
