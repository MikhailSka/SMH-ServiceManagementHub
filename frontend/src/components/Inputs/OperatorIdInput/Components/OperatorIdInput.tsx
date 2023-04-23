import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField,Autocomplete } from '@mui/material'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { getOperators } from 'store/actions/operatorActions/getOperators'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'
import { IOperator } from 'models/IOperator'

export const OperatorIdInput: React.FC<InputProps> = ({ errors, control, register }) => {
  const operators = useAppSelector((state) => state.operator.operators);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOperators());
  }, [dispatch]);

  return (
    <Controller
      control={control}
      name="operator_id" 
      render={({ field }) => (
        <Autocomplete
          disablePortal
          id="operator-id-autocomplete"
          options={operators}
          getOptionLabel={(operator: IOperator) => operator.name}
          value={field.value ? operators.find((operator) => operator.id === field.value) : null} // Revert back to the original value prop
          onChange={(_, data) => field.onChange(data?.id)} // Revert back to the original onChange prop
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Operator"
              size='small'
              error={!!errors.operator_id?.message} 
              helperText={errors?.operator_id?.message} 
            />
          )}
        />
      )}
    />
  );
};