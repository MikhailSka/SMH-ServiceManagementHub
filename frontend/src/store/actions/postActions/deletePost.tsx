import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { showSnackbar } from '../snackbarActions/showSnackbar';
import { getAccessToken } from 'config/getAssessToken';
import { RootState } from '../../store';
import { api } from 'config/apiConfig';
import { IPost } from 'models/IPost';
import { getPosts } from './getPosts';


export const deletePost =
  (post: IPost): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.delete(`post/delete/${post.id}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getPosts());
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  };