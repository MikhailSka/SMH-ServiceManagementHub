import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { getUnitLocations } from './getUnitLocations';
import { IUnitLocation } from '../../../models/IUnitLocation';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { getAccessToken } from 'config/getAssessToken';
import { api } from 'config/apiConfig';

export const postUnitLocation = (
  unitLocation: IUnitLocation,
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.post(`unit_location/post`, unitLocation, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getUnitLocations());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };