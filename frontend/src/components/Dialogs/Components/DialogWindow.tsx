import React, { ReactNode } from 'react'

import { Dialog } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { Box } from '@mui/material'
import { DialogContent } from '@mui/material'

import { CloseButton } from 'components/Buttons/Components/CloseButton'

interface DialogProps {
  isOpen: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

const DialogWindow: React.FC<DialogProps> = ({
  isOpen,
  title,
  onClose,
  children,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} sx={{minWidth:"300px"}}>
      <DialogTitle>
        {title}
        <CloseButton
          handleAction={onClose}
          style={{ position: 'absolute', top: 10, right: 20 }}
        />
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default DialogWindow
