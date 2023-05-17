import { ThunkAction } from 'redux-thunk'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import { api } from 'config/apiConfig'
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { getDevices } from './getDevices'
import { RootState } from '../../../store'
import { getAccessToken } from 'security/getAssessToken'
import { IDevice } from '../../../../models/IDevice'

interface ApiResponse {
  data: IDevice[]
}

export const updateDevice =
(
  device: IDevice
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.put<ApiResponse>(`device/update/${device.id}`, device, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getDevices())
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  }
