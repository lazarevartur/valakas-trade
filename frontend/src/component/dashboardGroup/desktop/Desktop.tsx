import React from "react";
import styles from "./desktop.module.scss";
import { Col, Container, Image, Row, CardDeck } from "react-bootstrap";
import cn from "classnames";
import { DashboardTitleBlock } from "../../../layouts/dashboardTitleBlock";
import { Wallet } from "../../wallet";
import { ProfitabilityTable } from "../../profitabilityTable";
import { ReferralLink } from "../../uiKit/referralLink";
import { Link, useLocation } from "react-router-dom";
import { DashboardRoute } from "../../../routes/dashboard";
import { getCurrentUser } from "../../../store/action/dashboardAction";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { rootState } from "../../../types/types";
import { Loader } from "../../uiKit/loader";
import { RoutePath } from "../../../routes/routesConfig";
import userIcon from "../../../assets/svg/icon/userIcon.jpg";
import { useTranslation } from "react-i18next";

interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = () => {
  const { t } = useTranslation();
  const { userDashboard, isLoading } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );
  const dispatch = useDispatchTyped();
  const tableData = {
    linear_premium: userDashboard.linear_premium,
    investment_package: userDashboard.investment_package,
    dividends: userDashboard.dividends,
    mentor_prime: userDashboard.mentor_prime,
  };
  const location = useLocation();
  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  React.useEffect(() => {
    if (location.state) {
      dispatch(getCurrentUser());
    }
  }, [location]);
  const srcAvatar = userDashboard.contact_details?.avatarImg || userIcon;
  return (
    <Container className={cn(styles.Desktop)}>
      {isLoading ? (
        <div className={styles.fakeBg}>
          <Loader />
        </div>
      ) : (
        <>
          <DashboardTitleBlock title={t("Desktop.title.profile")} />
          <Row className={styles.row_info_block}>
            <Col lg={3} className={styles.img_block}>
              <Image src={srcAvatar} className={styles.img} />
            </Col>
            <Col lg={9}>
              <div className={styles.info_block}>
                <span className={styles.name}>{userDashboard.name}</span>
                <span className={styles.email}>{userDashboard.email}</span>
                {/*<div className={styles.verify_block}>*/}
                {/*  <span className={styles.no_verify}>Не верифицирован</span>*/}
                {/*  <Link*/}
                {/*    to={`${DashboardRoute.profile}?verif=1`}*/}
                {/*    className={styles.go_verify}*/}
                {/*  >*/}
                {/*    Пройти верификацию*/}
                {/*  </Link>*/}
                {/*</div>*/}
              </div>
            </Col>
          </Row>
          <DashboardTitleBlock title={t("Desktop.title.desktop")} />
          <div className={styles.desktop_info}>
            <Row>
              <Col lg={6} className={styles.text}>
                {t("Desktop.totalInvestment")}
              </Col>
              <Col lg={6} className={styles.count}>
                $ {userDashboard.totalInvestment}
              </Col>
            </Row>
            <Row>
              <Col lg={6} className={styles.text}>
                {t("Desktop.wallets")}
              </Col>
              <Col lg={6} className={styles.count}>
                3
              </Col>
            </Row>
            <Row>
              <Col lg={6} className={styles.text}>
                {t("Desktop.referralIncomeOfPartners")}
              </Col>
              <Col lg={6} className={styles.count}>
                $ {userDashboard.referralIncomeOfPartners?.toFixed(2)}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <ReferralLink
                  link={userDashboard.id}
                  isBuyProgram={userDashboard.isBuyProgram}
                />
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock title={t("Desktop.title.wallets")} />
          <div className={styles.wallets}>
            <CardDeck>
              <Wallet
                title={t("Desktop.WalletTitle.depositAccount")}
                count={userDashboard.depositAccount?.toFixed(1)}
                to={RoutePath.replenishmentWallet}
                name={t("Desktop.WalletName.top_up_balance")}
              />
              <Wallet
                title={t("Desktop.WalletTitle.bonus_account")}
                count={userDashboard.wallets?.bonus_account?.toFixed(1)}
                name={t("Desktop.WalletName.transfer")}
                to={RoutePath.transferWallet}
              />
              <Wallet
                title={t("Desktop.WalletTitle.operating_account")}
                count={userDashboard.wallets?.operating_account?.toFixed(1)}
                name={t("Desktop.WalletName.transfer")}
                to={RoutePath.transferWalletWithOperating}
              />
            </CardDeck>
            <CardDeck className={cn(styles.withdrawWallet, "pt-4")}>
              <Wallet
                title={t("Desktop.WalletTitle.withdrawWallet")}
                name={t("Desktop.WalletName.withdraw")}
                count={userDashboard.depositAccount?.toFixed(1)}
                to={RoutePath.withdrawWallet}
              />
            </CardDeck>
          </div>
          <DashboardTitleBlock title={t("Desktop.title.wallets")} />
          <div>
            <ProfitabilityTable
              totalEarned={userDashboard.totalEarned}
              data={tableData}
            />
          </div>
        </>
      )}
    </Container>
  );
};

Desktop.defaultProps = {};

export default Desktop;
