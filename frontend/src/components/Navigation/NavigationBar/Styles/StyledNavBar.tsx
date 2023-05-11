import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import { sideNavBarWidth } from 'components/Navigation/SideNavBar/Componets/sideNavBarWidth';

interface NavBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const StyledNavBar = styled(MuiAppBar, {

    shouldForwardProp: (prop) => prop !== 'open',
  })<NavBarProps>(({ theme, open }) => ({
    height: '64px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeIn,
      duration: 100
    }),
    ...(open && {
      width: `calc(100% - ${sideNavBarWidth}px)`,
      marginLeft: `${sideNavBarWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  