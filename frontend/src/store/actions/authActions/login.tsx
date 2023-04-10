import { api } from 'config/apiConfig';
import { ThunkDispatch } from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import jwtDecode from 'jwt-decode';

import { RootState } from '../../store';
import { LoginSuccessAction } from '../../reducers/authReducer/AuthActionTypes'
import { UserData } from 'store/reducers/authReducer/AuthState';
 
export const login = (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ) => {
    try {
      const response = await api.post('/login', { email, password });
      const token = response.data.access_token;
      localStorage.setItem('access_token', token);
      const decodedToken: any = jwtDecode(token);
      const userData: UserData = {
        email: decodedToken.sub,
        role: decodedToken.role,
      };
      dispatch<LoginSuccessAction>({
        type: 'LOGIN_SUCCESS',
        payload: userData,
      });
    } catch (error) {
      throw new Error(`Login error:, ${error}`);
    }
  };