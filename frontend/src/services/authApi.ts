import { userLogin } from '../component/authorizationGroup/login/Login'
import { axios } from '../core/axios'
import { IUserRegistration } from '../types/types'

interface ResponseApi {
  status?: string
  data: any
}

export const AuthApi = {
  rootUrl: 'api/auth',

  // async register(postData: IUserRegistration): Promise<ResponseApi> {
  //   console.log(postData, "postData");
  //   const { data } = await axios.post<ResponseApi>(
  //     "http://localhost:5000/api/auth",
  //     {
  //       email: postData.email,
  //       name: postData.name,
  //       country: postData.country,
  //       password: postData.password,
  //       password2: postData.confirmPassword,
  //     }
  //   );
  //   return data;
  // },
  async register(candidate: IUserRegistration): Promise<ResponseApi> {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(`${this.rootUrl}`, candidate, config)
    return data
  },
  async login(userEmailAndPassword: userLogin): Promise<ResponseApi> {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${this.rootUrl}/login`,
      userEmailAndPassword,
      config
    )
    return data
  },
}
