import React from "react";
import { OfferLayout } from "../../layouts/OfferLayout";
import styles from "../privacyPolicy/PrivacyPolicy.module.scss";
import { useTranslation } from "react-i18next";

interface TermsUseProps {}

const TermsUse: React.FC<TermsUseProps> = () => {
  const { t } = useTranslation();
  return (
    <OfferLayout title={t("TermsUse.title")}>
      <p>{t("TermsUse.text")}</p>
      <strong>1. {t("TermsUse.strong1")}</strong>
      <div>1.1 {t("TermsUse.text1")}</div>
      <div>1.2 {t("TermsUse.text2")}</div>
      <div>1.3 {t("TermsUse.text3")}</div>
      <div>1.4 {t("TermsUse.text4")}</div>
      <div>1.5 {t("TermsUse.text5")}</div>
      <div>1.6 {t("TermsUse.text6")}</div>
      <div>1.7 {t("TermsUse.text7")}</div>
      <strong>2. {t("TermsUse.strong2")}</strong>
      <div>2.1. {t("TermsUse.text21")}</div>
      <div>2.2. {t("TermsUse.text22")}</div>
      <div>2.3. {t("TermsUse.text23")}</div>
      <strong>3. {t("TermsUse.strong3")}</strong>
      <div>3.1 {t("TermsUse.text31")}</div>
      <div>3.2 {t("TermsUse.text32")}</div>
      <div>3.3 {t("TermsUse.text33")}</div>
      <div>3.4 {t("TermsUse.text34")}</div>
      <div>3.5 {t("TermsUse.text35")}</div>
      <div>3.6 {t("TermsUse.text36")}</div>
      <div>3.7 {t("TermsUse.text37")}</div>
      <div>3.8 {t("TermsUse.text38")}</div>
      <div>3.9 {t("TermsUse.text39")}</div>
      <div>3.10 {t("TermsUse.text310")}</div>
      <strong>4. {t("TermsUse.strong4")}</strong>
      <div>4.1 {t("TermsUse.text41")}</div>
      <div>4.2 {t("TermsUse.text42")}</div>
      <div>4.3 {t("TermsUse.text43")}</div>
      <div>4.3 {t("TermsUse.text3433")}</div>
      <div>4.4 {t("TermsUse.text44")}</div>
      <div>4.5 {t("TermsUse.text45")}</div>
      <div>4.6 {t("TermsUse.text46")}</div>
      <strong>5. {t("TermsUse.strong5")}</strong>
      <div>5.1 {t("TermsUse.text51")}</div>
      <strong>6. {t("TermsUse.strong6")}</strong>
      <div>6.1. {t("TermsUse.text61")}</div>
      <div>6.2. {t("TermsUse.text62")}</div>
      <div>6.3. {t("TermsUse.text63")}</div>
      <div>6.4. {t("TermsUse.text64")}</div>
      <strong>7. {t("TermsUse.strong7")} </strong>
      <div>7.1 {t("TermsUse.text71")}</div>
      <div>7.2 {t("TermsUse.text72")}</div>
      <div>7.3 {t("TermsUse.text73")}</div>
      <div>7.4 {t("TermsUse.text74")}</div>
      <strong>8. {t("TermsUse.strong8")}</strong>
      <div>8.1 {t("TermsUse.text81")}</div>
      <div>8.2 {t("TermsUse.text82")}</div>
      <div className={styles.version}>{t("TermsUse.version")}</div>
    </OfferLayout>
  );
};

TermsUse.defaultProps = {};

export default TermsUse;
