import React from "react";
import styles from "./OfferLayout.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

interface OfferLayoutProps {
  title: string;
}

const OfferLayout: React.FC<OfferLayoutProps> = ({ children, title }) => {
  const { pathname } = useLocation<Location>();
  const $startOffer = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if ($startOffer.current) {
      $startOffer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [pathname]);
  return (
    <div className={styles.OfferLayout}>
      <Container className={styles.container}>
        <Row ref={$startOffer}>
          <Col lg={12}>
            <h2 className={styles.title}>{title}</h2>
          </Col>
        </Row>
        {children}
      </Container>
    </div>
  );
};

OfferLayout.defaultProps = {};

export default OfferLayout;
