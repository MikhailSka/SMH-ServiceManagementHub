import { Button } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { IButtonProps } from '../../Models/IButtonProps';

export const ConfirmButton: React.FC<IButtonProps> = ({ handleAction, type = 'submit' }) => {
  return (
    <Button
      variant='outlined'
      color='success'
      startIcon={<TaskAltIcon />}
      onClick={handleAction}
      type={type}
    >
      Confirm
    </Button>
  );
}