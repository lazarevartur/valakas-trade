import React from "react";

export interface defaultContainerProps {
  children?: React.ReactNode;
  className?: string;
}
export interface defaultSvgProps {
  className?: string;
}
export interface IDefaultUserData {
  _id: string;
  name: string;
  email: string;
  token: string;
  access?: any;
}
export interface IUserRegistration {
  name: string;
  password: string;
  confirmPassword: string;
  country: string;
  email: string;
}
export interface emptyObject {}
export interface IUserState {
  isLoading: boolean;
  readonly userData: IDefaultUserData | any;
  error?: {};
  refLink?: string;
}

export interface rootState {
  authentication: IUserState;
}
// {
//     "_id": "6060fa0956ce3247188ea5f2",
//     "name": "artur",
//     "email": "grac1ian950@gmai1l.com",
//     "isAdmin": false,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjBmYTA5NTZjZTMyNDcxODhlYTVmMiIsImlhdCI6MTYxNjk2ODIwMSwiZXhwIjoxNjE2OTcxODAxfQ.wDPIt-9mn0eTF41cV8H2xaxPvRLhKZtpLFc1JO49a-c"
// }
