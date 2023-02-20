import { Controller } from "react-hook-form"
import { TextField } from "@mui/material"

import { InputProps } from "components/forms/models/InputProps"
import { nameValidation } from "../validation/nameValidation"

export function NameInput(props: InputProps) {
    return (
        <Controller
            control={props.control}
            name="name"
            rules={nameValidation}
            render={({ field }) => (
                <TextField
                    label="Name"
                    value={field.value}
                    fullWidth={true}
                    size="small"
                    margin="normal"
                    error={!!props.errors.name?.message}
                    helperText={props.errors?.name?.message}
                    {...props.register('name')}
                />
            )}
        />
    )
}