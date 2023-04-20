import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUnitLocationHistory } from '../../../models/IUnitLocationHistory';
import { UnitLocationHistoryState } from './UnitLocationHistoryState';

const initialState: UnitLocationHistoryState = {
  unitLocationHistories: [],
  selectedUnitLocationHistory: null,
  isLoading: false,
  error: null,
};

const unitLocationHistorySlice = createSlice({
  name: 'unitLocationHistories',
  initialState,
  reducers: {
    getUnitLocationHistoriesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUnitLocationHistoriesSuccess(state, action: PayloadAction<IUnitLocationHistory[]>) {
      state.isLoading = false;
      state.unitLocationHistories = action.payload;
    },
    getUnitLocationHistoriesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectUnitLocationHistory(state, action: PayloadAction<IUnitLocationHistory>) {
      state.selectedUnitLocationHistory = action.payload;
    },
  },
});

export const {
  getUnitLocationHistoriesStart,
  getUnitLocationHistoriesSuccess,
  getUnitLocationHistoriesFailure,
  selectUnitLocationHistory,
} = unitLocationHistorySlice.actions;

export default unitLocationHistorySlice.reducer;