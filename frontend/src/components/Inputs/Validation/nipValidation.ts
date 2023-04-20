import { requiredField } from "./required";


export const nipValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.match(/^\d{10}$/)) {
            return `'NIP must be exactly 10 digits'`
        }

        return true;
    }
};