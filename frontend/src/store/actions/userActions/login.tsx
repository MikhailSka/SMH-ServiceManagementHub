import { api } from 'config/apiConfig';
import { ThunkDispatch } from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import jwtDecode from 'jwt-decode';

import { RootState } from '../../store';
import { LoginSuccessAction } from '../../reducers/userReducer/UserActionTypes'
import { UserData } from 'store/reducers/userReducer/UserState';
 
export const login = (
  email: string,
  password: string
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  try {
    const response = await api.post('/user/login', { email, password });
    const token = response.data.access_token;
    const image = response.data.image;
    localStorage.setItem('access_token', token);
    const decodedToken: any = jwtDecode(token);
    const userData: UserData = {
      id: decodedToken.id,
      email: decodedToken.sub,
      admin: decodedToken.admin,
      name: decodedToken.name,
      image: image,
      active: decodedToken.active,
    };
    dispatch<LoginSuccessAction>({
      type: 'LOGIN_SUCCESS',
      payload: userData,
    });
  } catch (error) {
    throw new Error(`Login error:, ${error}`);
  }
};