import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { RefreshTokenSuccessAction } from 'store/reducers/userReducer/UserActionTypes';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { RootState } from '../../../store';
import { api } from 'config/apiConfig';

export const refreshToken = (): ThunkAction<void, RootState, unknown, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>
) => {
  try {
    const response = await api.post('/user/refresh');
    const newAccessToken = response.data.access_token;
    localStorage.setItem('access_token', newAccessToken);

    dispatch<RefreshTokenSuccessAction>({
      type: 'REFRESH_TOKEN_SUCCESS',
      payload: newAccessToken,
    });
  } catch (error) {
    const axiosError = error as AxiosError;

    const statusCode = axiosError.response ? axiosError.response.status : null;

    if (statusCode === 401) {
      dispatch(showSnackbar('Invalid refresh token', 'error'));
    } else {
      dispatch(showSnackbar('An error occurred while refreshing token', 'error'));
    }
  }
};