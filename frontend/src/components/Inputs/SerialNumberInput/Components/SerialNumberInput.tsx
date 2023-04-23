import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InputProps } from 'components/Inputs/Common/Models/InputProps';
import { serialNumberValidation } from 'components/Inputs/SerialNumberInput/Validation/serialNumberValidation';

export const SerialNumberInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
      control={control}
      name="serial_number"
      rules={serialNumberValidation}
      render={({ field }) => (
        <TextField
          label="Serial Number"
          value={field.value}
          fullWidth
          size="small"
          margin="normal"
          error={!!errors.serial_number?.message}
          helperText={errors?.serial_number?.message}
          {...register('serial_number')}
        />
      )}
    />
  );
};