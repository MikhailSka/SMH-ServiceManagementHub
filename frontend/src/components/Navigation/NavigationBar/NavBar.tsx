import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { LogoNarrow } from 'components/IconsAndAnimations/LogoNarrow';
import { LogoWide } from 'components/IconsAndAnimations/LogoWide';
import { MenuBar } from '../Tabs/Components/Menu/MenuBar';
import { MenuOptionButtons } from '../Tabs/Components/Menu/MenuOptionButtons';
import { AccountBar } from '../Tabs/Components/Account/AccountBar';
import { TabProvider } from '../Tabs/Context/TabProvider';

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
