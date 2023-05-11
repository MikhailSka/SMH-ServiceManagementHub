import { IUser } from "models/IUser";

export interface UserState {
    isAuthenticated: boolean;
    userData: IUser;
    users: IUser[];
  }