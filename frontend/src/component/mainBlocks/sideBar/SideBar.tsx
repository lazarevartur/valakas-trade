import React from "react";
import styles from "./sideBar.module.scss";
import { Button, Card, Nav, Tab } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { DashboardRoute } from "../../../routes/dashboard";
import { RoutePath } from "../../../routes/routesConfig";
import useJwtAuth from "../../../hooks/useJwtAuth";
import { useTranslation } from "react-i18next";

interface SideBarProps extends defaultComponentProps {}

interface menu {
  title: string;
  link: string;
  icon?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className = "" }) => {
  const { isAdm } = useJwtAuth();
  const { t } = useTranslation();
  const menu: menu[] = [
    {
      title: t("SideBar.desktop"),
      link: DashboardRoute.desktop,
      icon: `fas fa-desktop`,
    },
    {
      title: t("SideBar.profit"),
      link: DashboardRoute.profit,
      icon: `fas fa-chart-line`,
    },
    {
      title: t("SideBar.team"),
      link: DashboardRoute.team,
      icon: `fas fa-users`,
    },
    {
      title: t("SideBar.history"),
      link: DashboardRoute.history,
      icon: `fas fa-history`,
    },
    {
      title: t("SideBar.profile"),
      link: DashboardRoute.profile,
      icon: `fas fa-cog`,
    },
    {
      title: "MRX-Invest",
      link: DashboardRoute.mrx_invest,
      icon: `far fa-play-circle`,
    },
    {
      title: "Optional",
      link: DashboardRoute.optional,
      icon: `far fa-play-circle`,
    },
    {
      title: "Priority",
      link: DashboardRoute.priority,
      icon: `far fa-play-circle`,
    },
  ];
  const admMenu: menu[] = [
    {
      title: "admin/payment",
      link: DashboardRoute.adminPayment,
      icon: `fas fa-desktop`,
    },
    {
      title: "admin/edit",
      link: DashboardRoute.adminEditUser,
      icon: `fas fa-desktop`,
    },
    {
      title: "admin/settings",
      link: DashboardRoute.adminSettings,
      icon: `fas fa-desktop`,
    },
    {
      title: "admin/media",
      link: DashboardRoute.adminMedia,
      icon: `fas fa-desktop`,
    },
  ];
  const profile = t("SideBar.profile");
  return (
    <Card className={cn(styles.side_bar, { [className]: className })}>
      <Card.Body className={styles.card_body}>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          activeKey
        >
          <Nav variant="pills" className={cn(styles.nav)}>
            {menu.map(({ link, title, icon }) => (
              <Nav.Item key={title} className={styles.nav_item}>
                <LinkContainer to={link}>
                  <Nav.Link
                    className={cn(styles.nav_link, {
                      [styles.delimiter]: title === profile,
                    })}
                  >
                    <i className={icon} />
                    <span>{title}</span>
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
            {isAdm &&
              admMenu.map(({ link, title, icon }) => {
                return (
                  <Nav.Item key={title} className={styles.nav_item}>
                    <LinkContainer to={link}>
                      <Nav.Link
                        className={cn(styles.nav_link, {
                          [styles.delimiter]: title === profile,
                        })}
                      >
                        <i className={icon} />
                        <span>{title}</span>
                      </Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                );
              })}
          </Nav>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};

SideBar.defaultProps = {};

export default SideBar;
