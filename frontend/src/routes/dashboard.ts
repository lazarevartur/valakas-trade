import React from "react";
import { AccessRouts } from "../config";
import { Desktop } from "../component/dashboardGroup/desktop";
import { Profit } from "../component/dashboardGroup/profit";
import { Team } from "../component/dashboardGroup/team";
import { Profile } from "../component/dashboardGroup/profile";
import { HistoryPage } from "../component/dashboardGroup/history";
import { MrxProgram } from "../component/dashboardGroup/programs/mrxProgram";
import { OptionalProgram } from "../component/dashboardGroup/programs/optionalProgram";

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
  mrx_invest = "/dashboard/MRX-Invest",
  optional = "/dashboard/optional",
  priority = "/dashboard/priority",
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
    path: DashboardRoute.mrx_invest,
    exact: true,
    component: MrxProgram,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.optional,
    exact: true,
    component: OptionalProgram,
    access: AccessRouts.user,
  },
  {
    path: DashboardRoute.priority,
    exact: true,
    component: OptionalProgram,
    access: AccessRouts.user,
  },
];
