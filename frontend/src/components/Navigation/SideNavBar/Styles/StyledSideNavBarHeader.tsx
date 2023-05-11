import { styled } from '@mui/material/styles';

export const StyledSideNavBarHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));