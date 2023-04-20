import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { getUnitsStart, getUnitsSuccess, getUnitsFailure } from 'store/reducers/unitReduser/unitReduser';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { getAccessToken } from 'config/getAssessToken';
import { api } from 'config/apiConfig';
import { IUnit } from '../../../models/IUnit';

export const getUnits = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch(getUnitsStart());
      const response = await api.get<IUnit[]>(`unit/get`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getUnitsSuccess(response.data));
    } catch (error) {
      dispatch(getUnitsFailure('Server Error :('));
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };