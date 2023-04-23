import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { AddButton } from 'components/Buttons/Components/AddButton'
import { UnitForm } from 'components/Forms/UnitForm/UnitForm'

export const UnitTableToolbar: React.FC = () => {
  const { openDialog } = useDialogContext()

  const handleAddButtonClick = () => {
    const content = <UnitForm />
    const title = 'Add Unit'
    openDialog(content, title)
  }

  return <AddButton handleAction={handleAddButtonClick} />
}