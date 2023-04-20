import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'
import { Autocomplete } from '@mui/material'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { getOperators } from 'store/actions/operatorActions/getOperators'
import { InputProps } from 'components/Inputs/Models/InputProps'

export const OperatorIdInput: React.FC<InputProps> = ({
  errors,
  control,
  register,
}) => {
  const operators = useAppSelector((state) => state.operator.operators)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getOperators())
  }, [dispatch])

  return (
    <Controller
      control={control}
      name="operator_id"
      render={({ field }) => (
        <Autocomplete
          options={operators}
          getOptionLabel={(option) => option.name}
          value={
            field.value
              ? operators.find((operator) => operator.id === field.value)
              : null
          }
          onChange={(_, value) => field.onChange(value?.id)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Operator"
              margin="normal"
              size="small"
              fullWidth
              error={!!errors.operator_id}
              helperText={errors?.operator_id?.message}
              {...register('operator_id')}
            />
          )}
        />
      )}
    />
  )
}
