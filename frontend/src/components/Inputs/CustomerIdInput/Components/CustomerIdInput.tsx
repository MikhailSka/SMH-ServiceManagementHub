import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

import { customerIdValidation } from '../Validation/customerIdValidation'
import { useAppSelector } from 'store/hooks'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'
import { ICustomer } from 'models/ICustomer'

export const CustomerIdInput: React.FC<InputProps> = ({ errors, control }) => {
  const customers = useAppSelector((state) => state.customer.customers)

  return (
    <Controller
      control={control}
      name="customer_id"
      rules={customerIdValidation}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          id="customer-id-autocomplete"
          options={customers}
          getOptionLabel={(customer: ICustomer) => customer.name}
          value={
            field.value
              ? customers.find((customer) => customer.id === field.value)
              : null
          }
          onChange={(_, data) => field.onChange(data?.id)}
          getOptionDisabled={(customer: ICustomer) => !customer.active}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Customer"
              size="small"
              margin="normal"
              error={!!errors.customer_id?.message}
              helperText={errors?.customer_id?.message}
            />
          )}
        />
      )}
    />
  )
}