import { userLogin } from "../component/authorizationGroup/login/Login";
import { axios } from "../core/axios";
import { IUserRegistration } from "../types/types";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}

export const AuthApi = {
  rootUrl: "api/auth",

  async register(candidate: IUserRegistration): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${this.rootUrl}/register`,
      candidate,
      config
    );
    return data;
  },
  async login(userEmailAndPassword: userLogin): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${this.rootUrl}/login`,
      userEmailAndPassword,
      config
    );
    return data;
  },
};
