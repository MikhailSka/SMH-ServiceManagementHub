import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import {
  getLocationsStart,
  getLocationsSuccess,
  getLocationsFailure,
} from 'store/reducers/tableRedusers/locationReduser/locationReduser';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { RootState } from '../../../store';
import { getAccessToken } from 'security/getAssessToken';
import { api } from 'config/apiConfig';
import { ILocation } from '../../../../models/ILocation';


export const getLocations = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch(getLocationsStart());
      const response = await api.get<ILocation[]>(`location/get`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getLocationsSuccess(response.data));
    } catch (error) {
      dispatch(getLocationsFailure('Server Error :('));
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };