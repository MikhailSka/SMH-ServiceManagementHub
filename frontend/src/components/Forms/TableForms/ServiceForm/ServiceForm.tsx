import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';

import { LocationIdInput } from 'components/Inputs/LocationIdInput/Components/LocationIdInput';
import { DescriptionInput } from 'components/Inputs/DescriptionInput/Components/DescriptionInput';
import { ServiceDateInput } from 'components/Inputs/ServiceDateInput/Components/ServiceDateInput';
import { ConfirmButton } from 'components/Buttons/Components/IconButtons/ConfirmButton';
import { useServiceForm } from './useServiceForm'
import { IService } from 'models/IService';

interface FormProps {
  service: IService;
}

export const ServiceForm: React.FC<FormProps> = ({ service }) => {
  const { control, handleSubmit, register, errors, onSubmit, loading } = useServiceForm({ service });

  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            {loading ? (
              <Skeleton animation="wave" height={64} />
            ) : (
              <LocationIdInput
                control={control}
                errors={errors}
                register={register}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <ServiceDateInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <DescriptionInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <ConfirmButton handleAction={handleSubmit(onSubmit)} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};