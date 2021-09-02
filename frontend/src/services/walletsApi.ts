import { axios } from "../core/axios";
import { ITransfers_wallets } from "../types/types";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}

export interface ReplenishmentRequest {
  amount: number;
  from_where_payment: string;
  requisites?: string;
  message?: string;
  bill?: string;
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

  async buyPriorityProgram(token: string, req: any): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/buy-priority`,
      req,
      config
    );
    return data;
  },

  async buyOptionalProgram(token: string, req: any): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/buy-optional`,
      req,
      config
    );
    return data;
  },

  async replenishmentRequest(
    token: string,
    req: ReplenishmentRequest
  ): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/reple-request`,
      req,
      config
    );
    return data;
  },

  async getPayeerUrl(
    token: string,
    req: ReplenishmentRequest
  ): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/reple-payeer`,
      req,
      config
    );
    return data;
  },

  async transfer(token: string, req: ITransfers_wallets): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(`${this.rootUrl}/transfer`, req, config);
    return data;
  },

  async withdrawRequest(token: string, req): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/withdrawal-request`,
      req,
      config
    );
    return data;
  },

  async getBills(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/bills/`, config);
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
