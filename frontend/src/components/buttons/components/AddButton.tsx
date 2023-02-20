import IconButton from '@mui/material/IconButton';
import AddIcon from "@material-ui/icons/Add";
import { Tooltip } from '@mui/material';

import { IButtonProps } from '../models/IButtonProps';

export function AddButton({ handleAction }: IButtonProps) {
    return (
        <Tooltip title={"Add Row"}>
            <IconButton
                style={{ color: '#01579b' }}
                aria-label="delete"
                size="large"
                onClick={handleAction}
            >
                <AddIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
    );
}