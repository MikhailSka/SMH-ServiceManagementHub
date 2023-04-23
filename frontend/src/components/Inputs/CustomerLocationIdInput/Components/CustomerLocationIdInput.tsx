import { Controller } from 'react-hook-form';
import { Autocomplete } from '@mui/lab';
import { TextField } from '@mui/material';
import { InputProps } from 'components/Inputs/Common/Models/InputProps';
import { ICustomerLocation } from '../../../../models/ICustomerLocation';

interface CustomerLocationIdInputProps extends InputProps {
  options: ICustomerLocation[];
}

export const CustomerLocationIdInput: React.FC<CustomerLocationIdInputProps> = ({
  control,
  options,
}) => {
  return (
    <Controller
      control={control}
      name="customer_location_id"
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
              label="Customer Location"
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