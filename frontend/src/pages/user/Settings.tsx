import { Typography, Box, Grid, Divider } from '@mui/material';

import { useAppSelector } from 'store/hooks';
import { RootState } from 'store/store';
import { useStyles } from '../../useStyles';
import ProfileImage from 'components/Profile/ProfileImage';
import ProfileInfo from 'components/Profile/ProfileInfo';

export default function Settings() {
  const classes = useStyles();
  const { userData } = useAppSelector((state: RootState) => state.user);

  return (
    <Box className={classes.xlBox}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          paddingTop: '10px',
        }}
      >
        Settings
      </Typography>
      <Divider
        sx={{
          margin: '15px',
        }}
      />
      <Grid container spacing={2}>
        <ProfileImage userData={userData} />
        <Divider orientation="vertical" flexItem />
        <ProfileInfo userData={userData} />
      </Grid>
    </Box>
  );
}