import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Autocomplete } from '@mui/lab';

import { InputProps } from 'components/Inputs/Models/InputProps';
import { customerIdValidation } from 'components/Inputs/Validation/customerIdValidation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCustomers } from 'store/actions/customerActions/getCustomers';
import { RootState } from 'store/store';
import { ICustomer } from 'models/ICustomer';

export const CustomerIdInput: React.FC<InputProps> = ({ errors, control, register }) => {
    const dispatch = useAppDispatch();
    const customers = useAppSelector((state: RootState) => state.customer.customers);
  
    useEffect(() => {
      dispatch(getCustomers());
    }, [dispatch]);
  
    const [inputValue, setInputValue] = useState('');
  
    return (
      <Controller
        control={control}
        name="customer_id"
        rules={customerIdValidation}
        render={({ field }) => (
          <Autocomplete
            options={customers}
            getOptionLabel={(option: ICustomer) => option.name}
            value={field.value ? customers.find((customer) => customer.id === field.value) : null}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
            onChange={(_, value) => field.onChange(value?.id)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Customer"
                size="small"
                margin="normal"
                error={!!errors.customer_id?.message}
                helperText={errors?.customer_id?.message}
                {...register('customer_id')}
              />
            )}
            renderOption={(props, option) => (
              <MenuItem key={option.id} {...props}>
                {option.name}
              </MenuItem>
            )}
          />
        )}
      />
    );
  };