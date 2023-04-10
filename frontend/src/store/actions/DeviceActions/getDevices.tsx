import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

import {
  getDevicesStart,
  getDevicesSuccess,
  getDevicesFailure,
} from '../../reducers/deviceReducer/deviceReducer'
import { getAccessToken } from 'config/getAssessToken'
import { RootState } from '../../store'
import { api } from 'config/apiConfig'
import { IDevice } from '../../../models/IDevice'

interface ApiError {
  message: string
}
export const getDevices =
  (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      console.log(getAccessToken())
      dispatch(getDevicesStart())
      const response = await api.get<IDevice[]>(`device/get`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      })
      dispatch(getDevicesSuccess(response.data))
    } catch (error) {
      dispatch(getDevicesFailure((error as ApiError).message))
    }
  }
