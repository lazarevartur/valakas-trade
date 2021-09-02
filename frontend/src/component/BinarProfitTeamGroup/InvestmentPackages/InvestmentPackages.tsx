import React from "react";
import cn from "classnames";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import styles from "./InvestmentPackages.module.scss";
import { defaultComponentProps, rootState } from "../../../types/types";
import { BinarCard } from "../../binarCard";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { getMrxPrograms } from "../../../store/action/programsAction";
import { Loader } from "../../uiKit/loader";
import { getChunks } from "../../../utils/utils";
import { RoutePath } from "../../../routes/routesConfig";
import { Balance } from "../../workWithWallets/Balance";
import useWalletData from "../../../hooks/useWalletData";
import { useTranslation } from "react-i18next";

interface InvestmentPackagesProps extends defaultComponentProps {}

const InvestmentPackages: React.FC<InvestmentPackagesProps> = () => {
  const { t } = useTranslation();
  const { mrxPrograms, isLoading, isAuth } = useWalletData();
  const { userDashboard } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );
  const enoughMoney = userDashboard.wallets?.start_account;

  return (
    <div className={cn(styles.InvestmentPackages)}>
      <Balance />
      <Container>
        <Row>
          <Col lg={12}>
            <h5 className={styles.title}>
              {t("MrxInvest.InvestmentPackages.title")}
            </h5>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <p className={styles.text}>
              {t("MrxInvest.InvestmentPackages.text")}
            </p>
          </Col>
        </Row>
        <Row className={cn(styles.description)}>
          <Col lg={4}>
            <p className={cn(styles.accent)}>
              {t("MrxInvest.InvestmentPackages.description1.text1")}{" "}
              <span>2%</span>
            </p>
            <p>{t("MrxInvest.InvestmentPackages.description1.text2")}</p>
          </Col>
          <Col lg={5}>
            <p className={cn(styles.accent)}>
              <span>
                180-270 {t("MrxInvest.InvestmentPackages.description2.text1")}
              </span>
            </p>
            <p>{t("MrxInvest.InvestmentPackages.description2.text2")}</p>
          </Col>
          <Col lg={3}>
            {" "}
            <p className={cn(styles.accent)}>
              <span>00:00</span>
            </p>
            <p>{t("MrxInvest.InvestmentPackages.description3.text1")}</p>
          </Col>
        </Row>
        <Row className={cn(styles.cardGroup)}>
          <Col lg={12}>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {getChunks(mrxPrograms).map((chunk, index) => {
                  return (
                    <div key={index}>
                      <CardDeck>
                        {chunk.map(({ _id, ...program }) => {
                          return (
                            <BinarCard
                              key={_id}
                              {...program}
                              linkTo={
                                !isAuth
                                  ? RoutePath.login
                                  : enoughMoney >= program.price
                                  ? `${RoutePath.buyPrograms}&program=mrx`
                                  : `${RoutePath.replenishmentWallet}&program=mrx`
                              }
                            />
                          );
                        })}
                      </CardDeck>
                      <br />
                    </div>
                  );
                })}
              </>
            )}
          </Col>
          <Row>
            <Col lg={7} className={cn(styles.desk)}>
              * {t("MrxInvest.InvestmentPackages.desk")}
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

InvestmentPackages.defaultProps = {};

export default InvestmentPackages;
