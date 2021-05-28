import React from "react";
import { AccessRouts } from "../config";
import { Desktop } from "../component/dashboardGroup/desktop";
import { Profit } from "../component/dashboardGroup/profit";
import { Team } from "../component/dashboardGroup/team";
import { Profile } from "../component/dashboardGroup/profile";
import { HistoryPage } from "../component/dashboardGroup/history";
import { TokenProfit } from "../component/dashboardGroup/programs/tokenProfit";

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
}

export const dashboardRouteConfig: routeDashboard[] = [
  {
    path: DashboardRoute.desktop,
    exact: true,
    component: Desktop,
    access: AccessRouts.all,
  },
  {
    path: DashboardRoute.profit,
    exact: true,
    component: Profit,
    access: AccessRouts.all,
  },
  {
    path: DashboardRoute.team,
    exact: true,
    component: Team,
    access: AccessRouts.all,
  },
  {
    path: DashboardRoute.history,
    exact: true,
    component: HistoryPage,
    access: AccessRouts.all,
  },
  {
    path: DashboardRoute.profile,
    exact: true,
    component: Profile,
    access: AccessRouts.all,
  },
  {
    path: DashboardRoute.tokenProfit,
    exact: true,
    component: TokenProfit,
    access: AccessRouts.all,
  },
];
