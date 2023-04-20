import { selectUnitLocation } from "store/reducers/unitLocationReduser/unitLocationReduser";
import { IUnitLocation } from '../../../models/IUnitLocation';

export const selectUnitLocationAction = (unitLocation: IUnitLocation) => (dispatch: any) => {
dispatch(selectUnitLocation(unitLocation));
};