import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useFormState } from "react-hook-form";
import { useContext } from "react"

import { NameInput } from "components/forms/components/inputs/NameInput";
import { ActiveInput } from "components/forms/components/inputs/components/ActiveInput";
import { ConfirmButton } from "components/buttons/components/ConfirmButton";
import { MuiTableContext } from "context/mui_table_context/components/MuiTableContext";
import { ISignInDeviceForm } from "../models/ISignInDeviceForm";
import { IForm } from "components/forms/models/IForm";

export function AddDeviceForm(props: IForm) {
    const { addRow } = useContext(MuiTableContext)
    const { register, handleSubmit, control } = useForm<ISignInDeviceForm>({
        defaultValues: props.preloadedValues || {
            active: null,
            name: ''
        }
    });
    const { errors } = useFormState({
        control
    })

    const onSubmit: SubmitHandler<ISignInDeviceForm> = data => {
        addRow(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <NameInput control={control} errors={errors} register={register} />
            <ActiveInput control={control} errors={errors} register={register} />
            <ConfirmButton />
        </form>
    )
}