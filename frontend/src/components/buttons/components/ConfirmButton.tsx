import Button from "@material-ui/core/Button";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { IButtonProps } from '../models/IButtonProps';

export function ConfirmButton({ handleAction }: IButtonProps) {
  return (
    <Button
      type='submit'
      variant="text"
      fullWidth={true}
      disableElevation={true}
      style={{ color: '#4caf50' , marginTop: 2}}
      startIcon={<TaskAltIcon />}
      onClick={handleAction}

    >
      Confirm
    </Button>
  );
}