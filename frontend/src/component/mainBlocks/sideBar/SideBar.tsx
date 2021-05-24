import React from "react";
import styles from "./sideBar.module.scss";
import { Button, Card, Nav, Tab } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { DashboardRoute } from "../../../routes/dashboard";

interface SideBarProps extends defaultComponentProps {}

interface menu {
  title: string;
  link: string;
  icon?: string;
}

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
];
const a = ["Token Profit", "Coin Profit", "Synergy"];
const subMenu = [
  {
    title: "Token Profit",
    link: "/dashboard/profile",
  },
  {
    title: "Coin Profit",
    link: "/dashboard/profile",
  },
  {
    title: "Synergy",
    link: "/dashboard/profile",
  },
];

const SideBar: React.FC<SideBarProps> = ({ className = "" }) => {
  return (
    <Card className={cn(styles.side_bar, { [className]: className })}>
      <Card.Body className={styles.card_body}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex-column">
            {menu.map(({ link, title, icon }) => (
              <Nav.Item key={title} className={styles.nav_item}>
                <LinkContainer to={link}>
                  <Nav.Link className={styles.nav_link}>
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
