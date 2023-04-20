import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import {
  getUnitLocationsStart,
  getUnitLocationsSuccess,
  getUnitLocationsFailure,
} from 'store/reducers/unitLocationReduser/unitLocationReduser';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { RootState } from '../../store';
import { getAccessToken } from 'config/getAssessToken';
import { api } from 'config/apiConfig';
import { IUnitLocation } from '../../../models/IUnitLocation';

export const getUnitLocations = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch(getUnitLocationsStart());
      const response = await api.get<IUnitLocation[]>(`unit_location/get`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getUnitLocationsSuccess(response.data));
    } catch (error) {
      dispatch(getUnitLocationsFailure('Server Error :('));
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };