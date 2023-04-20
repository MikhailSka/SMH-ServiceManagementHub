import { requiredField } from "./required";


export const descriptionValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 20) {
            return `${20-value.length} Characters remaining`
        }

        return true;
    }
};