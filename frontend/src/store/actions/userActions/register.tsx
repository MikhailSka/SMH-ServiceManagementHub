import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosError } from 'axios';
import { AnyAction } from 'redux';

import { showSnackbar } from '../snackbarActions/showSnackbar';
import { RootState } from '../../store';
import { RegisterSuccessAction } from '../../reducers/userReducer/UserActionTypes'
import { UserData } from 'store/reducers/userReducer/UserState';

export const register = (
  email: string,
  name: string,
  password: string,
  navigate: any
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
    dispatch(showSnackbar('Registration successful', 'success'));
    navigate('/login');
  } catch (error) {
      const axiosError = error as AxiosError;

      const statusCode = axiosError.response ? axiosError.response.status : null;
    
      if (statusCode === 409) {
        dispatch(showSnackbar('This email already exists', 'error'));
      }  else {
        dispatch(showSnackbar('An error occurred while registering', 'error'));
      }
    }
  };