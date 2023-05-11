import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { useMenuOptions } from './useMenuOptions';

export const MenuOptionButtons: React.FC = () => {
  const menuOptions = useMenuOptions();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {menuOptions.map((option) => (
        <Button
          key={option.key}
          onClick={option.onClick}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {option.key}
        </Button>
      ))}
    </Box>
  );
};