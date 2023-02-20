import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';

import { IButtonProps } from '../models/IButtonProps';

export function TrashButton({ handleAction }: IButtonProps) {
    return (
        <Tooltip title={"Delete Row"}>
            <IconButton
                style={{ color: '#a82a2a' }}
                aria-label="delete"
                size="large"
                onClick={handleAction}
            >
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
    );
}