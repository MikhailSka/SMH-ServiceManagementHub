import { IUnit } from '../../../../models/IUnit';

export interface UnitState {
  units: IUnit[];
  isLoading: boolean;
  error: string | null;
  totalUnits: number;
}