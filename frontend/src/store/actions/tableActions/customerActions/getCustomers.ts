import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { getCustomersStart, getCustomersSuccess } from 'store/reducers/tableRedusers/customerReduser/customerReduser';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { RootState } from '../../../store';
import { getAccessToken } from 'security/getAssessToken';
import { api } from 'config/apiConfig';
import { ICustomer } from '../../../../models/ICustomer';

export const getCustomers = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
  try {
    dispatch(getCustomersStart());
    const response = await api.get<ICustomer[]>(`customer/get`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    dispatch(getCustomersSuccess(response.data));
  } catch (error) {
    dispatch(showSnackbar('Server Error :(', 'error'));
  }
};
