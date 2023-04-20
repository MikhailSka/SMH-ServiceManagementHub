import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { getLocations } from './getLocations';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { RootState } from '../../store';
import { getAccessToken } from 'config/getAssessToken';
import { api } from 'config/apiConfig';
import { ILocation } from '../../../models/ILocation';

export const updateLocation = (location: ILocation): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.put(`location/update/${location.id}`, location, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getLocations());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };
