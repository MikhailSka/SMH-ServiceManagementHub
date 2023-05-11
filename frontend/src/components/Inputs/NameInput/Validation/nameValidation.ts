import { requiredField } from "../../Common/Validation/required";


export const nameValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return `${6-value.length} Characters remaining`
        }
        else if (value.length >= 128) {
            return `Name is too long`
        }
        return true;
    }
};