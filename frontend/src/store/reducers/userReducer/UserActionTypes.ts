import { IUser } from 'models/IUser'

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS'
  payload: IUser
}

export interface RegisterSuccessAction {
  type: 'REGISTER_SUCCESS'
  payload: IUser
}

export interface LogoutSuccessAction {
  type: 'LOGOUT_SUCCESS'
}

export interface RemoveImageSuccessAction {
  type: 'REMOVE_IMAGE_SUCCESS'
}

export interface AddUserAction {
  type: 'ADD_USER';
  payload: IUser;
}

export interface UploadImageSuccessAction {
  type: 'UPLOAD_IMAGE_SUCCESS'
  payload: string
}

export interface UpdateUserNameSuccessAction {
  type: 'UPDATE_USER_NAME_SUCCESS'
  payload: {
    user_id: string
    name: string
  }
}

export interface LoadUsersSuccessAction {
  type: 'LOAD_USERS_SUCCESS'
  payload: IUser[]
}

export interface UpdateUserEmailSuccessAction {
  type: 'UPDATE_USER_EMAIL_SUCCESS'
  payload: {
    user_id: string
    email: string
  }
}

export interface RefreshTokenSuccessAction {
  type: 'REFRESH_TOKEN_SUCCESS'
  payload: string
}

export type UserActionTypes =
  | LoginSuccessAction
  | LogoutSuccessAction
  | RegisterSuccessAction
  | UploadImageSuccessAction
  | RemoveImageSuccessAction
  | UpdateUserNameSuccessAction
  | UpdateUserEmailSuccessAction
  | LoadUsersSuccessAction
  | AddUserAction
  | RefreshTokenSuccessAction;