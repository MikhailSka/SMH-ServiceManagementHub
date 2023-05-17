import { ICustomer } from 'models/ICustomer'
import { useAppDispatch } from 'store/hooks'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { deleteCustomer } from 'store/actions/tableActions/customerActions/deleteCustomer'
import { CustomerForm } from 'components/Forms/TableForms/CustomerForm/CustomerForm'
import { DeleteConfirmation } from 'components/Alerts/DeleteConfirmation'

export const useCustomerActions = (customer: ICustomer) => {
  const { openDialog } = useDialogContext()
  const dispatch = useAppDispatch()

  const handleUpdate = () => {
    const content = <CustomerForm customer={customer} />
    const title = 'Update Customer'
    openDialog(content, title)
  }

  const handleDelete = () => {
    const action = () => {
      dispatch(deleteCustomer(customer))
    }
    const text = 'Are you sure you want to delete this customer?'
    const content = <DeleteConfirmation action={action} text={text} />
    const title = 'Delete Customer'
    openDialog(content, title)
  }

  return { handleUpdate, handleDelete }
}