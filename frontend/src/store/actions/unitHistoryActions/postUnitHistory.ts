import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { api } from 'config/apiConfig';
import { getAccessToken } from 'config/getAssessToken';
import { IUnitHistory } from 'models/IUnitHistory';
import { getUnitLocationHistories } from './getUnitHistories';
import { showSnackbar } from '../snackbarActions/showSnackbar';

export const postUnitLocationHistory = (
    unitLocationHistory: IUnitHistory
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ) => {
    try {
      await api.post(`unit_location_history/post`, unitLocationHistory, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getUnitLocationHistories());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };