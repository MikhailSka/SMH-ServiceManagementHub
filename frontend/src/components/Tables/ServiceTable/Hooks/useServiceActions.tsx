import { IService } from 'models/IService'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { ServiceForm } from 'components/Forms/TableForms/ServiceForm/ServiceForm'

export const useServiceActions = (service: IService) => {
  const { openDialog } = useDialogContext()
  
  const handleUpdate = () => {
    const content = <ServiceForm service={service} />
    const title = 'Update Location'
    openDialog(content, title)
  }

  return { handleUpdate }
} 