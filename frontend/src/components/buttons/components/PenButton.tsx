import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';

import { IButtonProps } from '../models/IButtonProps';

export function PenButton({ handleAction }: IButtonProps) {
    return (
        <Tooltip title={"Edit Row"}>
            <IconButton
                style={{ color: '#f9992d' }}
                aria-label="edit"
                size="large"
                onClick={handleAction}
            >
                <EditIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
    );
}