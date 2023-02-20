import { useDevices } from 'services/data/components/DeviceService'

export function MuiDeviceTableLoader() {
  const { devices, loading, deleteDevice, addDevice, updateDevice } =
    useDevices()
  return { devices, loading, deleteDevice, addDevice, updateDevice }
}
