import { IUnit } from 'models/IUnit'
import { useAppDispatch } from 'store/hooks'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { DeleteConfirmation } from 'components/Alerts/DeleteConfirmation'
import { deleteUnit } from 'store/actions/unitActions/deleteUnit'
import { UnitForm } from 'components/Forms/TableForms/UnitForm/UnitForm'

export const useUnitActions = (unit: IUnit) => {
  const { openDialog } = useDialogContext()
  const dispatch = useAppDispatch()

  const handleUpdate = () => {
    const content = <UnitForm unit={unit} />
    const title = 'Update Unit'
    openDialog(content, title)
  }

  const handleDelete = () => {
    const action = () => {
      dispatch(deleteUnit(unit))
    }
    const text = 'Are you sure you want to delete this unit?'
    const content = <DeleteConfirmation action={action} text={text} />
    const title = 'Delete Unit'
    openDialog(content, title)
  }

  return { handleUpdate, handleDelete }
}
