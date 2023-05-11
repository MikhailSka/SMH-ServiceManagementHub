import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';

import { IButtonProps } from '../../Models/IButtonProps';

export const TrashButton: React.FC<IButtonProps> = ({ handleAction, type = 'button' }) => {
  return (
    <Tooltip title='Delete Row'>
      <IconButton
        style={{ color: '#a82a2a' }}
        aria-label="delete"
        size="large"
        onClick={handleAction}
        type={type}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  );
};