import { api } from 'config/apiConfig';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import jwtDecode from 'jwt-decode';

import { RootState } from '../../../store';
import { getUser } from '../userProfileActions/getUser';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { storeAccessToken } from 'security/storeAccessToken'; 

export const login = (
  email: string,
  password: string
) => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  try {
    const response = await api.post('/user/login', { email, password });
    const token = response.data.access_token;
    storeAccessToken(token)
    const decodedToken: any = jwtDecode(token);
    const userId: string = decodedToken.id;

    dispatch(getUser(userId, true));
  } catch (error) {
    const axiosError = error as AxiosError;

    const statusCode = axiosError.response ? axiosError.response.status : null;

    if (statusCode === 401) {
      dispatch(showSnackbar('Invalid email or password', 'error'));
    } else {
      dispatch(showSnackbar('An error occurred while logining', 'error'));
    }
  }
};