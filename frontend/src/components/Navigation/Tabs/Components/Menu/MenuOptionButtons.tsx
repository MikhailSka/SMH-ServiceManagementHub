import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { useTabContext } from '../../Context/useTabContext';
import { menuPages } from './MenuPages';

interface Page {
  name: string;
  link: string;
}

export const MenuOptionButtons: React.FC = () => {
  const { closeTab } = useTabContext();
  const navigate = useNavigate();

  const routeChange = (link: string) => {
    closeTab();
    navigate(link);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {menuPages.map((page: Page) => (
        <Button
          key={page.name}
          onClick={() => {
            routeChange(page.link);
          }}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};