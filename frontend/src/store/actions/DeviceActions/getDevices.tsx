import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getDevicesStart,
  getDevicesSuccess,
  getDevicesFailure,
} from '../../reducers/deviceReducer';

import { IDevice } from '../../../models/IDevice';

import { RootState } from 'store/store';

const API_URL = 'http://127.0.0.1:5000/device';

interface ApiError {
  message: string;
}
export const getDevices = (): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  AnyAction
> => async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
  try {
    dispatch(getDevicesStart());
    const response = await axios.get<IDevice[]>(`${API_URL}/get`);
    dispatch(getDevicesSuccess(response.data));
  } catch (error) {
    dispatch(getDevicesFailure((error as ApiError).message));
  }
};