import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Models/InputProps';
import { nipValidation } from 'components/Inputs/Validation/nipValidation';

export const NipInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
      control={control}
      name="nip"
      rules={nipValidation}
      render={({ field }) => (
        <TextField
          label="NIP"
          value={field.value}
          fullWidth
          size="small"
          margin="normal"
          error={!!errors.nip?.message}
          helperText={errors?.nip?.message}
          {...register('nip')}
        />
      )}
    />
  );
};