import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

import { IButtonProps } from '../Models/IButtonProps';

export const DeleteButton: React.FC<IButtonProps> = ({ handleAction, type = 'button' }) => {
  return (
    <Button
      variant="text"
      style={{ color: '#a82a2a' }}
      startIcon={<DeleteIcon />}
      onClick={handleAction}
      type={type}
    >
      Delete
    </Button>
  );
}