import { ILocation } from '../../../models/ILocation';

export interface LocationState {
    locations: ILocation[];
    selectedLocation: ILocation | null;
    isLoading: boolean;
    error: string | null;
  }