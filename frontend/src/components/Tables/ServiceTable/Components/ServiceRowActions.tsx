import React from 'react'

import { IService } from 'models/IService'
import { PenButton } from 'components/Buttons/Components/IconButtons/PenButton'
import { useServiceActions } from '../Hooks/useServiceActions'

interface ServiceRowActionsProps {
  service: IService
}

export const ServiceRowActions: React.FC<ServiceRowActionsProps> = ({
  service
}) => {
   const { handleUpdate } = useServiceActions(service)

  return (
    <React.Fragment>
      <PenButton handleAction={handleUpdate}/>
    </React.Fragment>
  )
}