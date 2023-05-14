import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';

import { NameInput } from 'components/Inputs/NameInput/Components/NameInput';
import { ActiveInput } from 'components/Inputs/ActiveInput/Components/ActiveInput';
import { CustomerIdInput } from 'components/Inputs/CustomerIdInput/Components/CustomerIdInput';
import { ConfirmButton } from 'components/Buttons/Components/IconButtons/ConfirmButton';
import { useLocationForm } from './useLocationForm';
import { ILocation } from '../../../../models/ILocation';

interface FormProps {
  location?: ILocation;
}

export const LocationForm: React.FC<FormProps> = ({ location }) => {
  const { control, handleSubmit, register, errors, onSubmit, loading } = useLocationForm({ location });

  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NameInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <ActiveInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <Skeleton animation="wave" height={64} />
            ) : (
              <CustomerIdInput
                control={control}
                errors={errors}
                register={register}
              />
            )}
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <ConfirmButton handleAction={handleSubmit(onSubmit)} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};