export interface UserData {
    email: string;
    role: string;
  }
  
export interface AuthState {
    isAuthenticated: boolean;
    userData: UserData;
  }