import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { getAccessToken } from 'security/getAssessToken'
import { RootState } from '../../../store'
import { api } from 'config/apiConfig'
import { IPost } from 'models/IPost'
import { getPosts } from './getPosts'

export const updatePost =
  (post: IPost): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.put(`post/update/${post.id}`, post, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      })
      dispatch(getPosts())
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  }
