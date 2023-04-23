import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Common/Models/InputProps';
import { nameValidation } from 'components/Inputs/NameInput/Validation/nameValidation';

export const NameInput: React.FC<InputProps> = ({ errors, control, register, onInputChange }) => {
    return (
      <Controller
        control={control}
        name="name"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Name"
            value={field.value}
            fullWidth={true}
            onChange={onInputChange}
            size="small"
            margin="normal"
            error={!!errors.name?.message}
            helperText={errors?.name?.message}
            {...register('name')}
          />
        )}
      />
    );
  }