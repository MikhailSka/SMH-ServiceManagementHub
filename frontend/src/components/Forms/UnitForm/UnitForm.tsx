import React from 'react'
import { Box, Grid, Skeleton } from '@mui/material'

import { NameInput } from 'components/Inputs/NameInput/Components/NameInput'
import { ActiveInput } from 'components/Inputs/ActiveInput/Components/ActiveInput'
import { SerialNumberInput } from 'components/Inputs/SerialNumberInput/Components/SerialNumberInput'
import { ProductCodeInput } from 'components/Inputs/ProductCodeInput/Components/ProductCodeInput'
import { LocationIdInput } from 'components/Inputs/LocationIdInput/Components/LocationIdInput'
import { DeviceIdInput } from 'components/Inputs/DeviceIdInput/Components/DeviceIdInput'
import { OperatorIdInput } from 'components/Inputs/OperatorIdInput/Components/OperatorIdInput'
import { DescriptionInput } from 'components/Inputs/DescriptionInput/Components/DescriptionInput'
import { ConfirmButton } from 'components/Buttons/Components/ConfirmButton'
import { useUnitForm } from './useUnitForm'
import { IUnit } from 'models/IUnit'

interface FormProps {
  unit?: IUnit
}

export const UnitForm: React.FC<FormProps> = ({ unit }) => {
  const { control, handleSubmit, register, errors, onSubmit, loading } =
    useUnitForm({ unit })
  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ActiveInput
              control={control}
              errors={errors}
              register={register}
            />
          </Grid>
          <Grid item xs={12}>
            <NameInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <SerialNumberInput
              control={control}
              errors={errors}
              register={register}
            />
          </Grid>
          <Grid item xs={12}>
            <ProductCodeInput
              control={control}
              errors={errors}
              register={register}
            />
          </Grid>
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
            {loading ? (
              <Skeleton animation="wave" height={64} />
            ) : (
              <DeviceIdInput
                control={control}
                errors={errors}
                register={register}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <Skeleton animation="wave" height={64} />
            ) : (
              <OperatorIdInput
                control={control}
                errors={errors}
                register={register}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <DescriptionInput
              control={control}
              errors={errors}
              register={register}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <ConfirmButton handleAction={handleSubmit(onSubmit)} />
          </Grid>
        </Grid>
      </Box>
    </form>
  )
}
