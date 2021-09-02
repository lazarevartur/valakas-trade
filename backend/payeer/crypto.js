import { createHash } from "crypto";
import CryptoJS from "crypto-js";

export const AES256CBC = (data, key) => {
  return CryptoJS.AES.encrypt(data, key).toString();
};

export const sha256 = (data) => {
  return createHash("sha256").update(data).digest("hex");
};

export const base64encode = (data) => {
  return Buffer.from(data).toString("base64");
};

export const md5 = (data) => {
  return createHash("md5").update(data).digest("hex");
};
