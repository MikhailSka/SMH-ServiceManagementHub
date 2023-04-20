import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { getAccessToken } from 'config/getAssessToken'
import { api } from 'config/apiConfig'
import { ICustomerLocation } from '../../../models/ICustomerLocation'
import { getCustomerLocations } from './getCustomerLocations'
import { showSnackbar } from '../snackbarActions/showSnackbar'

export const updateCustomerLocation =
  (
    customerLocation: ICustomerLocation
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      await api.put(`customer-location/update/${customerLocation.id}`, customerLocation, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      dispatch(getCustomerLocations())
    } catch (error) {
      dispatch(showSnackbar('Server Error :(', 'error'));
    }
  }