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
                Присоединяйтесь к мировому инвестиционному сообществу
                независимых предпринимателей
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
                "https://s3-alpha-sig.figma.com/img/fe67/007f/0823074800cca0ecaf37945a84042597?Expires=1621209600&Signature=StmfLY1dpIvxeQV11IhdaE8QFqsa~ala4mBCR5AY9k4dJBzJmob~i9ylL6cGDoROYjx-jj65myqy-Fzewv0Gu4KEEbEoR~DxMAwSKa8e72-LhIsnCpjmk9VzxwPwugC0LN6tBxjmqQ9gIeAxGp7ouO-fdxGpsu3BZcXbsZVZMdQA6v2A2n~-TXc9K5ceZfwUQelMFTu4EBWKzIgmxkna4pMsE0Z510rbsWVUZBwoIxBxXgaQSURtSnwS8CM0f49jPs9xpNiY-XUC8nsyQo7~6vmNiK6wtsq~36zwhEz-GpXaSkxQnVkwHRSPxcSuj4kNQtLeUl6JAgiqypYIaRvZEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BecomePartner;
