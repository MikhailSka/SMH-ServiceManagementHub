import { IUnitLocation } from "models/IUnitLocation";

export interface UnitLocationState {
    unitLocations: IUnitLocation[];
    selectedUnitLocation: IUnitLocation | null;
    isLoading: boolean;
    error: string | null;
  }