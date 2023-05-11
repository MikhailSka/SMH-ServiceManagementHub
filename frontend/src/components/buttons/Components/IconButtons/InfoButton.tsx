import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

import { useDialogContext } from 'components/Dialogs/Context/useDialogContext';
import { IButtonProps } from 'components/Buttons/Models/IButtonProps';

export const InfoButton: React.FC<IButtonProps> = ({ text, type = 'button' }) => {
  const { openDialog } = useDialogContext();

  const handleClick = () => {
    openDialog(text, 'Description');
  };

  return (
    <Tooltip title='Show Description'>
      <IconButton
        color='primary'
        aria-label="info"
        size="large"
        onClick={handleClick}
        type={type}
      >
        <InfoIcon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  );
};