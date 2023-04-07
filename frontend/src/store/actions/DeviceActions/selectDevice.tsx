import {
  selectDevice,
} from '../../reducers/deviceReducer'

import { IDevice } from '../../../models/IDevice'


export const selectDeviceAction = (device: IDevice) => (dispatch: any) => {
  dispatch(selectDevice(device))
}
