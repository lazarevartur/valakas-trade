import React from "react";
import styles from "./CompanyInterest.module.scss";
import { Col, Container, Image, Row } from "react-bootstrap";

interface CompanyInterestProps {}

const CompanyInterest: React.FC<CompanyInterestProps> = () => {
  return (
    <div className={styles.CompanyInterest}>
      <Container>
        <Row className={styles.container}>
          <Col lg={6} className={styles.reset_padding}>
            <Image
              width={500}
              height={450}
              src={
                "https://s3-alpha-sig.figma.com/img/dd61/0ec5/1660da2e992f675d87aa55b9227838c7?Expires=1620604800&Signature=LCw7is9J-Zt4jcnYcBefdQjUMyItZYoUPd9X83xnfig4YYHOO2UJegm7K2mtTdqqjGQvGDMpiwuH5L2rSbhKs~snp5YQfsl8c-HBzaDCVfxMC0jN-MAPAdkss~ZiRqNsobWWrE7SiDn3BBX-MFUU~ytnr7WoviZ~6LPb8yrnUpnEMSb8JFqY0bAl2B0e8RbgLEmHFW8iETmd9BXgZMOiP01gPVezI~j~CBuh~EV8oo50TCNno81oqHw2QOr9Go2S~OTwfU-OQheqzRcbV7QrOXI9Mx2SRdE6S0CvZvY8leC490i450e72Z-3YazNrz-OOEFLoZk3axH6XFW42TE00g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </Col>
          <Col lg={5}>
            <h3>Интерес компании</h3>
            <p>
              Mirax использует деньги инвесторов для участия в партнерских
              программах, выступая посредником и получая процент от прибыли
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CompanyInterest.defaultProps = {};

export default CompanyInterest;
