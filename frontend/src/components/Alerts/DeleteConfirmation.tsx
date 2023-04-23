import React from 'react'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { Grid, Box, Typography } from '@mui/material'
import { DeleteButton } from 'components/Buttons/Components/DeleteButton'

interface DeleteConfirmationProps {
  action: () => void
  text: string
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ action, text }) => {
  const { closeDialog } = useDialogContext()

  const handleDelete = () => {
    action()
    closeDialog()
  }

  return (
    <>
      <Box sx={{ p: 2, py: 2 }}>
        <Grid item xs={12}>
          <Typography variant="body1">
            {text}
          </Typography>
        </Grid>
      </Box>
      <Grid item xs={12} container justifyContent="flex-end">
        <DeleteButton handleAction={handleDelete} />
      </Grid>
    </>
  )
}