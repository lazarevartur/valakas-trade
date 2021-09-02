import { axios } from "../core/axios";

interface ResponseApi {
  [x: string]: string;
  data?: any;
}

export const SendMailApi = {
  rootUrl: "/api/send-email",

  async sendEmailFromContact(emailData): Promise<ResponseApi> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${this.rootUrl}/contacts`,
      emailData,
      config
    );
    return data;
  },
};
