import axios from 'axios'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import { getDevicesFailure } from '../../reducers/deviceReducer'
import { getDevices } from './getDevices'
import { RootState } from 'store/store'
import { IDevice } from '../../../models/IDevice'

const API_URL = 'http://127.0.0.1:5000/device'

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
      await axios.put<ApiResponse>(`${API_URL}/update/${device.id}`, device)
      dispatch(getDevices())
    } catch (error) {
      dispatch(getDevicesFailure((error as ApiError).message))
    }
  }
