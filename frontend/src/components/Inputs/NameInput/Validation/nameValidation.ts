import { requiredField } from "../../Common/Validation/required";


export const nameValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return `${6-value.length} Characters remaining`
        }

        return true;
    }
};