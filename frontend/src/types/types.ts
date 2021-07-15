export enum optionalStatus {
  passed = "passed",
  active = "active",
  future = "future",
}

export interface defaultContainerProps {
  className?: string;
}
export interface defaultSvgProps {
  className?: string;
}

export interface defaultComponentProps {
  className?: string;
}
export interface defaultModalComponentProps {
  className?: string;
  isOpened?: boolean;
  url?: string;
  title?: string;
}

export interface IDefaultUserData {
  _id: string;
  name: string;
  email: string;
  token: string;
  access?: any;
}
export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserRegistration {
  name: string;
  password: string;
  confirmPassword: string;
  country: string;
  email: string;
}
export interface emptyObject {}
export interface IUserState {
  isLoading: boolean;
  readonly userData: IDefaultUserData | any;
  error?: {};
  refLink?: string;
}
export interface IUserDashboardData {
  totalInvestment: number;
  referralIncomeOfPartners: number;
  name: string;
  id: string;
  email: string;
  referralLink: string;
}
export interface IUserTeamData {}

export interface IWalletsState {
  isLoading: boolean;
  readonly success: boolean;
  error?: {};
}
export interface IUserDashboardState {
  isLoading: boolean;
  readonly userDashboard: IUserDashboardData | any;
  error?: {};
}
// "linear_premium": 4,
//     "premium": 0.2,
//     "line_count": 4,
//     "price": 10000,
//     "_id": "60da42c6e3c2022c8c4d6d25",
//     "name": "10000",
//     "validity": 260,
export interface IMrxData {
  linear_premium: number;
  premium: number;
  line_count: number;
  validity: number;
  price: number;
  _id: string;
  name: string;
}

export interface IOptionalData {
  cost?: number;
  collected?: number;
  quantity?: number;
  profitability?: number;
  purpose?: number;
  round_term?: number;
  round_number?: string;
  status?: optionalStatus;
  start_round?: number;
  end_round?: number;
  _id?: string;
}

export interface IPriorityConditions {
  discount?: number[];
  term?: number[];
  minCost?: number;
  maxCost?: number;
  minStatus?: string;
}

export interface IPriorityData {
  name?: string;
  type?: string;
  description?: string;
  icon?: string;
  img?: string;
  conditions?: IPriorityConditions;
}

export interface IPriorityProgramsState {
  isLoading: boolean;
  readonly priorityPrograms: IPriorityData[];
  readonly priorityProgram: IPriorityData;
  error?: {};
}

export interface IMrxProgramsState {
  isLoading: boolean;
  readonly mrxPrograms: IMrxData[];
  readonly mrxProgram: IMrxData | any;
  error?: {};
}

export interface IOptionalProgramsState {
  isLoading: boolean;
  readonly optionalPrograms: IOptionalData[];
  readonly optionalProgram: IOptionalData;
  error?: {};
}
export interface IUserTeamState {
  isLoading: boolean;
  readonly userTeam: IUserTeamData | any;
  error?: {};
}

export interface rootState {
  authentication: IUserState;
  dashboard: IUserDashboardState;
  team: IUserTeamState;
  mrx: IMrxProgramsState;
  optional: IOptionalProgramsState;
  priority: IPriorityProgramsState;
  wallets: IWalletsState;
}
// {
//     "_id": "6060fa0956ce3247188ea5f2",
//     "name": "artur",
//     "email": "grac1ian950@gmai1l.com",
//     "isAdmin": false,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjBmYTA5NTZjZTMyNDcxODhlYTVmMiIsImlhdCI6MTYxNjk2ODIwMSwiZXhwIjoxNjE2OTcxODAxfQ.wDPIt-9mn0eTF41cV8H2xaxPvRLhKZtpLFc1JO49a-c"
// }
