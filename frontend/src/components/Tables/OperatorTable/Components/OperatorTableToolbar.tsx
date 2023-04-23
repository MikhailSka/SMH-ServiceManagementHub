import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { AddButton } from 'components/Buttons/Components/AddButton'
import { OperatorForm } from 'components/Forms/OperatorForm/OperatorForm'

export const OperatorTableToolbar: React.FC = () => {
  const { openDialog } = useDialogContext()

  const handleAddButtonClick = () => {
    const content = <OperatorForm />
    const title = 'Add Operator'
    openDialog(content, title)
  }

  return <AddButton handleAction={handleAddButtonClick} />
}