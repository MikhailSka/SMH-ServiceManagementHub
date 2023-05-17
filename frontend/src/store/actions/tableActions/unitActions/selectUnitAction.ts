import { selectUnit } from 'store/reducers/tableRedusers/unitReduser/unitReduser';
import { IUnit } from '../../../../models/IUnit';

export const selectUnitAction = (unit: IUnit) => (dispatch: any) => {
    dispatch(selectUnit(unit));
  };
