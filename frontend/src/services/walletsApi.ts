import { axios } from "../core/axios";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}
export const WalletsApi = {
  rootUrl: "/api/wallets",
  async balanceReplenishment(
    token: string,
    amount: string
  ): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/reple-wallet`,
      { amount },
      config
    );
    return data;
  },

  async buyMrxProgram(token: string, req: any): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(`${this.rootUrl}/buy-mrx`, req, config);
    return data;
  },
  // async getTeam(token: string): Promise<ResponseApi> {
  //     const config = {
  //         headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //         },
  //     };
  //     const { data } = await axios.get(`${this.rootUrl}/team`, config);
  //     return data;
  // },
};
