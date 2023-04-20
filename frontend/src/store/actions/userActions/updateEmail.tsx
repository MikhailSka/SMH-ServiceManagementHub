import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RootState } from '../../store';
import { getAccessToken } from 'config/getAssessToken';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { UpdateUserEmailSuccessAction } from 'store/reducers/userReducer/UserActionTypes';

export const updateUserEmail = (
    user_id: string,
    email: string
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ) => {
    try {
      await api.put(`/user/update-email/${user_id}`, { email }, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
  
      dispatch<UpdateUserEmailSuccessAction>({
        type: 'UPDATE_USER_EMAIL_SUCCESS',
        payload: { user_id, email },
      });
    } catch (error) {
      dispatch(showSnackbar('Email update error', 'error'));
    }
  };