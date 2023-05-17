import { ThunkDispatch } from 'redux-thunk'
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

import { api } from 'config/apiConfig'
import { RootState } from '../../../store'
import { getDevices } from './getDevices'
import { IDevice } from '../../../../models/IDevice'
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { getAccessToken } from 'security/getAssessToken'

export const postDevice =
  (
    device: IDevice
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.post(`device/post`, device, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getDevices())
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  }
