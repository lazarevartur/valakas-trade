import React from "react";
import { AccessRouts } from "../config";
import { Desktop } from "../component/dashboardGroup/desktop";
import { Profit } from "../component/dashboardGroup/profit";
import { Team } from "../component/dashboardGroup/team";
import { Profile } from "../component/dashboardGroup/profile";
import { HistoryPage } from "../component/dashboardGroup/history";
import { TokenProfit } from "../component/dashboardGroup/programs/tokenProfit";
import { RoutePath } from "./routesConfig";
import { page404 } from "../pages/page404";

export interface routeDashboard {
  path: DashboardRoute;
  exact: boolean;
  component: React.FC;
  access: AccessRouts;
}

export enum DashboardRoute {
  profile = "/dashboard/profile",
  team = "/dashboard/team",
  desktop = "/dashboard/desktop",
  profit = "/dashboard/profit",
  history = "/dashboard/history",
  tokenProfit = "/dashboard/tokenProfit",
  page404 = "*",
}

export const dashboardRouteConfig: routeDashboard[] = [
  {
    path: DashboardRoute.desktop,
    exact: true,
    component: Desktop,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.profit,
    exact: true,
    component: Profit,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.team,
    exact: true,
    component: Team,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.history,
    exact: true,
    component: HistoryPage,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.profile,
    exact: true,
    component: Profile,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.tokenProfit,
    exact: true,
    component: TokenProfit,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.page404,
    exact: false,
    component: page404,
    access: AccessRouts.all,
  },
];
