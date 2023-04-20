import { ThunkDispatch } from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { api } from 'config/apiConfig';
import { RootState } from '../../store';
import { getOperators } from './getOperators';
import { IOperator } from '../../../models/IOperator';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { getAccessToken } from 'config/getAssessToken';

export const postOperator = (
  operator: IOperator
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.post(`operator/post`, operator, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getOperators());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };
