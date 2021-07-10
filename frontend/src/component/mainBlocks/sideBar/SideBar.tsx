import React from "react";
import styles from "./sideBar.module.scss";
import { Button, Card, Nav, Tab } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { DashboardRoute } from "../../../routes/dashboard";
import { RoutePath } from "../../../routes/routesConfig";

interface SideBarProps extends defaultComponentProps {}

interface menu {
  title: string;
  link: string;
  icon?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className = "" }) => {
  const menu: menu[] = [
    {
      title: "Рабочий стол",
      link: DashboardRoute.desktop,
      icon: `fas fa-desktop`,
    },
    {
      title: "Доходность",
      link: DashboardRoute.profit,
      icon: `fas fa-chart-line`,
    },
    {
      title: "Команда",
      link: DashboardRoute.team,
      icon: `fas fa-users`,
    },
    {
      title: "История",
      link: DashboardRoute.history,
      icon: `fas fa-history`,
    },
    {
      title: "Личные данные",
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
  return (
    <Card className={cn(styles.side_bar, { [className]: className })}>
      <Card.Body className={styles.card_body}>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          activeKey
        >
          <Nav variant="pills" className="flex-column">
            {menu.map(({ link, title, icon }) => (
              <Nav.Item key={title} className={styles.nav_item}>
                <LinkContainer to={link}>
                  <Nav.Link
                    className={cn(styles.nav_link, {
                      [styles.delimiter]: title === "Личные данные",
                    })}
                  >
                    <i className={icon} />
                    <span>{title}</span>
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};

SideBar.defaultProps = {};

export default SideBar;
