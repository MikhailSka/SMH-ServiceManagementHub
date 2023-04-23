import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { NameInput } from 'components/Inputs/NameInput/Components/NameInput';
import { NipInput } from 'components/Inputs/NipInput/Components/NipInput';
import { ActiveInput } from 'components/Inputs/ActiveInput/Components/ActiveInput';
import { useCustomerForm } from './useCustomerForm';
import { ICustomer } from '../../../models/ICustomer';
import { ConfirmButton } from 'components/Buttons/Components/ConfirmButton';

interface FormProps {
  customer?: ICustomer;
}

export const CustomerForm: React.FC<FormProps> = ({ customer }) => {
  const { control, handleSubmit, register, errors, onSubmit } = useCustomerForm({ customer });

  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NameInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <NipInput control={control} errors={errors} register={register} />
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