import React from 'react';
import Box from '@mui/material/Box';

import { AccountButton } from 'components/Buttons/Components/AccountButton';
import { TabOptions } from '../../Common/TabOptions';
import { useTabContext } from '../../Context/useTabContext';
import { accountPages } from './AccountPages';

export const AccountBar: React.FC = () => {
  const { openTab } = useTabContext();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AccountButton handleAction={openTab} />
      <TabOptions pages={accountPages} />
    </Box>
  );
};