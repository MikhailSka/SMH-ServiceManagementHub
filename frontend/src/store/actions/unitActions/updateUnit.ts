import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { getUnits } from './getUnits';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { getAccessToken } from 'config/getAssessToken';
import { api } from 'config/apiConfig';
import { IUnit } from '../../../models/Unit/IUnit';

export const updateUnit = (unit: IUnit): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.put(`unit/update/${unit.id}`, unit, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getUnits());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };