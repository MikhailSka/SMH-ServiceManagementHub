import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { AddButton } from 'components/Buttons/Components/IconButtons/AddButton'
import { CustomerForm } from 'components/Forms/CustomerForm/CustomerForm'

export const CustomerTableToolbar: React.FC = () => {
  const { openDialog } = useDialogContext()

  const handleAddButtonClick = () => {
    const content = <CustomerForm />
    const title = 'Add Customer'
    openDialog(content, title)
  }

  return <AddButton handleAction={handleAddButtonClick} />
}
