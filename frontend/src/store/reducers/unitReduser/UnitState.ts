import { IUnit } from '../../../models/Unit/IUnit';

export interface UnitState {
    units: IUnit[];
    selectedUnit: IUnit | null;
    isLoading: boolean;
    error: string | null;
  }