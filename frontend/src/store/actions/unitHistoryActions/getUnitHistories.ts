import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { api } from 'config/apiConfig';
import { getAccessToken } from 'config/getAssessToken';
import { IUnitHistory } from 'models/IUnitHistory';
import {
  getUnitHistoriesStart,
  getUnitHistoriesSuccess,
  getUnitHistoriesFailure,
} from 'store/reducers/unitHistoryReduser/unitHistoryReduser';
import { showSnackbar } from '../snackbarActions/showSnackbar';


export const getUnitHistories = (id: string): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  try {
    dispatch(getUnitHistoriesStart());
    const response = await api.get<IUnitHistory[]>(`unit_history/get/${id}`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    dispatch(getUnitHistoriesSuccess(response.data));
  } catch (error) {
    dispatch(getUnitHistoriesFailure('Server Error :('));
    dispatch(showSnackbar('Server Error :(', 'error'));
  }
};