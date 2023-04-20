import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { NameInput } from 'components/Inputs/Components/NameInput';
import { ActiveInput } from 'components/Inputs/Components/ActiveInput';
import { SerialNumberInput } from 'components/Inputs/Components/SerialNumberInput';
import { ProductCodeInput } from 'components/Inputs/Components/ProductCodeInput';
import { DeviceIdInput } from 'components/Inputs/Components/DeviceIdInput';
import { OperatorIdInput } from 'components/Inputs/Components/OperatorIdInput';
import { DescriptionInput } from 'components/Inputs/Components/DescriptionInput';
import { ConfirmButton } from 'components/Buttons/Components/ConfirmButton';
import { useUnitForm } from './useUnitForm';
import { IUnit } from '../../../models/IUnit';

interface FormProps {
  unit?: IUnit;
}

export const UnitForm: React.FC<FormProps> = ({ unit }) => {
  const { control, handleSubmit, register, errors, onSubmit } = useUnitForm({ unit });

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
            <SerialNumberInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <ProductCodeInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <DeviceIdInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <OperatorIdInput control={control} errors={errors} register={register} />
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