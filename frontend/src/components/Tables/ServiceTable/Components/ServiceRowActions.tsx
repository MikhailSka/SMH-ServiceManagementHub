import React from 'react'

import { IService } from 'models/IService'
import { HistoryButton } from 'components/Buttons/Components/IconButtons/HistoryButton'
import { PenButton } from 'components/Buttons/Components/IconButtons/PenButton'
import { useServiceActions } from '../Hooks/useServiceActions'

interface ServiceRowActionsProps {
  service: IService
}

export const ServiceRowActions: React.FC<ServiceRowActionsProps> = ({
  service,
}) => {
   const { handleUpdate, handleHistory } = useServiceActions(service)

  return (
    <React.Fragment>
      <HistoryButton handleAction={handleHistory}/>
      <PenButton handleAction={handleUpdate}/>
    </React.Fragment>
  )
}
