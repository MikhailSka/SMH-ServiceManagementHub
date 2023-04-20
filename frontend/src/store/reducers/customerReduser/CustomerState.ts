import { ICustomer } from '../../../models/ICustomer';

export interface CustomerState {
  customers: ICustomer[];
  selectedCustomer: ICustomer | null;
  isLoading: boolean;
  error: string | null;
}