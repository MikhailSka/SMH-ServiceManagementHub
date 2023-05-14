import { IUnitHistory } from "models/IUnitHistory";

export interface UnitHistoryState {
    unitHistories: IUnitHistory[];
    isLoading: boolean;
    error: string | null;
  }