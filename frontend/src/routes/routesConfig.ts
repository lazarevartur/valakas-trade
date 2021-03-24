import { HomePage } from "../pages/home";
import { PersonalPage } from "../pages/personal";
import React from "react";
import { Dashboard } from "../pages/dashnboard";
import { TeamPage } from "../pages/team";
import { RegistrationPage } from "../pages/authorization/registration";
import { LoginPage } from "../pages/authorization/login";

export interface route {
  path: RoutePath;
  exact: boolean;
  component: React.FC;
}

export enum RoutePath {
  home = "/",
  login = "/login",
  registration = "/registration",
  personal = "/personal",
  profile = "/profile",
  dashboard = "/dashboard",
  team = "/team",
}

export const routesConfig: route[] = [
  {
    path: RoutePath.home,
    exact: true,
    component: HomePage,
  },
  {
    path: RoutePath.personal,
    exact: true,
    component: PersonalPage,
  },
  {
    path: RoutePath.dashboard,
    exact: true,
    component: Dashboard,
  },
  {
    path: RoutePath.team,
    exact: true,
    component: TeamPage,
  },
  {
    path: RoutePath.login,
    exact: true,
    component: LoginPage,
  },
  {
    path: RoutePath.registration,
    exact: true,
    component: RegistrationPage,
  },
];
