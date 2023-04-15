export interface UserData {
    id: string
    email: string;
    admin: boolean;
    name: string;
    image?: string | null;
    active: boolean;
  }
  
export interface UserState {
    isAuthenticated: boolean;
    userData: UserData;
  }