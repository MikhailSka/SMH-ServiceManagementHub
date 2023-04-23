import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

import { IButtonProps } from '../Models/IButtonProps';

export const DeleteButton: React.FC<IButtonProps> = ({ handleAction, type = 'button' }) => {
  return (
    <Button
      variant="outlined"
      color='error'
      startIcon={<DeleteIcon />}
      onClick={handleAction}
      type={type}
    >
      Delete
    </Button>
  );
}