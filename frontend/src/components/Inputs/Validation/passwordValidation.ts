import { requiredField } from "./required";


export const passwordValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return 'Password must contain at least 6 characters'
        }

        return true;
    }
};