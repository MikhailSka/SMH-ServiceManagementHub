import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { getServices } from './getServices';
import { RootState } from '../../store';
import { getAccessToken } from 'config/getAssessToken';
import { api } from 'config/apiConfig';
import { showSnackbar } from '../snackbarActions/showSnackbar';
import { IService } from 'models/IService';

export const updateUnitAndCreateHistory = (
    service: IService,
    userId: string,
): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
    try {
        await api.put<{service: IService}>(`service/update`, {
            id: service.id,
            location_id: service.location_id,
            description: service.description,
            service_date: service.service_date,
            user_id: userId
        }, {
            headers: { Authorization: `Bearer ${getAccessToken()}` },
        });

        dispatch(getServices()); 
    } catch (error) {
        dispatch(showSnackbar('Server Error :(', 'error'));
    }
};