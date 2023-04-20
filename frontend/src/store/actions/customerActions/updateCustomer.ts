import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { showSnackbar } from '../snackbarActions/showSnackbar';
import { getCustomers } from './getCustomers';
import { RootState } from '../../store';
import { getAccessToken } from 'config/getAssessToken';
import { api } from 'config/apiConfig';
import { ICustomer } from '../../../models/ICustomer';

export const updateCustomer = (
    customer: ICustomer,
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
        try {
            await api.put(`customer/update/${customer.id}`, customer, {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            });
            dispatch(getCustomers());
        } catch (error) {
            dispatch(showSnackbar('Server Error :(', 'error'));
        }
    };