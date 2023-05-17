import { useAppDispatch } from 'store/hooks'
import { IOperator } from 'models/IOperator'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { deleteOperator } from 'store/actions/tableActions/operatorActions/deleteOperator'
import { OperatorForm } from 'components/Forms/TableForms/OperatorForm/OperatorForm'
import { DeleteConfirmation } from 'components/Alerts/DeleteConfirmation'

export const useOperatorActions = (operator: IOperator) => {
  const { openDialog } = useDialogContext()
  const dispatch = useAppDispatch()

  const handleUpdate = () => {
    const content = <OperatorForm operator={operator} />
    const title = 'Update Operator'
    openDialog(content, title)
  }

  const handleDelete = () => {
    const action = () => {
      dispatch(deleteOperator(operator))
    }
    const text = 'Are you sure you want to delete this operator?'
    const content = <DeleteConfirmation action={action} text={text} />
    const title = 'Delete Operator'
    openDialog(content, title)
  }

  return { handleUpdate, handleDelete }
}