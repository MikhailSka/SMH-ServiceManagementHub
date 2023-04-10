import { UserData } from "./AuthState";

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

export type AuthActionTypes = LoginSuccessAction | LogoutSuccessAction | RegisterSuccessAction;