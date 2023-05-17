import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from '../../../../models/ICustomer';
import { CustomerState } from './CustomerState';

const initialState: CustomerState = {
  customers: [],
  selectedCustomer: null,
  isLoading: false,
  error: null,
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    getCustomersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getCustomersSuccess(state, action: PayloadAction<ICustomer[]>) {
      state.isLoading = false;
      state.customers = action.payload;
    },
    getCustomersFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectCustomer(state, action: PayloadAction<ICustomer>) {
      state.selectedCustomer = action.payload;
    },
  },
});

export const {
  getCustomersStart,
  getCustomersSuccess,
  getCustomersFailure,
  selectCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;