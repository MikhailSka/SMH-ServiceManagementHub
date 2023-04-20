import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';

import { InputProps } from 'components/Inputs/Models/InputProps';
import { activeValidation } from 'components/Inputs/Validation/activeValidation';
import { IOption } from "components/Inputs/Models/IOption";

const activeStatusOptions: IOption[] = [
  { label: 'Active', value: true },
  { label: 'Deactivated', value: false },
];

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
            fullWidth
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