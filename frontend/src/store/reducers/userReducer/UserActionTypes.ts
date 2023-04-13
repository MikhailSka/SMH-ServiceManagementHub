import { UserData } from "./UserState";

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: UserData;
}

export interface RegisterSuccessAction {
  type: 'REGISTER_SUCCESS';
  payload: UserData;
}

export interface LogoutSuccessAction {
  type: 'LOGOUT_SUCCESS';
}

export interface UploadImageSuccessAction {
  type: 'UPLOAD_IMAGE_SUCCESS';
  payload: string;
}
export type UserActionTypes =
  LoginSuccessAction
  | LogoutSuccessAction
  | RegisterSuccessAction
  | UploadImageSuccessAction;