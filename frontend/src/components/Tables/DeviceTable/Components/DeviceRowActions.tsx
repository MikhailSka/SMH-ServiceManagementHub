import { IDevice } from 'models/IDevice'
import { RowActions } from 'components/Tables/Common/RowActions'
import { useDeviceActions } from '../Hooks/useDeviceActions'

interface DeviceRowActionsProps {
  device: IDevice
}

const DeviceRowActions: React.FC<DeviceRowActionsProps> = ({ device }) => {
  const { handleUpdate, handleDelete } = useDeviceActions(device)

  return <RowActions handleUpdate={handleUpdate} handleDelete={handleDelete} />
}

export default DeviceRowActions