import { requiredField } from "./required";


export const passwordValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return 'Enter name'
        }

        return true;
    }
};