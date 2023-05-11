import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

import { operatorIdValidation } from '../Validation/operatorIdValidation'
import { useAppSelector } from 'store/hooks'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'
import { IOperator } from 'models/IOperator'

export const OperatorIdInput: React.FC<InputProps> = ({ errors, control }) => {
  const operators = useAppSelector((state) => state.operator.operators)

  return (
    <Controller
      control={control}
      name="operator_id"
      rules={operatorIdValidation}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          id="operator-id-autocomplete"
          options={operators}
          getOptionLabel={(operator: IOperator) => operator.name}
          value={
            field.value
              ? operators.find((operator) => operator.id === field.value)
              : null
          }
          onChange={(_, data) => field.onChange(data?.id)}
          getOptionDisabled={(operator: IOperator) => !operator.active}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Operator"
              size="small"
              margin="normal"
              error={!!errors.operator_id?.message}
              helperText={errors?.operator_id?.message}
            />
          )}
        />
      )}
    />
  )
}
