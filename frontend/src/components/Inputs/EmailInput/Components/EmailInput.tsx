import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Common/Models/InputProps';
import { emailValidation } from 'components/Inputs/EmailInput/Validation/emailValidation';

export const EmailInput: React.FC<InputProps> = ({ errors, control, register, onInputChange }) => {
    return (
      <Controller
        control={control}
        name="email"
        rules={emailValidation}
        render={({ field }) => (
          <TextField
            onChange={onInputChange}
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