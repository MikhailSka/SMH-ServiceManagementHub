import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomerLocation } from '../../../models/ICustomerLocation';
import { CustomerLocationState } from './CustomerLocationState';

const initialState: CustomerLocationState = {
  customerLocations: [],
  selectedCustomerLocation: null,
  isLoading: false,
  error: null,
};

const customerLocationSlice = createSlice({
  name: 'customerLocations',
  initialState,
  reducers: {
    getCustomerLocationsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getCustomerLocationsSuccess(state, action: PayloadAction<ICustomerLocation[]>) {
      state.isLoading = false;
      state.customerLocations = action.payload;
    },
    getCustomerLocationsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectCustomerLocation(state, action: PayloadAction<ICustomerLocation>) {
      state.selectedCustomerLocation = action.payload;
    },
  },
});

export const {
  getCustomerLocationsStart,
  getCustomerLocationsSuccess,
  getCustomerLocationsFailure,
  selectCustomerLocation
} = customerLocationSlice.actions;

export default customerLocationSlice.reducer;