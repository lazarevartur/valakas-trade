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
const src = "http://placehold.it/150x150";
interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = () => {
  const { userDashboard, isLoading } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );
  console.log(userDashboard);
  const dispatch = useDispatchTyped();
  const tableData = {
    linear_premium: userDashboard.linear_premium,
    totalEarned: userDashboard.totalEarned,
  };

  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  return (
    <Container className={cn(styles.Desktop)}>
      {isLoading ? (
        <div className={styles.fakeBg}>
          <Loader />
        </div>
      ) : (
        <>
          <DashboardTitleBlock title={"Ваш профиль"} />
          <Row className={styles.row_info_block}>
            <Col lg={3} className={styles.img_block}>
              <Image src={src} className={styles.img} />
            </Col>
            <Col lg={9}>
              <div className={styles.info_block}>
                <span className={styles.name}>{userDashboard.name}</span>
                <span className={styles.email}>{userDashboard.email}</span>
                <span className={styles.id}>ID: {userDashboard.id}</span>
                <div className={styles.verify_block}>
                  <span className={styles.no_verify}>Не верифицирован</span>
                  <Link
                    to={`${DashboardRoute.profile}?verif=1`}
                    className={styles.go_verify}
                  >
                    Пройти верификацию
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <DashboardTitleBlock title={"Рабочий стол"} />
          <div className={styles.desktop_info}>
            <Row>
              <Col lg={6} className={styles.text}>
                Общая сумма инвестиций
              </Col>
              <Col lg={6} className={styles.count}>
                $ {userDashboard.totalInvestment}
              </Col>
            </Row>
            {/*<Row>*/}
            {/*  <Col lg={6} className={styles.text}>*/}
            {/*    Операционных кошельков*/}
            {/*  </Col>*/}
            {/*  <Col lg={6} className={styles.count}>*/}
            {/*    43*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            {/*<Row>*/}
            {/*  <Col lg={6} className={styles.text}>*/}
            {/*    По каждой программе*/}
            {/*  </Col>*/}
            {/*  <Col lg={6} className={styles.count}>*/}
            {/*    4151435*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            <Row>
              <Col lg={6} className={styles.text}>
                Реферальные с дохода партёров
              </Col>
              <Col lg={6} className={styles.count}>
                $ {userDashboard.referralIncomeOfPartners}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <ReferralLink link={userDashboard.id} />
              </Col>
            </Row>
          </div>
          <DashboardTitleBlock title={"Мои счета"} />
          <div className={styles.wallets}>
            <CardDeck>
              <Wallet
                title={"Стартовый счет"}
                count={userDashboard.depositAccount?.toFixed()}
              />
              <Wallet
                title={"Бонусный счет"}
                count={userDashboard.wallets?.bonus_account?.toFixed()}
              />
              <Wallet
                title={"Операционный счет"}
                count={userDashboard.wallets?.operating_account?.toFixed()}
              />
            </CardDeck>
          </div>
          <DashboardTitleBlock title={"Таблица вашей доходности"} />
          <div>
            <ProfitabilityTable
              totalEarned={userDashboard.totalEarned?.toFixed()}
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
