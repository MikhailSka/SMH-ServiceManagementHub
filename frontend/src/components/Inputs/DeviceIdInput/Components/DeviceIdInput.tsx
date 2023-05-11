import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

import { deviceIdValidation } from '../Validation/deviceIdValidation'
import { useAppSelector } from 'store/hooks'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'
import { IDevice } from 'models/IDevice'

export const DeviceIdInput: React.FC<InputProps> = ({ errors, control }) => {
  const devices = useAppSelector((state) => state.device.devices)

  return (
    <Controller
      control={control}
      name="device_id"
      rules={deviceIdValidation}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          id="device-id-autocomplete"
          options={devices}
          getOptionLabel={(device: IDevice) => device.name}
          value={
            field.value
              ? devices.find((device) => device.id === field.value)
              : null
          }
          onChange={(_, data) => field.onChange(data?.id)}
          getOptionDisabled={(device: IDevice) => !device.active}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Device"
              size="small"
              margin="normal"
              error={!!errors.device_id?.message}
              helperText={errors?.device_id?.message}
            />
          )}
        />
      )}
    />
  )
}
