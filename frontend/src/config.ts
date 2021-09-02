export const config = {
  siteName: "Valakas",
};

export enum AccessRouts {
  all,
  user,
  admin = 10,
}

export enum userMentorStatus {
  m1 = "M1",
  m2 = "M2",
  m3 = "M3",
  m4 = "M4",
}

export enum StoregeKey {
  USER = "user",
  USERS = "USERS",
  USER_DATA = "USER_DATA",
  USER_TEAM = `USER_TEAM`,
  USER_PROFILE = `USER_PROFILE`,
  USER_HISTORY_COMPLETED = "USER_HISTORY_COMPLETED",
  USER_HISTORY_PENDING = "USER_HISTORY_PENDING",
  NEWS = "NEWS",
  NEWS_ACTIVE = "NEWS_ACTIVE",
}

export const walletType = {
  visa_mast_mir: "visa_mast_mir",
  qiwi: "qiwi",
  payeer: "payeer",
  bitcoin: "bitcoin",
  ethereum: "ethereum",
  usdtether: "usdtether",
  perfect_money: "perfect_money",
};
