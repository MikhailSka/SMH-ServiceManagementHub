import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { useTabContext } from '../Context/useTabContext';
import { ITabOption } from '../Models/ITabOption';

interface TabOptionsProps {
  pages: Array<ITabOption>;
}

export const TabOptions: React.FC<TabOptionsProps> = ({ pages }) => {
  const { tab, closeTab } = useTabContext();
  const navigate = useNavigate();

  const routeChange = (link: string) => {
    closeTab();
    navigate(link);
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={tab}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(tab)}
      onClose={closeTab}
    >
      {pages.map((page) => (
        <MenuItem
          key={page.name}
          onClick={() => {
            routeChange(page.link);
          }}
        >
          <Typography textAlign="center">{page.name}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};