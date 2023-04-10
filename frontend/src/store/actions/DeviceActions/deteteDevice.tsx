import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

import { getDevicesFailure } from '../../reducers/deviceReducer/deviceReducer'
import { getDevices } from './getDevices'
import { RootState } from '../../store'
import { getAccessToken } from 'config/getAssessToken'
import { api } from 'config/apiConfig'
import { IDevice } from '../../../models/IDevice'

interface ApiError {
  message: string
}

export const deleteDevice =
  (
    device: IDevice
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.delete(`device/delete/${device.id}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getDevices())
    } catch (error) {
      dispatch(getDevicesFailure((error as ApiError).message))
    }
  }
