import { IDevice } from '../../../models/IDevice';

export interface DeviceState {
  devices: IDevice[];
  selectedDevice: IDevice | null;
  isLoading: boolean;
  error: string | null;
}
