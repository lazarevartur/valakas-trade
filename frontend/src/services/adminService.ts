import { axios } from "../core/axios";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}
export const AdminApi = {
  rootUrl: "/api/adm",
  async successPayment(token: string, id): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/payments/success/${id}`,
      config
    );
    return data;
  },
  async rejectPayment(token: string, id): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/payments/rejected/${id}`,
      config
    );
    return data;
  },
  async successPaymentWithdrawal(token: string, id): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/payments/success-withdrawal/${id}`,
      config
    );
    return data;
  },
  async rejectPaymentWithdrawal(token: string, id): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/payments/rejected-withdrawal/${id}`,
      config
    );
    return data;
  },
  async getAllPayments(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/payments`, config);
    return data;
  },
  async getAllPending(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/payments/pending`,
      config
    );
    return data;
  },
  async getAllCompleted(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/payments/completed`,
      config
    );
    return data;
  },
  async getUserByEmail(token: string, email: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/users/findByEmail/${email}`,
      config
    );
    return data;
  },
  async getAvangardById(token: string, id: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/users/findAvangard/${id}`,
      config
    );
    return data;
  },
  async getSettings(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/settings`, config);
    return data;
  },
  async editBill(token: string, req: any): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.patch(
      `${this.rootUrl}/settings/bill`,
      req,
      config
    );
    return data;
  },
  async createQiwi(token: string, req: any): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/settings/bill`,
      req,
      config
    );
    return data;
  },
  async deleteBillById(token: string, id: any): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.delete(
      `${this.rootUrl}/settings/bill/${id}`,
      config
    );
    return data;
  },
  async saveUserByEmail(token: string, userData): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/users/edit`,
      userData,
      config
    );
    return data;
  },
  async saveMrxPercent(token: string, mrx): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.patch(`${this.rootUrl}/settings`, mrx, config);
    return data;
  },
};
///payments/success-withdrawal/:payment_id")
