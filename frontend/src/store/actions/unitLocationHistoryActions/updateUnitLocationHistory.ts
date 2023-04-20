import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { api } from 'config/apiConfig';
import { getAccessToken } from 'config/getAssessToken';
import { IUnitLocationHistory } from '../../../models/IUnitLocationHistory';
import { getUnitLocationHistories } from './getUnitLocationHistories';
import { showSnackbar } from '../snackbarActions/showSnackbar';

export const updateUnitLocationHistory = (
    unitLocationHistory: IUnitLocationHistory
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ) => {
    try {
      await api.put(`unit_location_history/update/${unitLocationHistory.id}`, unitLocationHistory, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getUnitLocationHistories());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };