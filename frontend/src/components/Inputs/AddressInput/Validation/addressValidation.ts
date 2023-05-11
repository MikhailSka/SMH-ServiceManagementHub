import { requiredField } from "../../Common/Validation/required";


export const addressValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 6) {
            return `Address must be at least 6 characters remaining`
        }
        else if(value.length >= 128){
            return `Address is too long`
        }

        return true;
    }
};