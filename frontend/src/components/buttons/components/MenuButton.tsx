import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Tooltip } from '@mui/material'

import { IButtonProps } from '../models/IButtonProps'

export function MenuButton({ handleAction }: IButtonProps) {
  return (
    <Tooltip title={'Open Menu'}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleAction}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </Tooltip>
  )
}
