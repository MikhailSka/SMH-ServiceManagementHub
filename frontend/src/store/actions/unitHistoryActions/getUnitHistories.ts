import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { api } from 'config/apiConfig';
import { getAccessToken } from 'config/getAssessToken';
import { IUnitHistory } from 'models/IUnitHistory';
import {
  getUnitLocationHistoriesStart,
  getUnitLocationHistoriesSuccess,
  getUnitLocationHistoriesFailure,
} from 'store/reducers/unitHistoryReduser/unitHistoryReduser';
import { showSnackbar } from '../snackbarActions/showSnackbar';

export const getUnitLocationHistories = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  try {
    dispatch(getUnitLocationHistoriesStart());
    const response = await api.get<IUnitHistory[]>(`unit_location_history/get`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    dispatch(getUnitLocationHistoriesSuccess(response.data));
  } catch (error) {
    dispatch(getUnitLocationHistoriesFailure('Server Error :('));
    dispatch(showSnackbar('Server Error :(', 'error'));
  }
};