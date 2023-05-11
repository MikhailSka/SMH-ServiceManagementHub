import React from 'react'
import { MenuItem, Menu as MuiMenu, Box } from '@mui/material'

import { useMenuContext } from '../../Context/useMenuContext'
import { useMenuOptions } from './useMenuOptions'
import { MenuButton } from 'components/Buttons/Components/MenuButton'

export const MenuBar: React.FC = () => {
  const { menu, openMenu, closeMenu } = useMenuContext()
  const menuOptions = useMenuOptions()
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <MenuButton handleAction={openMenu} />
      <MuiMenu
        anchorEl={menu}
        open={Boolean(menu)}
        onClose={closeMenu}
        onClick={closeMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuOptions.map((option) => (
          <MenuItem key={option.key} onClick={option.onClick}>
            {option.key}
          </MenuItem>
        ))}
      </MuiMenu>
    </Box>
  )
}
