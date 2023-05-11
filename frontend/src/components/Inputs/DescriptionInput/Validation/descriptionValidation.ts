import { requiredField } from "../../Common/Validation/required";


export const descriptionValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.length < 20) {
            return `${20-value.length} Characters remaining`
        }
        else if(value.length >= 256){
            return `Description is too long`
        }
        return true;
    }
};