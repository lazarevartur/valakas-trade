import React from "react";
import { HomePage } from "../pages/home";
import { PersonalPage } from "../pages/personal";
import { Dashboard } from "../pages/dashnboard";
import { TeamPage } from "../pages/team";
import { RegistrationPage } from "../pages/authorization/registration";
import { LoginPage } from "../pages/authorization/login";
import { AccessRouts } from "../config";
import { Profile } from "../pages/profile";
import { Income } from "../pages/income";

export interface route {
  path: RoutePath;
  exact: boolean;
  component: React.FC;
  access?: AccessRouts;
}

export enum RoutePath {
  home = "/",
  login = "/login",
  registration = "/registration",
  personal = "/personal",
  income = "/income",
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
    access: AccessRouts.all,
  },
  {
    path: RoutePath.profile,
    exact: true,
    component: Profile,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.income,
    exact: true,
    component: Income,
    access: AccessRouts.all,
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
