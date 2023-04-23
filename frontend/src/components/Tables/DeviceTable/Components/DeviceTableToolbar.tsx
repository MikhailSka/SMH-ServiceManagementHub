import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { AddButton } from 'components/Buttons/Components/AddButton'
import { DeviceForm } from 'components/Forms/DeviceForm/DeviceForm'

export const DeviceTableToolbar: React.FC = () => {
  const { openDialog } = useDialogContext()

  const handleAddButtonClick = () => {
    const content = <DeviceForm />
    const title = 'Add Device'
    openDialog(content, title)
  }

  return <AddButton handleAction={handleAddButtonClick} />
}

