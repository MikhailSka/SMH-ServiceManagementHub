import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUnit } from '../../../../models/IUnit';
import { UnitState } from './UnitState';

const initialState: UnitState = {
  units: [],
  isLoading: false,
  error: null,
  totalUnits: 0
};

const unitSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    getUnitsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUnitsSuccess(state, action: PayloadAction<{ data: IUnit[]; total: number }>) {
      state.isLoading = false;
      console.log(action.payload.data)
      state.units = action.payload.data
      state.totalUnits = action.payload.total;
    },
    getUnitsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUnitsStart,
  getUnitsSuccess,
  getUnitsFailure
} = unitSlice.actions;

export default unitSlice.reducer;