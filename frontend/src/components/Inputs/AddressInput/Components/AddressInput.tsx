import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Common/Models/InputProps';
import { addressValidation } from 'components/Inputs/AddressInput/Validation/addressValidation';

export const AddressInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
      control={control}
      name="address"
      rules={addressValidation}
      render={({ field }) => (
        <TextField
          label="Address"
          value={field.value}
          fullWidth={true}
          size="small"
          margin="normal"
          error={!!errors.address?.message}
          helperText={errors?.address?.message}
          {...register('address')}
        />
      )}
    />
  );
};