import React from "react";
import { HomePage } from "../pages/home";
import { PersonalPage } from "../pages/personal";
import { TeamPage } from "../pages/team";
import { AccessRouts } from "../config";
import { Profile } from "../pages/profile";
import { Income } from "../pages/income";
import { HowToMakeMoneyHere } from "../pages/howToMakeMoneyHere";
import { Dashboard } from "../pages/dashnboard";
import { page404 } from "../pages/page404";
import { PrivacyPolicy } from "../pages/privacyPolicy";
import TermsUse from "../pages/TermsUse/TermsUse";
import { Community } from "../pages/сommunity";
import { PriorityDescription } from "../pages/PriorityDescription";
const AboutPage = React.lazy(() => import("../pages/about/AboutPage"));
const mrxInvest = React.lazy(() => import("../pages/mrxInvest/MrxInvest"));
const Optional = React.lazy(() => import("../pages/optional/Optional"));
const Priority = React.lazy(() => import("../pages/priority/Priority"));

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
  binarProfitTeam = "/mrx-invest",
  optional = "/optional",
  priority = "/priority",
  priorityDescription = "/priority/:id",
  authWithRef = "/r/:id",
  personal = "/personal",
  income = "/income",
  community = "/community",
  profile = "/profile",
  dashboard = "/dashboard",
  team = "/team",
  privacyPolicy = "/privacy-policy",
  termsUse = "/terms-of-use",
  login = "?auth=sign-in",
  registration = "?auth=sign-up",
  resetPassword = "?auth=reset-password",
  replenishmentWallet = `?wallet=replenishment`,
  withdrawWallet = `?wallet=withdraw`,
  transferWallet = `?wallet=transfer`,
  buyPrograms = `?wallet=buy-programs`,
  page404 = "*",
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
    path: RoutePath.community,
    exact: true,
    component: Community,
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
    component: mrxInvest,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.optional,
    exact: true,
    component: Optional,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.priority,
    exact: true,
    component: Priority,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.priorityDescription,
    exact: true,
    component: PriorityDescription,
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
    access: AccessRouts.user,
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
    path: RoutePath.authWithRef,
    exact: true,
    component: HomePage,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.privacyPolicy,
    exact: true,
    component: PrivacyPolicy,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.termsUse,
    exact: true,
    component: TermsUse,
    access: AccessRouts.all,
  },
  {
    path: RoutePath.page404,
    exact: false,
    component: page404,
    access: AccessRouts.all,
  },
];

export { routesConfig };
