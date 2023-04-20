import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Models/InputProps';
import { titleValidation } from 'components/Inputs/Validation/titleValidation';

export const TitleInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
      control={control}
      name="title"
      rules={titleValidation}
      render={({ field }) => (
        <TextField
          label="Title"
          value={field.value}
          fullWidth
          size="small"
          margin="normal"
          error={!!errors.title?.message}
          helperText={errors?.title?.message}
          {...register('title')}
        />
      )}
    />
  );
};