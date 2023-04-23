import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from 'components/Inputs/Common/Models/InputProps';
import { contentValidation } from 'components/Inputs/ContentInput/Validation/contentValidation';

export const ContentInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
      control={control}
      name="content"
      rules={contentValidation}
      render={({ field }) => (
        <TextField
          label="Content"
          value={field.value}
          fullWidth
          multiline
          rows={10}
          size="small"
          margin="normal"
          error={!!errors.content?.message}
          helperText={errors?.content?.message}
          {...register('content')}
        />
      )}
    />
  );
};