import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import {
  getPostViewsStart,
  getPostViewsSuccess,
} from 'store/reducers/tableRedusers/postReduser/postReducer';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { getAccessToken } from 'security/getAssessToken';
import { RootState } from '../../../store';
import { api } from 'config/apiConfig';
import { IPost } from 'models/IPost';

export const getPosts =
  (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch(getPostViewsStart());
      const response = await api.get<IPost[]>(`post/get`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getPostViewsSuccess(response.data));
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };