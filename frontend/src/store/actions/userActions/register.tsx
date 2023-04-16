import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RootState } from '../../store';
import { RegisterSuccessAction } from '../../reducers/userReducer/UserActionTypes'
import { UserData } from 'store/reducers/userReducer/UserState';

export const register = (
    email: string,
    name: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ) => {
    try {
      const response = await api.post('/user/register', { email, name, password });
      const userData: UserData = response.data;
      dispatch<RegisterSuccessAction>({
        type: 'REGISTER_SUCCESS',
        payload: userData,
      });
    } catch (error) {
      console.error('Register error:', error);
    }
  };