import { Button } from '@mui/material'

import { IButtonProps } from '../../Models/IButtonProps'

export const GoBackButton: React.FC<IButtonProps> = ({
  handleAction,
  style,
}) => {
  return (
    <Button variant="contained" onClick={handleAction} sx={style}>
      Go Back
    </Button>
  )
}
