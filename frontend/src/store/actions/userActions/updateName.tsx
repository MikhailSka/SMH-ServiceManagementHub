import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RootState } from '../../store';
import { getAccessToken } from 'config/getAssessToken';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { UpdateUserNameSuccessAction } from 'store/reducers/userReducer/UserActionTypes';

export const updateUserName = (
    user_id: string,
    name: string
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ) => {
    try {
      await api.put(`/user/update-name/${user_id}`, { name }, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
  
      dispatch<UpdateUserNameSuccessAction>({
        type: 'UPDATE_USER_NAME_SUCCESS',
        payload: { user_id, name },
      });
    } catch (error) {
      dispatch(showSnackbar('Name update error', 'error'));
    }
  };