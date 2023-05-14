import { useAppDispatch } from 'store/hooks'
import { IService } from 'models/IService'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { ServiceForm } from 'components/Forms/TableForms/ServiceForm/ServiceForm'
import { getUnitHistories } from 'store/actions/unitHistoryActions/getUnitHistories'

export const useServiceActions = (service: IService) => {
  const { openDialog } = useDialogContext()
  const dispatch = useAppDispatch()
  
  const handleUpdate = () => {
    const content = <ServiceForm service={service} />
    const title = 'Update Location'
    openDialog(content, title)
  }

  const handleHistory = () => {
      dispatch(getUnitHistories(service.id!))
  }

  return { handleUpdate, handleHistory }
}