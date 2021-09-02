import { UserServices } from "./userServices.js";

export class SettingServices {
  static getTotalInvestments = async () => {
    const users = await UserServices.getAllUsersLean("total_investment -_id");
    if (users.status === "error") {
      return users;
    }
    const totalInvestments = users.reduce((total, { total_investment }) => {
      total += total_investment;
      return total;
    }, 0);
    return { totalInvestments };
  };
  static getTotalUsers = async () => {
    const users = await UserServices.getAllUsersLean("email -_id");
    return { totalUsers: users.length };
  };
}
