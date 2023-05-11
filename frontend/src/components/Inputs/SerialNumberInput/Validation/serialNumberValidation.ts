import { requiredField } from "../../Common/Validation/required";

export const serialNumberValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.length >= 128) {
            return `Serial Number is too long`
        }
        return true;
    }
};