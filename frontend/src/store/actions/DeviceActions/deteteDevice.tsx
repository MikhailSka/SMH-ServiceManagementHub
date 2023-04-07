import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios'

import {
  getDevicesFailure,
} from '../../reducers/deviceReducer'
import { getDevices } from './getDevices'
import { RootState } from 'store/store';
import { IDevice } from '../../../models/IDevice'

const API_URL = 'http://127.0.0.1:5000/device'

interface ApiError {
  message: string
}

export const deleteDevice =
  (device: IDevice): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  AnyAction
> => async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await axios.delete(`${API_URL}/delete/${device.id}`)
      dispatch(getDevices())
    } catch (error) {
      dispatch(getDevicesFailure((error as ApiError).message))
    }
  }