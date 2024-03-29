import React from 'react';
import { Grid, Box } from '@mui/material';

import { NameInput } from 'components/Inputs/NameInput/Components/NameInput';
import { ChangeButton } from 'components/Buttons/Components/TextButtons/ChangeButton';
import { useNameForm } from './useNameForm';
import { IUser } from 'models/IUser';

interface NameFormProps {
  userData: IUser;
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
      <Grid container alignItems="center" margin="auto" marginY='15px' spacing={2} >
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
