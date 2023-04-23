import { requiredField } from "../../Common/Validation/required";


export const contentValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 60) {
            return 'Content must contain at least 60 characters'
        }

        return true;
    }
};