import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUnitHistory } from 'models/IUnitHistory';
import { UnitHistoryState } from './UnitHistoryState';

const initialState: UnitHistoryState = {
  unitHistories: [],
  isLoading: false,
  error: null,
};

const unitHistorySlice = createSlice({
  name: 'unitHistories',
  initialState,
  reducers: {
    getUnitHistoriesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUnitHistoriesSuccess(state, action: PayloadAction<IUnitHistory[]>) {
      state.isLoading = false;
      action.payload.forEach((newUnitHistory) => {
        if (!state.unitHistories.some(unitHistory => unitHistory.id === newUnitHistory.id)) {
          state.unitHistories.push(newUnitHistory);
        }
      });
    },
    getUnitHistoriesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const {
  getUnitHistoriesStart,
  getUnitHistoriesSuccess,
  getUnitHistoriesFailure,
} = unitHistorySlice.actions;

export default unitHistorySlice.reducer;