import { IUnit } from '../../../models/IUnit';

export interface UnitState {
    units: IUnit[];
    selectedUnit: IUnit | null;
    isLoading: boolean;
    error: string | null;
  }