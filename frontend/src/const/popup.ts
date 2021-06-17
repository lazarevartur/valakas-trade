export const GET_ENUMS = {
  popup: {
    signIn: "sign-in",
    signUp: "sign-up",
    resetPassword: "reset-password",
    replenishment: "replenishment",
  },
};
export const GET_PARAMS = {
  auth: "auth",
  wallet: "wallet",
  notificationId: "notification-id",
};
export enum ModalType {
  auth = "auth",
  wallet = "wallet",
}
export enum AuthTypeEnum {
  signIn = "sign-in",
  signUp = "sign-up",
  resetPassword = "reset-password",
}
export enum WalletTypeEnum {
  replenishment = "replenishment", // пополнение кошелька
  withdraw = "withdraw", // вывод денег
  transfer = "transfer", // перевод между кошельками
}
