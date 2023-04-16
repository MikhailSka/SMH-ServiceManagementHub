import React from 'react';
import { Box } from '@mui/material';
import { ClimbingBoxLoader } from 'react-spinners';

import { useStyles } from '../../useStyles';

interface Props {
  color?: string;
  size?: number;
}

const LoadingSpinner: React.FC<Props> = ({ color = '#262626', size = 20 }) => {
  const classes = useStyles()
  return (
    <Box className={classes.center}>
      <ClimbingBoxLoader color={color} size={size} />
    </Box>
  );
};

export default LoadingSpinner;