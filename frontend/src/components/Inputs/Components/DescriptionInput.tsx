import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { InputProps } from 'components/Inputs/Models/InputProps';
import { descriptionValidation } from 'components/Inputs/Validation/descriptionValidation';

export const DescriptionInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
      control={control}
      name="description"
      rules={descriptionValidation}
      render={({ field }) => (
        <TextField
          label="Description"
          value={field.value}
          fullWidth
          multiline
          rows={3}
          size="small"
          margin="normal"
          error={!!errors.description?.message}
          helperText={errors?.description?.message}
          {...register('description')}
        />
      )}
    />
  );
};