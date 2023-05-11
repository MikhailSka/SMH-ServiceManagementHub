import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

import { IButtonProps } from '../../Models/IButtonProps';

export const CloseButton: React.FC<IButtonProps> = ({ handleAction, style }) => {
  return (
    <IconButton
          edge="end"
          color="inherit"
          onClick={handleAction}
          aria-label="close"
          sx={style}
        >
        <CloseIcon />
    </IconButton>
  );
}