import { axios } from "../core/axios";
import { INewsData, INewsDataCreate } from "../types/types";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}

export const newsApi = {
  rootUrl: "/api/news",

  async getAllNews(): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${this.rootUrl}`, config);
    return data;
  },
  async last3News(): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/lst3nw`, config);
    return data;
  },

  async getNewsById(token, id): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/${id}`, config);
    return data;
  },

  async deleteNewsById(token, id): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.delete(`${this.rootUrl}/${id}`, config);
    return data;
  },

  async createNews(token, dataNews: INewsDataCreate): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(`${this.rootUrl}/`, dataNews, config);
    return data;
  },
};
