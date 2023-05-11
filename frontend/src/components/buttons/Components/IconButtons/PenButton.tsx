import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';

import { IButtonProps } from '../../Models/IButtonProps';

export const PenButton: React.FC<IButtonProps> = ({ handleAction, type = 'button' }) => {
  return (
    <Tooltip title="Edit Row">
      <IconButton
        style={{ color: '#f9992d' }}
        aria-label="edit"
        size="large"
        onClick={handleAction}
        type={type}
      >
        <EditIcon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  )
}
