import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import EmailIcon from '@mui/icons-material/Email';

import { useAppDispatch } from 'store/hooks'
import { AccountButton } from 'components/Buttons/Components/AccountButton'
import { useTabContext } from '../../Context/useTabContext'
import { logout as logoutAction } from 'store/actions/authActions/logout'

export const AccountBar: React.FC = () => {
  const { openTab, closeTab, tab } = useTabContext()
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logoutAction());
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AccountButton handleAction={openTab} src='https://i.redd.it/apoj9nusz3291.jpg'/>
      <Menu
        id="account-menu"
        anchorEl={tab}
        open={Boolean(tab)}
        onClose={closeTab}
        onClick={closeTab}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
    
        <MenuItem onClick={closeTab}>
          <ListItemIcon>
            <EmailIcon fontSize="small" />
          </ListItemIcon>
          Email
        </MenuItem>
        <MenuItem onClick={closeTab}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}
