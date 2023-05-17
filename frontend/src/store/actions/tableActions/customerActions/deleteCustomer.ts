import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { getCustomers } from './getCustomers';
import { RootState } from '../../../store';
import { getAccessToken } from 'security/getAssessToken';
import { api } from 'config/apiConfig';
import { ICustomer } from '../../../../models/ICustomer';

export const deleteCustomer = (
    customer: ICustomer,
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
        try {
            await api.delete(`customer/delete/${customer.id}`, {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            });
            dispatch(getCustomers());
        } catch (error) {
            dispatch(showSnackbar('Server Error :(', 'error'));
        }
    };