import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOperator } from '../../../../models/IOperator';
import { OperatorState } from './OperatorState';

const initialState: OperatorState = {
  operators: [],
  selectedOperator: null,
  isLoading: false,
  error: null,
};

const operatorSlice = createSlice({
  name: 'operators',
  initialState,
  reducers: {
    getOperatorsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getOperatorsSuccess(state, action: PayloadAction<IOperator[]>) {
      state.isLoading = false;
      state.operators = action.payload;
    },
    getOperatorsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectOperator(state, action: PayloadAction<IOperator>) {
      state.selectedOperator = action.payload;
    },
  },
});

export const {
  getOperatorsStart,
  getOperatorsSuccess,
  getOperatorsFailure,
  selectOperator,
} = operatorSlice.actions;

export default operatorSlice.reducer;