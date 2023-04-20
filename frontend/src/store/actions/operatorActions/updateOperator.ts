import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { api } from 'config/apiConfig';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { getOperators } from './getOperators';
import { RootState } from '../../store';
import { getAccessToken } from 'config/getAssessToken';
import { IOperator } from '../../../models/IOperator';

export const updateOperator = (
  operator: IOperator
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.put<IOperator[]>(`operator/update/${operator.id}`, operator, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getOperators());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };