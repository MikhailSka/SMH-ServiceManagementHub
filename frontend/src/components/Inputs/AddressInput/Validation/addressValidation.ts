import { requiredField } from "../../Common/Validation/required";


export const addressValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return `Address must be at least 6 characters remaining`
        }

        return true;
    }
};