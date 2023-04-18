import { requiredField } from "./required";


export const passwordValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.length < 6) {
            return 'Password must contain at least 6 characters'
        }
        else if (value.search(/[a-z]/) < 0) 
        {
            return 'Password must contain at least one lowercase letter'
        } else if (value.search(/[A-Z]/) < 0) 
        {
            return 'Password must contain at least one uppercase letter'
        } else if (value.search(/[0-9]/) < 0) 
        {
            return 'Password must contain at least one number'
        }else if (value.search(/[0-9]/) > 20) 
        {
            return 'Password must contain no more than 20 characters'
        }

        return true;
    }
};