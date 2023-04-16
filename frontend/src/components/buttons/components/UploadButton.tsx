import { Button } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'

import { IButtonProps } from '../Models/IButtonProps'

export const UploadButton: React.FC<IButtonProps> = ({
  type = 'submit',
  component,
}) => {
  return (
    <Button
      variant="text"
      color="primary"
      startIcon={<UploadIcon />}
      type={type}
      component={component as React.ElementType}
    >
      Upload
    </Button>
  )
}
