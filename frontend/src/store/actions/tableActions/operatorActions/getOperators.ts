import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import {
  getOperatorsStart,
  getOperatorsSuccess,
  getOperatorsFailure,
} from 'store/reducers/tableRedusers/operatorReduser/operatorReduser';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { getAccessToken } from 'security/getAssessToken';
import { RootState } from '../../../store';
import { api } from 'config/apiConfig';
import { IOperator } from '../../../../models/IOperator';

export const getOperators = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch(getOperatorsStart());
      const response = await api.get<IOperator[]>(`operator/get`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getOperatorsSuccess(response.data));
    } catch (error) {
      dispatch(getOperatorsFailure('Server Error :('));
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };