import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InputProps } from 'components/Inputs/Models/InputProps';
import { productCodeValidation } from 'components/Inputs/Validation/productCodeValidation';

export const ProductCodeInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
      control={control}
      name="product_code"
      rules={productCodeValidation}
      render={({ field }) => (
        <TextField
          label="Product Code"
          value={field.value}
          fullWidth
          size="small"
          margin="normal"
          error={!!errors.product_code?.message}
          helperText={errors?.product_code?.message}
          {...register('product_code')}
        />
      )}
    />
  );
};