import { ICustomerLocation } from '../../../models/ICustomerLocation';

export interface CustomerLocationState {
  customerLocations: ICustomerLocation[];
  selectedCustomerLocation: ICustomerLocation | null;
  isLoading: boolean;
  error: string | null;
}
