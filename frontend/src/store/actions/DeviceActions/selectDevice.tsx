import {
  selectDevice,
} from '../../reducers/deviceReducer/deviceReducer'

import { IDevice } from '../../../models/IDevice'


export const selectDeviceAction = (device: IDevice) => (dispatch: any) => {
  dispatch(selectDevice(device))
}
