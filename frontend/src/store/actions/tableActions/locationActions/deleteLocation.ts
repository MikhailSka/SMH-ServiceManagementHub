import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { ILocation } from 'models/ILocation';
import { getLocations } from './getLocations';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { RootState } from '../../../store';
import { getAccessToken } from 'security/getAssessToken';
import { api } from 'config/apiConfig';

export const deleteLocation = (location: ILocation): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.delete(`location/delete/${location.id}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getLocations());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };
