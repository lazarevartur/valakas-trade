import { axios } from "../core/axios";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}
export const WalletsApi = {
  rootUrl: "/api/auth",
  async byMrxProgramById(
    token: string,
    programId: string
  ): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/byMrxProgram`,
      { program_id: programId },
      config
    );
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
