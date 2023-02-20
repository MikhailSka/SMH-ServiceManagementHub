import { Controller } from "react-hook-form"
import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';

import { IOption } from "../model/IOption";
import { InputProps } from "components/forms/models/InputProps"
import { activeValidation } from "../../validation/activeValidation"

export function ActiveInput(props: InputProps) {

    const options: IOption[] = [
        { label: 'Active', value: true },
        { label: 'Deactivated', value: false }
    ]

    return (
        <Controller
            control={props.control}
            name="active"
            rules={activeValidation}
            render={({ field }) => (
                <TextField
                    select
                    label="Active"
                    value={field.value}
                    fullWidth={true}
                    size="small"
                    margin="normal"
                    error={!!props.errors.active?.message}
                    helperText={props.errors?.active?.message}
                    {...props.register('active')}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    )
}