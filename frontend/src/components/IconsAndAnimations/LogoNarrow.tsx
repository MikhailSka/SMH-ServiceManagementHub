import React from 'react';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Typography from '@mui/material/Typography';

export const LogoNarrow: React.FC = () => {
  return (
    <>
      <WidgetsOutlinedIcon
        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        SMH
      </Typography>
    </>
  );
};