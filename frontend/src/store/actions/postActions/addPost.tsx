import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { getAccessToken } from 'config/getAssessToken';
import { RootState } from '../../store';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { api } from 'config/apiConfig';
import { IPost } from 'models/IPost';
import { getPosts } from './getPosts';

export const addPost =
  (post: IPost): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.post('post/post', post, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getPosts());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };