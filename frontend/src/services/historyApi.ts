import { axios } from "../core/axios";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}

export const historyApi = {
  rootUrl: "/api/history",

  async userHistoryPending(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/`, config);
    return data;
  },
  async userHistoryCompleted(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/completed`, config);
    return data;
  },
};
