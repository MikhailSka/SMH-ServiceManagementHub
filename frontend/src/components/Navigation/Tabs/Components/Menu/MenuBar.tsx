import React from 'react';
import Box from '@mui/material/Box';

import { MenuButton } from 'components/Buttons/Components/MenuButton';
import { TabOptions } from '../../Common/TabOptions';
import { useTabContext } from '../../Context/useTabContext';
import { menuPages } from './MenuPages';

export const MenuBar: React.FC = () => {
  const { openTab } = useTabContext();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <MenuButton handleAction={openTab} />
      <TabOptions pages={menuPages} />
    </Box>
  );
};