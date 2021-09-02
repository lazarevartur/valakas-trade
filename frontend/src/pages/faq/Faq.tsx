import React, { useContext } from "react";
import styles from "./faq.module.scss";
import {
  Accordion,
  AccordionContext,
  Button,
  Card,
  Container,
  useAccordionToggle,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface FaqProps {}

function ContextAwareToggle({ children, eventKey, callback, className }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div onClick={decoratedOnClick} className={className}>
      <h6>
        <span>{isCurrentEventKey ? "-" : "+"}</span>
        {children}
      </h6>
    </div>
  );
}

const Faq: React.FC<FaqProps> = () => {
  const { t } = useTranslation();
  const data = Array(12).fill("");
  return (
    <div className={styles.bgf9}>
      <Container className={styles.faq}>
        <h2>FAQ</h2>
        <Accordion>
          {data.map((_, index) => {
            let title = t(`faq.block${index + 1}.title`);
            let content = t(`faq.block${index + 1}.content`);
            return (
              <Card key={title} className={styles.card}>
                <Card.Header className={styles.card_Header}>
                  <ContextAwareToggle
                    // @ts-ignore
                    as={Button}
                    variant={Button}
                    eventKey={index + ""}
                    className={styles.title_accordion}
                  >
                    {title}
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index + ""}>
                  <Card.Body className={styles.card_body}>{content}</Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
};

Faq.defaultProps = {};

export default Faq;
