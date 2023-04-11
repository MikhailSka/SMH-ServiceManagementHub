import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../store';
import { LogoutSuccessAction } from '../../reducers/authReducer/AuthActionTypes'


export const logout = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>
  ) => {
    try {
      await api.post('/logout',);
      console.log("sdafsfsdf")
      localStorage.removeItem('access_token');
      dispatch<LogoutSuccessAction>({
        type: 'LOGOUT_SUCCESS',
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };