import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';

interface AccountMenuItemsProps {
  onSettingsClick: () => void;
  onLogoutClick: () => void;
  onClose: () => void;
}

export const AccountMenuItems: React.FC<AccountMenuItemsProps> = ({
  onSettingsClick,
  onLogoutClick,
  onClose,
}) => {
  return (
    <>
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <EmailIcon fontSize="small" />
        </ListItemIcon>
        Email
      </MenuItem>
      <MenuItem onClick={onSettingsClick}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={onLogoutClick}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
};