import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { LoginSuccessAction, AddUserAction } from 'store/reducers/userReducer/UserActionTypes';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { RootState } from '../../store';
import { api } from 'config/apiConfig';
import { IUser } from 'models/IUser';

export const getUser = (
  id: string,
  setAsCurrentUser: boolean = false
) => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
    try {
      const response = await api.get(`/user/get/${id}`);
      const userData: IUser = response.data;

      dispatch<AddUserAction>({
        type: 'ADD_USER',
        payload: userData,
      });

      if (setAsCurrentUser) {
        dispatch<LoginSuccessAction>({
          type: 'LOGIN_SUCCESS',
          payload: userData,
        });
      }
    } catch (error) {
      dispatch(showSnackbar('An error occurred while loading user data', 'error'));
    }
  };