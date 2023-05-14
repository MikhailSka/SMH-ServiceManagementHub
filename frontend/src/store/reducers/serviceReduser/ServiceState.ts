import { IService } from "models/IService";

export interface ServiceState {
    services: IService[];
    isLoading: boolean;
    error: string | null;
  }
  