import React from "react";
import { HomePage } from "../pages/home";
import { PersonalPage } from "../pages/personal";
import { TeamPage } from "../pages/team";
import { AccessRouts } from "../config";
import { Profile } from "../pages/profile";
import { Income } from "../pages/income";
import { Authorization } from "../pages/authorization";
import { AboutPage } from "../pages/about";
import { HowToMakeMoneyHere } from "../pages/howToMakeMoneyHere";
import { BinarProfitTeam } from "../pages/binarProfitTeam";
import { Dashboard } from "../pages/dashnboard";

export interface route {
  path: RoutePath;
  exact: boolean;
  component: React.FC;
  access: AccessRouts;
}

export enum RoutePath {
  home = "/",
  about = "/about",
  howToMakeMoneyHere = "/howToMakeMoneyHere",
  binarProfitTeam = "/binarProfitTeam",
  auth = "/auth",
  authWithRef = "/r/:id",
  personal = "/personal",
  income = "/income",
  profile = "/profile",
  dashboard = "/dashboard",
  team = "/team",
  login = "?auth=sign-in",
  registration = "?auth=sign-up",
  resetPassword = "?auth=reset-password",
}

const routesConfig: route[] = [
  {
    path: RoutePath.home,
    exact: true,
    component: HomePage,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.about,
    exact: true,
    component: AboutPage,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.howToMakeMoneyHere,
    exact: true,
    component: HowToMakeMoneyHere,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.binarProfitTeam,
    exact: true,
    component: BinarProfitTeam,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.personal,
    exact: true,
    component: PersonalPage,
    access: AccessRouts.user,
  },
  {
    path: RoutePath.dashboard,
    exact: false,
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
    access: AccessRouts.all,
  },
  {
    path: RoutePath.auth,
    exact: true,
    component: Authorization,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.authWithRef,
    exact: true,
    component: Authorization,
    access: AccessRouts.all,
  },
];

export { routesConfig };
