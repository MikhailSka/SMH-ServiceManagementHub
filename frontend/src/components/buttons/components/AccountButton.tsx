import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Tooltip } from '@mui/material'

import { IButtonProps } from '../models/IButtonProps'

export function AccountButton({ handleAction }: IButtonProps) {
  return (
    <Tooltip title={'Account Options'}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleAction}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Tooltip>
  )
}
