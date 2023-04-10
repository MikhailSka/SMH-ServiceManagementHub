import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { useAppDispatch } from 'store/hooks'
import { deleteDevice } from 'store/actions/deviceActions/deteteDevice'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'

import { TrashButton } from 'components/Buttons/Components/TrashButton'
import { PenButton } from 'components/Buttons/Components/PenButton'
import { DeleteButton } from 'components/Buttons/Components/DeleteButton'
import { IDevice } from '../../../../models/IDevice'
import { DeviceForm } from 'components/Forms/DeviceForm'

interface DeviceRowActionsProps {
  device: IDevice
}

const DeviceRowActions: React.FC<DeviceRowActionsProps> = ({ device }) => {
  const { openDialog, closeDialog } = useDialogContext()
  const dispatch = useAppDispatch()

  const handleUpdateButtonClick = () => {
    const content = <DeviceForm device={device} />
    const title = 'Update Device'
    openDialog(content, title)
  }

  const handleDeleteButtonClick = () => {
    const content = <DeleteConfirmation device={device} />
    const title = 'Delete Device'
    openDialog(content, title)
  }

  const DeleteConfirmation: React.FC<{ device: IDevice }> = ({ device }) => {
    const handleDelete = () => {
      dispatch(deleteDevice(device))
      closeDialog()
    }

    return (
      <>
        <Box sx={{ p: 2, py: 2 }}>
          <Grid item xs={12}>
            <Typography variant="body1">
              Are you sure you want to delete this device?
            </Typography>
          </Grid>
        </Box>
        <Grid item xs={12} container justifyContent="flex-end">
          <DeleteButton handleAction={handleDelete} />
        </Grid>
      </>
    )
  }

  return (
    <>
      <PenButton handleAction={handleUpdateButtonClick} />
      <TrashButton handleAction={handleDeleteButtonClick} />
    </>
  )
}

export default DeviceRowActions
