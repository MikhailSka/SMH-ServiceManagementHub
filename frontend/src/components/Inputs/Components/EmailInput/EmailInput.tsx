import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Models/InputProps';
import { emailValidation } from 'components/Inputs/Validation/emailValidation';

export const EmailInput: React.FC<InputProps> = ({ errors, control, register }) => {
    return (
      <Controller
        control={control}
        name="email"
        rules={emailValidation}
        render={({ field }) => (
          <TextField
            label="Email Address"
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.email?.message}
            helperText={errors?.email?.message}
            {...register('email')}
          />
        )}
      />
    );
  }