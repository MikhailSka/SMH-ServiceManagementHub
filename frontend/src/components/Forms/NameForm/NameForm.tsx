import React from 'react';
import { Grid, Box } from '@mui/material';

import { NameInput } from 'components/Inputs/Components/NameInput';
import { ChangeButton } from 'components/Buttons/Components/ChangeButton';
import { useNameForm } from './useNameForm';
import { UserData } from 'store/reducers/userReducer/UserState';

interface NameFormProps {
  userData: UserData;
}

export const NameForm: React.FC<NameFormProps> = ({ userData }) => {
  const {
    controlName,
    registerName,
    handleSubmitName,
    errorsName,
    watchName,
    onSubmitName,
  } = useNameForm(userData);

  return (
    <Box component="form" onSubmit={handleSubmitName(onSubmitName)} noValidate>
      <Grid container alignItems="center" margin="15px" spacing={2}>
        <Grid padding="4px 0 5px" item xs={10}>
          <NameInput control={controlName} errors={errorsName} register={registerName} />
        </Grid>
        <Grid item xs={2}>
          <ChangeButton disabled={userData.name === watchName('name')} />
        </Grid>
      </Grid>
    </Box>
  );
};
