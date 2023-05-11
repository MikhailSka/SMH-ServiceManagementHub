import { ILocation } from 'models/ILocation'
import { useAppDispatch } from 'store/hooks'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { DeleteConfirmation } from 'components/Alerts/DeleteConfirmation'
import { deleteLocation } from 'store/actions/locationActions/deleteLocation'
import { LocationForm } from 'components/Forms/LocationForm/LocationForm'

export const useLocationActions = (location: ILocation) => {
  const { openDialog } = useDialogContext()
  const dispatch = useAppDispatch()

  const handleUpdate = () => {
    const content = <LocationForm location={location} />
    const title = 'Update Location'
    openDialog(content, title)
  }

  const handleDelete = () => {
    const action = () => {
      dispatch(deleteLocation(location))
    }
    const text = 'Are you sure you want to delete this location?'
    const content = <DeleteConfirmation action={action} text={text} />
    const title = 'Delete Location'
    openDialog(content, title)
  }

  return { handleUpdate, handleDelete }
}
