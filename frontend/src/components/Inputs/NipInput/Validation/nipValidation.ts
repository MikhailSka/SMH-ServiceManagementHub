import { requiredField } from "../../Common/Validation/required";

export const nipValidation = {
    required: requiredField,
    validate: (value: string) => {
        // if(!validateNIP(value)) {
        //     return `NIP is not a valid`
        // }
        if (value.length >= 128) {
            return `Value is too long`
        }

        return true;
    }
};