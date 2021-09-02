export enum optionalStatus {
  passed = "passed",
  active = "active",
  future = "future",
}

export enum transfers_wallets {
  operating_account = "operating_account",
  bonus_account = "bonus_account",
}

export interface ITransfers_wallets {
  amount: number;
  walletType: transfers_wallets;
}

export enum paymentStatus {
  success = "success",
  pending = "pending",
  rejected = "rejected",
}

export enum walletTypes {
  visa_mast_mir = "visa_mast_mir",
  qiwi = "qiwi",
  payeer = "payeer",
  bitcoin = "bitcoin",
  ethereum = "ethereum",
  usdtether = "usdtether",
}

export enum actionTypeWallet {
  replenishment = "replenishment",
  withdrawal = "withdrawal",
  internal_transfer = "internal_transfer",
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

export interface IUserProfileData {
  name?: string;
  middle_name?: string;
  surname?: string;
  city?: string;
  phone_number?: string;
  telegram?: string;
  whatsApp?: string;
  avatarImg?: string;
  id?: string;
}

export interface IHistoryUserData {
  amount: number;
  status: paymentStatus;
  _id: string;
  from_where_payment: walletTypes;
  requisites: string;
  user_id: string;
  action_type_wallet: actionTypeWallet;
  confirmation_date: any;
  createdAt: any;
}

export interface IHistoryUserState {
  isLoading: boolean;
  historyPending: IHistoryUserData[];
  historyCompleted: IHistoryUserData[];
  error?: {};
}

export interface IWalletsState {
  isLoading: boolean;
  payeerUrl?: string;
  bills?: any;
  readonly success: boolean;
  error?: {};
}
export interface IUserDashboardState {
  isLoading: boolean;
  readonly userDashboard: IUserDashboardData | any;
  error?: {};
}
export interface IUserProfileState {
  isLoading: boolean;
  readonly userProfile: IUserProfileData;
  error?: {};
}

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
  discount?: [number];
  term?: [number];
  insurance?: [number];
  minCost?: number;
  maxCost?: number;
  minStatus?: string;
  activateProgram: number;
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
  readonly priorityData: any;
  error?: {};
}

export interface IMrxProgramsState {
  isLoading: boolean;
  readonly mrxPrograms: IMrxData[];
  readonly mrxProgram: IMrxData | any;
  error?: {};
}

export interface INewsData {
  _id?: string;
  title?: string;
  img_url?: string;
  content?: string;
  createdAt?: Date;
}
export interface INewsDataCreate extends Omit<INewsData, "_id" | "createdAt"> {}

export interface INewsState {
  isLoading: boolean;
  readonly news: INewsData[];
  readonly activeNews: INewsData;
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
export interface payment {
  amount?: number;
  status?: paymentStatus;
  _id?: string;
  from_where_payment?: walletTypes;
  message?: string;
  user_id?: string;
  bill?: string;
  action_type_wallet?: actionTypeWallet;
  confirmation_date?: any;
  requisites: string;
  createdAt?: any;
  email?: string;
}
export interface IUsersData {
  payments: payment[];
}
export interface IUsersState {
  isLoading: boolean;
  readonly payments: payment[];
  readonly paymentsCompleted: payment[];
  user: any;
  avangard: any;
  settings: any;
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
  history: IHistoryUserState;
  users: IUsersState;
  news: INewsState;
}
// {
//     "_id": "6060fa0956ce3247188ea5f2",
//     "name": "artur",
//     "email": "grac1ian950@gmai1l.com",
//     "isAdmin": false,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjBmYTA5NTZjZTMyNDcxODhlYTVmMiIsImlhdCI6MTYxNjk2ODIwMSwiZXhwIjoxNjE2OTcxODAxfQ.wDPIt-9mn0eTF41cV8H2xaxPvRLhKZtpLFc1JO49a-c"
// }
