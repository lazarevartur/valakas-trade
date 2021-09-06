import React from "react";
import styles from "./PrivacyPolicy.module.scss";
import { OfferLayout } from "../../layouts/OfferLayout";
import { useTranslation } from "react-i18next";

interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  const { t } = useTranslation();
  return (
    <OfferLayout title={t("PrivacyPolicy.title")}>
      <p>{t("PrivacyPolicy.text1")}</p>
      <p>{t("PrivacyPolicy.text2")}</p>
      <strong>1. {t("PrivacyPolicy.strong1")}</strong>
      <div>1.1 {t("PrivacyPolicy.text11")}</div>
      <div>1.2. {t("PrivacyPolicy.text12")}</div>
      <div>1.3. {t("PrivacyPolicy.text13")}</div>
      <div>1.4. {t("PrivacyPolicy.text14")}</div>

      <strong>2. {t("PrivacyPolicy.strong2")} </strong>
      <div>2.1. {t("PrivacyPolicy.text21")}</div>
      <div>2.1.1. {t("PrivacyPolicy.text211")}</div>
      <div>2.1.2. {t("PrivacyPolicy.text22")}</div>
      <div>2.1.3. {t("PrivacyPolicy.text23")}</div>
      <div>2.1.4. {t("PrivacyPolicy.text24")}</div>
      <div>2.1.5. {t("PrivacyPolicy.text25")}</div>
      <strong>3. {t("PrivacyPolicy.strong3")}</strong>
      <div>3.1. {t("PrivacyPolicy.text31")}</div>
      <div>3.1.1. {t("PrivacyPolicy.text32")}</div>
      <div>3.1.2. {t("PrivacyPolicy.text33")}</div>
      <div>3.1.3. {t("PrivacyPolicy.text34")}</div>
      <div>3.1.4. {t("PrivacyPolicy.text35")}</div>
      <div>3.1.5. {t("PrivacyPolicy.text36")}</div>
      <div>3.1.6. {t("PrivacyPolicy.text37")}</div>
      <div>3.1.7. {t("PrivacyPolicy.text38")}</div>
      <div>3.1.8. {t("PrivacyPolicy.text39")}</div>
      <div>3.1.9. {t("PrivacyPolicy.text310")}</div>
      <div>3.1.10. {t("PrivacyPolicy.text311")}</div>
      <div>3.1.11. {t("PrivacyPolicy.text312")}</div>
      <div>3.1.12. {t("PrivacyPolicy.text313")}</div>
      <strong>4. {t("PrivacyPolicy.strong4")}</strong>
      <div>4.1. {t("PrivacyPolicy.text41")}</div>
      <div>4.2. {t("PrivacyPolicy.text42")}</div>
      <div>4.3. {t("PrivacyPolicy.text43")}</div>
      <strong>5. {t("PrivacyPolicy.strong5")}</strong>
      <div>5.1. {t("PrivacyPolicy.text51")}</div>
      <div>5.1.1. {t("PrivacyPolicy.text52")}</div>
      <div>5.1.2. {t("PrivacyPolicy.text53")}</div>
      <div>5.2. {t("PrivacyPolicy.text54")}</div>
      <div>5.2.1. {t("PrivacyPolicy.text55")}</div>
      <div>5.2.2. {t("PrivacyPolicy.text56")}</div>
      <strong>6. {t("PrivacyPolicy.strong6")}</strong>
      <div>6.1. {t("PrivacyPolicy.text61")}</div>
      <div>6.2. {t("PrivacyPolicy.text62")}</div>
      <div>6.3. {t("PrivacyPolicy.text63")}</div>
      <div>6.4. {t("PrivacyPolicy.text64")}</div>
      <div>6.4.1. {t("PrivacyPolicy.text65")}</div>
      <div>6.4.2. {t("PrivacyPolicy.text66")}</div>
      <div>6.4.3. {t("PrivacyPolicy.text67")}</div>
      <div>6.4.4. {t("PrivacyPolicy.text68")}</div>
      <div>6.5. {t("PrivacyPolicy.text69")}</div>
      <div>6.5.1. {t("PrivacyPolicy.text610")}</div>
      <div>6.5.2. {t("PrivacyPolicy.text611")}</div>
      <div>6.5.3. {t("PrivacyPolicy.text612")}</div>
      <div>6.6. {t("PrivacyPolicy.text613")}</div>
      <strong>7. {t("PrivacyPolicy.strong7")}</strong>
      <div>7.1. {t("PrivacyPolicy.text71")}</div>
      <div>7.2. {t("PrivacyPolicy.text72")}</div>
      <div>7.3. {t("PrivacyPolicy.text73")}</div>
      <div>7.3.1. {t("PrivacyPolicy.text74")}</div>
      <div>7.4. {t("PrivacyPolicy.text75")}</div>
      <div>7.4.1. {t("PrivacyPolicy.text76")}</div>
      <div>7.4.2. {t("PrivacyPolicy.text77")}</div>
      <div>7.4.3. {t("PrivacyPolicy.text78")}</div>
      <div>7.4.4. {t("PrivacyPolicy.text79")}</div>
      <div>7.5. {t("PrivacyPolicy.text710")}</div>
      <div>7.5.1. {t("PrivacyPolicy.text711")}</div>
      <strong>8. {t("PrivacyPolicy.strong8")}</strong>
      <div>8.1. {t("PrivacyPolicy.text81")}</div>
      <div>8.2. {t("PrivacyPolicy.text82")}</div>
      <div>8.3.{t("PrivacyPolicy.text83")}</div>
      <strong>9. {t("PrivacyPolicy.strong9")}</strong>
      <div>{t("PrivacyPolicy.text91")}</div>
      <div className={styles.version}>{t("PrivacyPolicy.version")}</div>
    </OfferLayout>
  );
};

PrivacyPolicy.defaultProps = {};

// @ts-ignore
export default PrivacyPolicy;
