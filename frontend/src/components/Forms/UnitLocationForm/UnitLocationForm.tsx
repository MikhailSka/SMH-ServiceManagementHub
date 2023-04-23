import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { DescriptionInput } from 'components/Inputs/DescriptionInput/Components/DescriptionInput';
import { ConfirmButton } from 'components/Buttons/Components/ConfirmButton';
import { CustomerLocationIdInput } from 'components/Inputs/CustomerLocationIdInput/Components/CustomerLocationIdInput';
import { LocationNameIdInput } from 'components/Inputs/LocationNameIdInput/Components/LocationNameIdInput';
import { UnitIdInput } from 'components/Inputs/UnitIdInput/Components/UnitIdInput';
import { useUnitLocationForm } from './useUnitLocationForm';
import { IUnitLocation } from '../../../models/IUnitLocation';
import { ICustomerLocation } from '../../../models/ICustomerLocation';
import { ILocation } from '../../../models/ILocation';
import { IUnit } from '../../../models/Unit/IUnit';

interface FormProps {
  unitLocation?: IUnitLocation;
  customerLocations: ICustomerLocation[];
  locations: ILocation[];
  units: IUnit[];
}

export const UnitLocationForm: React.FC<FormProps> = ({ unitLocation, customerLocations, locations, units }) => {
  const { control, handleSubmit, register, errors, onSubmit } = useUnitLocationForm({ unitLocation });

  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DescriptionInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <UnitIdInput control={control} errors={errors} register={register} options={units} />
          </Grid>
          <Grid item xs={12}>
            <LocationNameIdInput control={control} errors={errors} register={register} options={locations} />
          </Grid>
          <Grid item xs={12}>
            <CustomerLocationIdInput control={control} errors={errors} register={register} options={customerLocations} />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <ConfirmButton handleAction={handleSubmit(onSubmit)} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};