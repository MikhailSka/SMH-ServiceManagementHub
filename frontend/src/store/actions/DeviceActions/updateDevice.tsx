import { ThunkAction } from 'redux-thunk'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import { api } from 'config/apiConfig'
import { getDevicesFailure } from '../../reducers/deviceReducer/deviceReducer'
import { getDevices } from './getDevices'
import { RootState } from '../../store'
import { getAccessToken } from 'config/getAssessToken'
import { IDevice } from '../../../models/IDevice'

interface ApiResponse {
  data: IDevice[]
}

interface ApiError {
  message: string
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
      dispatch(getDevicesFailure((error as ApiError).message))
    }
  }
