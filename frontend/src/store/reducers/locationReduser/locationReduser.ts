import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILocation } from '../../../models/ILocation';
import { LocationState } from './LocationState';

const initialState: LocationState = {
  locations: [],
  selectedLocation: null,
  isLoading: false,
  error: null,
};

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    getLocationsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getLocationsSuccess(state, action: PayloadAction<ILocation[]>) {
      state.isLoading = false;
      state.locations = action.payload;
    },
    getLocationsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectLocation(state, action: PayloadAction<ILocation>) {
      state.selectedLocation = action.payload;
    },
  },
});

export const {
  getLocationsStart,
  getLocationsSuccess,
  getLocationsFailure,
  selectLocation
} = locationSlice.actions;

export default locationSlice.reducer;