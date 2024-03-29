import {
    selectLocation,
} from 'store/reducers/tableRedusers/locationReduser/locationReduser';
import { ILocation } from '../../../../models/ILocation';

export const selectLocationAction = (location: ILocation) => (dispatch: any) => {
    dispatch(selectLocation(location));
};