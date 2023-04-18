import { requiredField } from "./required";


export const titleValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return 'Title must contain at least 6 characters'
        }

        return true;
    }
};