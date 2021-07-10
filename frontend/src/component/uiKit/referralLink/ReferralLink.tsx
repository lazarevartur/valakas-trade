import React from "react";
import styles from "./referralLink.module.scss";

interface ReferralLinkProps {
  link?: string;
  count?: number;
}

const ReferralLink: React.FC<ReferralLinkProps> = ({
  link = "https://antares.trade/personal/?signup=UA918470928",
  count = 0,
}) => {
  const originUrl = window.location.origin;
  return (
    <div className={styles.referral_link}>
      <span>Ваша реферальная ссылка:</span>
      {count ? (
        <>
          <span className={styles.link}>
            {`${originUrl}/r/${link}`} <i className="far fa-copy" />
          </span>
        </>
      ) : (
        <>
          <span className={styles.link}>
            Реферальная ссылка появиться только после покупки одно из наших
            продуктов
          </span>
        </>
      )}
    </div>
  );
};

ReferralLink.defaultProps = {};

export default ReferralLink;
