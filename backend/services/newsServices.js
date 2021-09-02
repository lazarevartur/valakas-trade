import NewsModel from "../models/newsModel.js";

class NewsServices {
  #newsModel;
  constructor() {
    this.#newsModel = NewsModel;
  }
  create = async (data) => {
    console.log(data);
    let news;
    try {
      news = this.#newsModel.create(data);
      return news;
    } catch (e) {
      console.log(e);
      return { message: "ошибка создание новости", status: "error" };
    }
  };
  findOneNewsById = async (id) => {
    let news;
    try {
      news = await this.#newsModel.findById(id);
      return news;
    } catch (e) {
      return { message: "Новость не найдена", status: "error" };
    }
  };
  findAllNews = async () => {
    let news;
    try {
      news = await this.#newsModel.find({});
      return news;
    } catch (e) {
      return { message: "Новости не найдены", status: "error" };
    }
  };
  delete = async (id) => {
    try {
      await this.#newsModel.findByIdAndDelete(id);
      return true;
    } catch (e) {
      return false;
    }
  };

  last3News = async () => {
    try {
      return await this.#newsModel.find({}).sort({ createdAt: -1 }).limit(3);
    } catch (e) {
      return false;
    }
  };
}

export default new NewsServices();
