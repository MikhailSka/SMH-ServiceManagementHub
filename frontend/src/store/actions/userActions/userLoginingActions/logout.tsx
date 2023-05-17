import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RootState } from '../../../store';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { LogoutSuccessAction } from '../../../reducers/userReducer/UserActionTypes'


export const logout = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  try {
    await api.post('/user/logout');
    localStorage.removeItem('access_token');
    dispatch<LogoutSuccessAction>({
      type: 'LOGOUT_SUCCESS',
    });
  } catch (error) {
      dispatch(showSnackbar('An error occurred while logout', 'error'));
  }
};