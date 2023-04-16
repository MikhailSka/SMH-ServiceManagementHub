import { api } from 'config/apiConfig';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RootState } from '../../store';
import { UploadImageSuccessAction } from '../../reducers/userReducer/UserActionTypes'
import { getAccessToken } from 'config/getAssessToken';

export const uploadImage = (
  user_id: string,
  file: File
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    await api.post(`/user/upload-image/${user_id}`, formData, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        dispatch<UploadImageSuccessAction>({
          type: 'UPLOAD_IMAGE_SUCCESS',
          payload: reader.result.toString(),
          
        });
      } else {
        console.error('Failed to convert image to base64');
      }
    };
    reader.readAsDataURL(file);
  } catch (error) {
    console.error('Image upload error:', error);
    throw error;
  }
};