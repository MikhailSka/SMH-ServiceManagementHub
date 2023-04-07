import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDevice } from '../../models/IDevice';

export interface DeviceState {
  devices: IDevice[];
  selectedDevice: IDevice | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: DeviceState = {
  devices: [],
  selectedDevice: null,
  isLoading: false,
  error: null,
};

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    getDevicesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getDevicesSuccess(state, action: PayloadAction<IDevice[]>) {
      state.isLoading = false;
      state.devices = action.payload;
    },
    getDevicesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectDevice(state, action: PayloadAction<IDevice>) {
      state.selectedDevice = action.payload;
    },
  },
});

export const {
  getDevicesStart,
  getDevicesSuccess,
  getDevicesFailure,
  selectDevice
} = deviceSlice.actions;

export default deviceSlice.reducer;
