import { Button } from '@mui/material'

import { IButtonProps } from '../Models/IButtonProps'

export const ChangeButton: React.FC<IButtonProps> = ({
  type = 'submit',
  disabled,
}) => {
  return (
    <Button
      variant="outlined"
      type={type}
      disabled={disabled}
    >
      Change
    </Button>
  )
}
