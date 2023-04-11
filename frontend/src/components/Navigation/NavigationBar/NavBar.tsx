import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { useAppSelector } from 'store/hooks';
import { LogoNarrow } from 'components/IconsAndAnimations/Logo/LogoNarrow';
import { LogoWide } from 'components/IconsAndAnimations/Logo/LogoWide';
import { MenuBar } from '../Tabs/Components/Menu/MenuBar';
import { MenuOptionButtons } from '../Tabs/Components/Menu/MenuOptionButtons';
import { AccountBar } from '../Tabs/Components/Account/AccountBar';
import { TabProvider } from '../Tabs/Context/TabProvider';
import { RootState } from 'store/store';

export const SMHNavBar: React.FC = () => {

  return (
    <AppBar position="static" style={{ background: '#292929' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TabProvider>
            <LogoNarrow />
            <MenuBar />
            </TabProvider>
            <TabProvider>
            <LogoWide />
            <MenuOptionButtons />
            <AccountBar />
          </TabProvider>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
