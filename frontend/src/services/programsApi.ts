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
  async getMrxProgram(id, token): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${this.rootUrl}/mrx`,
      { program_id: id },
      config
    );
    return data;
  },
  async getAvailableMrxProgram(token): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/mrx-available`, config);

    return data;
  },

  async getAvailableOptionalProgram(token): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `${this.rootUrl}/optional/active-program`,
      config
    );
    return data;
  },

  async getAllOptionalPrograms(): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${this.rootUrl}/optional`, config);
    return data;
  },
  async getOptionalProgram(token: string): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${this.rootUrl}/optional/active-program`,
      config
    );
    return data;
  },
};
