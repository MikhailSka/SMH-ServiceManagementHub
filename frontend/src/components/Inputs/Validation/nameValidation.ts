import { requiredField } from "./required";


export const nameValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return 'Enter more than 6 letters'
        }

        return true;
    }
};