import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./referralLink.module.scss";

interface ReferralLinkProps {
  link?: string;
}

const ReferralLink: React.FC<ReferralLinkProps> = ({
  link = "https://antares.trade/personal/?signup=UA918470928",
}) => {
  const originUrl = window.location.origin;
  return (
    <div className={styles.referral_link}>
      <span>Ваша реферальная ссылка:</span>
      <span className={styles.link}>
        {`${originUrl}/r/${link}`} <i className="far fa-copy" />
      </span>
    </div>
  );
};

ReferralLink.defaultProps = {};

export default ReferralLink;
