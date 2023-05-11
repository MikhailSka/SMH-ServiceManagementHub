import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { IButtonProps } from '../../Models/IButtonProps';

export const AddButton: React.FC<IButtonProps> = ({ handleAction, type = 'button' }) => {
    return (
        <Tooltip title={"Add Row"}>
            <IconButton
                style={{ color: '#01579b' }}
                aria-label="delete"
                size="large"
                onClick={handleAction}
                type={type}
            >
                <AddIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
    );
}