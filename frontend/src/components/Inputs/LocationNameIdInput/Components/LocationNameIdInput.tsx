import { Controller } from 'react-hook-form';
import { Autocomplete } from '@mui/lab';
import { TextField } from '@mui/material';
import { InputProps } from 'components/Inputs/Common/Models/InputProps';
import { ILocation } from '../../../../models/ILocation';

interface LocationNameIdInputProps extends InputProps {
  options: ILocation[];
}

export const LocationNameIdInput: React.FC<LocationNameIdInputProps> = ({
  control,
  options,
}) => {
  return (
    <Controller
      control={control}
      name="location_name_id"
      render={({ field }) => (
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          value={field.value ? options.find((option) => option.id === field.value) : null}
          onChange={(_, data) => field.onChange(data?.id)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location Name"
              fullWidth
              size="small"
              margin="normal"
            />
          )}
        />
      )}
    />
  );
};