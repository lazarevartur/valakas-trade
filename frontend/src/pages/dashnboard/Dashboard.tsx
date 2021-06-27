import React from "react";
import { Switch, useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Dashboard.module.scss";
import { ProtectedRoute } from "../../routes/ProtectedRoute";
import { DashboardRoute, dashboardRouteConfig } from "../../routes/dashboard";
import { RoutePath } from "../../routes/routesConfig";
import cn from "classnames";
import { SideBar } from "../../component/mainBlocks/sideBar";
import { useDispatchTyped } from "../../hooks/useTypedRedux";
import { getCurrentUser } from "../../store/action/dashboardAction";
import { BalanceReplenishment } from "../../component/workWithWallets/Balance";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const { pathname } = useLocation<Location>();
  const history = useHistory();
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    if (pathname === RoutePath.dashboard) {
      history.push(DashboardRoute.desktop);
    }
  }, [pathname]);

  const $startDashboard = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if ($startDashboard.current) {
      $startDashboard.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return (
    <div className={cn(styles.dashboard)} ref={$startDashboard}>
      <BalanceReplenishment />
      <Container className={cn(styles.container)}>
        <Row>
          <Col lg={3} className={styles.side_bar}>
            <SideBar />
          </Col>
          <Col lg={9} className={styles.content}>
            <Switch>
              {dashboardRouteConfig.map((route) => (
                <ProtectedRoute
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  access={route.access}
                />
              ))}
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Dashboard.defaultProps = {};

export default Dashboard;
