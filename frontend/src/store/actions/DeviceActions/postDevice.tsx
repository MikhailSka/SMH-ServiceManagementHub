import axios from 'axios'
import { ThunkAction ,ThunkDispatch} from 'redux-thunk'
import { AnyAction } from 'redux'

import {
  getDevicesFailure,
} from '../../reducers/deviceReducer'
import { RootState } from 'store/store'
import { getDevices } from './getDevices'
import { IDevice } from '../../../models/IDevice'

const API_URL = 'http://127.0.0.1:5000/device'

interface ApiError {
  message: string
}


export const postDevice =
  (device: IDevice): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  AnyAction
> => async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await axios.post(`${API_URL}/post`, device)
      dispatch(getDevices()) 
    } catch (error) {
      dispatch(getDevicesFailure((error as ApiError).message))
    }
  }