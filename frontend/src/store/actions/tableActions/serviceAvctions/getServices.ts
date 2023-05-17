import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { getServiceSuccess,getServicesStart } from 'store/reducers/tableRedusers/serviceReduser/serviceReduser';
import { showSnackbar } from '../../componentsActions/snackbarActions/showSnackbar';
import { RootState } from '../../../store';
import { getAccessToken } from 'security/getAssessToken';
import { api } from 'config/apiConfig';
import { IService } from 'models/IService';

export const getServices = (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => async (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
  try {
    dispatch(getServicesStart());
    const response = await api.get<IService[]>(`service/get`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    dispatch(getServiceSuccess(response.data));
  } catch (error) {
    dispatch(showSnackbar('Server Error :(', 'error'));
  }
};
