import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';

import { InputProps } from 'components/Inputs/Models/InputProps';
import { activeStatusOptions } from './ActiveStatusOptions';
import { activeValidation } from 'components/Inputs/Validation/activeValidation';

export const ActiveInput: React.FC<InputProps> = ({ errors, control, register }) => {
    return (
      <Controller
        control={control}
        name="active"
        rules={activeValidation}
        render={({ field }) => (
          <TextField
            select
            label="Active"
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.active?.message}
            helperText={errors?.active?.message}
            {...register('active')}
          >
            {activeStatusOptions.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    );
  };