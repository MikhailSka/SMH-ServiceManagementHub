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

export interface RemoveImageSuccessAction {
  type: 'REMOVE_IMAGE_SUCCESS';
}
export interface UploadImageSuccessAction {
  type: 'UPLOAD_IMAGE_SUCCESS';
  payload: string;
}
export interface UpdateUserNameSuccessAction {
  type: 'UPDATE_USER_NAME_SUCCESS';
  payload: {
    user_id: string;
    name: string;
  };
}

export interface UpdateUserEmailSuccessAction {
  type: 'UPDATE_USER_EMAIL_SUCCESS';
  payload: {
    user_id: string;
    email: string;
  };
}
export type UserActionTypes =
  LoginSuccessAction
  | LogoutSuccessAction
  | RegisterSuccessAction
  | UploadImageSuccessAction
  | RemoveImageSuccessAction
  | UpdateUserNameSuccessAction
  | UpdateUserEmailSuccessAction;