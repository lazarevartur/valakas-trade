import ConfigModel from "../models/configModel.js";

export class ConfigService {
  static incrementDay = async (id = "61039d028281d724a4b6f5a8") => {
    let config;
    try {
      config = await ConfigModel.findById(id);
    } catch (e) {
      return { message: "config not found", status: "error" };
    }
    config.days = config.days + 1;
    config.save();
    return config;
  };

  static getConfig = async (select) => {
    let config;
    try {
      [config] = await ConfigModel.find({}).select(select);
    } catch (e) {
      return { message: "config not found", status: "error" };
    }
    return config;
  };

  static changeMrxPercent = async (dailyInterest, autoDailyInterest) => {
    const value = +dailyInterest;
    if (value) {
      const config = await this.getConfig("dailyInterest autoDailyInterest");
      if (config.status === "error") {
        return config;
      }
      const toPercent = value / 100;
      config.dailyInterest = toPercent.toFixed(3);
      config.autoDailyInterest = autoDailyInterest;

      config.save();
      return config;
    }
    return { message: "Введите число", status: "error" };
  };
}
