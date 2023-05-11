import { IUnitHistory } from "models/IUnitHistory";

export interface UnitLocationHistoryState {
    unitLocationHistories: IUnitHistory[];
    selectedUnitLocationHistory: IUnitHistory | null;
    isLoading: boolean;
    error: string | null;
  }