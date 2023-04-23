import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { NameInput } from 'components/Inputs/NameInput/Components/NameInput';
import { ActiveInput } from 'components/Inputs/ActiveInput/Components/ActiveInput';
import { AddressInput} from 'components/Inputs/AddressInput/Components/AddressInput';
import { CustomerIdInput } from 'components/Inputs/CustomerIdInput/Components/CustomerIdInput';
import { ConfirmButton } from 'components/Buttons/Components/ConfirmButton';
import { useCustomerLocationForm } from './useCustomerLocationForm';
import { ICustomerLocation } from '../../../models/ICustomerLocation';

interface FormProps {
  customerLocation?: ICustomerLocation;
}

export const CustomerLocationForm: React.FC<FormProps> = ({ customerLocation }) => {
  const { control, handleSubmit, register, errors, onSubmit } = useCustomerLocationForm({ customerLocation });

  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NameInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <AddressInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <CustomerIdInput control={control} errors={errors} register={register} />
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