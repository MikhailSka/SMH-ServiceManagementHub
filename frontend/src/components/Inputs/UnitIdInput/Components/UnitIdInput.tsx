import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

import { userIdValidation } from '../Validation/userIdValidation'
import { useAppSelector } from 'store/hooks'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'
import { IUser } from 'models/IUser'

export const UserIdInput: React.FC<InputProps> = ({ errors, control }) => {
  const users = useAppSelector((state) => state.user.users)

  return (
    <Controller
      control={control}
      name="user_id"
      rules={userIdValidation}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          id="user-id-autocomplete"
          options={users}
          getOptionLabel={(user: IUser) => user.name}
          value={
            field.value
              ? users.find((user) => user.id === field.value)
              : null
          }
          onChange={(_, data) => field.onChange(data?.id)}
          getOptionDisabled={(user: IUser) => !user.active}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="User"
              size="small"
              margin="normal"
              error={!!errors.user_id?.message}
              helperText={errors?.user_id?.message}
            />
          )}
        />
      )}
    />
  )
}