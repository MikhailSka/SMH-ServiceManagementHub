import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

import { locationIdValidation } from '../Validation/locationIdValidation'
import { useAppSelector } from 'store/hooks'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'
import { ILocation } from 'models/ILocation'

export const LocationIdInput: React.FC<InputProps> = ({ errors, control }) => {
  const locations = useAppSelector((state) => state.location.locations)

  return (
    <Controller
      control={control}
      name="location_id"
      rules={locationIdValidation}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          id="location-id-autocomplete"
          options={locations}
          getOptionLabel={(location: ILocation) => location.name}
          value={
            field.value
              ? locations.find((location) => location.id === field.value)
              : null
          }
          onChange={(_, data) => field.onChange(data?.id)}
          getOptionDisabled={(location: ILocation) => !location.active}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location"
              size="small"
              margin="normal"
              error={!!errors.location_id?.message}
              helperText={errors?.location_id?.message}
            />
          )}
        />
      )}
    />
  )
}