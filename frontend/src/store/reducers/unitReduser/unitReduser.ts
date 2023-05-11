import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUnit } from '../../../models/IUnit';
import { UnitState } from './UnitState';

const initialState: UnitState = {
  units: [],
  selectedUnit: null,
  isLoading: false,
  error: null,
};

const unitSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    getUnitsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUnitsSuccess(state, action: PayloadAction<IUnit[]>) {
      state.isLoading = false;
      state.units = action.payload;
    },
    getUnitsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectUnit(state, action: PayloadAction<IUnit>) {
      state.selectedUnit = action.payload;
    },
  },
});

export const {
  getUnitsStart,
  getUnitsSuccess,
  getUnitsFailure,
  selectUnit,
} = unitSlice.actions;

export default unitSlice.reducer;