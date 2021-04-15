import React from "react";
import styles from "./videoBlock.module.scss";
import { Col, Row } from "react-bootstrap";
import HomeBg from "../../../svg/HomeBg";

interface VideoBlockProps {
  className?: string;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ className }) => {
  return (
    <Row className={styles.bg}>
      <HomeBg className={styles.bg_svg} />
      <Col lg={{ offset: 3, span: 6 }} className={styles.video_block}>
        <h1 className={styles.title}>
          <strong>Quis veniam sed</strong>
        </h1>
        <p className={styles.text}>
          Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium
          temporibus voluptatibus pariatur. Numquam veritatis dolorem et.
          Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam quae
          eaque qui iste ut. Atque officia laborum recusandae.
        </p>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube-nocookie.com/embed/QrFz3wEzqrQ?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Col>
    </Row>
  );
};

VideoBlock.defaultProps = {};

export default VideoBlock;
