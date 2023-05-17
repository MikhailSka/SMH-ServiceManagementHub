import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IService } from 'models/IService';
import { ServiceState } from './ServiceState';

const initialState: ServiceState = {
    services: [],
    isLoading: false,
    error: null,
};

const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        getServicesStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        getServiceSuccess(state, action: PayloadAction<IService[]>) {
            state.isLoading = false;
            state.services = action.payload;
        },
        getServiceFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});

export const {
    getServiceFailure,
    getServiceSuccess,
    getServicesStart
} = serviceSlice.actions;

export default serviceSlice.reducer;