import { IUnitLocationHistory } from "models/IUnitLocationHistory";

export interface UnitLocationHistoryState {
    unitLocationHistories: IUnitLocationHistory[];
    selectedUnitLocationHistory: IUnitLocationHistory | null;
    isLoading: boolean;
    error: string | null;
  }