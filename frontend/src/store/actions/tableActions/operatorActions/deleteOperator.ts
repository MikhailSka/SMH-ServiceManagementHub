import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { getOperators } from './getOperators';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { RootState } from '../../../store';
import { getAccessToken } from 'security/getAssessToken';
import { api } from 'config/apiConfig';
import { IOperator } from '../../../../models/IOperator';

export const deleteOperator = (
  operator: IOperator
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.delete(`operator/delete/${operator.id}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getOperators());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };