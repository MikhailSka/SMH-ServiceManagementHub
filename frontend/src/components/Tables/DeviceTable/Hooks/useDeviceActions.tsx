import { IDevice } from 'models/IDevice'
import { useAppDispatch } from 'store/hooks'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { DeleteConfirmation } from 'components/Alerts/DeleteConfirmation'
import { deleteDevice } from 'store/actions/tableActions/deviceActions/deteteDevice'
import { DeviceForm } from 'components/Forms/TableForms/DeviceForm/DeviceForm'

export const useDeviceActions = (device: IDevice) => {
  const { openDialog } = useDialogContext()
  const dispatch = useAppDispatch()

  const handleUpdate = () => {
    const content = <DeviceForm device={device} />
    const title = 'Update Device'
    openDialog(content, title)
  }

  const handleDelete = () => {
    const action = () => {
      dispatch(deleteDevice(device))
    }
    const text = 'Are you sure you want to delete this device?'
    const content = <DeleteConfirmation action={action} text={text} />
    const title = 'Delete Device'
    openDialog(content, title)
  }

  return { handleUpdate, handleDelete }
}