import { axios } from "../core/axios";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}
export const ProgramsApi = {
  rootUrl: "/api/programs",
  async getAllMrxPrograms(): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/mrx`, config);
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
