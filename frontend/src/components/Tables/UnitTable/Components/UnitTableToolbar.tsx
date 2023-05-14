import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { AddButton } from 'components/Buttons/Components/IconButtons/AddButton'
import { UnitForm } from 'components/Forms/TableForms/UnitForm/UnitForm'

export const UnitTableToolbar: React.FC = () => {
  const { openDialog } = useDialogContext()

  const handleAddButtonClick = () => {
    const content = <UnitForm />
    const title = 'Add Unit'
    openDialog(content, title)
  }

  return <AddButton handleAction={handleAddButtonClick} />
}