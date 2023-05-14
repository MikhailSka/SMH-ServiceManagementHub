import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'
import dayjs from 'dayjs'

import { serviceDateValidation } from '../Validation/serviceDateValidation'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'

export const ServiceDateInput: React.FC<InputProps> = ({ errors, control, register }) => {
  return (
    <Controller
    control={control}
    name="service_date"
    rules={serviceDateValidation}
    render={({ field }) => (
      <TextField
        value={dayjs(field.value).format('YYYY-MM-DD')}
        label="Service Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth={true}
        size="small"
        margin="normal"
        error={!!errors?.service_date}
        helperText={errors?.service_date?.message}
        onChange={(event) => field.onChange(dayjs(event.target.value).format('YYYY-MM-DD'))}
        {...register('service_date')}
      />
    )}
  />
  )
}