import { axios } from "../core/axios";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}
export const DashboardApi = {
  rootUrl: "/api/users",
  async getCurrentUser(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/me`, config);
    return data;
  },
  async getTeam(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/team`, config);
    return data;
  },

  async setProfile(token: string,req: any): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.patch(`${this.rootUrl}/me`,req, config);
    return data;
  },

};
