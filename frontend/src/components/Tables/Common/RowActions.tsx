import React from 'react'
import { PenButton } from 'components/Buttons/Components/PenButton'
import { TrashButton } from 'components/Buttons/Components/TrashButton'

interface RowActionsProps {
  handleUpdate: () => void
  handleDelete: () => void
}

export const RowActions: React.FC<RowActionsProps> = ({ handleUpdate, handleDelete }) => {
  return (
    <>
      <PenButton handleAction={handleUpdate} />
      <TrashButton handleAction={handleDelete} />
    </>
  )
}
