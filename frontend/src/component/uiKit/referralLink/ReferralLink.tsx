import React from "react";
import styles from "./referralLink.module.scss";
import { useTranslation } from "react-i18next";

interface ReferralLinkProps {
  link?: string;
  isBuyProgram?: boolean;
}

const ReferralLink: React.FC<ReferralLinkProps> = ({
  link = "https://personal/?signup=UA918470928",
  isBuyProgram = false,
}) => {
  const { t } = useTranslation();
  const originUrl = window.location.origin;
  return (
    <div className={styles.referral_link}>
      <span>{t("ReferralLink.referral_link")}</span>
      {isBuyProgram ? (
        <>
          <span className={styles.link}>
            {`${originUrl}/r/${link}`} <i className="far fa-copy" />
          </span>
        </>
      ) : (
        <>
          <span className={styles.link}>{t("ReferralLink.link")}</span>
        </>
      )}
    </div>
  );
};

ReferralLink.defaultProps = {};

export default ReferralLink;
