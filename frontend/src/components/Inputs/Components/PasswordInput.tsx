import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Models/InputProps';
import { passwordValidation } from 'components/Inputs/Validation/passwordValidation';

export const PasswordInput: React.FC<InputProps> = ({ errors, control, register }) => {
    return (
      <Controller
        control={control}
        name="password"
        rules={passwordValidation}
        render={({ field }) => (
          <TextField
            label="Password"
            type="password"
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.password?.message}
            helperText={errors?.password?.message}
            {...register('password')}
          />
        )}
      />
    );
  }