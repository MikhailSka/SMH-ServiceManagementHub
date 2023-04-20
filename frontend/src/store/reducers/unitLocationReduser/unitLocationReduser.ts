import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUnitLocation } from '../../../models/IUnitLocation';
import { UnitLocationState } from './UnitLocationState';

const initialState: UnitLocationState = {
  unitLocations: [],
  selectedUnitLocation: null,
  isLoading: false,
  error: null,
};

const unitLocationSlice = createSlice({
  name: 'unitLocations',
  initialState,
  reducers: {
    getUnitLocationsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUnitLocationsSuccess(state, action: PayloadAction<IUnitLocation[]>) {
      state.isLoading = false;
      state.unitLocations = action.payload;
    },
    getUnitLocationsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectUnitLocation(state, action: PayloadAction<IUnitLocation>) {
      state.selectedUnitLocation = action.payload;
    },
  },
});

export const {
  getUnitLocationsStart,
  getUnitLocationsSuccess,
  getUnitLocationsFailure,
  selectUnitLocation,
} = unitLocationSlice.actions;

export default unitLocationSlice.reducer;