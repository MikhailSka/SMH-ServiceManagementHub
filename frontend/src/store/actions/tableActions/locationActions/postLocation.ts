import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { getLocations } from './getLocations';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { RootState } from '../../../store';
import { getAccessToken } from 'security/getAssessToken';
import { api } from 'config/apiConfig';
import { ILocation } from '../../../../models/ILocation';

export const postLocation = (location: ILocation): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.post(`location/post`, location, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getLocations());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };
