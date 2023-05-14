import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { IButtonProps } from '../../Models/IButtonProps';

export const HistoryButton: React.FC<IButtonProps> = ({ handleAction, type = 'button' }) => {
    return (
        <Tooltip title={"View History"}>
            <IconButton
                style={{ color: '#626cd1' }}
                aria-label="history"
                size="large"
                onClick={handleAction}
                type={type}
            >
                <HistoryIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
    );
}