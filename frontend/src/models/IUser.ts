export interface IUser {
    id?: string;
    active: boolean;
    email: string;
    admin: boolean;
    name: string;
    image: string | null;
    creation_date?: string;
    modification_date?: string;
  }