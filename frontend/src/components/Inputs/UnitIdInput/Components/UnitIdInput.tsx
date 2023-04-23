import { Controller } from 'react-hook-form'
import { Autocomplete } from '@mui/lab'
import { TextField } from '@mui/material'
import { InputProps } from 'components/Inputs/Common/Models/InputProps'
import { IUnit } from '../../../../models/Unit/IUnit'

interface UnitIdInputProps extends InputProps {
  options: IUnit[]
}

export const UnitIdInput: React.FC<UnitIdInputProps> = ({
  control,
  options,
}) => {
  return (
    <Controller
      control={control}
      name="unit_id"
      render={({ field }) => (
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          value={
            field.value
              ? options.find((option) => option.id === field.value)
              : null
          }
          onChange={(_, data) => field.onChange(data?.id)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Unit"
              fullWidth
              size="small"
              margin="normal"
            />
          )}
        />
      )}
    />
  )
}
