import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RootState } from '../../../store';
import { RemoveImageSuccessAction } from '../../../reducers/userReducer/UserActionTypes'
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { getAccessToken } from 'security/getAssessToken';

export const removeImage = (
  user_id: string
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  try {
    await api.post(`/user/remove-image/${user_id}`, {}, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    dispatch<RemoveImageSuccessAction>({
      type: 'REMOVE_IMAGE_SUCCESS',
    });
  } catch (error) {
    dispatch(showSnackbar('Image removal error', 'error'));
  }
};