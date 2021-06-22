import React from "react";
import styles from "./videoBlock.module.scss";
import { Col, Row } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";
import cn from "classnames";

interface VideoBlockProps {
  className?: string;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ className = "" }) => {
  return (
    <Row className={cn(styles.bg, { [className]: className })}>
      <HomeBg className={styles.bg_svg} />
      <Col lg={{ offset: 3, span: 6 }} className={styles.video_block}>
        <h1 className={styles.title}>
          <strong>Успейте стать партнером</strong>
        </h1>
        <p className={styles.text}>
          C Mirax стратегии доверительного управления активами нацелены на
          результат
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
