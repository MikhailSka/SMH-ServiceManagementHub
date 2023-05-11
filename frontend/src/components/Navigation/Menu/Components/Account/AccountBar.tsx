import React from 'react'
import { Box, Menu } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { menuStyle } from '../../Styles/menuStyle'
import { AccountMenuItems } from './AccountMenuItems'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { AccountButton } from 'components/Buttons/Components/AccountButton'
import { useMenuContext } from '../../Context/useMenuContext'
import { logout as logoutAction } from 'store/actions/userActions/logout'
import { RootState } from 'store/store'

export const AccountBar: React.FC = () => {
  const { openMenu, closeMenu, menu } = useMenuContext()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  const handleSettings = () => {
    navigate('/settings')
  }

  const { userData } = useAppSelector((state: RootState) => state.user)

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AccountButton handleAction={openMenu} src={userData.image!} />
      <Menu
        id="account-menu"
        anchorEl={menu}
        open={Boolean(menu)}
        onClose={closeMenu}
        onClick={closeMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <AccountMenuItems
          onSettingsClick={handleSettings}
          onLogoutClick={handleLogout}
          onClose={closeMenu}
        />
      </Menu>
    </Box>
  )
}
