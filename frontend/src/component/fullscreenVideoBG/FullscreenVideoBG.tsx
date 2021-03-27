import React, { ReactNode } from "react";
import styles from "./FullscreenVideoBG.module.scss";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

interface FullscreenVideoBgProps {
  children?: ReactNode;
}

const FullscreenVideoBg: React.FC<FullscreenVideoBgProps> = ({ children }) => {
  return (
    <Row className={styles.FullscreenVideoBG}>
      <Col lg={12} style={{ height: "700px" }}>
        <video autoPlay muted loop id="myVideo" className={styles.video_bg}>
          <source
            src="https://www.playtika.com/img/hero-banner_c.mp4"
            type="video/mp4"
          />
        </video>
        <div>{children}</div>
      </Col>
    </Row>
  );
};

export default FullscreenVideoBg;
