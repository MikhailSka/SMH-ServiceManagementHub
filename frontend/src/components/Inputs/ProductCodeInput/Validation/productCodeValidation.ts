import { requiredField } from "../../Common/Validation/required";

export const productCodeValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.length >= 128) {
            return `Product Code is too long`
        }
        return true;
    }
};