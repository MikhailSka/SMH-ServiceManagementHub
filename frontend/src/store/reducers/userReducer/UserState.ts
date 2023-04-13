export interface UserData {
    id: string
    email: string;
    admin: boolean;
    image?: string;
    active: boolean;
  }
  
export interface UserState {
    isAuthenticated: boolean;
    userData: UserData;
  }