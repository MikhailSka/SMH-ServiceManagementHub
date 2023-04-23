import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { getDevices } from 'store/actions/deviceActions/getDevices'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'

export const DeviceIdInput: React.FC<InputProps> = ({
  errors,
  control,
  register,
}) => {
  const devices = useAppSelector((state) => state.device.devices)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getDevices())
  }, [dispatch])

  return (
    <Controller
      control={control}
      name="device_id"
      render={({ field }) => (
        <Autocomplete
          options={devices}
          getOptionLabel={(option) => option.name}
          value={
            field.value
              ? devices.find((device) => device.id === field.value)
              : null
          }
          onChange={(_, value) => field.onChange(value?.id)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Device"
              margin="normal"
              size="small"
              fullWidth
              error={!!errors.device?.message}
              helperText={errors?.device?.message}
              {...register('device_id')}
            />
          )}
        />
      )}
    />
  )
}
