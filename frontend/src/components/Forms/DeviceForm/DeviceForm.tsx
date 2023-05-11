import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { NameInput } from 'components/Inputs/NameInput/Components/NameInput';
import { ActiveInput } from 'components/Inputs/ActiveInput/Components/ActiveInput';
import { ConfirmButton } from 'components/Buttons/Components/IconButtons/ConfirmButton';
import { useDeviceForm } from './useDeviceForm';
import { IDevice } from '../../../models/IDevice';

interface FormProps {
  device?: IDevice;
}

export const DeviceForm: React.FC<FormProps> = ({ device }) => {
  const { control, handleSubmit, register, errors, onSubmit } = useDeviceForm({ device });

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
          <Grid item xs={12} container justifyContent="flex-end">
            <ConfirmButton handleAction={handleSubmit(onSubmit)} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};