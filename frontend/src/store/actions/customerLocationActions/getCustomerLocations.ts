import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getAccessToken } from 'config/getAssessToken'
import { api } from 'config/apiConfig'
import { ICustomerLocation } from '../../../models/ICustomerLocation'
import {
  getCustomerLocationsStart,
  getCustomerLocationsSuccess,
  getCustomerLocationsFailure,
} from 'store/reducers/customerLocationReduser/customerLocationReduser';
import { showSnackbar } from '../snackbarActions/showSnackbar'

export const getCustomerLocations =
  (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch(getCustomerLocationsStart())
      const response = await api.get<ICustomerLocation[]>(`customer-location/get`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      })
      dispatch(getCustomerLocationsSuccess(response.data))
    } catch (error) {
      dispatch(getCustomerLocationsFailure('Server Error :('))
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  }