import React from "react";
import styles from "./videoBlock.module.scss";
import { Col, Row } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";
import cn from "classnames";
import { useTranslation } from "react-i18next";

interface VideoBlockProps {
  className?: string;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  return (
    <Row className={cn(styles.bg, { [className]: className })}>
      <HomeBg className={styles.bg_svg} />
      <Col lg={{ offset: 3, span: 6 }} className={styles.video_block}>
        <h1 className={styles.title}>
          <strong>{t("HomePage.videoBlock.title")}</strong>
        </h1>
        <p className={styles.text}>{t("HomePage.videoBlock.text")}</p>
        <iframe
          className={styles.iframe}
          src="https://www.youtube-nocookie.com/embed/oWNB4Hu68Yo?controls=0"
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
