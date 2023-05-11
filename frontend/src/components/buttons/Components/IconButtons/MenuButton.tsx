import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip } from '@mui/material';

import { IButtonProps } from '../../Models/IButtonProps';

export const MenuButton: React.FC<IButtonProps> = ({ handleAction, type = 'button' }) => {
  return (
    <Tooltip title="Open Menu">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleAction}
        color="inherit"
        type={type}
      >
        <MenuIcon />
      </IconButton>
    </Tooltip>
  );
};